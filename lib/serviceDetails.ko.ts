import type { ServiceDetail } from "./serviceDetails";

// 본문은 2026-09-05 개발지시서의 원문을 그대로 사용합니다.
// 자격·승인·입주를 보장하는 표현으로 바꾸거나 임의로 축약하지 않습니다.
export const serviceDetailsKo: ServiceDetail[] = [
  {
    id: "benefits",
    number: "01",
    title: "보험·공공혜택",
    groups: [
      {
        heading: "Medi-Cal",
        faqs: [
          {
            q: "Medi-Cal은 누가 신청할 수 있나요?",
            blocks: [
              { type: "p", text: "Medi-Cal은 캘리포니아의 공공의료보장 프로그램입니다. 소득, 나이, 장애 여부, 가족 구성, 임신 여부 및 체류자격 등 여러 조건에 따라 자격이 결정됩니다." },
              { type: "p", text: "특히 65세 이상, 장애인 또는 장기요양시설 거주자 등 일부 대상자는 소득뿐 아니라 재산 기준이 적용될 수 있습니다. 2026년 1월 1일부터 일부 Medi-Cal 프로그램에 재산 기준이 다시 적용되었으므로 신청 당시의 최신 기준을 확인해야 합니다." },
              { type: "p", text: "KSLC는 기본 자격을 함께 살펴보고 BenefitsCal 온라인 신청, 필요서류 준비 및 Orange County Social Services Agency 연결을 도와드립니다. 최종 자격은 정부기관이 결정합니다." },
              { type: "link", label: "공식 링크: DHCS Medi-Cal 도움말", href: "https://www.dhcs.ca.gov/medi-cal/help/" },
            ],
          },
          {
            q: "Medi-Cal은 어떻게 신청하나요?",
            blocks: [
              { type: "p", text: "다음 방법으로 신청할 수 있습니다." },
              {
                type: "ul",
                items: [
                  "BenefitsCal을 통한 온라인 신청",
                  "Orange County Social Services Agency 전화 또는 방문 신청",
                  "우편이나 지정된 신청 경로 이용",
                  "Covered California를 통한 건강보험 신청 과정에서 Medi-Cal 자격 심사",
                ],
              },
              { type: "p", text: "일반적인 신청은 처리에 최대 45일, 장애를 근거로 하는 신청은 최대 90일이 걸릴 수 있습니다. 신청 후에는 우편과 BenefitsCal 계정을 정기적으로 확인해야 합니다." },
              { type: "p", text: "KSLC는 온라인 계정 만들기, 신청서 이해, 서류 목록 확인 및 신청 진행상태 확인을 지원할 수 있습니다." },
            ],
          },
          {
            q: "Medi-Cal 갱신서가 오면 어떻게 해야 하나요?",
            blocks: [
              { type: "p", text: "모든 가입자가 갱신서를 직접 작성하는 것은 아닙니다. 정부기관이 기존 정보로 자격을 확인할 수 있으면 자동 갱신될 수 있습니다. 추가 정보가 필요하면 갱신서가 들어 있는 우편물이 발송됩니다." },
              { type: "p", text: "갱신서를 받았다면 다음 사항을 확인하십시오." },
              { type: "ul", items: ["제출 마감일", "가족 구성과 주소", "현재 소득과 해당되는 경우 재산", "요구된 증빙서류", "서명 누락 여부"] },
              { type: "p", text: "마감일까지 제출하지 않으면 보장이 중단될 수 있습니다. KSLC는 갱신서 내용을 설명하고 서류 준비와 제출 방법을 안내할 수 있지만, 자격을 승인하거나 보장 지속을 보증할 수는 없습니다." },
              { type: "link", label: "공식 링크: Medi-Cal 자격 유지 안내", href: "https://www.dhcs.ca.gov/medi-cal/keep/" },
            ],
          },
          {
            q: "주소나 소득이 변경되면 반드시 알려야 하나요?",
            blocks: [
              { type: "p", text: "예. 이사, 소득, 결혼·별거 또는 가구원 수 등 중요한 변경사항은 일반적으로 10일 이내에 카운티에 알려야 합니다." },
              { type: "p", text: "주소를 갱신하지 않으면 갱신서나 추가서류 요청을 받지 못해 Medi-Cal이 중단될 수 있습니다. BenefitsCal에서 변경하거나 Orange County Social Services Agency에 연락할 수 있습니다." },
              { type: "p", text: "KSLC는 변경사항 신고 방법을 안내하고 관련 서류를 정리하도록 도와드립니다." },
              { type: "link", label: "공식 링크: 변경사항 신고 안내", href: "https://www.dhcs.ca.gov/medi-cal/keep/update-your-information/" },
            ],
          },
        ],
      },
      {
        heading: "Medicare",
        faqs: [
          {
            q: "Medicare와 Medi-Cal은 어떻게 다른가요?",
            blocks: [
              { type: "p", text: "Medicare는 주로 65세 이상 또는 일정한 장애·질환 요건을 충족한 사람을 위한 연방 건강보험입니다. Medi-Cal은 소득과 기타 자격기준에 따라 제공되는 캘리포니아의 Medicaid 프로그램입니다." },
              { type: "p", text: "자격이 된다면 Medicare와 Medi-Cal을 동시에 가질 수 있습니다. 이 경우 Medicare가 주된 의료보장 역할을 하고 Medi-Cal이 Medicare에서 부담하지 않는 일부 비용과 서비스를 지원할 수 있습니다." },
              { type: "p", text: "KSLC는 두 카드와 가입 안내문을 함께 검토하고 문의할 기관을 연결해 드릴 수 있지만, 보험상품을 판매하거나 특정 플랜 가입을 강요하지 않습니다." },
            ],
          },
          {
            q: "Original Medicare와 Medicare Advantage는 무엇이 다른가요?",
            blocks: [
              { type: "p", text: "Original Medicare는 연방정부가 운영하는 Part A와 Part B를 기본으로 하며, 처방약 보장을 위해 Part D를 별도로 선택할 수 있습니다." },
              { type: "p", text: "Medicare Advantage는 민간 보험회사가 Medicare의 승인을 받아 운영하는 Part C 플랜입니다. 일반적으로 Part A와 Part B, 그리고 흔히 Part D를 하나의 플랜으로 제공합니다. 플랜에 따라 지정된 의료진 네트워크, 의뢰서, 약품 목록 및 본인부담금이 다를 수 있습니다." },
              { type: "p", text: "플랜을 변경하기 전에는 반드시 다음을 확인해야 합니다." },
              {
                type: "ul",
                items: [
                  "현재 주치의와 병원이 가입 플랜을 받는지",
                  "복용하는 약이 보장되는지",
                  "전문의 진료에 의뢰서가 필요한지",
                  "월 보험료와 연간 예상 본인부담금",
                  "치과·안과·청력·교통 등 부가혜택의 조건",
                ],
              },
              {
                type: "link",
                label: "공식 링크: Original Medicare와 Medicare Advantage 비교",
                href: "https://www.medicare.gov/basics/get-started-with-medicare/get-more-coverage/your-coverage-options/compare-original-medicare-medicare-advantage",
              },
            ],
          },
          {
            q: "어떤 Medicare 플랜이 가장 좋은지 KSLC가 정해주나요?",
            blocks: [
              { type: "p", text: "KSLC는 특정 보험회사나 플랜이 모든 사람에게 가장 좋다고 판단하거나 가입을 대신 결정하지 않습니다. 건강상태, 주치의, 병원, 처방약 및 예상비용이 사람마다 다르기 때문입니다." },
              { type: "p", text: "KSLC는 현재 가입내용과 우편물을 정리하고, 비교할 항목을 설명하며, 무료·중립적인 Medicare 상담기관인 HICAP 또는 공식 Medicare 상담으로 연결해 드릴 수 있습니다." },
              { type: "link", label: "공식 플랜 비교", href: "https://www.medicare.gov/plan-compare/" },
              { type: "contact", label: "1-800-MEDICARE", phone: "1-800-633-4227", tel: "tel:+18006334227" },
            ],
          },
          {
            q: "병원비나 약값이 갑자기 많이 나오면 어떻게 해야 하나요?",
            blocks: [
              { type: "p", text: "먼저 청구서를 즉시 납부하기보다 다음을 확인하십시오." },
              {
                type: "ul",
                items: [
                  "의료기관이 정확한 보험정보를 가지고 있는지",
                  "Medicare와 Medi-Cal 모두 청구되었는지",
                  "해당 의료진과 약국이 플랜 네트워크에 포함되는지",
                  "사전승인이 필요했던 서비스인지",
                  "청구서인지 단순한 혜택설명서인지",
                ],
              },
              { type: "p", text: "보험사의 거부결정이나 청구 오류라면 이의신청 또는 재심을 요청할 수 있습니다. 모든 통지서와 봉투, 청구서, 보험카드를 보관하십시오." },
              { type: "p", text: "KSLC는 문서를 함께 분류하고 문의할 곳을 찾아드릴 수 있지만, 의료비를 대신 지불하거나 법률대리 또는 보험 이의신청 결과를 보장하지는 않습니다." },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "ihss",
    number: "02",
    title: "IHSS·가족돌봄",
    groups: [
      {
        faqs: [
          {
            q: "IHSS는 어떤 서비스인가요?",
            blocks: [
              { type: "p", text: "IHSS는 고령, 시각장애 또는 장애로 인해 혼자 일상생활을 수행하기 어렵지만 도움을 받으면 가정에서 안전하게 생활할 수 있는 사람을 위한 재가 지원 프로그램입니다." },
              { type: "p", text: "승인될 수 있는 서비스에는 개인위생, 식사 준비, 세탁, 집안일, 장보기, 병원 동행 및 일부 보호·돌봄 활동 등이 포함될 수 있습니다. 실제 서비스 종류와 승인시간은 카운티의 가정방문 평가를 통해 결정됩니다." },
              { type: "link", label: "공식 링크: Orange County IHSS", href: "https://www.ssa.ocgov.com/elderdisabled-home-services/home-supportive-services" },
            ],
          },
          {
            q: "IHSS는 어떻게 신청하나요?",
            blocks: [
              { type: "p", text: "Orange County IHSS에 전화하거나 신청서를 제출하여 시작할 수 있습니다." },
              { type: "contact", label: "Orange County IHSS", phone: "714-825-3000", tel: "tel:+17148253000", note: "월요일–금요일, 오전 8시–오후 5시" },
              { type: "p", text: "신청 후에는 일반적으로 건강상태를 확인하는 의료인증서 제출과 사회복지사의 가정방문 평가가 필요합니다. 전화 신청만으로 서비스가 자동 승인되는 것은 아닙니다." },
              { type: "p", text: "KSLC는 신청 절차, 준비할 서류, 가정방문 때 설명할 일상생활의 어려움을 정리하도록 도와드립니다." },
              { type: "link", label: "공식 링크: IHSS 신청", href: "https://ssa.ocgov.com/IHSS/Apply" },
            ],
          },
          {
            q: "가족도 IHSS 돌봄 제공자로 일하고 급여를 받을 수 있나요?",
            blocks: [
              { type: "p", text: "경우에 따라 성인 자녀, 친척, 친구 또는 다른 적격자가 IHSS 제공자로 등록하여 승인된 서비스를 제공하고 급여를 받을 수 있습니다." },
              { type: "p", text: "그러나 수혜자의 자격 승인, 서비스 시간 결정, 제공자 등록 및 신원확인 등의 절차를 모두 완료해야 합니다. 가족이라는 이유만으로 자동 승인되거나 원하는 시간이 모두 인정되는 것은 아닙니다." },
              { type: "p", text: "KSLC는 수혜자 신청과 제공자 등록 절차의 차이를 설명하고 Orange County IHSS Public Authority로 연결할 수 있습니다." },
            ],
          },
          {
            q: "승인된 IHSS 시간이 부족하거나 신청이 거절되면 어떻게 하나요?",
            blocks: [
              { type: "p", text: "결정통지서인 Notice of Action을 먼저 확인해야 합니다. 통지서에는 승인·감축·거절 이유와 이의신청 방법 및 기한이 표시됩니다." },
              { type: "p", text: "건강상태나 돌봄 필요가 정확히 반영되지 않았다고 생각되면 다음 자료가 도움이 될 수 있습니다." },
              {
                type: "ul",
                items: [
                  "최근 진단서와 의료기록",
                  "낙상·실종·복약 오류 등의 기록",
                  "혼자 수행하기 어려운 일상생활 목록",
                  "가족이 실제로 제공하는 돌봄 내용과 시간",
                  "의사 또는 치료사의 의견",
                ],
              },
              { type: "p", text: "KSLC는 통지서를 이해하고 관련 상담기관을 찾도록 도울 수 있지만, 법률대리나 승인시간 증가를 보장하지 않습니다." },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "housing",
    number: "03",
    title: "주거 Navigation",
    groups: [
      {
        faqs: [
          {
            q: "KSLC에 신청하면 저렴한 시니어 아파트를 바로 받을 수 있나요?",
            blocks: [
              { type: "p", text: "아닙니다. KSLC는 아파트를 소유·관리하거나 입주자를 직접 선정하지 않습니다. 각 주택관리회사와 Housing Authority가 소득, 나이, 장애, 가구 구성, 지역 우선권 및 대기명단 기준에 따라 입주자를 결정합니다." },
              { type: "p", text: "KSLC는 다음을 도울 수 있습니다." },
              {
                type: "ul",
                items: [
                  "현재 접수 중인 주택정보 확인",
                  "기본 입주자격 사전 점검",
                  "Interest List와 정식 Application의 차이 설명",
                  "신청서와 증빙서류 준비",
                  "신청 후 연락처 및 대기상태 관리",
                  "관리회사나 Housing Authority 문의 지원",
                ],
              },
              { type: "p", text: "어떠한 기관이나 개인도 KSLC 상담만으로 입주를 보장할 수 없습니다." },
            ],
          },
          {
            q: "Section 8과 저소득 아파트는 같은 것인가요?",
            blocks: [
              { type: "p", text: "같지 않습니다. Section 8 Housing Choice Voucher는 승인된 가구가 기준에 맞는 임대주택을 찾아 사용할 수 있는 임대료 보조제도입니다. Project-Based Voucher는 보조금이 특정 아파트의 지정된 세대에 연결된 방식입니다." },
              { type: "p", text: "Affordable 또는 저소득 아파트는 LIHTC 등 다른 지원제도를 이용할 수 있으며, 아파트별 소득·나이·임대료·대기명단 기준이 서로 다릅니다." },
              { type: "p", text: "Orange County Housing Authority의 일반 대기명단은 2026년 9월 5일 현재 닫혀 있으며, 재개될 경우 공식 웹사이트에 공고됩니다. 단, 특정 Project-Based Voucher 등 별도 기회는 따로 공고될 수 있으므로 하나의 명단만 기다리지 말고 여러 주택기회를 확인하는 것이 중요합니다." },
              { type: "link", label: "공식 링크: Orange County Housing Authority 대기명단 안내", href: "https://www.ochousing.org/2023-waiting-list-opening" },
            ],
          },
          {
            q: "퇴거 위기이거나 오늘 머물 곳이 없으면 KSLC가 주택을 제공하나요?",
            blocks: [
              { type: "p", text: "KSLC는 긴급대피소나 임시숙소를 직접 제공하지 않습니다. 퇴거통지서를 받았거나 노숙 위험이 있다면 서류를 버리지 말고 가능한 한 빨리 도움을 요청해야 합니다." },
              {
                type: "ul",
                items: [
                  "긴급 주거·쉼터·렌트 지원 정보: 211",
                  "가정폭력이나 안전 위협: 911 또는 전문 위기기관",
                  "퇴거 관련 법률상담: 지역 법률지원기관",
                  "노숙 상태이거나 임박한 경우: 211을 통한 Coordinated Entry System 연결",
                ],
              },
              { type: "p", text: "KSLC는 한국어로 상황을 정리하고 211, 주거기관 또는 법률지원기관으로 연결할 수 있지만, 당일 숙소나 임대료 지급을 보장할 수 없습니다." },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "transportation",
    number: "04",
    title: "교통·생활지원",
    groups: [
      {
        faqs: [
          {
            q: "나이가 많으면 누구나 OC ACCESS를 이용할 수 있나요?",
            blocks: [
              { type: "p", text: "아닙니다. OC ACCESS는 나이만으로 이용하는 시니어 셔틀이 아니라, 신체적·인지적 장애 때문에 일반 OC Bus를 이용하기 어려운 사람을 위한 ADA 보조교통 서비스입니다." },
              { type: "p", text: "신청서 제출 후 예약된 대면 기능평가를 받아야 하며, OCTA가 이용자격을 결정합니다. 한국어 신청서도 제공됩니다." },
              { type: "contact", label: "OC ACCESS 자격문의", phone: "714-560-5956", tel: "tel:+17145605956", note: "안내 후 extension 2" },
              { type: "p", text: "KSLC는 신청서 이해, 기능상 어려움 정리 및 평가 예약 준비를 도울 수 있지만 자격승인을 결정할 수 없습니다." },
              { type: "link", label: "공식 링크: OC ACCESS 이용자격", href: "https://www.octa.net/getting-around/bus/oc-access/eligibility" },
            ],
          },
          {
            q: "병원 진료를 위한 교통편도 지원받을 수 있나요?",
            blocks: [
              { type: "p", text: "Medi-Cal 또는 CalOptima Health 가입자는 자격과 의료적 필요에 따라 비응급 의료교통 또는 비의료 교통서비스를 이용할 수 있습니다. 이는 응급차 서비스가 아니며 보통 사전예약과 자격확인이 필요합니다." },
              { type: "p", text: "CalOptima Health 교통은 일반적으로 진료일 최소 2영업일 전에 요청하도록 안내합니다." },
              { type: "contact", label: "교통 연락처 · Medi-Cal", phone: "1-833-648-7528", tel: "tel:+18336487528" },
              { type: "contact", label: "교통 연락처 · OneCare", phone: "1-866-612-1256", tel: "tel:+18666121256" },
              { type: "p", text: "생명이나 신체가 위험한 응급상황에서는 교통서비스나 KSLC에 연락하지 말고 911에 전화하십시오." },
              { type: "link", label: "공식 링크: CalOptima Health Medi-Cal", href: "https://www.caloptima.org/en/health-insurance-plans/medi-cal" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "community",
    number: "05",
    title: "지역 자원과의 연계 활동",
    groups: [
      {
        faqs: [
          {
            q: "KSLC는 어떤 지역 자원과 연계하나요?",
            blocks: [
              {
                type: "ul",
                items: [
                  "정신 건강과 가정 상담 기관과의 연결",
                  "교회·비영리기관과의 연결",
                  "카운티·시청 서비스 연결",
                  "기타 관련 전문기관 의뢰",
                ],
              },
              { type: "p", text: "KSLC는 이용자의 필요를 확인하고 적절한 기관을 안내하거나 연결하며, 가능한 경우 후속 진행상황을 확인합니다. 각 기관의 자격심사, 서비스 제공 여부 및 처리 결과는 해당 기관이 결정합니다." },
            ],
          },
        ],
      },
    ],
  },
];
