import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionKicker } from "@/components/section-kicker";
import { Button } from "@/components/ui/button";
import { LOCATION_LIST, SHOP_CATEGORIES } from "@/lib/business";
import { pageTitle } from "@/lib/seo";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: pageTitle("Shop in Store") },
      {
        name: "description",
        content:
          "Shop Platinum Pawn in Bristol and New Britain. Jewelry, watches, handbags, tools, electronics, instruments, and collectibles — stock changes with the counter.",
      },
    ],
  }),
  component: ShopPage,
});

function ShopPage() {
  return (
    <main id="main" className="shell py-12 md:py-16">
      <SectionKicker>Shop</SectionKicker>
      <h1 className="mt-3 max-w-3xl font-display text-5xl leading-[0.95] tracking-tight md:text-6xl">
        Shop in store. Not online.
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
        There is no inventory database here because the floor is the inventory.
        Pieces come in from pawn and sell, and they go out the same week. If
        you want to see what’s there, stop in.
      </p>

      <ul className="mt-12 grid gap-8 sm:grid-cols-2">
        {SHOP_CATEGORIES.map((cat) => (
          <li key={cat.id}>
            {cat.image ? (
              <img
                src={cat.image}
                alt=""
                className="aspect-[4/3] w-full rounded-lg object-cover"
              />
            ) : null}
            <h2 className="mt-3 font-display text-2xl tracking-tight">
              {cat.short}
            </h2>
            <p className="mt-1 text-sm text-muted">
              Changing stock at both counters. Ask when you visit.
            </p>
          </li>
        ))}
      </ul>

      <section className="mt-16 border-t border-line pt-10">
        <h2 className="font-display text-3xl tracking-tight">
          Come look.
        </h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {LOCATION_LIST.map((loc) => (
            <article key={loc.id} className="rounded-lg bg-cream p-5 shadow-[0_0_0_1px_var(--color-line)]">
              <h3 className="font-display text-2xl">{loc.city}</h3>
              <p className="mt-1">{loc.street}</p>
              <p className="text-sm text-muted">{loc.sundayNote}</p>
              <Button asChild className="mt-4" size="sm">
                <Link to="/visit/$slug" params={{ slug: loc.id }}>
                  Hours & directions
                </Link>
              </Button>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
