/**
 * KSLC 홈페이지 자동 감시 장치 (watchman)
 * ===============================================================
 * 하는 일: 매주 한 번, 상담 신청이 실제로 접수되는지 사람 대신 확인합니다.
 *
 *   1) 홈페이지에 점검을 요청합니다
 *   2) 스프레드시트에 기록이 남았는지 확인합니다
 *   3) 점검 메일이 info@ 메일함에 **실제로 도착했는지** 확인합니다
 *   4) 하나라도 실패하면 담당자에게 경고 메일을 보냅니다
 *   5) 결과를 '자동점검' 탭에 남깁니다
 *
 * 왜 홈페이지 바깥(구글)에 두는가:
 * 홈페이지 안에 감시 장치를 두면, 홈페이지가 죽을 때 감시 장치도 같이 죽습니다.
 * 구글에서 돌리면 홈페이지가 완전히 멈춰도 "응답이 없다"고 알려줄 수 있습니다.
 *
 * 3번이 핵심입니다. 2026년 9월에 메일 서버는 "보냈다"고 했지만 받는 메일함이
 * 죽어 있어서 신청이 사라졌습니다. 메일함을 직접 들여다보는 것만이 그걸 잡습니다.
 *
 * ---------------------------------------------------------------
 * 설치 (한 번만, 5분)
 *   1. 상담기록 스프레드시트 열기 → 확장 프로그램 → Apps Script
 *   2. 왼쪽 파일 목록에서 + → 스크립트 → 이름을 watchman 으로
 *   3. 이 파일 내용을 전부 붙여넣기
 *   4. 아래 SECRET 을 Vercel 의 SHEETS_WEBHOOK_SECRET 과 같은 값으로 바꾸기
 *   5. 위쪽 함수 선택창에서 setup 을 골라 ▶ 실행
 *      → 권한 요청이 나오면 허용 (메일 읽기·발송 권한이 필요합니다)
 *   6. 끝. 이후 매주 월요일 오전 9시에 저절로 돌아갑니다.
 *
 * 확인: 함수 선택창에서 kslcWatchman 을 골라 ▶ 한 번 실행해보면
 *       '자동점검' 탭에 결과 한 줄이 생깁니다.
 * ---------------------------------------------------------------
 */

// Vercel 환경변수 SHEETS_WEBHOOK_SECRET 과 똑같아야 합니다.
const SECRET = 'PASTE_THE_SAME_SECRET_AS_VERCEL';

// 점검에 실패했을 때 경고를 받을 주소. 쉼표로 여러 명 가능.
const ALERT_TO = 'info@kslcampus.org';

// 상담 신청 알림을 받는 메일함 (Vercel 의 NOTIFY_TO 와 같은 주소).
// 4번 점검(메일이 실제로 도착했는지)은 이 메일함을 들여다봅니다. 그래서 이 스크립트는
// 반드시 이 주소의 계정으로 설치·실행되어야 합니다. 다른 계정으로 설치하면 남의
// 메일함을 뒤지는 셈이 되어 늘 '못 찾았다'가 나오므로, 그때는 4번을 건너뜁니다.
const NOTIFY_MAILBOX = 'info@kslcampus.org';

const SITE = 'https://www.kslcampus.org';

/** 한 번만 실행하세요. 매주 월요일 오전 9시 자동 실행을 걸어줍니다. */
function setup() {
  ScriptApp.getProjectTriggers().forEach(function (t) {
    if (t.getHandlerFunction() === 'kslcWatchman') ScriptApp.deleteTrigger(t);
  });
  ScriptApp.newTrigger('kslcWatchman')
    .timeBased()
    .onWeekDay(ScriptApp.WeekDay.MONDAY)
    .atHour(9)
    .create();
  Logger.log('설치 완료: 매주 월요일 오전 9시에 점검합니다.');
}

function kslcWatchman() {
  const problems = [];
  const notes = []; // 고장은 아니지만 사람이 알아야 할 것
  let caseId = '';
  let siteAnswered = false;
  let sheetOk = false;
  let mailSentOk = false;
  let mailArrived = false;

  // 1) 홈페이지에 점검 요청
  let res = null;
  try {
    res = UrlFetchApp.fetch(SITE + '/api/self-test/?key=' + encodeURIComponent(SECRET), {
      muteHttpExceptions: true,
      followRedirects: true,
    });
    siteAnswered = true;
  } catch (err) {
    problems.push('홈페이지에 연결할 수 없습니다 (사이트가 멈췄을 수 있습니다): ' + err);
  }

  if (res) {
    const code = res.getResponseCode();
    if (code === 401) {
      problems.push('점검 열쇠가 맞지 않습니다. 이 파일의 SECRET 과 Vercel 의 SHEETS_WEBHOOK_SECRET 을 비교하세요.');
    } else {
      try {
        const body = JSON.parse(res.getContentText());
        caseId = body.caseId || '';
        sheetOk = !!(body.checks && body.checks.sheet);
        mailSentOk = !!(body.checks && body.checks.mailSent);
        (body.problems || []).forEach(function (p) { problems.push(p); });
      } catch (err) {
        problems.push('홈페이지 응답을 읽을 수 없습니다 (응답 ' + code + ')');
      }
    }
  }

  // 2) 점검 메일이 메일함에 실제로 도착했는지 확인 — 가장 중요한 단계
  let inboxChecked = false;
  if (caseId && mailSentOk) {
    const me = (Session.getEffectiveUser().getEmail() || '').toLowerCase();
    if (me !== NOTIFY_MAILBOX.toLowerCase()) {
      // 알림을 받는 계정이 아니면 메일함을 볼 수 없습니다. 모르는 것을 고장이라고
      // 보고하면 매주 헛경고가 가고, 그러면 진짜 경고도 무시하게 됩니다.
      notes.push(
        '메일 도착 확인 건너뜀: 이 스크립트가 ' + (me || '(알 수 없음)') + ' 계정으로 ' +
        '실행되고 있어 ' + NOTIFY_MAILBOX + ' 메일함을 볼 수 없습니다. ' +
        '가장 중요한 점검이므로, 스프레드시트를 ' + NOTIFY_MAILBOX + ' 계정으로 옮기거나 ' +
        '그 계정에서 다시 설치하는 것을 권합니다.'
      );
    } else {
      inboxChecked = true;
      Utilities.sleep(45000); // 배달될 시간을 줍니다
      try {
        const threads = GmailApp.search('subject:"' + caseId + '" newer_than:1d');
        mailArrived = threads.length > 0;
        if (!mailArrived) {
          problems.push(
            '메일 서버는 보냈다고 했지만 ' + NOTIFY_MAILBOX + ' 메일함에서 찾을 수 없습니다. ' +
            '받는 메일함이 꽉 찼거나 정지되었을 수 있습니다 — 상담 신청 알림도 같이 사라집니다.'
          );
        }
      } catch (err) {
        problems.push('메일함 확인 실패: ' + err);
      }
    }
  }

  const ok = siteAnswered && sheetOk && mailSentOk && (mailArrived || !inboxChecked);
  log_(ok, caseId, siteAnswered, sheetOk, mailSentOk, inboxChecked ? mailArrived : null, problems.concat(notes));
  if (!ok) alert_(caseId, problems);
  return ok;
}

/** 결과를 '자동점검' 탭에 한 줄 남깁니다. */
function log_(ok, caseId, siteAnswered, sheetOk, mailSentOk, mailArrived, problems) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName('자동점검');
  if (!sheet) {
    sheet = ss.insertSheet('자동점검');
    const headers = ['점검시각', '결과', '점검번호', '사이트응답', '시트기록', '메일발송', '메일도착', '문제'];
    sheet.getRange(1, 1, 1, headers.length).setValues([headers])
      .setFontWeight('bold').setBackground('#0e2a47').setFontColor('#ffffff');
    sheet.setFrozenRows(1);
  }
  const yn = function (b) { return b === null ? '확인불가' : (b ? '정상' : '실패'); };
  sheet.appendRow([
    Utilities.formatDate(new Date(), 'America/Los_Angeles', 'yyyy-MM-dd HH:mm:ss'),
    ok ? '정상' : '실패',
    caseId,
    yn(siteAnswered), yn(sheetOk), yn(mailSentOk), yn(mailArrived),
    problems.join(' | '),
  ]);
}

/**
 * 경고 메일. 홈페이지의 메일 서버가 아니라 구글(MailApp)로 보냅니다.
 * 홈페이지 메일이 고장난 상황에서도 경고는 도착해야 하기 때문입니다.
 */
function alert_(caseId, problems) {
  MailApp.sendEmail({
    to: ALERT_TO,
    subject: '[KSLC 긴급] 홈페이지 상담 신청 점검 실패',
    body: [
      'KSLC 홈페이지 자동 점검에서 문제가 발견되었습니다.',
      '',
      '지금 상담 신청이 접수되지 않거나, 알림 메일이 전달되지 않을 수 있습니다.',
      '',
      '발견된 문제:',
      problems.map(function (p, i) { return (i + 1) + ') ' + p; }).join('\n'),
      '',
      '점검 번호: ' + (caseId || '(없음)'),
      '점검 시각: ' + Utilities.formatDate(new Date(), 'America/Los_Angeles', 'yyyy-MM-dd HH:mm:ss'),
      '',
      '조치: 홈페이지 담당자에게 이 메일을 그대로 전달하세요.',
      '급한 경우 홈페이지의 상담 요청 양식을 직접 한 번 제출해보고,',
      '확인 메일이 오는지 보시면 됩니다.',
      '',
      '기록: 상담기록 스프레드시트의 \'자동점검\' 탭',
    ].join('\n'),
  });
}
