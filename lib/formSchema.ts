import type { Lang } from "./nav";

export type FormType = "request" | "referral" | "contact";

export type FieldKind = "text" | "email" | "tel" | "select" | "radio" | "checkboxGroup" | "textarea" | "consent";

export type Field = {
  /** Canonical key. Used as the input name, the sheet column, and the email row. */
  key: string;
  kind: FieldKind;
  required?: boolean;
  label: Record<Lang, string>;
};

export type FormSchema = {
  subject: Record<Lang, string>;
  /** Where a successful submission sends the visitor. */
  redirect: Record<Lang, string>;
  fields: Field[];
};

const L = (ko: string, en: string) => ({ ko, en });

export const formSchemas: Record<FormType, FormSchema> = {
  request: {
    subject: L("[KSLC] 상담 요청", "[KSLC] Consultation Request"),
    redirect: L("/ko/thank-you/?form=request", "/thank-you/?form=request"),
    fields: [
      { key: "name", kind: "text", required: true, label: L("이름", "Name") },
      { key: "phone", kind: "tel", required: true, label: L("전화번호", "Phone") },
      { key: "email", kind: "email", label: L("이메일", "Email") },
      { key: "preferredLanguage", kind: "select", required: true, label: L("선호 언어", "Preferred language") },
      { key: "contactTime", kind: "text", label: L("연락 가능 시간", "Best time to reach you") },
      { key: "relationship", kind: "radio", required: true, label: L("본인·가족·기관 여부", "Requesting as") },
      { key: "helpAreas", kind: "checkboxGroup", required: true, label: L("도움받고 싶은 영역", "Areas you need help with") },
      { key: "notes", kind: "textarea", label: L("전하고 싶은 내용", "Anything else") },
      { key: "consent", kind: "consent", required: true, label: L("연락 동의", "Contact consent") },
    ],
  },
  referral: {
    subject: L("[KSLC] 기관 의뢰 문의", "[KSLC] Institutional Referral Inquiry"),
    redirect: L("/ko/thank-you/?form=referral", "/thank-you/?form=referral"),
    fields: [
      { key: "organization", kind: "text", required: true, label: L("기관명", "Organization") },
      { key: "contactName", kind: "text", required: true, label: L("담당자 이름", "Contact name") },
      { key: "phone", kind: "tel", required: true, label: L("전화번호", "Phone") },
      { key: "email", kind: "email", required: true, label: L("이메일", "Email") },
      { key: "preferredContact", kind: "select", label: L("선호 연락방법", "Preferred contact method") },
      { key: "referralArea", kind: "text", required: true, label: L("의뢰 분야", "Referral area") },
      { key: "inquiry", kind: "textarea", required: true, label: L("문의내용", "Inquiry") },
    ],
  },
  contact: {
    subject: L("[KSLC] 일반 문의", "[KSLC] General Inquiry"),
    redirect: L("/ko/thank-you/?form=contact", "/thank-you/?form=contact"),
    fields: [
      { key: "name", kind: "text", required: true, label: L("이름", "Name") },
      { key: "email", kind: "email", required: true, label: L("이메일", "Email") },
      { key: "phone", kind: "tel", label: L("전화번호", "Phone") },
      { key: "message", kind: "textarea", required: true, label: L("문의 내용", "Message") },
    ],
  },
};


/** 받침 유무에 따라 목적격 조사를 고릅니다. '이름을', '전화번호를'. */
function withObjectParticle(word: string): string {
  const code = word.charCodeAt(word.length - 1);
  const isHangulSyllable = code >= 0xac00 && code <= 0xd7a3;
  if (!isHangulSyllable) return `${word}을(를)`;
  const hasFinalConsonant = (code - 0xac00) % 28 !== 0;
  return `${word}${hasFinalConsonant ? "을" : "를"}`;
}

/** Error text shown under a field the visitor left empty. */
export const errorFor = (f: Field, lang: Lang): string =>
  f.kind === "checkboxGroup"
    ? lang === "ko"
      ? "도움받고 싶은 영역을 한 가지 이상 선택해 주세요."
      : "Please select at least one area you would like help with."
    : f.kind === "consent"
      ? lang === "ko"
        ? "연락에 동의해 주셔야 접수할 수 있습니다."
        : "We need your consent to contact you before we can accept this request."
      : lang === "ko"
        ? `${withObjectParticle(f.label.ko)} 입력해 주세요.`
        : `Please enter your ${f.label.en.toLowerCase()}.`;

/** Field name used as a spam honeypot. Real people never fill it in. */
export const HONEYPOT = "company_website";
