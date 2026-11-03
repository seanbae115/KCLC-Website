"use client";

import { useEffect, useState } from "react";

// Mobile-only fixed call button. Hidden on desktop and while a form field has
// focus (CSS), and while the home page's "help now" call buttons are on
// screen, so the same phone button never shows twice.
export default function MobileCallBar({ href, label }: { href: string; label: string }) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const target = document.querySelector(".help-now");
    if (!target || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(([entry]) => setHidden(entry.isIntersecting));
    io.observe(target);
    return () => io.disconnect();
  }, []);

  return (
    <div className={hidden ? "mobile-call-bar is-hidden" : "mobile-call-bar"}>
      <a href={href}>{label}</a>
    </div>
  );
}
