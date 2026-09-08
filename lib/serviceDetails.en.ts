import type { ServiceDetail } from "./serviceDetails";

// English rendering of the 2026-09-05 development spec content.
// Nothing here promises eligibility, approval, or housing placement.
export const serviceDetailsEn: ServiceDetail[] = [
  {
    id: "benefits",
    number: "01",
    title: "Insurance & Public Benefits",
    groups: [
      {
        heading: "Medi-Cal",
        faqs: [
          {
            q: "Who can apply for Medi-Cal?",
            blocks: [
              { type: "p", text: "Medi-Cal is California's public health coverage program. Eligibility is determined by a number of factors including income, age, disability status, household composition, pregnancy, and immigration status." },
              { type: "p", text: "For certain groups — people 65 and older, people with disabilities, and residents of long-term care facilities — an asset limit may apply in addition to income. As of January 1, 2026, asset limits were reinstated for some Medi-Cal programs, so you should confirm the current rules at the time you apply." },
              { type: "p", text: "KSLC can review basic eligibility with you and help with the BenefitsCal online application, preparing required documents, and connecting with the Orange County Social Services Agency. Final eligibility is determined by the government agency." },
              { type: "link", label: "Official link: DHCS Medi-Cal help", href: "https://www.dhcs.ca.gov/medi-cal/help/" },
            ],
          },
          {
            q: "How do I apply for Medi-Cal?",
            blocks: [
              { type: "p", text: "You can apply in the following ways." },
              {
                type: "ul",
                items: [
                  "Online through BenefitsCal",
                  "By phone or in person at the Orange County Social Services Agency",
                  "By mail or another designated application route",
                  "Through a Medi-Cal eligibility review during a Covered California health insurance application",
                ],
              },
              { type: "p", text: "A standard application can take up to 45 days to process; an application based on disability can take up to 90 days. After applying, check your mail and your BenefitsCal account regularly." },
              { type: "p", text: "KSLC can help you create an online account, understand the application, confirm the list of documents, and check the status of your application." },
            ],
          },
          {
            q: "What should I do when a Medi-Cal renewal form arrives?",
            blocks: [
              { type: "p", text: "Not every enrollee has to fill out a renewal form. If the agency can confirm eligibility from information it already has, renewal may happen automatically. If additional information is needed, a renewal packet is mailed to you." },
              { type: "p", text: "If you receive a renewal form, check the following." },
              { type: "ul", items: ["The submission deadline", "Household composition and address", "Current income, and assets where applicable", "Required supporting documents", "Whether a signature is missing"] },
              { type: "p", text: "If you do not submit by the deadline, your coverage may be discontinued. KSLC can explain the renewal form and guide you through preparing and submitting documents, but cannot approve eligibility or guarantee that coverage will continue." },
              { type: "link", label: "Official link: Keeping your Medi-Cal", href: "https://www.dhcs.ca.gov/medi-cal/keep/" },
            ],
          },
          {
            q: "Do I have to report a change of address or income?",
            blocks: [
              { type: "p", text: "Yes. Significant changes such as moving, income, marriage or separation, or the number of people in your household generally must be reported to the county within 10 days." },
              { type: "p", text: "If you do not update your address, you may not receive renewal forms or requests for additional documents, and your Medi-Cal may be discontinued. You can make changes in BenefitsCal or contact the Orange County Social Services Agency." },
              { type: "p", text: "KSLC can explain how to report changes and help you organize the related paperwork." },
              { type: "link", label: "Official link: Update your information", href: "https://www.dhcs.ca.gov/medi-cal/keep/update-your-information/" },
            ],
          },
        ],
      },
      {
        heading: "Medicare",
        faqs: [
          {
            q: "How are Medicare and Medi-Cal different?",
            blocks: [
              { type: "p", text: "Medicare is federal health insurance primarily for people 65 and older, or for people who meet certain disability or medical conditions. Medi-Cal is California's Medicaid program, provided based on income and other eligibility criteria." },
              { type: "p", text: "If you qualify, you can have both Medicare and Medi-Cal at the same time. In that case Medicare serves as your primary coverage, and Medi-Cal may help with some costs and services Medicare does not cover." },
              { type: "p", text: "KSLC can review both cards and your enrollment notices with you and connect you to the right agency to ask questions, but we do not sell insurance products or push you toward a particular plan." },
            ],
          },
          {
            q: "What is the difference between Original Medicare and Medicare Advantage?",
            blocks: [
              { type: "p", text: "Original Medicare is built on Part A and Part B, run by the federal government, and you can separately choose Part D for prescription drug coverage." },
              { type: "p", text: "Medicare Advantage refers to Part C plans operated by private insurance companies with Medicare's approval. They generally combine Part A and Part B — and often Part D — into a single plan. Depending on the plan, the provider network, referral requirements, drug formulary, and out-of-pocket costs can differ." },
              { type: "p", text: "Before changing plans, always confirm the following." },
              {
                type: "ul",
                items: [
                  "Whether your current doctor and hospital accept the plan",
                  "Whether the medications you take are covered",
                  "Whether a referral is required to see a specialist",
                  "The monthly premium and expected annual out-of-pocket costs",
                  "The conditions attached to extra benefits such as dental, vision, hearing, and transportation",
                ],
              },
              {
                type: "link",
                label: "Official link: Compare Original Medicare and Medicare Advantage",
                href: "https://www.medicare.gov/basics/get-started-with-medicare/get-more-coverage/your-coverage-options/compare-original-medicare-medicare-advantage",
              },
            ],
          },
          {
            q: "Does KSLC decide which Medicare plan is best for me?",
            blocks: [
              { type: "p", text: "KSLC does not judge that a particular insurance company or plan is best for everyone, and does not make the enrollment decision on your behalf. Health conditions, doctors, hospitals, prescriptions, and expected costs differ from person to person." },
              { type: "p", text: "KSLC can help you organize your current coverage and mail, explain what to compare, and connect you to HICAP — the free, neutral Medicare counseling program — or to official Medicare support." },
              { type: "link", label: "Official plan comparison", href: "https://www.medicare.gov/plan-compare/" },
              { type: "contact", label: "1-800-MEDICARE", phone: "1-800-633-4227", tel: "tel:+18006334227" },
            ],
          },
          {
            q: "What should I do if a hospital or pharmacy bill is suddenly very high?",
            blocks: [
              { type: "p", text: "Rather than paying the bill immediately, first check the following." },
              {
                type: "ul",
                items: [
                  "Whether the provider has your correct insurance information",
                  "Whether both Medicare and Medi-Cal were billed",
                  "Whether that provider and pharmacy are in your plan's network",
                  "Whether the service required prior authorization",
                  "Whether this is an actual bill or simply an explanation of benefits",
                ],
              },
              { type: "p", text: "If it is a denial by the insurer or a billing error, you can request an appeal or reconsideration. Keep every notice, envelope, bill, and insurance card." },
              { type: "p", text: "KSLC can help sort through the documents with you and find where to ask, but we do not pay medical bills on your behalf, provide legal representation, or guarantee the outcome of an insurance appeal." },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "ihss",
    number: "02",
    title: "IHSS & Family Caregiving",
    groups: [
      {
        faqs: [
          {
            q: "What kind of service is IHSS?",
            blocks: [
              { type: "p", text: "IHSS is an in-home support program for people who have difficulty performing daily activities alone because of age, blindness, or disability, but who can live safely at home with assistance." },
              { type: "p", text: "Services that may be approved can include personal hygiene, meal preparation, laundry, housework, shopping, accompaniment to medical appointments, and certain protective supervision activities. The actual services and approved hours are determined through a county in-home assessment." },
              { type: "link", label: "Official link: Orange County IHSS", href: "https://www.ssa.ocgov.com/elderdisabled-home-services/home-supportive-services" },
            ],
          },
          {
            q: "How do I apply for IHSS?",
            blocks: [
              { type: "p", text: "You can start by calling Orange County IHSS or submitting an application." },
              { type: "contact", label: "Orange County IHSS", phone: "714-825-3000", tel: "tel:+17148253000", note: "Monday–Friday, 8:00 AM – 5:00 PM" },
              { type: "p", text: "After applying, you will generally need to submit a health care certification confirming your condition, and a social worker will conduct an in-home assessment. Calling alone does not automatically approve services." },
              { type: "p", text: "KSLC can help you organize the application process, the documents to prepare, and the daily-living difficulties to describe during the home visit." },
              { type: "link", label: "Official link: Apply for IHSS", href: "https://ssa.ocgov.com/IHSS/Apply" },
            ],
          },
          {
            q: "Can a family member work as an IHSS provider and be paid?",
            blocks: [
              { type: "p", text: "In some cases an adult child, relative, friend, or other qualified person can enroll as an IHSS provider, deliver approved services, and be paid." },
              { type: "p", text: "However, all steps must be completed: the recipient's eligibility approval, the determination of service hours, provider enrollment, and background verification. Being a family member does not by itself mean automatic approval or that all requested hours will be granted." },
              { type: "p", text: "KSLC can explain the difference between the recipient application and the provider enrollment process, and connect you to the Orange County IHSS Public Authority." },
            ],
          },
          {
            q: "What if my approved IHSS hours are not enough, or my application is denied?",
            blocks: [
              { type: "p", text: "Start by reviewing the Notice of Action, the decision notice. It states the reason for approval, reduction, or denial, along with how and by when to appeal." },
              { type: "p", text: "If you believe your health condition or care needs were not accurately reflected, the following may help." },
              {
                type: "ul",
                items: [
                  "Recent medical certifications and records",
                  "Records of falls, wandering, medication errors, and similar incidents",
                  "A list of daily activities that are difficult to do alone",
                  "The care family members actually provide, and the hours involved",
                  "An opinion from a physician or therapist",
                ],
              },
              { type: "p", text: "KSLC can help you understand the notice and find the relevant advocacy organizations, but we do not provide legal representation or guarantee an increase in approved hours." },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "housing",
    number: "03",
    title: "Housing Navigation",
    groups: [
      {
        faqs: [
          {
            q: "If I apply through KSLC, can I get an affordable senior apartment right away?",
            blocks: [
              { type: "p", text: "No. KSLC does not own or manage apartments and does not select residents. Each property management company and Housing Authority decides who is admitted based on income, age, disability, household composition, local preference, and waiting list rules." },
              { type: "p", text: "KSLC can help with the following." },
              {
                type: "ul",
                items: [
                  "Checking which properties are currently accepting applications",
                  "A preliminary review of basic eligibility",
                  "Explaining the difference between an interest list and a formal application",
                  "Preparing the application and supporting documents",
                  "Managing contact information and waitlist status after applying",
                  "Support in contacting the management company or Housing Authority",
                ],
              },
              { type: "p", text: "No organization or individual can guarantee housing placement through a KSLC consultation alone." },
            ],
          },
          {
            q: "Are Section 8 and low-income apartments the same thing?",
            blocks: [
              { type: "p", text: "They are not. The Section 8 Housing Choice Voucher is a rental assistance program that lets an approved household find and use a qualifying rental unit. A Project-Based Voucher ties the subsidy to designated units in a specific property." },
              { type: "p", text: "Affordable or low-income apartments may use other programs such as LIHTC, and each property has its own income, age, rent, and waiting list criteria." },
              { type: "p", text: "The Orange County Housing Authority's general waiting list is closed as of September 5, 2026, and any reopening will be announced on its official website. However, separate opportunities such as specific Project-Based Vouchers may be announced independently, so it is important to check multiple housing opportunities rather than waiting on a single list." },
              { type: "link", label: "Official link: Orange County Housing Authority waiting list", href: "https://www.ochousing.org/2023-waiting-list-opening" },
            ],
          },
          {
            q: "If I am facing eviction or have nowhere to stay tonight, does KSLC provide housing?",
            blocks: [
              { type: "p", text: "KSLC does not directly provide emergency shelter or temporary lodging. If you have received an eviction notice or are at risk of homelessness, do not throw away the paperwork, and ask for help as soon as possible." },
              {
                type: "ul",
                items: [
                  "Emergency housing, shelter, and rent assistance information: 211",
                  "Domestic violence or a threat to your safety: 911 or a specialized crisis agency",
                  "Legal advice about eviction: local legal aid organizations",
                  "Currently or imminently homeless: connection to the Coordinated Entry System through 211",
                ],
              },
              { type: "p", text: "KSLC can help you organize the situation in Korean and connect you to 211, housing agencies, or legal aid organizations, but we cannot guarantee same-day lodging or rent payment." },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "transportation",
    number: "04",
    title: "Transportation & Daily Living",
    groups: [
      {
        faqs: [
          {
            q: "Can anyone use OC ACCESS just because they are older?",
            blocks: [
              { type: "p", text: "No. OC ACCESS is not a senior shuttle based on age. It is an ADA paratransit service for people who have difficulty using the regular OC Bus because of a physical or cognitive disability." },
              { type: "p", text: "After submitting an application you must attend a scheduled in-person functional assessment, and OCTA determines eligibility. A Korean-language application is available." },
              { type: "contact", label: "OC ACCESS eligibility", phone: "714-560-5956", tel: "tel:+17145605956", note: "extension 2 after the recorded menu" },
              { type: "p", text: "KSLC can help you understand the application, organize your functional difficulties, and prepare for the assessment appointment, but we cannot determine eligibility." },
              { type: "link", label: "Official link: OC ACCESS eligibility", href: "https://www.octa.net/getting-around/bus/oc-access/eligibility" },
            ],
          },
          {
            q: "Can I get transportation to medical appointments?",
            blocks: [
              { type: "p", text: "Medi-Cal or CalOptima Health members may be able to use non-emergency medical transportation or non-medical transportation, depending on eligibility and medical need. This is not an ambulance service, and it generally requires advance booking and eligibility verification." },
              { type: "p", text: "CalOptima Health transportation generally asks that you request a ride at least 2 business days before your appointment." },
              { type: "contact", label: "Transportation · Medi-Cal", phone: "1-833-648-7528", tel: "tel:+18336487528" },
              { type: "contact", label: "Transportation · OneCare", phone: "1-866-612-1256", tel: "tel:+18666121256" },
              { type: "p", text: "In an emergency that threatens life or limb, call 911 — do not contact a transportation service or KSLC." },
              { type: "link", label: "Official link: CalOptima Health Medi-Cal", href: "https://www.caloptima.org/en/health-insurance-plans/medi-cal" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "community",
    number: "05",
    title: "Connecting with Local Resources",
    groups: [
      {
        faqs: [
          {
            q: "What local resources does KSLC connect people to?",
            blocks: [
              {
                type: "ul",
                items: [
                  "Connections to mental health and family counseling organizations",
                  "Connections to churches and nonprofit organizations",
                  "Connections to county and city services",
                  "Referrals to other relevant specialist organizations",
                ],
              },
              { type: "p", text: "KSLC identifies what you need, guides or connects you to the appropriate organization, and where possible follows up on progress. Each organization decides its own eligibility review, whether it provides the service, and the outcome." },
            ],
          },
        ],
      },
    ],
  },
];
