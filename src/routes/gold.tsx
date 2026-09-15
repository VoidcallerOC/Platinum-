import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionKicker } from "@/components/section-kicker";
import { Button } from "@/components/ui/button";
import { pageTitle } from "@/lib/seo";

export const Route = createFileRoute("/gold")({
  head: () => ({
    meta: [
      { title: pageTitle("Sell Gold & Jewelry") },
      {
        name: "description",
        content:
          "Sell gold and jewelry at Platinum Pawn in Bristol or New Britain. Precious metals follow the market. Condition and documentation matter. Final offers are in person.",
      },
    ],
  }),
  component: GoldPage,
});

const POINTS = [
  {
    title: "Gold and precious metals are evaluated",
    body: "The shop takes gold, silver, coins, and bullion. Public materials state that precious-metal value follows the current market. That number is not printed on this website.",
  },
  {
    title: "Jewelry is looked at as jewelry",
    body: "Diamonds, gemstones, and finished pieces are not only scrap weight. Design, stones, and whether the piece can sell in the case all factor in.",
  },
  {
    title: "Condition matters",
    body: "Broken, worn, or missing parts change what the shop can do with an item. Bring it anyway — old and broken gold is specifically listed as something they buy.",
  },
  {
    title: "Documentation can matter",
    body: "Appraisals, certificates, original boxes, and extra links help. They are not required to walk in. They can change how an item is understood.",
  },
  {
    title: "The market moves",
    body: "Spot prices change. An online calculator would pretend otherwise. Platinum Pawn does the evaluation at the counter.",
  },
  {
    title: "The offer is in person",
    body: "A quote request with photos helps the shop prepare. It is not a bid. You will see a number after the item is in someone’s hands.",
  },
];

function GoldPage() {
  return (
    <main id="main">
      <div className="shell grid items-end gap-10 py-12 md:grid-cols-12 md:py-16">
        <div className="md:col-span-6">
          <SectionKicker>Gold & jewelry</SectionKicker>
          <h1 className="mt-3 font-display text-5xl leading-[0.95] tracking-tight md:text-6xl">
            Sell gold & jewelry
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            Two Connecticut counters. No invented formula. No “we pay the most”
            theatrics. Bring the metal. They’ll look at it.
          </p>
          <Button asChild className="mt-7" size="lg">
            <Link
              to="/quote"
              search={{ intent: "sell", category: "gold-jewelry" }}
            >
              Request a gold quote
            </Link>
          </Button>
        </div>
        <figure className="md:col-span-6">
          <img
            src="/images/cat-jewelry.jpg"
            alt="Gold jewelry and a coin on a green velvet pad, ready for inspection"
            className="aspect-[4/3] w-full rounded-3xl object-cover"
            width={1600}
            height={1200}
          />
        </figure>
      </div>
      <section className="border-t border-line">
        <ol className="shell max-w-3xl py-12 md:py-16">
          {POINTS.map((point, i) => (
            <li
              key={point.title}
              className="grid grid-cols-[auto_1fr] gap-5 border-t border-line py-7 first:border-t-0"
            >
              <span className="font-display text-2xl text-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h2 className="text-3xl tracking-tight">{point.title}</h2>
                <p className="mt-2 text-ink-soft">{point.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
