import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "KSLC 소개",
  description: "Korean Senior Life Campus의 설립 배경, 비전과 미션, 핵심 가치를 소개합니다.",
};

const problems = [
  { title: "언어·문화 장벽", desc: "정보를 들어도 이해하고 결정하고 질문하기 어렵습니다.", answer: "한국어 Navigation과 통역으로 신뢰의 첫 문을 엽니다." },
  { title: "제도 복잡성", desc: "Medi-Cal·Medicare·IHSS·SSI·주거 지원의 경로가 끊겨 있습니다.", answer: "한 문에서 여러 서비스를 연결하는 One Door, Many Services." },
  { title: "서비스 분절", desc: "기관을 소개받아도 실제 이용까지 이어지지 않습니다.", answer: "연결로 끝내지 않는 Warm Referral과 Follow-up." },
  { title: "주거·건강 위험", desc: "문제가 위기로 커진 뒤에야 발견되곤 합니다.", answer: "조기 상담과 Needs Assessment로 미리 살핍니다." },
  { title: "교통·디지털 장벽", desc: "예약·신청·후속 확인에서 자주 어려움을 겪습니다.", answer: "이동과 디지털 이용을 함께 돕습니다." },
  { title: "사회적 고립", desc: "외로움과 정보 단절로 참여가 줄어듭니다.", answer: "관계·교육·봉사로 다시 연결합니다." },
];

const values = [
  { title: "Dignity 존엄", desc: "모든 시니어는 선택과 존중의 주체입니다. 대신 결정하지 않고 설명하고 동의를 구합니다." },
  { title: "Love 사랑", desc: "관심과 환대가 제도보다 먼저입니다. 급한 문제 뒤의 외로움과 두려움도 듣습니다." },
  { title: "Excellence 전문성", desc: "좋은 뜻을 정확한 실무로 완성합니다. 최신 정보와 훈련으로 서비스를 관리합니다." },
  { title: "Connection 연결", desc: "한 문에서 여러 서비스를 연결합니다. No Wrong Door, Warm Referral, Follow-up." },
  { title: "Integrity 정직·투명성", desc: "모르는 것은 모른다고 말합니다. 과장·보장·숨은 비용을 만들지 않습니다." },
  { title: "Innovation 혁신", desc: "작게 시험하고 배우며 개선합니다." },
  { title: "Stewardship 청지기정신", desc: "돈·정보·관계·공간을 책임 있게 관리합니다." },
];

const roadmap = [
  { phase: "Phase 0", title: "Community Building", desc: "준비위원회, 공식 브랜드, 파트너 관계와 첫 이용자를 만듭니다." },
  { phase: "Phase 1", title: "Navigation Center", desc: "한국어 Senior Navigation Desk와 closed-loop referral을 운영합니다. 지금 KSLC가 있는 단계입니다." },
  { phase: "Phase 2", title: "Community Service Center", desc: "Day Program, wellness, education, caregiver 지원으로 서비스를 넓혀 갑니다." },
  { phase: "Phase 3", title: "Life Campus", desc: "신뢰·Navigation·프로그램·파트너십이 한 공간에서 통합되는 Korean Senior Life Campus를 세웁니다." },
];

export default function AboutPage() {
  return (
    <>
      <Header lang="ko" currentPath="/about" />
      <main id="main">
        <PageHero
          kicker="ABOUT KSLC"
          title="KSLC 소개"
          lead="우리는 건물을 먼저 짓지 않습니다. 먼저 한 사람의 이야기를 듣고, 신뢰를 세우고, 흩어진 서비스를 연결하고, 서로 돌보는 공동체를 만듭니다."
        />

        <section className="purpose">
          <div className="shell purpose-grid">
            <div>
              <p className="section-kicker">설립 배경</p>
              <h2>
                공동체가 먼저,
                <br />
                캠퍼스는 그다음입니다.
              </h2>
            </div>
            <div className="purpose-copy">
              <p className="purpose-lead">
                KSLC는 한인 시니어가 언어, 제도, 건강, 주거, 이동, 고립의 장벽 때문에 마땅히 누려야
                할 삶의 기회를 놓치지 않도록 돕기 위해 설립되었습니다.
              </p>
              <p>
                우리는 프로그램 하나를 운영하는 기관이 아니라, 한 사람의 삶을 중심으로 공공기관·의료기관·교회·비영리단체·가족·자원봉사자를
                연결하는 지역사회 플랫폼을 지향합니다. 그 공동체가 충분히 자랄 때, Korean Senior
                Life Campus는 건물이 아니라 살아 있는 약속의 공간으로 세워질 것입니다.
              </p>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "var(--warm)" }}>
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="section-kicker">THE CHALLENGE</p>
                <h2>한인 시니어가 겪는 문제와 KSLC의 해법</h2>
              </div>
            </div>
            <div className="card-grid cols-3">
              {problems.map((p) => (
                <div className="card" key={p.title}>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <p style={{ marginTop: 14, color: "var(--navy)", fontWeight: 700 }}>→ {p.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell info-grid">
            <div>
              <p className="section-kicker">MISSION &amp; VISION</p>
              <h2>비전과 미션</h2>
            </div>
            <div className="purpose-copy">
              <p className="purpose-lead">Mission</p>
              <p>
                KSLC는 한인 시니어가 건강하고 존엄하며 의미 있는 삶을 살아가도록, 한국어로 이해할 수
                있는 Navigation과 건강·공공혜택·주거·돌봄·교육·사회참여 서비스를 지역사회와
                연결합니다.
              </p>
              <p className="purpose-lead">Vision</p>
              <p>
                한인 시니어라면 가장 먼저 찾는 곳 — Orange County에서 시작하여 북미 한인사회를
                대표하는 통합 Senior Life Campus가 됩니다.
              </p>
              <blockquote>건강을 잇고, 공동체를 세우며, 다음 세대에 희망을 남깁니다.</blockquote>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "var(--warm)" }}>
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="section-kicker">CORE VALUES</p>
                <h2>핵심 가치</h2>
              </div>
            </div>
            <div className="card-grid cols-3">
              {values.map((v) => (
                <div className="card" key={v.title}>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="section-kicker">OUR JOURNEY</p>
                <h2>Community to Campus Roadmap</h2>
              </div>
              <p>시설을 먼저 확보하지 않고 신뢰 → Navigation → 프로그램 → 공동체 → Campus 순서로 성장합니다.</p>
            </div>
            <div className="roadmap">
              {roadmap.map((r) => (
                <div className="roadmap-item" key={r.phase}>
                  <div className="roadmap-phase">
                    <span>PHASE</span>
                    <strong>{r.phase.replace("Phase ", "")}</strong>
                  </div>
                  <div>
                    <h3>{r.title}</h3>
                    <p>{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-tight">
          <div className="shell">
            <div className="card" style={{ maxWidth: 640 }}>
              <h3>리더십과 조직이 궁금하신가요?</h3>
              <p>KSLC를 이끄는 이사회와 준비위원회를 소개합니다.</p>
              <div style={{ marginTop: 20 }}>
                <Link className="button button-navy" href="/ko/leadership">
                  리더십·조직 보기
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section-tight" style={{ paddingTop: 0 }}>
          <div className="shell">
            <div className="card" style={{ maxWidth: 640 }}>
              <h3>공식 기관정보</h3>
              <ul>
                <li>공식 명칭: Korean Senior Life Campus (KSLC)</li>
                <li>주소: 7342 Orangethorpe Ave, #B-109, Buena Park, CA 90621</li>
                <li>전화: (657) 239-0226</li>
                <li>이메일: info@kslcampus.org</li>
                <li>서비스지역: Orange County, California</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="ko" />
    </>
  );
}
