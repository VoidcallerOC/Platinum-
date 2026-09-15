import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useId, useState } from "react";
import { LOCATIONS } from "@/lib/business";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/pawn", label: "Pawn" },
  { to: "/sell", label: "Sell" },
  { to: "/gold", label: "Gold" },
  { to: "/shop", label: "Shop" },
  { to: "/visit", label: "Visit" },
] as const;

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/92 backdrop-blur-md">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:bg-green focus:px-3 focus:py-2 focus:text-cream"
      >
        Skip to content
      </a>
      <div className="shell flex h-[4.25rem] items-center justify-between gap-4">
        <Link
          to="/"
          className="group flex min-w-0 flex-col leading-none no-underline"
          aria-label="Platinum Pawn home"
        >
          <span className="font-display text-[1.35rem] tracking-[-0.04em] text-ink">
            Platinum Pawn
          </span>
          <span className="mt-1 text-[0.68rem] font-medium tracking-[0.16em] text-muted uppercase">
            Bristol · New Britain
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {NAV.map((item) => {
            const active =
              pathname === item.to || pathname.startsWith(`${item.to}/`);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "text-[0.92rem] font-medium tracking-tight no-underline transition-colors",
                  active ? "text-green" : "text-ink-soft hover:text-ink",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            to="/visit"
            className="h-10 rounded-md px-3 text-sm font-medium text-ink-soft no-underline hover:text-ink"
          >
            Two locations
          </Link>
          <Link
            to="/quote"
            className="inline-flex h-11 items-center rounded-md bg-green px-4 text-sm font-medium text-cream no-underline hover:bg-green-deep"
          >
            Request a quote
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-md text-ink lg:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </div>

      {open ? (
        <div
          id={menuId}
          className="border-t border-line bg-paper lg:hidden"
        >
          <nav className="shell flex flex-col py-3" aria-label="Mobile">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="flex min-h-12 items-center border-b border-line text-lg font-medium text-ink no-underline"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/quote"
              className="mt-4 flex min-h-12 items-center justify-center rounded-md bg-green text-base font-medium text-cream no-underline"
            >
              Request a quote
            </Link>
            <div className="mt-3 grid grid-cols-2 gap-2 pb-4">
              <a
                href={LOCATIONS.bristol.phoneHref}
                className="flex min-h-12 items-center justify-center rounded-md bg-paper-2 text-sm font-medium text-ink no-underline"
              >
                Call Bristol
              </a>
              <a
                href={LOCATIONS["new-britain"].phoneHref}
                className="flex min-h-12 items-center justify-center rounded-md bg-paper-2 text-sm font-medium text-ink no-underline"
              >
                Call New Britain
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
