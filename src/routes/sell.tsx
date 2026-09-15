import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionKicker } from "@/components/section-kicker";
import { Button } from "@/components/ui/button";
import { SELL_STEPS } from "@/lib/business";
import { pageTitle } from "@/lib/seo";

export const Route = createFileRoute("/sell")({
  head: () => ({
    meta: [
      { title: pageTitle("Sell") },
      {
        name: "description",
        content:
          "Sell gold, jewelry, watches, tools, electronics, and more to Platinum Pawn in Bristol or New Britain. Final offers are made in person after inspection.",
      },
    ],
  }),
  component: SellPage,
});

function SellPage() {
  return (
    <main id="main" className="shell py-12 md:py-16">
      <SectionKicker>Sell</SectionKicker>
      <h1 className="mt-3 max-w-3xl font-display text-5xl font-bold leading-[0.9] tracking-[-0.02em] md:text-6xl">
        Sell it if you <em>don’t want it back.</em>
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
        Old and broken gold, diamonds, coins, bullion, watches, handbags,
        electronics, tools, instruments, collectibles, vehicles. Bring the item.
        Bring ID. Walk out with a decision made at the counter.
      </p>
      <div className="mt-7 flex flex-wrap gap-3">
        <Button asChild>
          <Link to="/quote" search={{ intent: "sell" }}>
            Request a sell quote
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link
            to="/quote"
            search={{ intent: "sell", category: "gold-jewelry" }}
          >
            Sell gold & jewelry
          </Link>
        </Button>
      </div>

      <ol className="mt-14 max-w-3xl">
        {SELL_STEPS.map((step, i) => (
          <li
            key={step.title}
            className="grid grid-cols-[auto_1fr] gap-5 border-t border-line py-7"
          >
            <span className="ticket-no text-2xl">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h2 className="text-3xl tracking-tight">{step.title}</h2>
              <p className="mt-2 text-ink-soft">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </main>
  );
}
