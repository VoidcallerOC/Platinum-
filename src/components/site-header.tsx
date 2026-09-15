import { Link, useRouterState } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { Glyph } from "./glyph";
import { Button } from "./ui/button";

const NAV = [
  { to: "/pawn", label: "Pawn" },
  { to: "/sell", label: "Sell" },
  { to: "/gold", label: "Gold" },
  { to: "/shop", label: "Shop" },
  { to: "/visit", label: "Visit" },
] as const;

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-40 border-b border-line-strong bg-paper/82 backdrop-blur-[14px]">
      <a
        href="#main"
        className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-brick focus:px-3 focus:py-2 focus:text-paper focus:no-underline"
      >
        Skip to content
      </a>
      <div className="shell flex flex-wrap items-center justify-between gap-x-6 gap-y-3 py-4 md:min-h-[5.3rem] md:py-0">
        <Link
          to="/"
          className="font-display text-[1.45rem] font-medium tracking-[-0.02em] text-ink no-underline"
          aria-label="Platinum Pawn home"
        >
          Platinum <span className="text-brick">Pawn</span>
        </Link>

        <nav
          className="order-3 flex w-full flex-wrap items-center gap-x-5 gap-y-2 md:order-0 md:w-auto md:flex-1 md:justify-center md:gap-x-8"
          aria-label="Primary"
        >
          {NAV.map((item) => {
            const active =
              pathname === item.to || pathname.startsWith(`${item.to}/`);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "text-[0.91rem] font-medium no-underline underline-offset-[0.32em] transition-colors",
                  active
                    ? "text-brick underline"
                    : "text-ink hover:text-brick hover:underline",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Button asChild size="sm">
          <Link to="/quote">
            Request a quote
            <Glyph />
          </Link>
        </Button>
      </div>
    </header>
  );
}
