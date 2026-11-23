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
    slug: "laguna-beach-retreat-thanks",
    date: "2026-11-23",
    dateLabel: L("2026년 11월 23일 게시", "Posted November 23, 2026"),
    title: L("라구나비치 MT를 함께 준비해 주셔서 감사합니다", "Thank You for Organizing the Laguna Beach Retreat"),
    lead: L(
      "라구나비치 MT를 마련해 주신 KSLC 임원진과 감사님들께 감사드립니다. 함께한 추억을 단체사진과 함께 전합니다.",
      "Thank you to the KSLC officers and auditors who organized the Laguna Beach retreat. We’re sharing a group photo from our time together.",
    ),
    photo: {
      src: "/events/laguna-beach-retreat-thanks.webp",
      width: 1122,
      height: 1402,
      alt: L("라구나비치 구조대 타워 앞 단체사진과 KSLC 임원진 및 감사님들께 전하는 감사 메시지", "A group photo in front of the Laguna Beach lifeguard tower with a thank-you message to KSLC officers and auditors"),
    },
  },
  {
    slug: "medi-cal-seminar-2026-11-19",
    date: "2026-11-19",
    dateLabel: L("2026년 11월 19일(목) · 오전 11시", "Thursday, November 19, 2026 · 11:00 AM"),
    title: L("“메디칼 갱신 편지, 언제까지 무엇을 내야 하나요?” — 메디칼 한국어 설명회", "Medi-Cal Renewal Letters: What to Submit and When — Korean-Language Seminar"),
    lead: L(
      "KSLC가 CalOptima Health의 후원으로 메디칼 한국어 설명회를 개최합니다. 2027년 변경 사항과 가입·갱신 지원, 갱신 안내문 읽는 법을 안내합니다. 장소: 부에나팍 시 시니어 센터, 8150 Knott Ave., Buena Park, CA 90620. 어르신과 가족 모두 참석 가능하며, 선착순 30명 전화 예약을 받습니다. 예약·문의: (657) 239-0226.",
      "With support from CalOptima Health, KSLC will hold a Korean-language Medi-Cal seminar covering 2027 changes, enrollment and renewal assistance, and how to read renewal notices. Venue: Buena Park Senior Activity Center, 8150 Knott Ave., Buena Park, CA 90620. Seniors and family members are welcome. Telephone reservations are accepted for the first 30 participants. Reservations and inquiries: (657) 239-0226.",
    ),
    body: [
      L("보도자료 | 2026년 11월 14일 · 즉시 배포용", "Press release | November 14, 2026 · For immediate release"),
      L("한인 시니어 삶터, 11월 19일 부에나팍서 한국어 설명회 — CalOptima Health 관계자 참석…2027년 변경 사항과 가입·갱신 지원 안내", "KSLC to hold a Korean-language seminar in Buena Park on November 19 — CalOptima Health representatives to discuss 2027 changes and enrollment and renewal assistance."),
      L("캘리포니아주 부에나팍, 2026년 11월 14일 — 카운티에서 메디칼(Medi-Cal) 갱신 편지가 왔다. 영어 안내문에서 제출 기한은 어디에 적혀 있을까. 어떤 서류를 내야 하고, 집이나 통장 잔액은 재산 심사에서 어떻게 다뤄질까. 한인 시니어 삶터(Korean Senior Life Campus, KSLC)는 한인 어르신과 가족이 이런 질문에 답을 얻을 수 있도록 11월 19일 목요일 오전 11시, 부에나팍 시 시니어 센터에서 메디칼 한국어 설명회를 연다.", "Buena Park, California, November 14, 2026 — A Medi-Cal renewal letter arrives from the county. Where is the submission deadline in the English-language notice? Which documents are required, and how are a home and bank balances treated in an asset review? Korean Senior Life Campus (KSLC) will hold a Korean-language Medi-Cal seminar at 11 a.m. on Thursday, November 19, at the Buena Park Senior Activity Center to help Korean seniors and their families find answers."),
      L("이번 설명회는 CalOptima Health의 후원으로 마련됐다. CalOptima Health 관계자가 참석해 메디칼 변경 사항과 오렌지카운티 주민을 위한 가입·갱신 지원 계획을 소개한다. KSLC는 예시 갱신 안내문을 함께 읽으며 제출 기한과 요청 서류를 찾는 법, 갱신에 도움이 필요할 때 어디에 문의할 수 있는지를 한국어로 설명한다.", "The seminar is supported by CalOptima Health. CalOptima Health representatives will introduce Medi-Cal changes and plans for enrollment and renewal assistance for Orange County residents. KSLC will walk through a sample renewal notice in Korean, explaining how to locate deadlines and requested documents and where to ask for renewal assistance."),
      L("연방정부의 새 규정에 따라 2027년부터 일부 성인 가입자는 자격을 더 자주 갱신하거나 근로·지역사회 활동 등 새 요건을 충족해야 한다. 설명회에서는 이 규정이 누구에게 적용되는지 살펴보고, 65세 이상 어르신과 가족의 관심이 큰 캘리포니아주 메디칼 재산 심사 기준도 별도로 다룬다. 실제 거주하는 집과 은행 예금이 심사에서 어떻게 다뤄지는지 등 생활 속 질문을 중심으로 설명할 예정이다.", "The press release explains that, under new federal rules beginning in 2027, some adult members will need to renew eligibility more frequently or meet new requirements such as work or community activities. The seminar will discuss whom these rules apply to and separately address California Medi-Cal asset-review standards of particular interest to people age 65 and older and their families. Practical questions will include how a primary residence and bank deposits are treated in the review."),
      L("갱신 편지를 아직 받지 않은 분도 참석할 수 있다. 부모님이나 배우자의 메디칼 우편물과 서류를 챙기는 가족도 함께 참석할 수 있다. 참석은 선착순 30명으로, 전화 예약을 받는다.", "People who have not yet received a renewal letter may attend. Family members who help manage a parent’s or spouse’s Medi-Cal mail and documents are also welcome. Attendance is limited to the first 30 participants, with reservations accepted by telephone."),
      L("일시: 2026년 11월 19일(목) 오전 11시", "Date and time: Thursday, November 19, 2026, at 11 a.m."),
      L("장소: 부에나팍 시 시니어 센터(Buena Park Senior Activity Center), 8150 Knott Ave., Buena Park, CA 90620", "Location: Buena Park Senior Activity Center, 8150 Knott Ave., Buena Park, CA 90620"),
      L("주최: 한인 시니어 삶터(Korean Senior Life Campus, KSLC) · 후원: CalOptima Health", "Organizer: Korean Senior Life Campus (KSLC) · Supported by: CalOptima Health"),
      L("참석 예약 및 취재 문의: 한인 시니어 삶터(KSLC) (657) 239-0226", "Reservations and media inquiries: Korean Senior Life Campus (KSLC), (657) 239-0226"),
    ],
    photo: {
      src: "/events/medical-seminar-2026-11-19.webp",
      width: 1005,
      height: 1300,
      alt: L("11월 19일 메디칼 한국어 설명회 보도자료 원문: 오전 11시 부에나팍 시 시니어 센터, 선착순 30명 전화 예약 (657) 239-0226", "Original Korean press release for the November 19 Medi-Cal seminar: 11 a.m. at Buena Park Senior Activity Center; telephone reservations for the first 30 participants at (657) 239-0226"),
    },
  },
  {
    slug: "clippers-community-tickets-2026-11-04",
    date: "2026-11-04",
    dateLabel: L("2026년 11월 4일 · 오후 7:30", "November 4, 2026 · 7:30 PM"),
    title: L("함께 즐기는 NBA의 밤 — LA 클리퍼스 vs 마이애미 히트", "An NBA Night Together — LA Clippers vs Miami Heat"),
    lead: L(
      "시니어를 위한 무료 관람 초대입니다. 10월 28일(수)부터 KSLC 부에나파크 사무실(7342 Orangethorpe Ave, #B-109)에서 선착순 100장을 배포하며, 1인당 최대 2장까지 받을 수 있습니다. 경기는 잉글우드 Intuit Dome(3930 W. Century Blvd)에서 열립니다. 문의: (657) 239-0226.",
      "Free game tickets for seniors: 100 tickets will be distributed first come, first served beginning Wednesday, October 28 at the KSLC Buena Park office (7342 Orangethorpe Ave, #B-109), with a limit of two per person. The game takes place at Intuit Dome in Inglewood (3930 W. Century Blvd). Inquiries: (657) 239-0226.",
    ),
    photo: {
      src: "/events/clippers-community-tickets-2026-11-04.png",
      width: 1024,
      height: 1536,
      alt: L("KSLC NBA 커뮤니티 초대 포스터: LA 클리퍼스 vs 마이애미 히트, 2026년 11월 4일 오후 7:30, 선착순", "KSLC NBA community invitation poster: LA Clippers vs Miami Heat, November 4, 2026 at 7:30 PM, first-come, first-served"),
    },
  },
  {
    slug: "ducks-flames-community-tickets-nov-15",
    date: "2026-11-15",
    dateLabel: L("11월 15일 · 오후 5시", "November 15 · 5:00 PM"),
    title: L("아이스하키 경기 관람 티켓 무료 배포 — 애너하임 덕스 vs 캘거리 플레임스", "Free Ice Hockey Tickets — Anaheim Ducks vs Calgary Flames"),
    lead: L(
      "Honda Center, Anaheim에서 함께 즐기는 NHL 아이스하키! 티켓 수령 방법과 자세한 사항은 KSLC (657) 239-0226으로 문의해 주세요.",
      "Enjoy NHL ice hockey together at Honda Center, Anaheim. Contact KSLC at (657) 239-0226 for ticket pickup and details.",
    ),
    photo: {
      src: "/events/ducks-flames-community-tickets-nov-15.png",
      width: 1024,
      height: 1536,
      alt: L("KSLC 아이스하키 무료 관람 티켓 포스터: 애너하임 덕스 vs 캘거리 플레임스, 11월 15일 오후 5시, Honda Center, Anaheim. 문의 657-239-0226", "KSLC free ice hockey ticket poster: Anaheim Ducks vs Calgary Flames, November 15 at 5 PM, Honda Center, Anaheim. Inquiries: 657-239-0226"),
    },
  },
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
    slug: "hankook-medi-cal-2026-11-23",
    date: "2026-11-23",
    dateLabel: L("2026년 11월 23일 보도 · 11월 19일 행사", "Published November 23, 2026 · Event: November 19"),
    kind: L("언론 보도", "In the news"),
    title: L("메디캘 갱신 편지 한국어 설명회 현장", "A Look at the Korean-Language Seminar on Medi-Cal Renewal Letters"),
    lead: L(
      "한국일보는 KSLC가 11월 19일 부에나파크 시니어 센터에서 개최한 메디캘 갱신 한국어 설명회 현장을 사진과 함께 보도했습니다.",
      "The Korea Times published a photo from KSLC’s November 19 Korean-language seminar on Medi-Cal renewal at the Buena Park Senior Center.",
    ),
    source: L("한국일보 A13 · 2026년 11월 23일", "The Korea Times A13 · November 23, 2026"),
    clipping: {
      src: "/press/hankook-medi-cal-2026-11-23.jpg",
      alt: L("11월 23일자 한국일보 A13 지면에 실린 메디캘 설명회 기사와 발표를 듣는 참석자들", "The November 23 Korea Times A13 clipping showing attendees listening to the Medi-Cal seminar presentation"),
    },
  },
  {
    slug: "hankook-medi-cal-2026-11-18",
    date: "2026-11-18",
    dateLabel: L("2026년 11월 18일", "November 18, 2026"),
    kind: L("언론 보도", "In the news"),
    title: L("메디캘 갱신 편지 한국어 설명회", "Korean-Language Seminar on Medi-Cal Renewal Letters"),
    lead: L(
      "한국일보는 KSLC가 11월 19일 부에나파크에서 여는 한국어 설명회를 소개했습니다. 칼옵티마 헬스가 후원하는 이 설명회에서는 갱신 안내문의 제출 기한과 요청 서류를 확인하는 방법을 다룹니다.",
      "The Korea Times covered KSLC’s November 19 Korean-language seminar in Buena Park. Supported by CalOptima Health, the seminar explains how to find deadlines and requested documents in Medi-Cal renewal letters.",
    ),
    source: L("한국일보 A11 · 2026년 11월 18일", "The Korea Times A11 · November 18, 2026"),
    clipping: {
      src: "/press/hankook-medi-cal-2026-11-18.jpg",
      alt: L("한국일보 A11 지면에 실린 메디캘 갱신 편지 한국어 설명회 기사", "The Korea Times A11 print clipping on KSLC’s Korean-language seminar about Medi-Cal renewal letters"),
    },
  },
  {
    slug: "joongang-medi-cal-2026-11-18",
    date: "2026-11-18",
    dateLabel: L("2026년 11월 18일", "November 18, 2026"),
    kind: L("언론 보도", "In the news"),
    title: L("“메디캘 갱신 궁금증 풀어드려요”", "“Get Answers to Your Medi-Cal Renewal Questions”"),
    lead: L(
      "중앙일보는 KSLC의 부에나파크 설명회를 소개하며 칼옵티마 헬스 관계자가 2027년 변경 사항과 가입·갱신 지원 정보를 안내한다고 보도했습니다.",
      "The Korea Daily reported that a CalOptima Health representative would discuss 2027 changes and enrollment and renewal support at the KSLC seminar in Buena Park.",
    ),
    source: L("중앙일보 · 2026년 11월 18일", "The Korea Daily · November 18, 2026"),
    clipping: {
      src: "/press/joongang-medi-cal-2026-11-18.jpg",
      alt: L("중앙일보 지면에 실린 KSLC 메디캘 갱신 한국어 설명회 기사", "The Korea Daily print clipping on KSLC’s Korean-language Medi-Cal renewal seminar"),
    },
  },
  {
    slug: "hankook-board-session-2026-10-19",
    date: "2026-10-19",
    dateLabel: L("2026년 10월 19일 보도 · 10월 10일 행사", "Published October 19, 2026 · Event: October 10"),
    kind: L("언론 보도", "In the news"),
    title: L("이사 및 전문위원 모집 설명회 — 지역사회 인사 50여 명 참석", "Board and Advisor Recruitment Session Draws About 50 Community Members"),
    lead: L(
      "KSLC는 10월 10일 부에나파크 사무실에서 이사·전문위원 후보 모집 설명회를 열고 설립 취지, 상담 운영, 역할과 참여 절차를 소개했습니다. 지역사회 인사 50여 명이 참석했으며, 조이스 안 부에나파크 시의원은 시니어 존중과 가정 회복, 지역사회 성장을 위한 협력을 당부했습니다. KSLC는 한국어로 주거·공공혜택·건강·의료·교통·돌봄 정보를 안내하고 필요한 전문기관에 연결합니다. 문의: (657) 239-0226.",
      "KSLC held a recruitment information session for prospective board members and advisors at its Buena Park office on October 10. About 50 community members learned about its mission, consultation services, roles, and participation process. Buena Park City Council Member Joyce Ahn encouraged cooperation to support seniors, families, and community growth. KSLC provides Korean-language guidance on housing, public benefits, health care, transportation, and caregiving, connecting seniors with appropriate agencies. Inquiries: (657) 239-0226.",
    ),
    source: L("미주 한국일보 · 2026년 10월 19일", "The Korea Times · October 19, 2026"),
    clipping: {
      src: "/press/hankook-board-session-2026-10.jpg",
      alt: L("한국일보 ‘이사 및 전문위원 모집 설명회’ 기사 지면과 설명회 참석자 사진", "Korea Times clipping about the board and advisor recruitment session, including a photograph of attendees"),
    },
    href: "https://www1.koreatimes.com/article/20261018/1634366",
  },
  {
    slug: "joongang-clippers-2026-10-16",
    date: "2026-10-16",
    dateLabel: L("2026년 10월 16일 보도 · 11월 4일 경기", "Published October 16, 2026 · Game: November 4"),
    kind: L("언론 보도", "In the news"),
    title: L("클리퍼스 농구 티켓 무료 배포 — 10월 28일부터 선착순 100장", "Free Clippers Tickets — 100 Available Beginning October 28"),
    lead: L(
      "KSLC가 시니어를 위해 LA 클리퍼스와 마이애미 히트 경기 티켓을 무료로 배포합니다. 경기는 11월 4일(수) 오후 7시 30분 잉글우드 Intuit Dome(3930 W. Century Blvd)에서 열립니다. 티켓은 10월 28일(수)부터 KSLC 부에나파크 사무실(7342 Orangethorpe Ave, #B-109)에서 선착순 100장, 1인당 최대 2장까지 받을 수 있습니다. 클리퍼스의 OC 시니어 커뮤니티 아웃리치 지원으로 마련됐습니다. 문의: (657) 239-0226.",
      "KSLC is distributing free LA Clippers vs Miami Heat tickets to seniors. The game is Wednesday, November 4 at 7:30 PM at Intuit Dome in Inglewood (3930 W. Century Blvd). Beginning Wednesday, October 28, 100 tickets will be available first come, first served at the KSLC Buena Park office (7342 Orangethorpe Ave, #B-109), with a limit of two per person. The Clippers provided the tickets through their Orange County senior community outreach. Inquiries: (657) 239-0226.",
    ),
    source: L("미주중앙일보 · 2026년 10월 16일", "The Korea Daily · October 16, 2026"),
    clipping: {
      src: "/press/joongang-clippers-2026-10.jpg",
      alt: L("중앙일보 ‘클리퍼스 농구 티켓 무료 배포’ 기사 지면. 11월 4일 경기, 10월 28일부터 선착순 100장, 1인 최대 2장 안내", "Korea Daily clipping announcing free Clippers tickets: November 4 game, distribution beginning October 28, 100 tickets, maximum two per person"),
    },
    href: "https://www.koreadaily.com/article/20261016200002460",
  },
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
