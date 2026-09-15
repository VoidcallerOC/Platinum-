import type { ReactNode } from "react";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { StickyBar } from "./sticky-bar";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col bg-paper text-ink">
      <SiteHeader />
      <div className="flex-1 pb-20 lg:pb-0">{children}</div>
      <SiteFooter />
      <StickyBar />
    </div>
  );
}
