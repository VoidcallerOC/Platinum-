import { createFileRoute, Link } from "@tanstack/react-router";
import { Glyph } from "@/components/glyph";
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
      <h1 className="mt-3 max-w-[16ch] font-display text-[clamp(3.2rem,6vw,5.6rem)] font-medium leading-[0.96] tracking-[-0.04em]">
        Shop in store. Not online.
      </h1>
      <p className="mt-5 max-w-[52ch] text-lg leading-relaxed text-muted">
        There is no inventory database here because the floor is the inventory.
        Pieces come in from pawn and sell, and they go out the same week. If
        you want to see what’s there, stop in.
      </p>

      <ul className="mt-12 grid gap-4 sm:grid-cols-2">
        {SHOP_CATEGORIES.map((cat) => (
          <li key={cat.id} className="border border-wood bg-cream">
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
              <h2 className="mt-2 text-[1.5rem] font-semibold tracking-[-0.04em]">
                {cat.short}
              </h2>
              <p className="mt-1 text-sm text-muted">
                Changing stock at both counters. Ask when you visit.
              </p>
            </div>
          </li>
        ))}
      </ul>

      <section className="mt-16 border-t border-line pt-10">
        <h2 className="text-[clamp(2.2rem,4vw,3.2rem)] font-semibold tracking-tight">
          Come look.
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {LOCATION_LIST.map((loc, i) => (
            <article
              key={loc.id}
              className={
                i === 1
                  ? "border-2 border-brick bg-paper p-5 shadow-[0.35rem_0.35rem_0_var(--color-brick)]"
                  : "border-2 border-wood bg-paper p-5 shadow-[0.35rem_0.35rem_0_var(--color-wood)]"
              }
            >
              <h3 className="text-[1.7rem] tracking-[-0.04em]">{loc.city}</h3>
              <p className="mt-1">{loc.street}</p>
              <p className="text-sm text-muted">{loc.sundayNote}</p>
              <Button asChild className="mt-4" size="sm">
                <Link to="/visit/$slug" params={{ slug: loc.id }}>
                  Hours & directions
                  <Glyph />
                </Link>
              </Button>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
