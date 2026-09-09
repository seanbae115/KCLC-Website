"use client";

import { createContext, useContext, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import type { Lang } from "@/lib/nav";
import { HONEYPOT, errorFor, formSchemas, type FormType } from "@/lib/formSchema";

const ErrorContext = createContext<Record<string, string>>({});
export const useFieldError = (name: string) => useContext(ErrorContext)[name];

const copy = {
  ko: {
    submitting: "접수 중입니다…",
    failTitle: "상담 요청이 접수되지 않았습니다.",
    failBody:
      "잠시 후 다시 시도해 주세요. 계속 실패하면 (657) 239-0226으로 전화해 주세요. 위급한 상황에서는 911 또는 988에 즉시 연락하십시오.",
    checkFields: "입력하지 않은 필수 항목이 있습니다. 표시된 부분을 확인해 주세요.",
  },
  en: {
    submitting: "Submitting…",
    failTitle: "Your request was not submitted.",
    failBody:
      "Please try again in a moment. If it keeps failing, call (657) 239-0226. In an emergency, contact 911 or 988 immediately.",
    checkFields: "Some required fields are missing. Please check the highlighted items.",
  },
};

export default function ConsultationForm({
  formType,
  lang,
  submitLabel,
  submitVariant = "button-gold",
  children,
}: {
  formType: FormType;
  lang: Lang;
  submitLabel: string;
  submitVariant?: "button-gold" | "button-navy";
  children: React.ReactNode;
}) {
  const router = useRouter();
  // Synchronous lock: React state updates async, so a fast double-click can
  // otherwise slip through and file the request twice.
  const inFlight = useRef(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const t = copy[lang];
  const schema = formSchemas[formType];

  function focusFirst(form: HTMLFormElement, keys: string[]) {
    const el = form.querySelector<HTMLElement>(`[name="${keys[0]}"]`);
    el?.focus();
    el?.closest("fieldset, .field")?.scrollIntoView({ block: "center" });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (inFlight.current) return;
    const form = e.currentTarget;
    const fd = new FormData(form);

    const answers: Record<string, string | string[]> = {};
    for (const f of schema.fields) {
      answers[f.key] =
        f.kind === "checkboxGroup"
          ? fd.getAll(f.key).map(String)
          : String(fd.get(f.key) ?? "");
    }

    // Mirror the server's rules so the visitor gets instant feedback.
    const local: Record<string, string> = {};
    for (const f of schema.fields) {
      if (!f.required) continue;
      const v = answers[f.key];
      const empty = f.kind === "checkboxGroup" ? (v as string[]).length < 1 : v === "";
      if (empty) local[f.key] = errorFor(f, lang);
    }
    setErrors(local);
    if (Object.keys(local).length > 0) {
      focusFirst(form, Object.keys(local));
      return;
    }

    inFlight.current = true;
    setStatus("submitting");

    try {
      const res = await fetch("/api/submit/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType,
          lang,
          answers,
          sourcePage: typeof window !== "undefined" ? window.location.pathname : "",
          [HONEYPOT]: String(fd.get(HONEYPOT) ?? ""),
        }),
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok && data.ok) {
        const sep = schema.redirect[lang].includes("?") ? "&" : "?";
        router.push(`${schema.redirect[lang]}${sep}case=${encodeURIComponent(data.caseId)}`);
        return; // stay locked; we are navigating away
      }

      inFlight.current = false;
      if (res.status === 422 && data.errors) {
        setErrors(data.errors);
        setStatus("idle");
        focusFirst(form, Object.keys(data.errors));
      } else {
        setStatus("error");
      }
    } catch {
      inFlight.current = false;
      setStatus("error");
    }
  }

  const submitting = status === "submitting";

  return (
    <ErrorContext.Provider value={errors}>
      <form onSubmit={handleSubmit}>
        {/* Spam trap. Hidden from people and from screen readers. */}
        <input
          type="text"
          name={HONEYPOT}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          style={{ position: "absolute", left: "-9999px", width: 1, height: 1 }}
        />
        {children}

        <div className="form-actions">
          <button
            type="submit"
            className={`button ${submitVariant}`}
            aria-disabled={submitting}
            disabled={submitting}
          >
            {submitting ? t.submitting : submitLabel}
          </button>
          {submitting && (
            <p className="form-status" role="status">
              {t.submitting}
            </p>
          )}
        </div>

        {Object.keys(errors).length > 0 && status !== "error" && (
          <p className="field-error" role="alert" style={{ marginTop: 16 }}>
            {t.checkFields}
          </p>
        )}

        {status === "error" && (
          <div role="alert" className="form-error">
            <strong>{t.failTitle}</strong>
            <br />
            {t.failBody}
            <br />
            <a href="tel:+16572390226">(657) 239-0226</a>
          </div>
        )}
      </form>
    </ErrorContext.Provider>
  );
}

/** Wraps a field so its server/client error renders and is announced. */
export function FieldError({ name }: { name: string }) {
  const error = useFieldError(name);
  if (!error) return null;
  return (
    <p className="field-error" id={`${name}-error`} role="alert">
      {error}
    </p>
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
  const error = useFieldError(name);
  return (
    <fieldset
      className="field full"
      data-invalid={error ? "true" : undefined}
      aria-describedby={error ? `${name}-error` : undefined}
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
      <FieldError name={name} />
    </fieldset>
  );
}
