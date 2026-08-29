import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const audiences = [
  { title: "언어장벽을 느끼시는 분", desc: "영어로 된 서류와 전화 상담이 부담스러운 한인 시니어를 한국어로 안내합니다." },
  { title: "혼자 여러 기관을 오가시는 분", desc: "병원, 시청, 보험사를 따로따로 찾아다니지 않도록 한 곳에서 연결해 드립니다." },
  { title: "가족이 멀리 있는 분", desc: "자녀나 보호자가 가까이 없어도 다음 단계를 함께 정리하고 안내해 드립니다." },
  { title: "서비스를 신청했지만 진행이 막힌 분", desc: "이미 신청했지만 결과를 알기 어려운 경우, 다시 확인하고 연결해 드립니다." },
];

const services = [
  { number: "01", title: "건강·의료 Navigation", desc: "주치의·전문의 연결, 병원 예약, 퇴원 후 지원, 의료교통을 돕습니다." },
  { number: "02", title: "보험·공공혜택", desc: "Medi-Cal, Medicare, SSI·SSA, CalFresh 신청과 갱신을 안내합니다." },
  { number: "03", title: "IHSS·가족돌봄", desc: "IHSS 정보, 가족돌봄자 지원, 성인주간보호, 재가서비스를 연결합니다." },
  { number: "04", title: "주거 Navigation", desc: "시니어 아파트, Affordable Housing, 퇴거 예방과 주거안정을 돕습니다." },
  { number: "05", title: "교통·생활지원", desc: "진료 교통, 식사 지원, 사회적 고립 예방, 디지털 접근을 안내합니다." },
  { number: "06", title: "법률·지역자원", desc: "법률구조기관, 시민권·이민 정보, 교회·비영리기관 연결을 지원합니다." },
];

const steps = [
  ["01", "상담 요청", "전화 또는 웹폼으로 지금 가장 필요한 도움을 말씀해 주세요."],
  ["02", "초기 상담 및 긴급도 확인", "상황을 함께 듣고 얼마나 빠른 연결이 필요한지 확인합니다."],
  ["03", "Needs Assessment", "건강·혜택·주거·돌봄 상황과 우선순위를 함께 정리합니다."],
  ["04", "개인별 Action Plan 및 기관 연결", "적합한 기관과 신청 경로, 준비할 서류를 함께 정합니다."],
  ["05", "Follow-up 및 결과 확인", "소개로 끝내지 않고 실제 이용 여부와 다음 단계를 확인합니다."],
];

const differences = [
  { title: "No Wrong Door", desc: "어떤 문제로 오셔도 맞는 곳까지 함께 찾아갑니다." },
  { title: "한국어 중심 안내", desc: "번역이 아니라 처음부터 한국어로 상담합니다." },
  { title: "결과까지 Follow-up", desc: "연결로 끝내지 않고 실제 이용 여부를 다시 확인합니다." },
  { title: "지역사회 파트너십", desc: "병원·시청·교회·기관과 함께 안전망을 만듭니다." },
];

export default function HomePage() {
  return (
    <>
      <Header lang="ko" currentPath="/" />
      <main id="main">
        <section className="hero" id="top">
          <img className="hero-photo" src="/hero-community.jpg" alt="" />
          <div className="hero-scrim" aria-hidden="true" />
          <div className="shell hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">KOREAN SENIOR LIFE CAMPUS · A COMMUNITY BEFORE A CAMPUS</p>
              <h1>
                필요한 도움을
                <br />
                <span>한 곳에서 시작하세요.</span>
              </h1>
              <p className="hero-lead">
                건강, 복지, 주거, 돌봄 정보를 한곳에서 확인하고 필요한 서비스에 실제로 연결될 때까지
                KSLC Navigation Center가 함께합니다.
              </p>
              <div className="hero-actions">
                <Link className="button button-gold" href="/ko/request">
                  상담 요청
                </Link>
                <Link className="button button-outline" href="/ko/services">
                  서비스 보기
                </Link>
                <Link className="text-link dark" href="/ko/referral">
                  기관 의뢰 <span aria-hidden="true">→</span>
                </Link>
              </div>
              <div className="hero-trust">
                <span>한국어 중심 안내</span>
                <span>오렌지카운티 지역 연계</span>
                <span>결과까지 Follow-up</span>
              </div>
              <div className="hero-links">
                <Link href="/ko/leadership">리더십·조직 보기 →</Link>
                <a href="https://www.hyosarangusa.org/" target="_blank" rel="noreferrer">
                  효사랑 선교회 →
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="purpose" id="about">
          <div className="shell purpose-grid">
            <div>
              <p className="section-kicker">WHY KSLC</p>
              <h2>
                정보보다 먼저,
                <br />
                사람을 봅니다.
              </h2>
            </div>
            <div className="purpose-copy">
              <p className="purpose-lead">
                서비스가 없어서가 아니라, 제도가 너무 복잡하고 언어와 디지털 장벽이 높아서 필요한
                도움에 닿지 못하는 시니어가 많습니다.
              </p>
              <p>
                KSLC Navigation Center는 모든 서비스를 직접 제공하는 기관이 아닙니다. 이미 존재하는
                공공·의료·주거·법률·지역 자원을 한 사람의 삶을 중심으로 연결하는 공동체의 관문입니다.
              </p>
              <blockquote>“연결로 끝나지 않습니다. 결과까지 함께 확인합니다.”</blockquote>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="section-kicker">WHO WE HELP</p>
                <h2>이런 분들을 돕습니다</h2>
              </div>
              <p>한 가지 이유가 아니어도 괜찮습니다. 지금 상황을 말씀해 주시면 함께 정리해 드립니다.</p>
            </div>
            <div className="card-grid cols-4">
              {audiences.map((a) => (
                <div className="card" key={a.title}>
                  <h3>{a.title}</h3>
                  <p>{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="services section" id="services">
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="section-kicker">WHAT WE DO</p>
                <h2>한 문에서 시작하는 통합 Navigation</h2>
              </div>
              <p>한 가지 문제로 찾아오셔도 삶 전체에 필요한 서비스를 함께 살펴봅니다.</p>
            </div>
            <div className="card-grid cols-3">
              {services.map((s) => (
                <div className="service-card" key={s.number} style={{ border: "1px solid #cbd0d3" }}>
                  <span className="service-number">{s.number}</span>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
            <p className="service-boundary">
              KSLC는 의료 진단·치료, 보험 판매, 법률 의견 또는 주택 배정·승인을 제공하거나 보장하지
              않습니다. 전문 판단이 필요한 경우 적절한 면허기관과 공식 담당기관으로 연결합니다.
            </p>
            <div style={{ textAlign: "center", marginTop: 40 }}>
              <Link className="button button-navy" href="/ko/services">
                서비스 전체 보기
              </Link>
            </div>
          </div>
        </section>

        <section className="process section" id="process">
          <div className="shell process-grid">
            <div className="process-intro">
              <p className="section-kicker light">HOW IT WORKS</p>
              <h2>
                처음 연락부터
                <br />
                결과 확인까지
              </h2>
              <p>No Wrong Door, No One Walks Alone.</p>
            </div>
            <div className="steps">
              {steps.map(([number, title, description]) => (
                <article className="step" key={number}>
                  <span>{number}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="section-kicker">WHY IT&apos;S DIFFERENT</p>
                <h2>KSLC의 차이점</h2>
              </div>
            </div>
            <div className="card-grid cols-4">
              {differences.map((d) => (
                <div className="card" key={d.title}>
                  <h3>{d.title}</h3>
                  <p>{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="partners section" id="partners">
          <div className="shell partners-grid">
            <div className="partner-visual" aria-hidden="true">
              <div className="connection center">KSLC</div>
              <div className="connection c1">의료</div>
              <div className="connection c2">주거</div>
              <div className="connection c3">정부</div>
              <div className="connection c4">지역사회</div>
            </div>
            <div>
              <p className="section-kicker">COMMUNITY PARTNERSHIP</p>
              <h2>
                지역사회와 함께 만드는
                <br />
                안전한 연결망
              </h2>
              <p>
                병원, 시정부, 공공기관, 주택기관, 교회와 비영리단체가 각자의 전문성을 유지하면서
                시니어 중심의 연결 체계를 함께 만들어 갑니다.
              </p>
              <Link className="text-link dark" href="/ko/partnership">
                협력 문의하기 <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="resources section" id="resources">
          <div className="shell resource-card">
            <div>
              <p className="section-kicker">OFFICIAL RESOURCE</p>
              <h2>KSLC 공식 소개자료</h2>
              <p>
                KSLC의 비전, 미션, 핵심가치와 Navigation Center 서비스를 담은 공식 발표자료를 자료실에서
                내려받을 수 있습니다.
              </p>
            </div>
            <div className="resource-action">
              <span>자료실 바로가기</span>
              <Link className="button button-navy" href="/ko/resources">
                자료실 방문하기
              </Link>
              <small>안내서 · 체크리스트 · 공식 소개자료</small>
            </div>
          </div>
        </section>

        <section className="section-tight">
          <div className="shell contact-card" style={{ background: "var(--warm)", color: "var(--charcoal)", boxShadow: "none", border: "1px solid var(--rule)" }}>
            <div>
              <p className="section-kicker">SUPPORT KSLC</p>
              <h2 style={{ color: "var(--navy)" }}>후원과 자원봉사로 함께해 주세요</h2>
              <p style={{ color: "var(--ink-soft)" }}>
                창립후원, 정기후원, 프로그램 후원과 상담지원·통역·행정·디지털 교육 자원봉사까지 다양한
                방법으로 참여하실 수 있습니다.
              </p>
            </div>
            <div className="contact-actions">
              <Link className="button button-gold" href="/ko/partnership#donate">
                후원하기
              </Link>
              <Link className="button button-outline" href="/ko/partnership#volunteer">
                자원봉사 신청
              </Link>
            </div>
          </div>
        </section>

        <section className="contact section" id="contact">
          <div className="shell contact-card">
            <div>
              <p className="section-kicker light">START HERE</p>
              <h2>어디서부터 시작할지 모르셔도 괜찮습니다.</h2>
              <p>지금 가장 걱정되는 한 가지를 말씀해 주세요. 함께 다음 길을 찾겠습니다.</p>
              <p style={{ fontSize: 14, marginTop: 24 }}>운영시간: 평일 오전 9시 – 오후 5시 (사전 예약 권장)</p>
            </div>
            <div className="contact-actions">
              <a className="button button-white" href="tel:+17147882002">
                714-788-2002 전화하기
              </a>
              <a
                className="address-link"
                href="https://www.google.com/maps/search/?api=1&query=7342+Orangethorpe+Ave+%23B-109+Buena+Park+CA+90621"
                target="_blank"
                rel="noreferrer"
              >
                7342 Orangethorpe Ave, #B-109
                <br />
                Buena Park, CA 90621
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="ko" />
    </>
  );
}
