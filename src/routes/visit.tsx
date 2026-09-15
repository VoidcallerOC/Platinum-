import { createFileRoute, Link } from "@tanstack/react-router";
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
      <h1 className="mt-3 max-w-3xl font-display text-5xl leading-[0.95] tracking-tight md:text-6xl">
        Two stores. Pick the one you can get to.
      </h1>
      <p className="mt-5 max-w-2xl text-lg text-ink-soft">
        Weekdays match. Saturday matches. Sunday does not: Bristol is closed.
        New Britain is open 12 PM – 3 PM.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {LOCATION_LIST.map((loc) => (
          <article key={loc.id} className="rounded-3xl border border-wood bg-cream p-6">
            <h2 className="font-display text-4xl font-semibold tracking-tight">
              {loc.city}
            </h2>
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
            <div className="mt-6 flex flex-wrap gap-2">
              <Button asChild>
                <a href={loc.phoneHref}>{loc.phone}</a>
              </Button>
              <Button asChild variant="outline">
                <a href={loc.mapsUrl} target="_blank" rel="noreferrer">
                  Directions
                </a>
              </Button>
              <Button asChild variant="ghost">
                <Link to="/visit/$slug" params={{ slug: loc.id }}>
                  Store page
                </Link>
              </Button>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
