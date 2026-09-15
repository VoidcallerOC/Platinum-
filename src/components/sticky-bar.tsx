import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { LOCATION_LIST } from "@/lib/business";

export function StickyBar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState<"call" | "directions" | null>(null);

  if (pathname.startsWith("/quote")) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line-strong bg-paper/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md lg:hidden">
      {open ? (
        <div className="border-b border-line px-4 py-3">
          <p className="text-[0.72rem] font-semibold tracking-[0.14em] text-muted uppercase">
            {open === "call" ? "Call a location" : "Get directions"}
          </p>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {LOCATION_LIST.map((loc) => (
              <a
                key={loc.id}
                href={open === "call" ? loc.phoneHref : loc.mapsUrl}
                className="flex min-h-12 flex-col items-start justify-center rounded-2xl border border-wood bg-cream px-3 no-underline"
              >
                <span className="text-sm font-semibold text-ink">{loc.city}</span>
                <span className="text-xs text-muted">
                  {open === "call" ? loc.phone : loc.street}
                </span>
              </a>
            ))}
          </div>
        </div>
      ) : null}
      <div className="grid grid-cols-3">
        <button
          type="button"
          onClick={() => setOpen((v) => (v === "call" ? null : "call"))}
          className="flex min-h-14 items-center justify-center text-[0.7rem] font-bold tracking-wide text-ink uppercase"
          aria-expanded={open === "call"}
        >
          Call
        </button>
        <Link
          to="/quote"
          className="flex min-h-14 items-center justify-center bg-green text-[0.7rem] font-bold tracking-wide text-paper no-underline uppercase"
        >
          Quote
        </Link>
        <button
          type="button"
          onClick={() =>
            setOpen((v) => (v === "directions" ? null : "directions"))
          }
          className="flex min-h-14 items-center justify-center text-[0.7rem] font-bold tracking-wide text-ink uppercase"
          aria-expanded={open === "directions"}
        >
          Directions
        </button>
      </div>
    </div>
  );
}
