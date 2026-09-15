import { createFileRoute, Link } from "@tanstack/react-router";
import { Glyph } from "@/components/glyph";
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
      <h1 className="mt-3 max-w-[16ch] font-display text-[clamp(3.2rem,6vw,5.6rem)] font-medium leading-[0.96] tracking-[-0.04em]">
        Pawn it if you want it back.
      </h1>
      <p className="mt-5 max-w-[52ch] text-lg leading-relaxed text-muted">
        A pawn loan is cash against an item you still intend to redeem. No
        credit check. The item is held as collateral. You leave with cash and a
        ticket. Final terms are the ones you sign at the counter.
      </p>
      <div className="mt-7 flex flex-wrap items-center gap-6">
        <Button asChild>
          <Link to="/quote" search={{ intent: "pawn" }}>
            Request a pawn quote
            <Glyph />
          </Link>
        </Button>
        <Link to="/visit" className="text-link">
          Pick a location
        </Link>
      </div>

      <ol className="mt-14 max-w-3xl list-none border-t border-line p-0">
        {PAWN_STEPS.map((step, i) => (
          <li
            key={step.title}
            className="grid grid-cols-[3rem_minmax(0,1fr)] gap-4 border-b border-line py-[1.7rem]"
          >
            <span className="text-[0.78rem] font-bold text-brick">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h2 className="m-0 mb-2 text-[1.55rem] font-semibold tracking-[-0.04em]">
                {step.title}
              </h2>
              <p className="m-0 max-w-[42ch] text-muted">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </main>
  );
}
