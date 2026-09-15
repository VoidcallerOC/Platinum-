import { createFileRoute } from "@tanstack/react-router";
import { QuoteForm } from "@/components/quote-form";
import { SectionKicker } from "@/components/section-kicker";
import {
  EXPECTATION_LINE,
  type CategoryId,
  type IntentId,
  type LocationId,
} from "@/lib/business";
import { isCategory, isIntent, isLocation } from "@/lib/quote-store";
import { pageTitle } from "@/lib/seo";

export type QuoteSearch = {
  intent?: IntentId;
  category?: CategoryId;
  location?: LocationId;
};

export const Route = createFileRoute("/quote")({
  validateSearch: (search: Record<string, unknown>): QuoteSearch => ({
    intent: isIntent(search.intent) ? search.intent : undefined,
    category: isCategory(search.category) ? search.category : undefined,
    location: isLocation(search.location) ? search.location : undefined,
  }),
  head: () => ({
    meta: [
      { title: pageTitle("Request a Quote") },
      {
        name: "description",
        content:
          "Request a pawn or sell quote at Platinum Pawn. Choose Bristol or New Britain, describe the item, attach photos. Final offers are made in person.",
      },
    ],
  }),
  component: QuotePage,
});

function QuotePage() {
  const search = Route.useSearch();
  return (
    <main id="main" className="shell max-w-3xl py-12 md:py-16">
      <SectionKicker>Request a quote</SectionKicker>
      <h1 className="mt-3 font-display text-5xl leading-[0.95] tracking-tight">
        What are you bringing in?
      </h1>
      <p className="mt-4 text-lg text-ink-soft">{EXPECTATION_LINE}</p>
      <div className="mt-10">
        <QuoteForm
          initialIntent={search.intent}
          initialCategory={search.category}
          initialLocation={search.location}
        />
      </div>
    </main>
  );
}
