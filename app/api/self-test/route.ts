import { NextResponse } from "next/server";
import { runSelfTest } from "@/lib/submissions";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * 상담 신청 경로가 살아 있는지 스스로 점검하는 주소.
 *
 * 부르는 쪽은 구글 Apps Script 의 시간 기반 트리거입니다 (docs/apps-script-watchman.gs).
 * 일부러 사이트 바깥에 두었습니다 — 사이트 자체가 죽으면 사이트 안의 감시 장치도
 * 같이 죽기 때문입니다.
 *
 * 점검은 메일을 보내므로, 열쇠(키)가 맞아야만 실행합니다.
 * 키는 이미 쓰고 있는 SHEETS_WEBHOOK_SECRET 을 그대로 씁니다.
 * 인수·인계에서 관리해야 할 비밀이 늘어나지 않게 하려는 의도입니다.
 */
export async function GET(req: Request) {
  const secret = process.env.SHEETS_WEBHOOK_SECRET;
  const key = new URL(req.url).searchParams.get("key");
  if (!secret || !key || key !== secret) {
    return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  }

  const result = await runSelfTest();
  if (!result.ok) {
    console.error(`[self-test] FAILED case=${result.caseId}: ${result.problems.join(" | ")}`);
  }
  // 실패하면 503 으로 알려, 본문을 못 읽는 단순한 감시 도구도 알아챌 수 있게 합니다.
  return NextResponse.json(result, { status: result.ok ? 200 : 503 });
}
