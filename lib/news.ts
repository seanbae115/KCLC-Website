import type { Lang } from "./nav";

export type Block =
  | { type: "p"; text: Record<Lang, string> }
  | { type: "quote"; text: Record<Lang, string>; by: Record<Lang, string> }
  | { type: "h"; text: Record<Lang, string> };

export type NewsItem = {
  slug: string;
  /** Sort key. */
  date: string;
  dateLabel: Record<Lang, string>;
  kind: Record<Lang, string>;
  title: Record<Lang, string>;
  lead: Record<Lang, string>;
  body?: Block[];
  external?: { href: string; source: Record<Lang, string> };
};

const L = (ko: string, en: string) => ({ ko, en });

export const newsItems: NewsItem[] = [
  {
    slug: "koreadaily-2026-09-25",
    date: "2026-09-25",
    dateLabel: L("2026년 9월 25일", "September 25, 2026"),
    kind: L("언론 보도", "In the news"),
    title: L("시니어 생활정보 서비스 한국어 제공", "Senior life information services, offered in Korean"),
    lead: L(
      "중앙일보가 KSLC 발대식과 활동 내용을 보도했습니다.",
      "The Korea Daily reported on the KSLC launch and the services it offers.",
    ),
    external: { href: "https://www.koreadaily.com/article/20260925200005814", source: L("중앙일보 · 임상환 기자", "The Korea Daily · Sanghwan Lim") },
  },
  {
    slug: "launch-2026-09-24",
    date: "2026-09-24",
    dateLabel: L("2026년 9월 24일", "September 24, 2026"),
    kind: L("보도자료", "Press release"),
    title: L(
      "KSLC '한인 시니어 삶터', 부에나 파크에 문 열어",
      "KSLC opens in Buena Park",
    ),
    lead: L(
      "복지·건강·주거·교통 정보를 한국어로 안내하고, 필요한 기관 연결과 후속 확인까지 지원",
      "Guidance in Korean on benefits, health, housing and transportation — with referrals and follow-up",
    ),
    body: [
      {
        type: "p",
        text: L(
          "오렌지카운티, 캘리포니아 — \u201C시니어 주택을 알아보고 싶은데 어디에 물어봐야 할까요?\u201D \u201CMedi-Cal 안내문을 받았는데 무엇부터 해야 하나요?\u201D 한인 시니어와 가족이 이런 질문을 한국어로 편하게 꺼낼 수 있는 곳이 부에나 파크에 문을 열었다.",
          "ORANGE COUNTY, CALIFORNIA — \u201CI want to look into senior housing, but who do I ask?\u201D \u201CI received a Medi-Cal notice. What do I do first?\u201D A place where Korean seniors and their families can raise questions like these comfortably, in Korean, has opened in Buena Park.",
        ),
      },
      {
        type: "p",
        text: L(
          "Korean Senior Life Campus(KSLC·한인 시니어 삶터)는 9월 24일 발대식을 열고 오렌지카운티 한인 시니어를 위한 서비스 안내와 기관 연결 활동을 시작했다. 이날 11명의 스태프가 모였으며, 7명으로 이사회를 구성했다. 배상도 이사가 CEO(회장)로, 데이비드 김이 Secretary(총무)로, 박현숙 이사가 CFO(재무)로 그리고 피터 리가 사무총장으로 선임됐다.",
          "Korean Senior Life Campus (KSLC) held its launch ceremony on September 24 and began guiding Orange County's Korean seniors to services and connecting them with the agencies that provide them. Eleven staff members gathered that day, seven of whom form the board. Sang Do Bae was named CEO and Chair, David Kim Secretary, Hyunsook Park CFO, and Peter Lee Executive Director.",
        ),
      },
      {
        type: "p",
        text: L(
          "KSLC는 필요한 도움이 있어도 어디에 문의해야 할지 몰라 첫걸음을 떼기 어려운 어르신을 위한 '첫 문의처'를 지향한다. 영어 안내문을 이해하기 어렵거나 온라인 신청이 익숙하지 않은 경우에도 한국어로 상황을 설명하고 도움받을 방법을 함께 찾을 수 있다.",
          "KSLC aims to be the first place to ask for seniors who need help but cannot take the first step because they do not know where to turn. Even when an English notice is hard to read or an online application is unfamiliar, they can explain the situation in Korean and work out how to get help.",
        ),
      },
      {
        type: "p",
        text: L(
          "상담은 어르신의 이야기를 듣는 것에서 시작한다. 담당자가 무엇이 필요한지 확인하고 관련 정보를 설명한 뒤, 해당 서비스를 제공하는 공공기관이나 지역사회 기관에 연결한다. 신청 준비에 도움이 필요한 경우에는 그 과정도 지원한다. 이후 당사자의 동의를 받아 연결한 기관과 연락이 닿았는지, 추가로 도움이 필요한지 확인할 계획이다.",
          "A consultation begins by listening. Staff identify what is needed, explain the relevant information, and then connect the senior with the public or community agency that provides the service. Where help is needed to prepare an application, that is supported too. Afterwards, with the person's consent, KSLC checks whether the agency was reached and whether further help is needed.",
        ),
      },
      {
        type: "p",
        text: L(
          "안내 분야는 Medi-Cal·Medicare·CalFresh·SSI 등 공공혜택, 저렴한 임대주택과 시니어 주택, 식사·교통·돌봄·법률지원 등 일상생활에 필요한 자원이다. 자격 결정이나 전문적인 상담이 필요한 문제는 해당 기관과 전문가에게 연결한다. KSLC의 이 같은 상담과 서비스 연결은 전부 무료다.",
          "Guidance covers public benefits such as Medi-Cal, Medicare, CalFresh and SSI; affordable and senior housing; and everyday resources including meals, transportation, caregiving and legal aid. Matters requiring an eligibility decision or professional advice are referred to the appropriate agency or specialist. All of KSLC's consultation and referral work is free.",
        ),
      },
      {
        type: "p",
        text: L(
          "KSLC는 어르신이 기관 연락처를 받는 데서 그치지 않도록, 상황과 동의 여부에 따라 3일·14일·30일 후 다시 연락해 연결 결과를 확인하는 체계를 마련하고 있다.",
          "So that a senior is not simply handed a phone number, KSLC is building a follow-up system that checks back after 3, 14 and 30 days, depending on the situation and the person's consent.",
        ),
      },
      {
        type: "quote",
        text: L(
          "도움받을 수 있는 제도가 있는데도 그 사실을 모르거나, 언어와 복잡한 절차 때문에 신청을 포기하는 어르신이 있습니다. 어르신의 이야기를 한국어로 듣고 필요한 곳을 찾아 연결한 뒤, 실제로 도움을 받으셨는지 확인하는 곳이 되겠습니다.",
          "There are seniors who do not know a program exists that could help them, and others who give up on applying because of the language and the complexity. We will listen in Korean, find and make the connection, and then check that help actually arrived.",
        ),
        by: L("배상도 KSLC 회장", "Sang Do Bae, Chair of KSLC"),
      },
      {
        type: "p",
        text: L(
          "KSLC의 비전은 'A Community Before a Campus'다. 큰 시설이 생기기를 기다리기보다 지금 지역사회 안에서 어르신과 필요한 서비스를 먼저 연결하겠다는 뜻이다. KSLC는 앞으로 시·카운티 기관, 시니어센터, 의료·주거기관, 종교기관 및 비영리단체와 협력해 한인 시니어가 도움을 더 쉽게 찾고 이용할 수 있도록 활동할 계획이다.",
          "KSLC's vision is \u201CA Community Before a Campus\u201D — rather than waiting for a large facility, connect seniors with the services they need inside the community now. KSLC plans to work with city and county agencies, senior centers, medical and housing organizations, faith communities and nonprofits so that Korean seniors can find and use help more easily.",
        ),
      },
      { type: "h", text: L("KSLC 소개", "About KSLC") },
      {
        type: "p",
        text: L(
          "Korean Senior Life Campus(KSLC·한인 시니어 삶터)는 오렌지카운티 한인 시니어와 가족을 위해 한국어로 생활 정보를 안내하고, 필요한 기관에 연결하며, 그 결과를 후속 확인하는 커뮤니티 내비게이션 센터다. 슬로건은 \u201C한인 시니어가 제일 먼저 찾는 곳\u201D이다.",
          "Korean Senior Life Campus (KSLC) is a community navigation center that guides Orange County's Korean seniors and their families in Korean, connects them with the agencies they need, and follows up on the result. Its slogan: the first place Korean seniors turn to.",
        ),
      },
    ],
  },
];
