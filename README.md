# KSLC 홈페이지 개발·배포

한인 시니어를 위한 한국어·영어 홈페이지입니다. 상담 접수는 Next.js 서버 라우트에서 처리하며, 스프레드시트 저장 후 메일을 발송합니다.

- 저장소: https://github.com/seanbae115/KCLC-Website
- 운영 안내서: [docs/운영안내서.md](docs/운영안내서.md)
- 에이전트 작업 규칙: [AGENTS.md](AGENTS.md)

## 로컬 개발

저장소 루트에서 실행합니다. Node.js와 npm이 필요합니다. 이 작업 환경에서는 Node.js 24를 확인했습니다.

```powershell
npm ci
npm run dev
```

영어 페이지는 http://localhost:3000/ , 한국어 페이지는 http://localhost:3000/ko/ 에서 확인합니다.

```powershell
npm run build
npm run start
```

이 Codex 환경에서는 기본 PATH에 npm이 없으므로 설치 후 다음 명령도 사용할 수 있습니다.

```powershell
node node_modules/next/dist/bin/next dev --hostname 127.0.0.1
node node_modules/next/dist/bin/next build
node node_modules/next/dist/bin/next start --hostname 127.0.0.1
```

빌드 후 로컬 확인도 Next.js 서버로 실행합니다. `out/` 업로드나 `output: "export"` 방식은 상담 서버 라우트를 실행할 수 없으므로 사용하지 않습니다.

환경변수 이름은 `.env.example`에 있습니다. 일반 화면 확인에는 실제 상담 비밀값을 입력하지 않습니다. 실제 상담 기능 검증은 AGENTS.md의 시험 승인·결과 확인 절차를 따릅니다. 실제 비밀값은 채팅, 문서, Git에 남기지 않습니다.

## 수정과 배포

1. 현재 변경사항과 원격 최신 상태를 확인하고 `master`에서 작업 브랜치를 만듭니다. 기존 작업을 덮어쓰지 않습니다.
2. 요청한 변경을 적용하고 빌드, 한국어·영어 화면, 모바일 폭 390px을 확인합니다. 상담 관련 변경은 별도 접수 검증도 필요합니다.
3. 브랜치를 GitHub에 올리고 Draft PR을 만듭니다.
4. 기존 Vercel Git 연동이 생성한 미리보기의 배포 성공과 실제 화면을 확인합니다. 주소를 추측하지 않습니다.
5. 사용자의 해당 변경 운영 반영 승인 후 `master`에 합치고 운영 배포와 화면을 확인합니다.

새 Vercel 프로젝트나 도메인 설정을 임의로 만들지 않습니다. GitHub 플러그인 연결과 로컬 Git push 인증은 각각 확인해야 합니다. Git 작성자 정보가 없으면 사용자에게 확인하며 임의의 이름이나 이메일을 지정하지 않습니다.

## 주요 경로

- `app/(en)/`: 영어 페이지
- `app/(ko)/ko/`: 한국어 페이지
- `app/api/`: 상담 접수·자동 점검 서버 라우트
- `components/`: 공통 화면과 상담 양식
- `lib/news.ts`, `lib/leadership.ts`, `lib/notices.ts`: 소식·인물·공지
- `public/`: 사진과 자료 파일

운영 안내서의 과거 제약 설명은 현재 계정 설정을 검증한 결과와 구분합니다. 배포 계정, 환경변수, 미리보기 권한, 상담 전달 상태는 실제 접근하여 확인하기 전까지 확인 완료로 보고하지 않습니다.
