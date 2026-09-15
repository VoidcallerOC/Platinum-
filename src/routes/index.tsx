import { createFileRoute, Link } from "@tanstack/react-router";
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
    <section className="relative overflow-hidden">
      <div className="shell grid items-end gap-[clamp(2.5rem,7vw,7rem)] py-[clamp(4.5rem,8vw,8.5rem)] md:grid-cols-12">
        <div className="md:col-span-7">
          <p className="kicker mb-0">Two Connecticut shops · Bristol & New Britain</p>
          <h1 className="mt-5 max-w-[14ch] font-display text-[clamp(3.2rem,8vw,7rem)] font-bold leading-[0.9] tracking-[-0.02em] text-ink">
            What do you need to do <em>with it?</em>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            <em className="font-medium text-ink not-italic">{BUSINESS.tagline}</em>{" "}
            Shop the floor if you’re looking. Final offers happen at the counter
            — not in a website calculator.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <IntentLink to="/pawn" label="Pawn" hint="Want it back" index="01" />
            <IntentLink to="/sell" label="Sell" hint="Let it go" index="02" />
            <IntentLink to="/shop" label="Shop" hint="See the floor" index="03" />
            <IntentLink to="/visit" label="Visit" hint="Two stores" index="04" />
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Button asChild size="lg">
              <Link to="/quote">Request a quote</Link>
            </Button>
            <p className="text-sm text-muted">
              Photos help. The offer is made in person.
            </p>
          </div>
        </div>
        <figure className="md:col-span-5">
          <div className="photo-mat">
            <img
              src="/images/hero-counter.jpg"
              alt="Jewelry, a watch, and a ring on a green felt pad at a pawn counter"
              className="aspect-[4/5] w-full object-cover"
              width={1600}
              height={2000}
            />
          </div>
          <figcaption className="ticket-caption">
            <span className="ticket-no block text-sm tracking-[0.16em] uppercase">
              Counter
            </span>
            <span className="mt-1 block text-sm text-ink-soft">
              Bring the item. Bring ID. The appraisal happens here.
            </span>
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
  index,
}: {
  to: "/pawn" | "/sell" | "/shop" | "/visit";
  label: string;
  hint: string;
  index: string;
}) {
  return (
    <Link
      to={to}
      className="ticket group flex min-h-[6.1rem] flex-col justify-between px-4 py-4 no-underline transition-colors hover:border-gold"
    >
      <span className="ticket-no text-sm">{index}</span>
      <span className="font-display text-[1.85rem] leading-none tracking-wide text-ink group-hover:text-gold">
        {label}
      </span>
      <span className="text-[0.72rem] font-semibold tracking-[0.14em] text-muted uppercase">
        {hint}
      </span>
    </Link>
  );
}

function Marquee() {
  const bits = [
    "Bristol",
    "New Britain",
    "Gold",
    "Jewelry",
    "Watches",
    "Tools",
    "Electronics",
    "Handbags",
    "Pawn",
    "Sell",
    "Shop in store",
  ];
  const loop = [...bits, ...bits];
  return (
    <div className="marquee-band" aria-hidden="true">
      <div className="marquee">
        <div className="marquee-track">
          {loop.map((bit, i) => (
            <span key={`${bit}-${i}`}>{bit}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function PawnSell() {
  return (
    <section className="section felt" aria-labelledby="pawn-sell-heading">
      <div className="shell">
        <SectionKicker index="01">Pawn or sell</SectionKicker>
        <h2
          id="pawn-sell-heading"
          className="mt-3 max-w-3xl text-[clamp(2.4rem,5vw,4.6rem)] leading-[1.02] tracking-tight"
        >
          Pawn it if you want it back.
          <br />
          <em>Sell it if you don’t.</em>
        </h2>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <article className="ticket px-6 py-7 md:px-8">
            <p className="kicker mb-1">Pawn</p>
            <h3 className="mt-2 text-2xl tracking-tight">
              Need cash, keep the option.
            </h3>
            <p className="mt-3 text-ink-soft">
              The item is collateral. You still own it while the loan is open.
              No credit check. Redeem on the shop’s published terms.
            </p>
            <ol className="mt-6 space-y-3">
              {PAWN_STEPS.map((step, i) => (
                <li
                  key={step.title}
                  className="flex gap-4 border-t border-line pt-3 first:border-t-0 first:pt-0"
                >
                  <span className="ticket-no w-8 shrink-0 text-xl">
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
          <article className="ticket border-gold px-6 py-7 md:px-8">
            <p className="kicker mb-1">Sell</p>
            <h3 className="mt-2 text-2xl tracking-tight">
              Ready to part with it.
            </h3>
            <p className="mt-3 text-ink-soft">
              Old gold, a watch you don’t wear, tools you don’t use. Bring it
              in. The offer is made after the item is inspected — not before.
            </p>
            <ol className="mt-6 space-y-3">
              {SELL_STEPS.map((step, i) => (
                <li
                  key={step.title}
                  className="flex gap-4 border-t border-line pt-3 first:border-t-0 first:pt-0"
                >
                  <span className="ticket-no w-8 shrink-0 text-xl">
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
    <section className="section" aria-labelledby="quote-heading">
      <div className="shell grid gap-10 md:grid-cols-12">
        <div className="md:col-span-7">
          <SectionKicker index="02">Request a quote</SectionKicker>
          <h2
            id="quote-heading"
            className="mt-3 text-[clamp(2.4rem,5vw,4.6rem)] leading-[1.02] tracking-tight"
          >
            Tell us what you’re bringing.
            <br />
            Then come in.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
            {EXPECTATION_LINE} This is the bridge from the passenger seat to the
            counter.
          </p>
        </div>
        <div className="flex flex-col justify-end gap-3 md:col-span-5">
          <Button asChild size="lg">
            <Link to="/quote">Request a quote</Link>
          </Button>
          <p className="text-sm text-muted">
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
    <section className="section border-t border-line" aria-labelledby="gold-heading">
      <div className="shell grid items-center gap-10 md:grid-cols-12 md:gap-16">
        <figure className="md:col-span-6 md:col-start-7 md:row-start-1">
          <div className="photo-mat">
            <img
              src="/images/cat-jewelry.jpg"
              alt="Gold chains, rings, and a coin on a green velvet appraisal pad"
              className="aspect-[4/3] w-full object-cover"
              width={1600}
              height={1200}
            />
          </div>
        </figure>
        <div className="md:col-span-5 md:row-start-1">
          <SectionKicker index="03">Gold & jewelry</SectionKicker>
          <h2
            id="gold-heading"
            className="mt-3 text-[clamp(2.2rem,4.5vw,3.8rem)] leading-[1.05] tracking-tight"
          >
            Broken, old, or still on the chain — they look at <em>the metal.</em>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
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
    <section className="section felt" aria-labelledby="shop-heading">
      <div className="shell">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <SectionKicker index="04">Shop in store</SectionKicker>
            <h2
              id="shop-heading"
              className="mt-3 text-[clamp(2.2rem,4.5vw,3.8rem)] leading-[1.05] tracking-tight"
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
            <li key={cat.id}>
              <Link
                to="/shop"
                className="group block no-underline"
                aria-label={`Shop ${cat.short} in store`}
              >
                {cat.image ? (
                  <div className="photo-mat">
                    <img
                      src={cat.image}
                      alt=""
                      className="aspect-[4/5] w-full object-cover"
                    />
                  </div>
                ) : null}
                <p className="mt-2 font-display text-lg font-bold tracking-wide group-hover:text-gold">
                  {cat.short}
                </p>
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
        <SectionKicker index="05">Two stores</SectionKicker>
        <h2
          id="locations-heading"
          className="mt-3 max-w-3xl text-[clamp(2.2rem,4.5vw,3.8rem)] leading-[1.05] tracking-tight"
        >
          Bristol and New Britain are not the same counter.
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {LOCATION_LIST.map((loc) => (
            <article
              key={loc.id}
              className="ticket flex flex-col p-6"
            >
              <h3 className="font-display text-3xl font-bold tracking-wide">
                {loc.city}
              </h3>
              <p className="mt-2 text-lg">{loc.street}</p>
              <p className="text-muted">{loc.cityStateZip}</p>
              <p className="mt-4 font-medium">
                <a
                  href={loc.phoneHref}
                  className="text-ink underline-offset-4 hover:underline"
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
      body: "Transactions are confidential. Pawn loans skip credit checks. Collateral in pawn is insured for the loan value.",
    },
    {
      title: "Local for over 10 years",
      body: "Serving customers from Bristol, New Britain, and surrounding towns. Walk in. They’ll look at it.",
    },
  ];

  return (
    <section className="section felt" aria-labelledby="trust-heading">
      <div className="shell grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <SectionKicker index="06">How this shop works</SectionKicker>
          <h2
            id="trust-heading"
            className="mt-3 text-[clamp(2.2rem,4.5vw,3.8rem)] leading-[1.05] tracking-tight"
          >
            Bring the item. Get an answer at the counter.
          </h2>
        </div>
        <ol className="md:col-span-8">
          {points.map((point, i) => (
            <li
              key={point.title}
              className="grid grid-cols-[auto_1fr] gap-5 border-t border-line py-6"
            >
              <span className="ticket-no text-xl">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-2xl tracking-tight">{point.title}</h3>
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
    <section className="section border-t border-line" aria-labelledby="faq-heading">
      <div className="shell">
        <SectionKicker index="07">Questions</SectionKicker>
        <h2
          id="faq-heading"
          className="mt-3 text-[clamp(2.2rem,4.5vw,3.8rem)] leading-[1.05] tracking-tight"
        >
          Straight answers.
        </h2>
        <div className="mt-10 columns-1 gap-x-12 md:columns-2">
          {FAQS.map((item) => (
            <details
              key={item.q}
              className="mb-3 break-inside-avoid rounded-2xl border border-wood bg-cream px-5 py-4"
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
    <section className="section">
      <div className="shell">
        <h2 className="max-w-3xl text-[clamp(2.6rem,6vw,5.4rem)] leading-[1.02] tracking-tight">
          Sitting in the car with the item <em>beside you?</em>
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
