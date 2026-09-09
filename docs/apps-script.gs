/**
 * KSLC 접수기록 수신용 Apps Script
 * ---------------------------------------------------------------
 * 스프레드시트 → 확장 프로그램 → Apps Script 에 붙여넣고 배포하세요.
 * 배포 설정: 유형 "웹 앱" / 실행 계정 "나" / 액세스 권한 "모든 사용자"
 *
 * "모든 사용자"로 열어두는 대신 아래 SECRET 으로 보호합니다.
 * SECRET 값은 Vercel 환경변수 SHEETS_WEBHOOK_SECRET 과 반드시 같아야 합니다.
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

    const formType = body.form_type || 'unknown';
    const sheet = getOrCreateSheet(formType, body);

    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    const row = headers.map(function (h) {
      const v = body[h];
      return v === undefined || v === null ? '' : v;
    });
    sheet.appendRow(row);

    return json({ ok: true, case_id: body.case_id });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  }
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
