import { Link } from "@tanstack/react-router";
import type { LocationId } from "@/lib/business";
import { LOCATIONS } from "@/lib/business";
import { Glyph } from "./glyph";
import { Button } from "./ui/button";

export function LocationDetail({ id }: { id: LocationId }) {
  const loc = LOCATIONS[id];
  const other = id === "bristol" ? LOCATIONS["new-britain"] : LOCATIONS.bristol;

  return (
    <article>
      <p className="text-[0.78rem] font-semibold tracking-[0.06em] text-brick uppercase">
        {loc.city} · Connecticut
      </p>
      <h1 className="mt-3 max-w-[16ch] font-display text-[clamp(3.2rem,6vw,5.6rem)] font-medium leading-[0.96] tracking-[-0.04em]">
        {loc.street}
      </h1>
      <p className="mt-3 text-lg text-muted">{loc.cityStateZip}</p>

      <div className="mt-8 flex flex-wrap items-center gap-5">
        <Button asChild>
          <a href={loc.phoneHref}>Call {loc.phone}</a>
        </Button>
        <Button asChild variant="outline">
          <a href={loc.mapsUrl} target="_blank" rel="noreferrer">
            Get directions
            <Glyph />
          </a>
        </Button>
        <Link to="/quote" search={{ location: loc.id }} className="text-link">
          Request a quote here
        </Link>
      </div>

      <div className="mt-12 grid gap-10 border-t border-line pt-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <h2 className="text-[1.55rem] font-semibold tracking-[-0.04em]">
            Hours
          </h2>
          <dl className="mt-5 divide-y divide-line border-y border-line">
            {loc.hours.map((row) => (
              <div
                key={row.label}
                className="flex items-baseline justify-between gap-4 py-3"
              >
                <dt className="text-muted">{row.label}</dt>
                <dd className="font-medium">{row.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-sm text-muted">{loc.sundayNote}.</p>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <h2 className="text-[1.55rem] font-semibold tracking-[-0.04em]">
            This counter
          </h2>
          <ul className="mt-5 list-none space-y-0 p-0">
            {loc.notes.map((note) => (
              <li
                key={note}
                className="border-t border-line py-4 text-[1.05rem] leading-relaxed text-muted first:border-t-0 first:pt-0"
              >
                {note}
              </li>
            ))}
            <li className="border-t border-line py-4 text-[1.05rem] leading-relaxed text-muted">
              Pawn, sell, or shop. Bring a government-issued photo ID. You must
              be 18 or older. Final offers happen in person.
            </li>
          </ul>
        </div>
      </div>

      <p className="mt-12 text-sm text-muted">
        Looking for {other.city}?{" "}
        <Link
          to="/visit/$slug"
          params={{ slug: other.id }}
          className="text-link"
        >
          {other.street}
        </Link>
      </p>
    </article>
  );
}
