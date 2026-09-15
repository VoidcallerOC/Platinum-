import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useId, useState } from "react";
import { LOCATIONS } from "@/lib/business";
import { cn } from "@/lib/utils";
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
    <header className="sticky top-0 z-40 border-b border-line-strong bg-paper/82 backdrop-blur-[14px]">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-4 focus:z-50 focus:bg-green focus:px-3 focus:py-2 focus:text-paper"
      >
        Skip to content
      </a>
      <div className="shell flex min-h-[5.3rem] items-center justify-between gap-4">
        <Link
          to="/"
          className="flex items-center gap-3 no-underline"
          aria-label="Platinum Pawn home"
        >
          <span
            className="flex size-8 items-center justify-center bg-green-deep font-display text-lg leading-none text-ink"
            aria-hidden="true"
          >
            P
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-[1.45rem] tracking-[-0.02em] text-ink">
              Platinum Pawn
            </span>
            <span className="mt-1 text-[0.68rem] font-medium tracking-[0.16em] text-muted uppercase">
              Bristol · New Britain
            </span>
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
                  "text-[0.91rem] font-medium no-underline underline-offset-[0.32em] transition-colors",
                  active
                    ? "text-green-bright underline"
                    : "text-ink hover:text-green-bright hover:underline",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <Button asChild size="sm">
            <Link to="/quote">Request a quote</Link>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center text-ink lg:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </div>

      {open ? (
        <div id={menuId} className="border-t border-line bg-paper lg:hidden">
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
              className="mt-4 flex min-h-12 items-center justify-center rounded-sm bg-green text-base font-bold text-paper no-underline"
            >
              Request a quote
            </Link>
            <div className="mt-3 grid grid-cols-2 gap-2 pb-4">
              <a
                href={LOCATIONS.bristol.phoneHref}
                className="flex min-h-12 items-center justify-center rounded-sm border border-wood text-sm font-medium text-ink no-underline"
              >
                Call Bristol
              </a>
              <a
                href={LOCATIONS["new-britain"].phoneHref}
                className="flex min-h-12 items-center justify-center rounded-sm border border-wood text-sm font-medium text-ink no-underline"
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
