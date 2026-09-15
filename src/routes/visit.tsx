import { createFileRoute, Link } from "@tanstack/react-router";
import { Glyph } from "@/components/glyph";
import { SectionKicker } from "@/components/section-kicker";
import { Button } from "@/components/ui/button";
import { LOCATION_LIST } from "@/lib/business";
import { pageTitle } from "@/lib/seo";

export const Route = createFileRoute("/visit")({
  head: () => ({
    meta: [
      { title: pageTitle("Visit") },
      {
        name: "description",
        content:
          "Visit Platinum Pawn in Bristol (294 Middle Street) or New Britain (57 Broad Street). Hours, phone, and directions for both Connecticut locations.",
      },
    ],
  }),
  component: VisitPage,
});

function VisitPage() {
  return (
    <main id="main" className="shell py-12 md:py-16">
      <SectionKicker>Visit</SectionKicker>
      <h1 className="mt-3 max-w-[16ch] font-display text-[clamp(3.2rem,6vw,5.6rem)] font-medium leading-[0.96] tracking-[-0.04em]">
        Two stores. Pick the one you can get to.
      </h1>
      <p className="mt-5 max-w-[52ch] text-lg text-muted">
        Weekdays match. Saturday matches. Sunday does not: Bristol is closed.
        New Britain is open 12 PM – 3 PM.
      </p>

      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {LOCATION_LIST.map((loc, i) => (
          <article
            key={loc.id}
            className={
              i === 1
                ? "relative border-2 border-brick bg-paper p-6 shadow-[0.35rem_0.35rem_0_var(--color-brick)]"
                : "relative border-2 border-wood bg-paper p-6 shadow-[0.35rem_0.35rem_0_var(--color-wood)]"
            }
          >
            <span
              className="absolute top-[0.85rem] right-[0.85rem] size-[0.7rem] rounded-[0.1rem] bg-brick"
              aria-hidden="true"
            />
            <h2 className="text-[1.7rem] tracking-[-0.04em]">{loc.city}</h2>
            <p className="mt-2 text-lg">{loc.street}</p>
            <p className="text-muted">{loc.cityStateZip}</p>
            <dl className="mt-6 divide-y divide-line border-y border-line">
              {loc.hours.map((h) => (
                <div
                  key={h.label}
                  className="flex justify-between gap-4 py-3 text-sm"
                >
                  <dt className="text-muted">{h.label}</dt>
                  <dd className="font-medium">{h.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button asChild>
                <a href={loc.phoneHref}>{loc.phone}</a>
              </Button>
              <Button asChild variant="outline">
                <a href={loc.mapsUrl} target="_blank" rel="noreferrer">
                  Directions
                  <Glyph />
                </a>
              </Button>
              <Link
                to="/visit/$slug"
                params={{ slug: loc.id }}
                className="text-link"
              >
                Store page
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
