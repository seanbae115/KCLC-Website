"use client";

import { createContext, useContext, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import type { Lang } from "@/lib/nav";

export type RequiredGroup = { name: string; message: string };

const GroupErrorContext = createContext<Record<string, string>>({});
export const useGroupError = (name: string) => useContext(GroupErrorContext)[name];

/** Case number shown to the user and included in the notification email. */
function makeCaseId() {
  const d = new Date();
  const ymd = `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, "0")}${String(d.getDate()).padStart(2, "0")}`;
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `KSLC-${ymd}-${rand}`;
}

const copy = {
  ko: {
    submitting: "접수 중입니다…",
    errorTitle: "상담 요청이 접수되지 않았습니다.",
    errorBody: "잠시 후 다시 시도해 주세요. 계속 실패하면 (657) 239-0226으로 전화해 주세요. 위급한 상황에서는 911 또는 988에 즉시 연락하십시오.",
    errorPhone: "(657) 239-0226",
  },
  en: {
    submitting: "Submitting…",
    errorTitle: "Your request was not submitted.",
    errorBody: "Please try again in a moment. If it keeps failing, call (657) 239-0226. In an emergency, contact 911 or 988 immediately.",
    errorPhone: "(657) 239-0226",
  },
};

export default function FormspreeForm({
  action,
  redirectTo,
  subject,
  lang,
  submitLabel,
  submitVariant = "button-gold",
  requiredGroups = [],
  children,
}: {
  action: string;
  redirectTo: string;
  subject: string;
  lang: Lang;
  submitLabel: string;
  submitVariant?: "button-gold" | "button-navy";
  requiredGroups?: RequiredGroup[];
  children: React.ReactNode;
}) {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  // Synchronous lock. React state updates are async, so a fast double-click can
  // slip past a state-based guard and file the request twice (spec test T03).
  const inFlight = useRef(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [groupErrors, setGroupErrors] = useState<Record<string, string>>({});
  const t = copy[lang];

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (inFlight.current) return;

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Checkbox groups marked required in the UI must actually be validated.
    const errors: Record<string, string> = {};
    for (const g of requiredGroups) {
      if (formData.getAll(g.name).length < 1) errors[g.name] = g.message;
    }
    setGroupErrors(errors);
    if (Object.keys(errors).length > 0) {
      const firstName = requiredGroups.find((g) => errors[g.name])?.name;
      const target = form.querySelector<HTMLInputElement>(`[name="${firstName}"]`);
      target?.focus();
      target?.closest("fieldset")?.scrollIntoView({ block: "center" });
      return;
    }

    inFlight.current = true;
    setStatus("submitting");
    const caseId = makeCaseId();
    formData.append(lang === "ko" ? "접수번호" : "Case ID", caseId);

    try {
      const res = await fetch(action, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      if (res.ok) {
        // Stay locked — we are navigating away to the success screen.
        const sep = redirectTo.includes("?") ? "&" : "?";
        router.push(`${redirectTo}${sep}case=${encodeURIComponent(caseId)}`);
      } else {
        inFlight.current = false;
        setStatus("error");
      }
    } catch {
      inFlight.current = false;
      setStatus("error");
    }
  }

  const submitting = status === "submitting";

  return (
    <GroupErrorContext.Provider value={groupErrors}>
      <form ref={formRef} onSubmit={handleSubmit} noValidate={false}>
        <input type="hidden" name="_subject" value={subject} />
        {children}

        <div className="form-actions">
          <button type="submit" className={`button ${submitVariant}`} aria-disabled={submitting} disabled={submitting}>
            {submitting ? t.submitting : submitLabel}
          </button>
          {submitting && (
            <p className="form-status" role="status">
              {t.submitting}
            </p>
          )}
        </div>

        {status === "error" && (
          <div role="alert" className="form-error">
            <strong>{t.errorTitle}</strong>
            <br />
            {t.errorBody}
            <br />
            <a href="tel:+16572390226">{t.errorPhone}</a>
          </div>
        )}
      </form>
    </GroupErrorContext.Provider>
  );
}

/** A checkbox group whose "required" label is backed by real validation. */
export function RequiredCheckGroup({
  name,
  legend,
  options,
  columns = true,
}: {
  name: string;
  legend: string;
  options: string[];
  columns?: boolean;
}) {
  const error = useGroupError(name);
  const errorId = `${name.replace(/\s+/g, "-")}-error`;

  return (
    <fieldset
      className="field full"
      data-invalid={error ? "true" : undefined}
      aria-describedby={error ? errorId : undefined}
    >
      <legend>{legend}</legend>
      <div className={columns ? "check-grid" : undefined}>
        {options.map((o) => (
          <label className="check-item" key={o}>
            <input type="checkbox" name={name} value={o} />
            {o}
          </label>
        ))}
      </div>
      {error ? (
        <p className="field-error" id={errorId} role="alert">
          {error}
        </p>
      ) : null}
    </fieldset>
  );
}
