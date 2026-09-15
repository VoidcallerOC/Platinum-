export type LocationId = "bristol" | "new-britain";
export type IntentId = "pawn" | "sell";
export type CategoryId =
  | "gold-jewelry"
  | "coins-bullion"
  | "watch"
  | "electronics"
  | "tools"
  | "handbag"
  | "instrument"
  | "collectible"
  | "vehicle"
  | "other";

export const BUSINESS = {
  name: "Platinum Pawn",
  legalName: "Platinum Pawn",
  tagline: "Pawn it if you want it back. Sell it if you don't.",
  heroLine: "What do you need to do with it?",
  description:
    "Two Connecticut pawn shops in Bristol and New Britain. Pawn, sell, or shop in store. Final offers are made in person.",
  yearsServing: "over 10 years",
  serviceArea: "Bristol, New Britain, and surrounding towns",
  siteUrl: "https://platinumpawnbrokers.com",
} as const;

export const LOCATIONS: Record<
  LocationId,
  {
    id: LocationId;
    city: string;
    name: string;
    street: string;
    cityStateZip: string;
    addressLine: string;
    phone: string;
    phoneHref: string;
    mapsUrl: string;
    hours: { label: string; value: string }[];
    sundayNote: string;
    notes: string[];
  }
> = {
  bristol: {
    id: "bristol",
    city: "Bristol",
    name: "Platinum Pawn — Bristol",
    street: "294 Middle Street",
    cityStateZip: "Bristol, CT 06010",
    addressLine: "294 Middle Street, Bristol, CT 06010",
    phone: "860-261-4031",
    phoneHref: "tel:+18602614031",
    mapsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=294+Middle+Street+Bristol+CT+06010",
    hours: [
      { label: "Monday–Friday", value: "10 AM – 6 PM" },
      { label: "Saturday", value: "10 AM – 4 PM" },
      { label: "Sunday", value: "Closed" },
    ],
    sundayNote: "Closed Sunday",
    notes: [
      "The Bristol shop is published as a 5,000 sq. ft. floor with jewelry, coins, collectibles, and everyday pawn merchandise.",
      "Published Bristol pawn terms: 30 days with an additional 30-day grace period. Ask at the counter for current terms before you sign.",
    ],
  },
  "new-britain": {
    id: "new-britain",
    city: "New Britain",
    name: "Platinum Pawn — New Britain",
    street: "57 Broad Street",
    cityStateZip: "New Britain, CT 06053",
    addressLine: "57 Broad Street, New Britain, CT 06053",
    phone: "860-223-2222",
    phoneHref: "tel:+18602232222",
    mapsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=57+Broad+Street+New+Britain+CT+06053",
    hours: [
      { label: "Monday–Friday", value: "10 AM – 6 PM" },
      { label: "Saturday", value: "10 AM – 4 PM" },
      { label: "Sunday", value: "12 PM – 3 PM" },
    ],
    sundayNote: "Open Sunday 12 PM – 3 PM",
    notes: [
      "The New Britain counter is the second Platinum Pawn location — same family of services, its own hours, its own phone.",
      "Sunday is the practical difference: New Britain is open 12 PM – 3 PM; Bristol is closed.",
    ],
  },
};

export const LOCATION_LIST = [LOCATIONS.bristol, LOCATIONS["new-britain"]];

export const CATEGORIES: {
  id: CategoryId;
  label: string;
  short: string;
  image?: string;
  shop: boolean;
}[] = [
  {
    id: "gold-jewelry",
    label: "Gold / Jewelry",
    short: "Jewelry",
    image: "/images/cat-jewelry.jpg",
    shop: true,
  },
  {
    id: "coins-bullion",
    label: "Coins / Bullion",
    short: "Coins",
    image: "/images/cat-collectibles.jpg",
    shop: true,
  },
  {
    id: "watch",
    label: "Watch",
    short: "Watches",
    image: "/images/cat-watches.jpg",
    shop: true,
  },
  {
    id: "electronics",
    label: "Electronics",
    short: "Electronics",
    image: "/images/cat-electronics.jpg",
    shop: true,
  },
  {
    id: "tools",
    label: "Tools",
    short: "Tools",
    image: "/images/cat-tools.jpg",
    shop: true,
  },
  {
    id: "handbag",
    label: "Handbag",
    short: "Handbags",
    image: "/images/cat-handbags.jpg",
    shop: true,
  },
  {
    id: "instrument",
    label: "Instrument",
    short: "Instruments",
    image: "/images/cat-instruments.jpg",
    shop: true,
  },
  {
    id: "collectible",
    label: "Collectible",
    short: "Collectibles",
    image: "/images/cat-collectibles.jpg",
    shop: true,
  },
  { id: "vehicle", label: "Vehicle", short: "Vehicles", shop: false },
  { id: "other", label: "Other", short: "Other", shop: false },
];

export const SHOP_CATEGORIES = CATEGORIES.filter((c) => c.shop);

export function categoryById(id: string | undefined) {
  return CATEGORIES.find((c) => c.id === id);
}

export function locationById(id: string | undefined) {
  if (id === "bristol" || id === "new-britain") return LOCATIONS[id];
  return undefined;
}

export const PAWN_STEPS = [
  {
    title: "Bring the item",
    body: "Walk in with what you want to use as collateral. The item stays with the shop while the loan is open.",
  },
  {
    title: "Bring a government-issued photo ID",
    body: "You must be 18 or older. A valid government-issued photo ID is required to pawn.",
  },
  {
    title: "Appraisal happens in store",
    body: "A pawnbroker looks at the item in person. Condition, what it can sell for here, paperwork, and — for precious metals — the current market all factor in.",
  },
  {
    title: "Receive an offer",
    body: "If you take the loan, you leave with cash and a ticket. No credit check. The item is held as collateral.",
  },
  {
    title: "Redeem on the shop’s terms",
    body: "Pay as agreed and the item comes back to you. Bristol’s published pawn term is 30 days with an additional 30-day grace period. Ask at the counter for current terms before you sign.",
  },
];

export const SELL_STEPS = [
  {
    title: "Bring the item",
    body: "Walk in with what you are ready to part with — including old or broken gold and silver.",
  },
  {
    title: "Bring a government-issued photo ID",
    body: "A valid photo ID is required to sell. You must be 18 or older.",
  },
  {
    title: "The item is evaluated",
    body: "Condition, documentation, and what the shop can actually sell it for all matter. Precious metals move with the market.",
  },
  {
    title: "Final offer is made in store",
    body: "An online request helps the counter prepare. It is not a price. You see the offer after the item is inspected.",
  },
];

export const FAQS: { q: string; a: string }[] = [
  {
    q: "What is the difference between pawning and selling?",
    a: "Pawn it if you want it back. You leave the item as collateral, take a loan, and redeem it on the shop’s terms. Sell it if you don’t want it back. The item is evaluated and a final offer is made in person.",
  },
  {
    q: "Will you tell me what you’ll pay online?",
    a: "No. Photos and a description help the shop understand what you’re bringing. Final offers are made in person after the item is inspected.",
  },
  {
    q: "What do I need to bring?",
    a: "The item, and a valid government-issued photo ID. You must be 18 or older. Paperwork, boxes, extra links, chargers, and serial numbers help when you have them.",
  },
  {
    q: "What kinds of items do you take?",
    a: "Gold, silver, diamonds, jewelry (including old and broken), coins, bullion, watches, handbags, electronics, power tools, musical instruments, collectibles, and vehicles. If it has resale value, ask.",
  },
  {
    q: "How is value determined?",
    a: "Condition, what the shop can sell it for, and any documentation. Precious metals follow the current market. That evaluation happens at the counter, not in a website calculator.",
  },
  {
    q: "Are there credit checks?",
    a: "Pawn loans are secured by the item. The shop’s public materials state there are no credit checks and no reporting to credit agencies for pawning.",
  },
  {
    q: "How long is a pawn loan?",
    a: "Published Bristol terms are 30 days with an additional 30-day grace period. Loans can be renewed by paying the interest. Confirm current terms at the location you use.",
  },
  {
    q: "What happens if I don’t pick the item up?",
    a: "If the loan is not redeemed or renewed, the shop can forfeit the item and put it out for sale. The shop’s FAQ states this does not create a collections action against you.",
  },
  {
    q: "Are pawned items insured?",
    a: "The shop states that items in pawn remain yours, that they are responsible for keeping them safe, and that they are fully insured for the loan value of the collateral they keep.",
  },
  {
    q: "Do I have to use both stores the same way?",
    a: "No. Bristol and New Britain are separate counters with their own addresses, phone numbers, and Sunday hours. Pick the location you can actually get to.",
  },
];

export const PHOTO_GUIDANCE =
  "Clear photos of the whole item, identifying marks, serial/model numbers, damage, hallmarks, paperwork, or accessories can help us understand what you’re bringing. Photos do not determine a final offer.";

export const EXPECTATION_LINE =
  "Online requests help us understand what you have. Final offers are made in person after the item is inspected.";

export const DEMO_NOTICE =
  "This is a Forge-CT demonstration. Your request stays on this device and is not sent to Platinum Pawn.";
