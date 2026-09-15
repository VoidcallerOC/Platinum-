import { Link } from "@tanstack/react-router";
import { LOCATION_LIST } from "@/lib/business";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-ink text-cream">
      <div className="shell grid gap-10 py-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-display text-3xl tracking-tight">Platinum Pawn</p>
          <p className="mt-4 max-w-sm text-[0.95rem] leading-relaxed text-cream/70">
            Two Connecticut counters. Pawn it if you want it back. Sell it if
            you don’t. Shop the floor if you’re looking.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 md:col-span-7">
          {LOCATION_LIST.map((loc) => (
            <div key={loc.id}>
              <p className="text-[0.72rem] font-semibold tracking-[0.16em] text-cream/50 uppercase">
                {loc.city}
              </p>
              <p className="mt-2 font-medium">{loc.street}</p>
              <p className="text-cream/70">{loc.cityStateZip}</p>
              <a
                href={loc.phoneHref}
                className="mt-2 inline-block text-cream underline decoration-cream/30 underline-offset-4"
              >
                {loc.phone}
              </a>
              <ul className="mt-3 space-y-1 text-sm text-cream/65">
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
      <div className="border-t border-white/10">
        <div className="shell flex flex-col gap-3 py-5 text-sm text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Platinum Pawn. Bristol & New Britain, CT.</p>
          <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Footer">
            <Link to="/pawn" className="text-cream/70 no-underline hover:text-cream">
              Pawn
            </Link>
            <Link to="/sell" className="text-cream/70 no-underline hover:text-cream">
              Sell
            </Link>
            <Link to="/shop" className="text-cream/70 no-underline hover:text-cream">
              Shop
            </Link>
            <Link to="/quote" className="text-cream/70 no-underline hover:text-cream">
              Request a quote
            </Link>
            <Link to="/visit" className="text-cream/70 no-underline hover:text-cream">
              Visit
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
