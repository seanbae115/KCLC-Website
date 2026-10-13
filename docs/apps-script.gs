/**
 * KSLC 접수기록 수신용 Apps Script
 * ---------------------------------------------------------------
 * 스프레드시트 → 확장 프로그램 → Apps Script 에 붙여넣고 배포하세요.
 * 배포 설정: 유형 "웹 앱" / 실행 계정 "나" / 액세스 권한 "모든 사용자"
 *
 * "모든 사용자"로 열어두는 대신 아래 SECRET 으로 보호합니다.
 * SECRET 값은 Vercel 환경변수 SHEETS_WEBHOOK_SECRET 과 반드시 같아야 합니다.
 *
 * 하는 일 두 가지:
 *   1) 상담 신청을 시트에 기록
 *   2) 담당자 알림 메일과 신청자 확인 메일 발송 (구글 계정 권한으로, 비밀번호 없이)
 *
 * ⚠ 코드를 고친 뒤에는 저장만으로 부족합니다.
 *   배포 > 배포 관리 > 연필(수정) > 버전 "새 버전" > 배포
 *   를 해야 실제로 반영됩니다. 이렇게 하면 주소는 그대로 유지됩니다.
 */

const SECRET = 'PASTE_THE_SAME_SECRET_AS_VERCEL';

// 담당자가 직접 관리하는 열. 접수 시에는 비워두고 나중에 채웁니다.
const STAFF_COLUMNS = ['status', 'assigned_to', 'contact_attempts', 'notes_internal'];

function doPost(e) {
  try {
    const body = JSON.parse(e.postData.contents);

    if (!body.secret || body.secret !== SECRET) {
      return json({ ok: false, error: 'unauthorized' });
    }
    delete body.secret;

    // 메일 내용은 열로 적지 않습니다.
    const mail = body.mail;
    delete body.mail;

    const formType = body.form_type || 'unknown';
    const sheet = getOrCreateSheet(formType, body);

    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    const row = headers.map(function (h) {
      const v = body[h];
      return v === undefined || v === null ? '' : v;
    });

    // 기록을 먼저 남깁니다. 메일이 실패해도 신청은 남아 있어야 합니다.
    sheet.appendRow(row);

    return json({ ok: true, case_id: body.case_id, mail: sendMail_(mail) });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  }
}

/**
 * 알림 메일을 보냅니다.
 *
 * 이 스크립트는 스프레드시트 주인 계정(info@kslcampus.org)으로 실행되므로,
 * 구글이 자기 권한으로 보냅니다. 앱 비밀번호가 필요 없습니다.
 *
 * 2026년 10월에 앱 비밀번호가 조용히 폐기되어 알림 메일이 몇 주 동안 끊긴 적이
 * 있습니다. 그동안 신청은 이 시트에 쌓이기만 하고 아무도 보지 못했습니다.
 * 만료될 것이 하나 없는 경로를 두는 이유입니다.
 *
 * 메일 문구는 홈페이지가 만들어서 보내줍니다. 여기서는 전달만 합니다.
 */
function sendMail_(mail) {
  if (!mail) return undefined; // 메일 요청이 없으면 아무것도 하지 않습니다
  const out = { admin: false, ack: false };
  const errors = [];

  if (mail.admin && mail.admin.to) {
    try {
      MailApp.sendEmail({
        to: mail.admin.to,
        subject: mail.admin.subject,
        htmlBody: mail.admin.html,
        replyTo: mail.admin.replyTo || undefined,
        name: 'KSLC',
      });
      out.admin = true;
    } catch (err) {
      errors.push('담당자 알림 실패: ' + err);
    }
  }

  if (!mail.ack) {
    out.ack = true; // 신청자가 이메일을 적지 않았으면 보낼 것이 없습니다
  } else {
    try {
      MailApp.sendEmail({
        to: mail.ack.to,
        subject: mail.ack.subject,
        body: mail.ack.text,
        name: 'KSLC',
      });
      out.ack = true;
    } catch (err) {
      errors.push('접수 확인 메일 실패: ' + err);
    }
  }

  if (errors.length) out.error = errors.join(' | ');
  return out;
}

function getOrCreateSheet(formType, body) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(formType);

  if (!sheet) {
    sheet = ss.insertSheet(formType);
    // 서버가 보낸 키 순서를 그대로 헤더로 사용하고, 담당자 열을 뒤에 붙입니다.
    const keys = Object.keys(body).filter(function (k) {
      return STAFF_COLUMNS.indexOf(k) === -1;
    });
    const headers = keys.concat(STAFF_COLUMNS);
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    sheet.getRange(1, 1, 1, headers.length)
      .setFontWeight('bold')
      .setBackground('#0e2a47')
      .setFontColor('#ffffff');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function json(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
