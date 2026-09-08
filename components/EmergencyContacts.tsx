import type { Lang } from "@/lib/nav";
import { siteInfo } from "@/lib/nav";

type Row = { situation: string; label: string; tel: string; note?: string };

const rows: Record<Lang, Row[]> = {
  ko: [
    { situation: "생명·신체의 즉각적인 위험, 화재, 범죄, 응급의료", label: "911", tel: "tel:911" },
    { situation: "자살·자해 생각, 심각한 정신적·정서적 위기", label: "988", tel: "tel:988", note: "전화·문자" },
    { situation: "노인·의존성 성인의 학대·방임·금전착취 의심", label: "1-800-451-5155", tel: "tel:+18004515155", note: "Orange County APS" },
    { situation: "식품·주거·공과금 등 지역사회 자원을 폭넓게 검색", label: "211", tel: "tel:211" },
    {
      situation: "긴급하지 않은 문제를 한국어로 상담하고 신청·연결·후속지원을 받고 싶은 경우",
      label: siteInfo.ko.phone,
      tel: siteInfo.ko.phoneHref,
      note: "KSLC 일반상담",
    },
  ],
  en: [
    { situation: "Immediate danger to life or body, fire, crime, medical emergency", label: "911", tel: "tel:911" },
    { situation: "Thoughts of suicide or self-harm, severe mental or emotional crisis", label: "988", tel: "tel:988", note: "call or text" },
    { situation: "Suspected abuse, neglect, or financial exploitation of an older or dependent adult", label: "1-800-451-5155", tel: "tel:+18004515155", note: "Orange County APS" },
    { situation: "Broad search for community resources such as food, housing, or utilities", label: "211", tel: "tel:211" },
    {
      situation: "A non-urgent issue you want help with in Korean — applications, connections, and follow-up",
      label: siteInfo.en.phone,
      tel: siteInfo.en.phoneHref,
      note: "KSLC general consultation",
    },
  ],
};

export const emergencyWarning: Record<Lang, string> = {
  ko: "KSLC 웹사이트 문의나 일반상담은 실시간으로 확인되지 않을 수 있습니다. 위급한 상황에서는 KSLC에 메시지를 남기거나 답변을 기다리지 말고 즉시 911, 988 또는 해당 긴급기관에 연락하십시오.",
  en: "Inquiries and general consultation requests sent through the KSLC website may not be seen in real time. In an urgent situation, do not leave KSLC a message or wait for a reply — contact 911, 988, or the appropriate emergency agency immediately.",
};

export default function EmergencyContacts({ lang }: { lang: Lang }) {
  const list = rows[lang];
  return (
    <div className="emergency-list">
      {list.map((r) => (
        <div className="emergency-row" key={r.label + r.situation}>
          <p>{r.situation}</p>
          <div className="emergency-action">
            <a href={r.tel}>{r.label}</a>
            {r.note ? <small>{r.note}</small> : null}
          </div>
        </div>
      ))}
    </div>
  );
}
