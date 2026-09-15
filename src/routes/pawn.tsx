import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionKicker } from "@/components/section-kicker";
import { Button } from "@/components/ui/button";
import { PAWN_STEPS } from "@/lib/business";
import { pageTitle } from "@/lib/seo";

export const Route = createFileRoute("/pawn")({
  head: () => ({
    meta: [
      { title: pageTitle("Pawn") },
      {
        name: "description",
        content:
          "Pawn at Platinum Pawn in Bristol or New Britain. Bring the item and a government-issued photo ID. Appraisal and offer happen in store. Pawn it if you want it back.",
      },
    ],
  }),
  component: PawnPage,
});

function PawnPage() {
  return (
    <main id="main" className="shell py-12 md:py-16">
      <SectionKicker>Pawn</SectionKicker>
      <h1 className="mt-3 max-w-3xl font-display text-5xl font-bold leading-[0.9] tracking-[-0.02em] md:text-6xl">
        Pawn it if you <em>want it back.</em>
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
        A pawn loan is cash against an item you still intend to redeem. No
        credit check. The item is held as collateral. You leave with cash and a
        ticket. Final terms are the ones you sign at the counter.
      </p>
      <div className="mt-7 flex flex-wrap gap-3">
        <Button asChild>
          <Link to="/quote" search={{ intent: "pawn" }}>
            Request a pawn quote
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/visit">Pick a location</Link>
        </Button>
      </div>

      <ol className="mt-14 max-w-3xl">
        {PAWN_STEPS.map((step, i) => (
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
