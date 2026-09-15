import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { DEMO_NOTICE, categoryById, locationById } from "@/lib/business";
import { loadQuote, type StoredQuote } from "@/lib/quote-store";
import { pageTitle } from "@/lib/seo";

export const Route = createFileRoute("/quote_/received")({
  head: () => ({
    meta: [
      { title: pageTitle("Request received") },
      {
        name: "description",
        content:
          "Your Platinum Pawn quote request is saved on this device. Bring the item in for inspection. Final offers are made in person.",
      },
    ],
  }),
  component: QuoteReceivedPage,
});

function QuoteReceivedPage() {
  const [quote, setQuote] = useState<StoredQuote | null | undefined>(undefined);

  useEffect(() => {
    setQuote(loadQuote());
  }, []);

  if (quote === undefined) {
    return (
      <main id="main" className="shell py-16">
        <p className="text-muted">Loading your request…</p>
      </main>
    );
  }

  if (!quote) {
    return (
      <main id="main" className="shell max-w-2xl py-16">
        <h1 className="font-display text-4xl tracking-tight">
          No request on this device
        </h1>
        <p className="mt-4 text-ink-soft">
          Quote submissions in this demo stay in your browser. Start a new
          request to see the confirmation state.
        </p>
        <Button asChild className="mt-6">
          <Link to="/quote">Request a quote</Link>
        </Button>
      </main>
    );
  }

  const loc = locationById(quote.location);
  const cat = categoryById(quote.category);
  const service = quote.intent === "pawn" ? "Pawn" : "Sell";

  return (
    <main id="main" className="shell max-w-2xl py-12 md:py-20">
      <p className="text-[0.72rem] font-semibold tracking-[0.16em] text-green-bright uppercase">
        Demo confirmation
      </p>
      <h1 className="mt-3 font-display text-5xl leading-[0.95] tracking-tight">
        You’re all set.
      </h1>
      <p className="mt-4 text-xl text-ink-soft">Your request has been received.</p>
      <p className="mt-3 max-w-xl text-ink-soft">
        Your item still needs to be inspected in person before a final offer
        can be made.
      </p>

      <dl className="mt-10 divide-y divide-line border-y border-line">
        <Row label="Selected service" value={service} />
        <Row label="Item type" value={cat?.label ?? "—"} />
        <Row
          label="Selected location"
          value={loc ? `${loc.city} · ${loc.street}` : "—"}
        />
        {quote.brand ? <Row label="Brand / model" value={quote.brand} /> : null}
        <Row label="Photos attached" value={String(quote.photoCount)} />
      </dl>

      {loc ? (
        <div className="mt-8 rounded-3xl border border-wood bg-cream p-5">
          <p className="font-display text-2xl font-semibold tracking-tight">{loc.city}</p>
          <p className="mt-1">{loc.addressLine}</p>
          <p className="text-sm text-muted">{loc.sundayNote}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            <Button asChild>
              <a href={loc.phoneHref}>Call this location</a>
            </Button>
            <Button asChild variant="outline">
              <a href={loc.mapsUrl} target="_blank" rel="noreferrer">
                Get directions
              </a>
            </Button>
          </div>
        </div>
      ) : null}

      <p className="mt-8 text-sm text-muted">{DEMO_NOTICE}</p>
    </main>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-1 py-4 sm:grid-cols-[12rem_1fr]">
      <dt className="text-sm text-muted">{label}</dt>
      <dd className="font-medium">{value}</dd>
    </div>
  );
}
