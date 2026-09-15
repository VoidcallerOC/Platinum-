import { Link } from "@tanstack/react-router";
import { MapPinned, Phone } from "lucide-react";
import type { LocationId } from "@/lib/business";
import { LOCATIONS } from "@/lib/business";
import { Button } from "./ui/button";

export function LocationDetail({ id }: { id: LocationId }) {
  const loc = LOCATIONS[id];
  const other = id === "bristol" ? LOCATIONS["new-britain"] : LOCATIONS.bristol;

  return (
    <article>
      <p className="text-[0.72rem] font-semibold tracking-[0.18em] text-muted uppercase">
        {loc.city} · Connecticut
      </p>
      <h1 className="mt-3 max-w-3xl font-display text-5xl leading-[0.95] tracking-tight md:text-6xl">
        {loc.street}
      </h1>
      <p className="mt-3 text-lg text-ink-soft">{loc.cityStateZip}</p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Button asChild>
          <a href={loc.phoneHref}>
            <Phone className="size-4" />
            Call {loc.phone}
          </a>
        </Button>
        <Button asChild variant="outline">
          <a href={loc.mapsUrl} target="_blank" rel="noreferrer">
            <MapPinned className="size-4" />
            Get directions
          </a>
        </Button>
        <Button asChild variant="ghost">
          <Link
            to="/quote"
            search={{ location: loc.id }}
          >
            Request a quote here
          </Link>
        </Button>
      </div>

      <div className="mt-12 grid gap-10 border-t border-line pt-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <h2 className="font-display text-3xl tracking-tight">Hours</h2>
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
          <h2 className="font-display text-3xl tracking-tight">This counter</h2>
          <ul className="mt-5 space-y-4">
            {loc.notes.map((note) => (
              <li
                key={note}
                className="border-t border-line pt-4 text-[1.05rem] leading-relaxed text-ink-soft first:border-t-0 first:pt-0"
              >
                {note}
              </li>
            ))}
            <li className="border-t border-line pt-4 text-[1.05rem] leading-relaxed text-ink-soft">
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
          className="font-medium text-green underline underline-offset-4"
        >
          {other.street}, {other.city}
        </Link>
      </p>
    </article>
  );
}
