import { type ReactNode, useEffect, useState } from "react";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { StickyBar } from "./sticky-bar";

export function SiteShell({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setProgress(max <= 0 ? 0 : Math.min(100, (el.scrollTop / max) * 100));
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="flex min-h-dvh flex-col bg-paper text-ink">
      <div className="scroll-progress" aria-hidden="true">
        <span style={{ width: `${progress}%` }} />
      </div>
      <SiteHeader />
      <div className="flex-1 pb-20 lg:pb-0">{children}</div>
      <SiteFooter />
      <StickyBar />
    </div>
  );
}
