import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  MapPinned,
  Phone,
} from "lucide-react";
import { SectionKicker } from "@/components/section-kicker";
import { Button } from "@/components/ui/button";
import {
  BUSINESS,
  EXPECTATION_LINE,
  FAQS,
  LOCATION_LIST,
  PAWN_STEPS,
  SELL_STEPS,
  SHOP_CATEGORIES,
} from "@/lib/business";
import { pageTitle } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: pageTitle(
          "Pawn, Sell, Shop — Bristol & New Britain",
        ),
      },
      {
        name: "description",
        content:
          "Platinum Pawn in Bristol and New Britain, CT. Pawn it if you want it back. Sell it if you don’t. Request a quote, then come in for the offer.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main id="main">
      <Hero />
      <PawnSell />
      <QuoteBand />
      <GoldBand />
      <ShopBand />
      <LocationsBand />
      <TrustBand />
      <FaqBand />
      <FinalCta />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="shell grid items-end gap-10 py-12 md:grid-cols-12 md:py-16 lg:py-20">
        <div className="md:col-span-7">
          <p className="text-[0.72rem] font-semibold tracking-[0.18em] text-muted uppercase">
            Two Connecticut shops · Bristol & New Britain
          </p>
          <h1 className="mt-4 max-w-[14ch] font-display text-[3.1rem] leading-[0.92] tracking-[-0.045em] text-ink sm:text-6xl lg:text-[5.2rem]">
            {BUSINESS.heroLine}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            {BUSINESS.tagline} Shop the floor if you’re looking. Final offers
            happen at the counter — not in a website calculator.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-4">
            <IntentLink to="/pawn" label="Pawn" hint="Want it back" />
            <IntentLink to="/sell" label="Sell" hint="Let it go" />
            <IntentLink to="/shop" label="Shop" hint="See the floor" />
            <IntentLink to="/visit" label="Visit" hint="Two stores" />
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <Link to="/quote">
                Request a quote
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <p className="text-sm text-muted">
              Photos help. The offer is made in person.
            </p>
          </div>
        </div>
        <figure className="md:col-span-5">
          <img
            src="/images/hero-counter.jpg"
            alt="Jewelry, a watch, and a ring on a green felt pad at a pawn counter"
            className="aspect-[5/4] w-full rounded-lg object-cover"
            width={1600}
            height={1280}
          />
          <figcaption className="mt-3 text-sm text-muted">
            Bring the item. Bring ID. The appraisal happens here.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function IntentLink({
  to,
  label,
  hint,
}: {
  to: "/pawn" | "/sell" | "/shop" | "/visit";
  label: string;
  hint: string;
}) {
  return (
    <Link
      to={to}
      className="group flex min-h-[5.5rem] flex-col justify-between rounded-lg bg-cream px-4 py-3 no-underline shadow-[0_0_0_1px_var(--color-line)] transition-colors hover:bg-paper-2"
    >
      <span className="font-display text-2xl tracking-tight text-ink">
        {label}
      </span>
      <span className="text-xs font-medium tracking-wide text-muted uppercase">
        {hint}
      </span>
    </Link>
  );
}

function PawnSell() {
  return (
    <section className="border-b border-line py-16 md:py-24" aria-labelledby="pawn-sell-heading">
      <div className="shell">
        <SectionKicker index="01">Pawn or sell</SectionKicker>
        <h2
          id="pawn-sell-heading"
          className="mt-3 max-w-3xl font-display text-4xl tracking-tight md:text-5xl"
        >
          Pawn it if you want it back.
          <br />
          Sell it if you don’t.
        </h2>
        <div className="mt-12 grid gap-px bg-line md:grid-cols-2">
          <article className="bg-paper px-0 py-8 md:pr-10 md:pl-0">
            <p className="text-[0.72rem] font-semibold tracking-[0.16em] text-green uppercase">
              Pawn
            </p>
            <h3 className="mt-2 font-display text-3xl tracking-tight">
              Need cash, keep the option.
            </h3>
            <p className="mt-3 text-ink-soft">
              The item is collateral. You still own it while the loan is open.
              No credit check. Redeem on the shop’s published terms.
            </p>
            <ol className="mt-6 space-y-3">
              {PAWN_STEPS.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="w-8 shrink-0 font-display text-xl text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="font-medium">{step.title}.</span>{" "}
                    <span className="text-ink-soft">{step.body}</span>
                  </span>
                </li>
              ))}
            </ol>
            <Button asChild className="mt-8" variant="outline">
              <Link to="/quote" search={{ intent: "pawn" }}>
                Start a pawn request
              </Link>
            </Button>
          </article>
          <article className="bg-paper px-0 py-8 md:pr-0 md:pl-10">
            <p className="text-[0.72rem] font-semibold tracking-[0.16em] text-green uppercase">
              Sell
            </p>
            <h3 className="mt-2 font-display text-3xl tracking-tight">
              Ready to part with it.
            </h3>
            <p className="mt-3 text-ink-soft">
              Old gold, a watch you don’t wear, tools you don’t use. Bring it
              in. The offer is made after the item is inspected — not before.
            </p>
            <ol className="mt-6 space-y-3">
              {SELL_STEPS.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="w-8 shrink-0 font-display text-xl text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="font-medium">{step.title}.</span>{" "}
                    <span className="text-ink-soft">{step.body}</span>
                  </span>
                </li>
              ))}
            </ol>
            <Button asChild className="mt-8">
              <Link to="/quote" search={{ intent: "sell" }}>
                Start a sell request
              </Link>
            </Button>
          </article>
        </div>
      </div>
    </section>
  );
}

function QuoteBand() {
  return (
    <section className="bg-green-deep py-16 text-cream md:py-20" aria-labelledby="quote-heading">
      <div className="shell grid gap-10 md:grid-cols-12">
        <div className="md:col-span-7">
          <SectionKicker index="02">Request a quote</SectionKicker>
          <h2
            id="quote-heading"
            className="mt-3 font-display text-4xl tracking-tight text-cream md:text-5xl"
          >
            Tell us what you’re bringing.
            <br />
            Then come in.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-cream/75">
            {EXPECTATION_LINE} This is how the website should work — as a
            bridge from your passenger seat to the counter.
          </p>
        </div>
        <div className="flex flex-col justify-end gap-3 md:col-span-5">
          <Button asChild size="lg" variant="cream">
            <Link to="/quote">
              Request a quote
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <p className="text-sm text-cream/60">
            Choose pawn or sell, the item type, and which store. Attach photos
            if you have them.
          </p>
        </div>
      </div>
    </section>
  );
}

function GoldBand() {
  return (
    <section className="border-b border-line py-16 md:py-24" aria-labelledby="gold-heading">
      <div className="shell grid items-center gap-10 md:grid-cols-12">
        <figure className="md:col-span-6 md:col-start-7 md:row-start-1">
          <img
            src="/images/cat-jewelry.jpg"
            alt="Gold chains, rings, and a coin on a green velvet appraisal pad"
            className="aspect-[4/3] w-full rounded-lg object-cover"
            width={1600}
            height={1200}
          />
        </figure>
        <div className="md:col-span-5 md:row-start-1">
          <SectionKicker index="03">Gold & jewelry</SectionKicker>
          <h2
            id="gold-heading"
            className="mt-3 font-display text-4xl tracking-tight md:text-5xl"
          >
            Broken, old, or still on the chain — they look at the metal.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            Gold, silver, diamonds, coins, and bullion are evaluated in store.
            Condition matters. Documentation can matter. The market moves.
            There is no online formula on this site, because there isn’t one
            that replaces the counter.
          </p>
          <Button asChild className="mt-7">
            <Link
              to="/quote"
              search={{ intent: "sell", category: "gold-jewelry" }}
            >
              Sell gold & jewelry
            </Link>
          </Button>
          <Link
            to="/gold"
            className="ml-4 inline-flex min-h-12 items-center text-sm font-medium text-green underline underline-offset-4"
          >
            How gold is handled
          </Link>
        </div>
      </div>
    </section>
  );
}

function ShopBand() {
  return (
    <section className="border-b border-line py-16 md:py-24" aria-labelledby="shop-heading">
      <div className="shell">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <SectionKicker index="04">Shop in store</SectionKicker>
            <h2
              id="shop-heading"
              className="mt-3 font-display text-4xl tracking-tight md:text-5xl"
            >
              Merchandise moves. The floor is the catalog.
            </h2>
            <p className="mt-4 text-lg text-ink-soft">
              Jewelry, watches, handbags, tools, electronics, instruments,
              collectibles. Stock changes as people pawn and sell. This is not
              an online store.
            </p>
          </div>
          <Button asChild variant="outline">
            <Link to="/shop">See what to look for</Link>
          </Button>
        </div>
        <ul className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
          {SHOP_CATEGORIES.slice(0, 8).map((cat) => (
            <li key={cat.id} className="group">
              <Link
                to="/shop"
                className="block no-underline"
                aria-label={`Shop ${cat.short} in store`}
              >
                {cat.image ? (
                  <img
                    src={cat.image}
                    alt=""
                    className="aspect-[4/3] w-full rounded-md object-cover"
                  />
                ) : null}
                <p className="mt-2 font-medium">{cat.short}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function LocationsBand() {
  return (
    <section className="border-b border-line py-16 md:py-24" aria-labelledby="locations-heading">
      <div className="shell">
        <SectionKicker index="05">Two stores</SectionKicker>
        <h2
          id="locations-heading"
          className="mt-3 max-w-3xl font-display text-4xl tracking-tight md:text-5xl"
        >
          Bristol and New Britain are not the same counter.
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {LOCATION_LIST.map((loc) => (
            <article
              key={loc.id}
              className="flex flex-col border-t border-ink pt-6"
            >
              <h3 className="font-display text-3xl tracking-tight">{loc.city}</h3>
              <p className="mt-2 text-lg">{loc.street}</p>
              <p className="text-muted">{loc.cityStateZip}</p>
              <p className="mt-4 font-medium">
                <a href={loc.phoneHref} className="text-ink underline-offset-4 hover:underline">
                  {loc.phone}
                </a>
              </p>
              <dl className="mt-5 space-y-1 text-sm">
                {loc.hours.map((h) => (
                  <div key={h.label} className="flex justify-between gap-4">
                    <dt className="text-muted">{h.label}</dt>
                    <dd>{h.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-6 flex flex-wrap gap-2">
                <Button asChild size="sm">
                  <a href={loc.phoneHref}>
                    <Phone className="size-3.5" />
                    Call
                  </a>
                </Button>
                <Button asChild size="sm" variant="outline">
                  <a href={loc.mapsUrl} target="_blank" rel="noreferrer">
                    <MapPinned className="size-3.5" />
                    Directions
                  </a>
                </Button>
                <Button asChild size="sm" variant="ghost">
                  <Link to="/visit/$slug" params={{ slug: loc.id }}>
                    Store details
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustBand() {
  const points = [
    {
      title: "Two physical storefronts",
      body: "294 Middle Street, Bristol. 57 Broad Street, New Britain. Real counters, published hours, direct phone lines.",
    },
    {
      title: "A published process",
      body: "Bring the item. Bring government-issued photo ID. Appraisal in store. Offer at the counter. Eighteen and older.",
    },
    {
      title: "Confidential, collateral-backed",
      body: "The shop states transactions are confidential, pawn loans skip credit checks, and collateral in pawn is insured for the loan value.",
    },
    {
      title: "Local for over 10 years",
      body: "Serving customers from Bristol, New Britain, and surrounding towns. The website should finally match that presence.",
    },
  ];

  return (
    <section className="border-b border-line py-16 md:py-24" aria-labelledby="trust-heading">
      <div className="shell grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <SectionKicker index="06">How this shop works</SectionKicker>
          <h2
            id="trust-heading"
            className="mt-3 font-display text-4xl tracking-tight"
          >
            Trust is operational, not a slogan.
          </h2>
        </div>
        <ol className="md:col-span-8">
          {points.map((point, i) => (
            <li
              key={point.title}
              className="grid grid-cols-[auto_1fr] gap-5 border-t border-line py-6"
            >
              <span className="font-display text-xl text-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-2xl tracking-tight">
                  {point.title}
                </h3>
                <p className="mt-2 text-ink-soft">{point.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function FaqBand() {
  return (
    <section className="border-b border-line py-16 md:py-24" aria-labelledby="faq-heading">
      <div className="shell">
        <SectionKicker index="07">Questions</SectionKicker>
        <h2
          id="faq-heading"
          className="mt-3 font-display text-4xl tracking-tight"
        >
          Straight answers.
        </h2>
        <div className="mt-10 columns-1 gap-x-12 md:columns-2">
          {FAQS.map((item) => (
            <details
              key={item.q}
              className="mb-3 break-inside-avoid rounded-lg bg-cream px-5 py-4 shadow-[0_0_0_1px_var(--color-line)]"
            >
              <summary className="cursor-pointer list-none font-medium text-ink marker:content-none [&::-webkit-details-marker]:hidden">
                {item.q}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="py-16 md:py-24">
      <div className="shell">
        <h2 className="max-w-3xl font-display text-4xl tracking-tight md:text-6xl">
          Sitting in the car with the item beside you?
        </h2>
        <p className="mt-5 max-w-xl text-lg text-ink-soft">
          Request a quote, pick a store, then walk in. The website prepares the
          visit. The counter makes the offer.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link to="/quote">Request a quote</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/visit">Get directions</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
