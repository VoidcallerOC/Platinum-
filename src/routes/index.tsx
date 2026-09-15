import { createFileRoute, Link } from "@tanstack/react-router";
import { Glyph } from "@/components/glyph";
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
        title: pageTitle("Pawn, Sell, Shop — Bristol & New Britain"),
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
      <Marquee />
      <Story />
      <Intents />
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
    <section className="section overflow-hidden bg-paper pt-[clamp(4.5rem,8vw,8.5rem)]">
      <div className="shell grid items-end gap-[clamp(2.5rem,7vw,7rem)] md:grid-cols-[minmax(0,1.35fr)_minmax(260px,0.65fr)]">
        <div className="pb-[0.35rem]">
          <p className="mb-4 text-[0.78rem] font-semibold tracking-[0.06em] text-brick uppercase">
            <span className="live-dot" aria-hidden="true" />
            Bristol & New Britain · Two counters · Connecticut
          </p>
          <h1 className="mb-6 max-w-[16ch] font-display text-[clamp(3.2rem,7.7vw,7.3rem)] font-medium leading-[0.96] tracking-[-0.04em] text-ink">
            {BUSINESS.heroLine}
          </h1>
          <p className="m-0 max-w-[52ch] text-[clamp(1.08rem,1.8vw,1.3rem)] leading-[1.58] text-muted">
            <em className="font-serif text-ink not-italic">{BUSINESS.tagline}</em>{" "}
            Shop the floor if you’re looking. Final offers happen at the counter
            — not in a website calculator.
          </p>
          <p className="mt-[1.1rem] max-w-[52ch] text-base font-semibold text-muted">
            Platinum Pawn. Bristol and New Britain, Connecticut.
            <br />
            <span className="text-muted">For the people sitting in the car with the item beside them.</span>
          </p>
          <div className="mt-[2.35rem] flex flex-wrap items-center gap-6">
            <Button asChild>
              <Link to="/quote">
                Request a quote
                <Glyph />
              </Link>
            </Button>
            <Link to="/pawn" className="text-link">
              Pawn or sell
              <Glyph className="glyph--optical-bold">↓</Glyph>
            </Link>
          </div>
          <dl className="mt-[2.6rem] grid grid-cols-3 gap-x-8 gap-y-6 border-t border-line pt-[1.3rem]">
            <div>
              <dt className="mb-[0.35rem] text-[0.78rem] font-semibold tracking-[0.04em] text-muted uppercase">
                Locations
              </dt>
              <dd className="m-0 font-serif text-[clamp(1.9rem,3.2vw,2.6rem)] leading-none tracking-[-0.03em]">
                2
              </dd>
            </div>
            <div>
              <dt className="mb-[0.35rem] text-[0.78rem] font-semibold tracking-[0.04em] text-muted uppercase">
                Serving
              </dt>
              <dd className="m-0 font-serif text-[clamp(1.9rem,3.2vw,2.6rem)] leading-none tracking-[-0.03em]">
                10<span className="align-[0.4em] font-sans text-[0.55em] font-bold text-brick">+</span>
              </dd>
            </div>
            <div>
              <dt className="mb-[0.35rem] text-[0.78rem] font-semibold tracking-[0.04em] text-muted uppercase">
                Walk-in
              </dt>
              <dd className="m-0 font-serif text-[clamp(1.9rem,3.2vw,2.6rem)] leading-none tracking-[-0.03em]">
                18<span className="align-[0.4em] font-sans text-[0.55em] font-bold text-brick">+</span>
              </dd>
            </div>
          </dl>
        </div>
        <aside className="hero-card mb-[0.2rem]" aria-label="What to bring">
          <p className="mb-4 text-[0.78rem] font-semibold tracking-[0.06em] text-ink uppercase">
            Built for the counter
          </p>
          <ul className="check-list">
            <li>Bring the item</li>
            <li>Bring government-issued photo ID</li>
            <li>Appraisal happens in store</li>
            <li>The offer is made in person</li>
          </ul>
          <p className="mt-[1.4rem] border-t border-line pt-4 text-[0.86rem] font-semibold text-muted">
            Photos help. They do not replace the inspection.
          </p>
        </aside>
      </div>
    </section>
  );
}

function Marquee() {
  const bits = [
    "Bristol",
    "New Britain",
    "Pawn",
    "Sell",
    "Gold & jewelry",
    "Watches",
    "Tools",
    "Shop in store",
    "Final offer in person",
    "Over 10 years",
  ];
  const loop = [...bits, ...bits];
  return (
    <section className="marquee-band" aria-label="Locations and intents">
      <div className="marquee">
        <div className="marquee-track">
          {loop.map((bit, i) => (
            <span key={`${bit}-${i}`}>
              {bit} <Glyph marker>◆</Glyph>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section className="section border-y border-wood bg-cream" aria-labelledby="story-title">
      <div className="shell grid items-start gap-[clamp(2.5rem,8vw,8rem)] md:grid-cols-[minmax(0,0.9fr)_minmax(20rem,1fr)]">
        <div className="md:sticky md:top-28">
          <SectionKicker dark>The starting point</SectionKicker>
          <h2
            id="story-title"
            className="mt-3 max-w-[10ch] text-[clamp(2.5rem,5vw,5.6rem)] leading-[0.96] tracking-[-0.07em]"
          >
            Pawn it if you want it back.
            <br />
            <em>Sell it if you don’t.</em>
          </h2>
        </div>
        <div className="max-w-[39rem] pt-1">
          <p className="mb-5 text-[clamp(1.05rem,1.7vw,1.35rem)] leading-[1.55] text-ink">
            The current site prepares customers for a slogan. The store prepares
            them for a counter offer. This page is the bridge — what you need to
            do, what to bring, which store, then walk in.
          </p>
          <p className="mb-5 text-[clamp(1.05rem,1.7vw,1.35rem)] leading-[1.55] text-ink">
            There is no online valuation. There is no fake inventory. There is a
            quote request that gets you to the right counter with the right
            expectation.
          </p>
          <p className="story-formula">
            <span>Intent</span>
            <b>→</b>
            <span>Quote</span>
            <b>→</b>
            <span>Visit</span>
            <b>→</b>
            <span>Offer</span>
          </p>
        </div>
      </div>
    </section>
  );
}

function Intents() {
  const items = [
    {
      n: "01",
      title: "Pawn",
      body: "Need cash, keep the option. The item is collateral. You still own it while the loan is open.",
      to: "/pawn" as const,
    },
    {
      n: "02",
      title: "Sell",
      body: "Ready to part with it. Gold, a watch, tools you don’t use. Offer after inspection.",
      to: "/sell" as const,
    },
    {
      n: "03",
      title: "Shop",
      body: "Merchandise moves. The floor is the catalog. This is not an online store.",
      to: "/shop" as const,
    },
    {
      n: "04",
      title: "Visit",
      body: "Bristol and New Britain. Two addresses, two phones, two Sunday hours.",
      to: "/visit" as const,
    },
  ];
  return (
    <section className="section" aria-labelledby="intent-title">
      <div className="shell">
        <div className="max-w-[47rem]">
          <SectionKicker index="01">What do you need to do?</SectionKicker>
          <h2
            id="intent-title"
            className="mb-5 text-[clamp(2.6rem,5.5vw,5.4rem)] font-semibold tracking-[-0.055em]"
          >
            Four paths. One counter.
          </h2>
          <p className="m-0 max-w-[48ch] text-muted">
            Start with the job, not the slogan. Request a quote when you already
            have the item in hand.
          </p>
        </div>
        <div className="mt-[clamp(2.8rem,5vw,5.3rem)] grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <Link
              key={item.n}
              to={item.to}
              className="flex min-h-[19rem] flex-col border border-wood bg-paper p-6 no-underline"
            >
              <p className="mb-auto text-[0.78rem] font-bold tracking-[0.04em] text-brick">
                {item.n}
              </p>
              <h3 className="mt-9 mb-[0.85rem] text-[1.5rem] font-semibold tracking-[-0.04em]">
                {item.title}
              </h3>
              <p className="m-0 text-muted">{item.body}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function PawnSell() {
  return (
    <section className="section bg-cream" aria-labelledby="pawn-sell-heading">
      <div className="shell">
        <SectionKicker index="02">Pawn or sell</SectionKicker>
        <h2
          id="pawn-sell-heading"
          className="mt-3 max-w-3xl text-[clamp(2.6rem,5.5vw,5.4rem)] leading-[1.02] tracking-[-0.055em]"
        >
          Need cash, keep the option.
          <br />
          <em>Ready to part with it.</em>
        </h2>
        <div className="mt-[2.4rem] grid gap-4 md:grid-cols-2">
          <article className="border border-wood bg-cream px-[1.4rem] py-[1.5rem]">
            <p className="mb-4 text-[0.76rem] font-bold tracking-[0.08em] text-muted uppercase">
              Pawn
            </p>
            <h3 className="text-[1.55rem] tracking-[-0.04em]">
              Need cash, keep the option.
            </h3>
            <p className="mt-3 text-muted">
              The item is collateral. You still own it while the loan is open.
              No credit check. Redeem on the shop’s published terms.
            </p>
            <ol className="mt-6 list-none p-0">
              {PAWN_STEPS.map((step) => (
                <li
                  key={step.title}
                  className="border-t border-line py-[0.7rem] text-[0.98rem] font-medium first:border-t-0 first:pt-0"
                >
                  {step.title}
                </li>
              ))}
            </ol>
            <Button asChild className="mt-8" variant="outline">
              <Link to="/quote" search={{ intent: "pawn" }}>
                Start a pawn request
                <Glyph />
              </Link>
            </Button>
          </article>
          <article className="border border-muted bg-paper-2 px-[1.4rem] py-[1.5rem]">
            <p className="mb-4 text-[0.76rem] font-bold tracking-[0.08em] text-brick uppercase">
              Sell
            </p>
            <h3 className="text-[1.55rem] tracking-[-0.04em]">
              Ready to part with it.
            </h3>
            <p className="mt-3 text-muted">
              Old gold, a watch you don’t wear, tools you don’t use. Bring it
              in. The offer is made after the item is inspected — not before.
            </p>
            <ol className="mt-6 list-none p-0">
              {SELL_STEPS.map((step) => (
                <li
                  key={step.title}
                  className="border-t border-line py-[0.7rem] text-[0.98rem] font-medium first:border-t-0 first:pt-0"
                >
                  {step.title}
                </li>
              ))}
            </ol>
            <Button asChild className="mt-8">
              <Link to="/quote" search={{ intent: "sell" }}>
                Start a sell request
                <Glyph />
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
    <section className="section" aria-labelledby="quote-heading">
      <div className="shell">
        <div className="flex flex-col items-start justify-between gap-8 border-2 border-brick bg-cream p-[clamp(1.35rem,3vw,2rem)] shadow-[0.45rem_0.45rem_0_rgb(239_231_206/0.14)] md:flex-row md:items-center">
          <div>
            <SectionKicker index="03">Request a quote</SectionKicker>
            <h2
              id="quote-heading"
              className="m-0 text-[clamp(1.05rem,2vw,1.3rem)] font-semibold tracking-tight"
            >
              Tell us what you’re bringing. Then come in.
            </h2>
            <p className="mt-2 max-w-xl text-muted">{EXPECTATION_LINE}</p>
          </div>
          <Button asChild size="lg" className="w-full md:w-auto">
            <Link to="/quote">
              Request a quote
              <Glyph />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function GoldBand() {
  return (
    <section className="section border-t border-line" aria-labelledby="gold-heading">
      <div className="shell grid items-center gap-10 md:grid-cols-12 md:gap-16">
        <figure className="border border-wood md:col-span-6 md:col-start-7 md:row-start-1">
          <img
            src="/images/cat-jewelry.jpg"
            alt="Gold chains, rings, and a coin on a green velvet appraisal pad"
            className="aspect-[4/5] w-full object-cover"
            width={1600}
            height={2000}
          />
        </figure>
        <div className="md:col-span-5 md:row-start-1">
          <SectionKicker index="04">Gold & jewelry</SectionKicker>
          <h2
            id="gold-heading"
            className="mt-3 text-[clamp(2.2rem,4.5vw,3.8rem)] leading-[1.05] tracking-tight"
          >
            Broken, old, or still on the chain — they look at the metal.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Gold, silver, diamonds, coins, and bullion are evaluated in store.
            Condition matters. Documentation can matter. The market moves.
            There is no online formula on this site, because there isn’t one
            that replaces the counter.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-5">
            <Button asChild>
              <Link
                to="/quote"
                search={{ intent: "sell", category: "gold-jewelry" }}
              >
                Sell gold & jewelry
                <Glyph />
              </Link>
            </Button>
            <Link to="/gold" className="text-link">
              How gold is handled
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ShopBand() {
  return (
    <section className="section bg-cream" aria-labelledby="shop-heading">
      <div className="shell">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <SectionKicker index="05">Shop in store</SectionKicker>
            <h2
              id="shop-heading"
              className="mt-3 text-[clamp(2.2rem,4.5vw,3.8rem)] leading-[1.05] tracking-tight"
            >
              Merchandise moves. The floor is the catalog.
            </h2>
            <p className="mt-4 text-lg text-muted">
              Jewelry, watches, handbags, tools, electronics, instruments,
              collectibles. Stock changes as people pawn and sell. This is not
              an online store.
            </p>
          </div>
          <Link to="/shop" className="text-link whitespace-nowrap">
            See what to look for
            <Glyph />
          </Link>
        </div>
        <ul className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {SHOP_CATEGORIES.slice(0, 8).map((cat) => (
            <li key={cat.id} className="border border-wood bg-paper">
              <Link
                to="/shop"
                className="group block no-underline"
                aria-label={`Shop ${cat.short} in store`}
              >
                {cat.image ? (
                  <img
                    src={cat.image}
                    alt=""
                    className="aspect-[4/5] w-full object-cover"
                  />
                ) : null}
                <div className="px-[1.25rem] py-[1.15rem]">
                  <p className="text-[0.76rem] font-semibold tracking-[0.05em] text-brick uppercase">
                    Floor
                  </p>
                  <p className="mt-2 text-[1.15rem] font-semibold tracking-tight group-hover:text-brick">
                    {cat.short}
                  </p>
                </div>
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
    <section className="section border-t border-line" aria-labelledby="locations-heading">
      <div className="shell">
        <SectionKicker index="06">Two stores</SectionKicker>
        <h2
          id="locations-heading"
          className="mt-3 max-w-3xl text-[clamp(2.2rem,4.5vw,3.8rem)] leading-[1.05] tracking-tight"
        >
          Bristol and New Britain are not the same counter.
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {LOCATION_LIST.map((loc, i) => (
            <article
              key={loc.id}
              className={
                i === 1
                  ? "relative flex flex-col border-2 border-brick bg-paper p-6 shadow-[0.35rem_0.35rem_0_var(--color-brick)]"
                  : "relative flex flex-col border-2 border-wood bg-paper p-6 shadow-[0.35rem_0.35rem_0_var(--color-wood)]"
              }
            >
              <span
                className="absolute top-[0.85rem] right-[0.85rem] size-[0.7rem] rounded-[0.1rem] bg-brick"
                aria-hidden="true"
              />
              <h3 className="text-[1.7rem] tracking-[-0.04em]">{loc.city}</h3>
              <p className="mt-2 text-lg">{loc.street}</p>
              <p className="text-muted">{loc.cityStateZip}</p>
              <p className="mt-4 font-medium">
                <a
                  href={loc.phoneHref}
                  className="underline decoration-brick decoration-[0.16em] underline-offset-[0.23em]"
                >
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
                  <a href={loc.phoneHref}>Call</a>
                </Button>
                <Button asChild size="sm" variant="outline">
                  <a href={loc.mapsUrl} target="_blank" rel="noreferrer">
                    Directions
                    <Glyph />
                  </a>
                </Button>
                <Link
                  to="/visit/$slug"
                  params={{ slug: loc.id }}
                  className="text-link inline-flex min-h-11 items-center"
                >
                  Store details
                </Link>
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
    <section className="section bg-cream" aria-labelledby="trust-heading">
      <div className="shell grid gap-[clamp(3rem,10vw,10rem)] md:grid-cols-[minmax(260px,0.72fr)_minmax(0,1fr)]">
        <div className="md:sticky md:top-28 md:self-start">
          <SectionKicker index="07">How this shop works</SectionKicker>
          <h2
            id="trust-heading"
            className="mt-3 text-[clamp(2.2rem,4.5vw,3.8rem)] leading-[1.05] tracking-tight"
          >
            Trust is operational, not a slogan.
          </h2>
        </div>
        <ol className="m-0 list-none border-t border-line p-0">
          {points.map((point, i) => (
            <li
              key={point.title}
              className="grid grid-cols-[3rem_minmax(0,1fr)] gap-4 border-b border-line py-[1.7rem]"
            >
              <span className="text-[0.78rem] font-bold text-brick">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="m-0 mb-2 text-[1.55rem] font-semibold tracking-[-0.04em]">
                  {point.title}
                </h3>
                <p className="m-0 max-w-[42ch] text-muted">{point.body}</p>
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
    <section className="section border-t border-line" aria-labelledby="faq-heading">
      <div className="shell">
        <SectionKicker index="08">Questions</SectionKicker>
        <h2
          id="faq-heading"
          className="mt-3 text-[clamp(2.2rem,4.5vw,3.8rem)] leading-[1.05] tracking-tight"
        >
          Straight answers.
        </h2>
        <div className="mt-10 grid gap-3 md:grid-cols-2 md:gap-x-5">
          {FAQS.map((item) => (
            <details
              key={item.q}
              className="border border-wood bg-cream px-[1.05rem] py-[0.95rem]"
            >
              <summary className="cursor-pointer list-none font-bold text-ink marker:content-none [&::-webkit-details-marker]:hidden">
                {item.q}
              </summary>
              <p className="mt-[0.7rem] text-sm leading-relaxed text-muted">
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
    <section className="section border-t border-wood bg-cream">
      <div className="shell grid items-start gap-[clamp(3rem,10vw,10rem)] md:grid-cols-[minmax(0,0.86fr)_minmax(340px,0.8fr)]">
        <div>
          <SectionKicker>Walk in ready</SectionKicker>
          <h2 className="mb-5 max-w-[14ch] text-[clamp(2.6rem,5.5vw,5.4rem)] font-semibold tracking-[-0.055em]">
            Sitting in the car with the item beside you?
          </h2>
          <p className="m-0 max-w-[48ch] text-muted">
            Request a quote, pick a store, then walk in. The website prepares the
            visit. The counter makes the offer.
          </p>
        </div>
        <div className="flex flex-col justify-end gap-3">
          <Button asChild size="lg">
            <Link to="/quote">
              Request a quote
              <Glyph />
            </Link>
          </Button>
          <Link to="/visit" className="text-link">
            Get directions
            <Glyph />
          </Link>
        </div>
      </div>
    </section>
  );
}
