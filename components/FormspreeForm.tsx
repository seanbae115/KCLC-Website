"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function FormspreeForm({
  action,
  redirectTo,
  subject,
  errorMessage,
  children,
}: {
  action: string;
  redirectTo: string;
  subject: string;
  errorMessage: string;
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    try {
      const res = await fetch(action, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      if (res.ok) {
        router.push(redirectTo);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="hidden" name="_subject" value={subject} />
      {children}
      {status === "error" && (
        <p role="alert" className="form-error">
          {errorMessage}
        </p>
      )}
    </form>
  );
}
