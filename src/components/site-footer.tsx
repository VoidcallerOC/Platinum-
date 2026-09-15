import { Link } from "@tanstack/react-router";
import { LOCATION_LIST } from "@/lib/business";

export function SiteFooter() {
  return (
    <footer className="border-t-2 border-wood bg-paper text-ink">
      <div className="shell grid gap-10 pt-16 pb-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-display text-[1.45rem] font-medium tracking-[-0.02em]">
            Platinum <span className="text-brick">Pawn</span>
          </p>
          <p className="mt-[0.9rem] max-w-[30rem] text-[0.95rem] leading-relaxed text-muted">
            Two Connecticut counters. Pawn it if you want it back. Sell it if
            you don’t. Shop the floor if you’re looking.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 md:col-span-7">
          {LOCATION_LIST.map((loc) => (
            <div key={loc.id}>
              <p className="text-[0.72rem] font-bold tracking-[0.06em] text-brick uppercase">
                {loc.city}
              </p>
              <p className="mt-2 font-medium">{loc.street}</p>
              <p className="text-muted">{loc.cityStateZip}</p>
              <a
                href={loc.phoneHref}
                className="mt-2 inline-block text-ink underline decoration-brick decoration-[0.16em] underline-offset-[0.23em] hover:text-brick"
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
        <div className="shell flex flex-col gap-3 py-[1.35rem] font-sans text-[0.78rem] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Platinum Pawn. Bristol & New Britain,
            CT.
          </p>
          <nav
            className="flex flex-wrap gap-x-8 gap-y-2"
            aria-label="Footer"
          >
            <Link
              to="/pawn"
              className="text-ink no-underline hover:text-brick hover:underline hover:underline-offset-[0.32em]"
            >
              Pawn
            </Link>
            <Link
              to="/sell"
              className="text-ink no-underline hover:text-brick hover:underline hover:underline-offset-[0.32em]"
            >
              Sell
            </Link>
            <Link
              to="/shop"
              className="text-ink no-underline hover:text-brick hover:underline hover:underline-offset-[0.32em]"
            >
              Shop
            </Link>
            <Link
              to="/quote"
              className="text-ink no-underline hover:text-brick hover:underline hover:underline-offset-[0.32em]"
            >
              Request a quote
            </Link>
            <Link
              to="/visit"
              className="text-ink no-underline hover:text-brick hover:underline hover:underline-offset-[0.32em]"
            >
              Visit
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
