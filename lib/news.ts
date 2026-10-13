import type { Lang } from "./nav";

export type NewsItem = {
  slug: string;
  /** Sort key. */
  date: string;
  dateLabel: Record<Lang, string>;
  kind: Record<Lang, string>;
  title: Record<Lang, string>;
  lead: Record<Lang, string>;
  /** Publication and reporter. */
  source: Record<Lang, string>;
  /** Scan of the printed page, cropped to this article. */
  clipping?: { src: string; alt: Record<Lang, string> };
  /** Where the piece can be read online, when it is published there. */
  href?: string;
};

const L = (ko: string, en: string) => ({ ko, en });

/** 행사 소식. 인명 영문 표기는 확인된 표기만 사용합니다. */
export const eventItems = [
  {
    slug: "board-advisor-session-2026-10-10",
    date: "2026-10-10",
    dateLabel: L("2026년 10월 10일", "October 10, 2026"),
    title: L("KSLC 이사 및 전문위원 후보 모집 설명회 개최", "KSLC Holds Information Session for Prospective Board Members and Advisors"),
    lead: L(
      "50여명 참석, 한인 시니어 지원에 지역사회 전문성 모은다.",
      "About 50 people attended to bring community expertise together in support of Korean seniors.",
    ),
    body: [
      L("Korean Senior Life Campus(한인 시니어 삶터, 이하 KSLC·회장 배상도)는 10월 10일 오전 11시 부에나파크 KSLC 사무실에서 이사 및 전문위원 후보 모집 설명회를 열었다. 지역사회 인사 50여명이 참석한 가운데, 설립 취지와 상담 운영, 이사·전문위원의 역할 및 참여 절차를 소개했다.", "Korean Senior Life Campus (KSLC), led by Chair Sang Do Bae, held an information session for prospective board members and advisors at 11 a.m. on October 10 at its Buena Park office. About 50 community members attended to learn about its mission, consultation services, board and advisor roles, and participation process."),
      L("조이스 안 부에나파크 시의원은 격려사에서 KSLC의 설립 취지인 “우리는 사람을 세우기 위해 모였습니다”를 인용하며 공감을 표했다. 한 분의 시니어가 존중받고 한 가정이 회복되며 지역사회가 함께 성장한다는 뜻에 힘을 보태 달라며, “여기 계신 모든 분들이 힘을 모아 진정으로 이런 단체를 세워주길 당부합니다”라고 말했다.", "In her remarks, Buena Park City Council Member Joyce Ahn expressed support for KSLC’s founding purpose: “We have come together to build people up.” She encouraged attendees to help seniors feel respected, families recover, and the community grow together, urging everyone present to work together to build such an organization."),
      L("KSLC는 언어·정보·교통·디지털 접근의 어려움으로 필요한 서비스를 놓치는 오렌지카운티 한인 시니어를 돕는 한국어 기반 비영리 커뮤니티 내비게이션 기관이다. 주거, 공공혜택, 건강·의료, 교통, 돌봄 등에 관한 정보를 안내하고 이용자의 필요에 맞는 전문기관에 연결한다.", "KSLC is a Korean-language nonprofit community navigation organization serving Korean seniors in Orange County who may miss needed services because of language, information, transportation, or digital access barriers. It provides information on housing, public benefits, health care, transportation, and caregiving, and connects people with professional organizations suited to their needs."),
      L("배상도 회장은 이사회 구성이 한인 시니어를 위한 신뢰받는 지원체계를 지역사회와 함께 세우는 출발점이라고 설명했다. 이어 “시니어의 어려움을 이해하고 자신의 경험과 전문성을 지역사회를 위해 나누고자 하는 분들의 참여를 기대한다”고 말했다.", "Chair Sang Do Bae described forming the board as a starting point for building a trusted support system for Korean seniors together with the community. He welcomed participation from people who understand seniors’ challenges and wish to share their experience and expertise with the community."),
      L("피터 리(Peter Lee) 사무총장은 상담의 핵심을 이용자의 어려움을 듣고 다음 절차를 함께 정리하는 과정으로 설명했다. 영어 안내문이 있으면 내용과 제출기한을 확인하고 필요한 서류를 안내한다. 이용자의 동의에 따라 기관에 문의하거나 연결한 뒤, 연락·방문·서류 제출 여부를 확인하고 후속 조치를 안내한다.", "Executive Director Peter Lee explained that consultation centers on listening to a person’s difficulties and working through the next steps together. Staff review English-language notices and deadlines, explain required documents, and, with the person’s consent, contact or connect them with an agency. They then check whether contact, visits, or document submissions have occurred and explain follow-up steps."),
      L("KSLC는 기관 연결 이후 실제 서비스 이용 과정까지 확인하는 ‘Warm Handoff’와 후속관리 체계를 구축할 계획이다. 후속 확인 시점은 각 사례의 기한과 운영 여건에 맞춰 정한다.", "KSLC plans to establish a Warm Handoff and follow-up system that checks whether people actually access services after a referral. Follow-up timing will depend on each case’s deadlines and operating capacity."),
      L("설명회에서는 책임 있는 운영을 위한 이사회의 역할도 소개됐다. 이사회는 주요 사업계획과 예산을 검토하고 운영·재정의 투명성을 감독하며, 지역사회와 후원자·공공기관·전문기관의 협력 확대에 참여한다. KSLC는 정관에 따라 최대 21명 규모의 이사회를 단계적으로 구성할 예정이다.", "The session also introduced the board’s role in responsible governance. Board members review major program plans and budgets, oversee operational and financial transparency, and help expand collaboration with the community, donors, public agencies, and professional organizations. Under its bylaws, KSLC plans to build a board of up to 21 members in stages."),
      L("전문위원은 재정·회계, 법률, 의료·보건, 노인복지, 주거, 교통, 교육, 기금개발, 홍보, 정보기술 등 자신의 분야에서 자문과 교육, 기관 연결, 프로젝트 활동에 협력한다. 전문위원 자격만으로 이사회 의결권을 갖지는 않으며, 구체적인 역할은 정관과 위촉 내용에 따른다.", "Advisors contribute through advice, education, agency connections, and projects in fields such as finance and accounting, law, health care, aging services, housing, transportation, education, fundraising, communications, and information technology. Advisor status alone does not confer board voting rights; specific responsibilities depend on the bylaws and terms of appointment."),
      L("이사회 경험이 없는 인사도 지원할 수 있다. 후보자는 관심분야 확인서와 지원서 제출 후 개별 면담, 이해충돌 검토, 정해진 승인 절차를 거쳐 이사로 선임되거나 전문위원으로 위촉된다. 이후 오리엔테이션에서 기관의 사명과 운영 기준, 맡은 역할을 공유한다.", "People without prior board experience may also apply. Candidates submit an interest form and application, followed by an individual interview, a conflict-of-interest review, and the required approval process before appointment as a director or advisor. Orientation then covers the organization’s mission, operating standards, and assigned responsibilities."),
      L("KSLC는 이번 설명회를 계기로 지역사회의 경험과 전문성을 모아 한인 시니어 지원사업을 확대하고 지속적인 기관 협력을 강화할 계획이다.", "Following the session, KSLC plans to bring together community experience and expertise to expand support for Korean seniors and strengthen ongoing collaboration among organizations."),
      L("문의: KSLC 한인 시니어 삶터 · (657) 239-0226 · www.kslcampus.org", "For inquiries: Korean Senior Life Campus (KSLC) · (657) 239-0226 · www.kslcampus.org"),
    ],
    photo: {
      src: "/events/board-advisor-session-2026-10-10.webp",
      width: 1600,
      height: 900,
      alt: L(
        "KSLC 이사·전문위원 모집 설명회에서 발표를 듣고 있는 참석자들",
        "Attendees listening to a presentation at the KSLC board and advisor recruitment information session",
      ),
    },
  },
  {
    slug: "councilmember-remarks-2026-10-10",
    date: "2026-10-10",
    dateLabel: L("2026년 10월 10일", "October 10, 2026"),
    title: L(
      "KSLC 이사·전문위원 모집 설명회 — 조이스 안 시의원 격려사",
      "KSLC Board and Advisor Information Session — Remarks by Buena Park City Council Member Joyce Ahn",
    ),
    lead: L(
      "2026년 10월 10일 열린 KSLC 이사·전문위원 모집 설명회에서 조이스 안 부에나팍 시의원이 KSLC의 발전을 기원하며 격려의 말씀을 전했습니다.",
      "At the KSLC board and advisor recruitment information session on October 10, 2026, Buena Park City Council Member Joyce Ahn offered words of encouragement and wishes for KSLC’s continued growth.",
    ),
    photo: {
      src: "/events/councilmember-remarks-2026-10-10.webp",
      width: 1600,
      height: 895,
      alt: L(
        "KSLC 이사·전문위원 모집 설명회에서 참석자들에게 격려사를 전하는 조이스 안 부에나팍 시의원",
        "Buena Park City Council Member Joyce Ahn addressing attendees at the KSLC board and advisor information session",
      ),
    },
  },
];

export const newsItems: NewsItem[] = [
  {
    slug: "hankook-2026-10-05",
    date: "2026-10-05",
    dateLabel: L("2026년 10월 5일", "October 5, 2026"),
    kind: L("언론 보도", "In the news"),
    title: L("“이사 및 전문 위원 모집해요”", "“We are recruiting directors and advisors”"),
    lead: L(
      "한인 시니어 삶터, 10일 설명회 부에나팍",
      "KSLC holds an information session in Buena Park on October 10.",
    ),
    source: L("한국일보 A12 · 2026년 10월 5일", "The Korea Times A12 · October 5, 2026"),
    clipping: {
      src: "/press/hankook-2026-10-05.jpg",
      alt: L(
        "2026년 10월 5일자 한국일보 지면. KSLC 이사·전문위원 모집 설명회 기사.",
        "The Korea Times of October 5, 2026, reporting the KSLC board and advisor information session.",
      ),
    },
  },
  {
    slug: "joongang-2026-10-05",
    date: "2026-10-05",
    dateLabel: L("2026년 10월 5일", "October 5, 2026"),
    kind: L("언론 보도", "In the news"),
    title: L("어르신 도울 이사·전문위원 모집", "Recruiting directors and advisors to help seniors"),
    lead: L(
      "한인 시니어 라이프 캠퍼스, 10일 부에나파크서 설명회",
      "Korean Senior Life Campus holds an information session in Buena Park on October 10.",
    ),
    source: L("중앙일보 오렌지카운티 12면 · 2026년 10월 5일", "The Korea Daily, Orange County p.12 · October 5, 2026"),
    clipping: {
      src: "/press/joongang-2026-10-05.jpg",
      alt: L(
        "2026년 10월 5일자 중앙일보 지면. KSLC 이사·전문위원 모집 설명회 기사.",
        "The Korea Daily of October 5, 2026, reporting the KSLC board and advisor information session.",
      ),
    },
  },
  {
    slug: "hankook-2026-09-28",
    date: "2026-09-28",
    dateLabel: L("2026년 9월 28일", "September 28, 2026"),
    kind: L("언론 보도", "In the news"),
    title: L("부에나팍 한인 시니어 위한 기관 문열어", "A center for Korean seniors opens in Buena Park"),
    lead: L(
      "KSLC, 복지·건강·주거·교통 한국어로 안내 무료 서비스",
      "KSLC guides seniors through benefits, health, housing and transportation in Korean — free of charge.",
    ),
    source: L("한국일보 풀러튼 A12 · 문태기 기자", "The Korea Times, Fullerton A12 · Taegi Moon"),
    clipping: {
      src: "/press/hankook-2026-09-28.jpg",
      alt: L(
        "2026년 9월 28일자 한국일보 풀러튼면 지면. KSLC 발대식 기사와 단체사진이 실려 있다.",
        "The Korea Times Fullerton section of September 28, 2026, carrying the KSLC launch story and group photograph.",
      ),
    },
  },
  {
    slug: "joongang-2026-09-28",
    date: "2026-09-25",
    dateLabel: L("2026년 9월 25일 · 지면 9월 28일", "September 25, 2026 · in print September 28"),
    kind: L("언론 보도", "In the news"),
    title: L("시니어 생활정보 서비스 한국어 제공", "Senior life information services, offered in Korean"),
    lead: L(
      "한인시니어라이프캠퍼스 발족 · 부에나파크 사무실서 무료봉사 · 배상도 회장 등 11명으로 시작",
      "Korean Senior Life Campus launches with eleven people, serving free of charge from its Buena Park office.",
    ),
    source: L("중앙일보 오렌지카운티 12면 · 임상환 기자", "The Korea Daily, Orange County p.12 · Sanghwan Lim"),
    clipping: {
      src: "/press/joongang-2026-09-28.jpg",
      alt: L(
        "2026년 9월 28일자 중앙일보 오렌지카운티면 지면. KSLC 발대식 기사와 단체사진이 실려 있다.",
        "The Korea Daily Orange County section of September 28, 2026, carrying the KSLC launch story and group photograph.",
      ),
    },
    href: "https://www.koreadaily.com/article/20260925200005814",
  },
];

export type VideoItem = {
  slug: string;
  /** Sort key. */
  date: string;
  dateLabel: Record<Lang, string>;
  /** The eleven-character YouTube id, not a full watch URL. */
  youtubeId: string;
  title: Record<Lang, string>;
  lead: Record<Lang, string>;
  /** Broadcaster or channel that produced the piece. */
  source: Record<Lang, string>;
};

export const videoItems: VideoItem[] = [
  {
    slug: "gbc-interview-2026-10",
    date: "2026-10-06",
    dateLabel: L("2026년 10월", "October 2026"),
    youtubeId: "dxTYinfUj_Q",
    title: L(
      "KSLC 소개 및 이사·전문위원 모집 — 배상도 회장 인터뷰",
      "Introducing KSLC and the call for directors and advisors — an interview with Chair Sang Do Bae",
    ),
    lead: L(
      "KSLC가 어떤 일을 하는 곳인지, 그리고 이사·전문위원을 왜 모집하는지 배상도 회장이 직접 설명합니다.",
      "Chair Sang Do Bae explains what KSLC does, and why the campus is looking for directors and advisors.",
    ),
    source: L("GBC 미주복음방송", "GBC Gospel Broadcasting"),
  },
];
