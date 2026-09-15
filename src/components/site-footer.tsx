import { Link } from "@tanstack/react-router";
import { LOCATION_LIST } from "@/lib/business";

export function SiteFooter() {
  return (
    <footer className="border-t border-line-strong bg-paper text-ink">
      <div className="shell grid gap-10 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-display text-3xl font-semibold tracking-tight">Platinum Pawn</p>
          <p className="mt-4 max-w-sm text-[0.95rem] leading-relaxed text-muted">
            Two Connecticut counters. Pawn it if you want it back. Sell it if
            you don’t. Shop the floor if you’re looking.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 md:col-span-7">
          {LOCATION_LIST.map((loc) => (
            <div key={loc.id}>
              <p className="text-[0.72rem] font-semibold tracking-[0.16em] text-green-bright uppercase">
                {loc.city}
              </p>
              <p className="mt-2 font-medium">{loc.street}</p>
              <p className="text-muted">{loc.cityStateZip}</p>
              <a
                href={loc.phoneHref}
                className="mt-2 inline-block text-ink underline decoration-line-strong underline-offset-4 hover:text-green-bright"
              >
                {loc.phone}
              </a>
              <ul className="mt-3 space-y-1 text-sm text-muted">
                {loc.hours.map((h) => (
                  <li key={h.label}>
                    {h.label}: {h.value}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-line">
        <div className="shell flex flex-col gap-3 py-5 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Platinum Pawn. Bristol & New Britain, CT.</p>
          <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Footer">
            <Link to="/pawn" className="text-ink-soft no-underline hover:text-green-bright">
              Pawn
            </Link>
            <Link to="/sell" className="text-ink-soft no-underline hover:text-green-bright">
              Sell
            </Link>
            <Link to="/shop" className="text-ink-soft no-underline hover:text-green-bright">
              Shop
            </Link>
            <Link to="/quote" className="text-ink-soft no-underline hover:text-green-bright">
              Request a quote
            </Link>
            <Link to="/visit" className="text-ink-soft no-underline hover:text-green-bright">
              Visit
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
