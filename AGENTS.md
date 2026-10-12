<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# KSLC 홈페이지 — AI 에이전트용 작업 규칙

이 저장소를 수정하는 AI는 **작업 전에 이 절을 끝까지 읽고, 아래 규칙을 지켜야 합니다.**
사람이 읽을 운영 안내서는 `docs/운영안내서.md` 에 있습니다.

## 이 사이트의 성격 (먼저 이해할 것)

한인 시니어를 위한 비영리 단체의 **실제 운영 중인** 홈페이지입니다. 소개 사이트가 아니라
**어르신이 도움을 요청하면 접수하는 창구**입니다. 방문자는 고령이고, 상담 신청이 조용히
실패하면 아무도 모른 채 어르신은 "역시 안 되는구나" 하고 포기합니다.

따라서 이 저장소에서 **가장 나쁜 결과는 사이트가 깨지는 것이 아니라, 멀쩡해 보이면서
상담 신청만 전달되지 않는 상태**입니다. 모든 판단에서 이 점을 우선하십시오.

## 절대 규칙 (어기면 배포가 멈추거나 비밀이 공개됩니다)

1. **커밋 메시지에 `Co-Authored-By` 줄을 넣지 마십시오.** 배포가 거부됩니다.
2. **저장소는 공개(public)로 유지해야 합니다.** 비공개로 바꾸면 자동 배포가 멈춥니다.
3. **비밀값을 커밋하지 마십시오.** 저장소는 누구나 볼 수 있습니다.
   `.env*`, `*.ready.gs` 는 `.gitignore` 로 막혀 있습니다. 새 파일에 비밀을 적지 마십시오.
   비밀은 Vercel 환경변수에만 둡니다 (이름 목록: `.env.example`).
4. **`next.config.ts` 에 `output: "export"` 를 되살리지 마십시오.** 상담 양식의 서버
   라우트(`app/api/`)가 죽습니다. 페이지는 지금도 정적으로 미리 생성됩니다.
5. **`trailingSlash: true` 입니다.** 클라이언트에서 POST 할 때 주소 끝에 슬래시가 없으면
   308 로 돌려보내져 실패합니다. 반드시 `/api/submit/` 처럼 **슬래시까지** 붙이십시오.

## 조심해서 다룰 영역

| 경로 | 왜 |
|---|---|
| `app/api/`, `lib/submissions.ts`, `lib/formSchema.ts`, `components/ConsultationForm.tsx` | 상담 접수 경로. 고장이 **눈에 보이지 않습니다** |
| `components/ConsultationForm.tsx` 의 `inFlight` ref | React 상태는 비동기라 상태값으로 이중 제출을 막을 수 없습니다. 실제로 중복 접수가 발생한 적이 있습니다. ref 를 상태로 바꾸지 마십시오 |
| `lib/submissions.ts` 의 저장→메일 순서 | **기록을 먼저 저장하고 그 다음 메일을 보냅니다.** 순서를 바꾸지 마십시오. 메일 실패를 방문자에게 "다시 제출하세요"로 알려서는 안 됩니다 |

## 내용만 바꾸는 작업이라면 (대부분의 요청)

코드 구조를 건드리지 말고 아래 데이터 파일만 수정하십시오. 각 파일에 한국어 설명과 예시가 있습니다.

- 소식·언론보도·영상 → `lib/news.ts`
- 이사·직원 → `lib/leadership.ts`
- 상단 공지 배너 → `lib/notices.ts` (**`showUntil` 끝나는 날짜를 반드시 넣을 것.** 날짜가
  지나면 스스로 사라집니다. 사람이 기억해서 내리게 만들지 마십시오)
- 자료실 → `public/downloads/` 에 파일을 넣고 `app/(ko)/ko/resources/page.tsx` 와 `app/(en)/resources/page.tsx` 양쪽에 항목 추가
- 사진 → `public/team/`, `public/press/`

**이중 언어 사이트입니다.** 모든 문구는 `ko` 와 `en` 을 함께 채우십시오. 한쪽만 채우면
다른 언어 페이지에서 비어 보입니다. 실제 사람의 이름은 **추측해서 로마자로 바꾸지 말고**
사용자에게 물어보십시오.

## 끝났다고 말하기 전에 반드시 할 것

1. `npm run build` 가 성공하는지 확인 (타입 오류·CSS 괄호 오류가 여기서 걸립니다)
2. 바꾼 페이지를 실제로 열어 확인. 한국어·영어 **양쪽** 모두
3. 상담 양식 관련 파일을 건드렸다면 **실제로 한 건 제출해 보고**, 메일과 스프레드시트
   양쪽에 들어왔는지 확인. "코드상 맞다"는 근거로 완료를 보고하지 마십시오
4. 모바일 폭(390px)에서 가로 넘침이 없는지 확인

빌드만 통과한 것은 동작 확인이 아닙니다. 과거에 빌드가 통과한 상태로 **중복 접수 버그**와
**메일 전달 실패**가 라이브에 올라간 적이 있습니다.

## 자동 점검

`app/api/self-test/` 가 상담 접수 경로를 스스로 점검합니다. 호출은 사이트 바깥(구글
Apps Script, `docs/apps-script-watchman.gs`)에서 매주 들어옵니다. 사이트 안에 감시 장치를
두면 사이트가 죽을 때 감시 장치도 같이 죽기 때문입니다. 이 구조를 사이트 내부 cron 으로
옮기지 마십시오.

## 사용자와 일할 때

- 사용자는 한국어로 소통합니다. 한국어로 답하십시오.
- 사용자는 비영리 단체 운영자이며 개발자가 아닐 수 있습니다. 코드를 붙여넣게 하지 말고,
  **무엇이 어떻게 달라지는지**를 설명하십시오.
- 추측한 것을 확인한 것처럼 보고하지 마십시오. 확인하지 못한 것은 확인하지 못했다고 말하십시오.
- 되돌리기 어려운 작업(배포, 파일 삭제, 계정 변경)은 먼저 물어보십시오.
