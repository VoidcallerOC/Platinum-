import type { CategoryId, IntentId, LocationId } from "./business";
import { CATEGORIES, locationById } from "./business";

export const QUOTE_STORAGE_KEY = "platinum-pawn-demo-quote";

export type QuoteDraft = {
  intent?: IntentId;
  category?: CategoryId;
  location?: LocationId;
  brand?: string;
  description?: string;
  extra?: string;
  contactName?: string;
  contactPhone?: string;
};

export type StoredQuote = QuoteDraft & {
  id: string;
  submittedAt: string;
  photoCount: number;
};

export function isIntent(value: unknown): value is IntentId {
  return value === "pawn" || value === "sell";
}

export function isLocation(value: unknown): value is LocationId {
  return value === "bristol" || value === "new-britain";
}

export function isCategory(value: unknown): value is CategoryId {
  return CATEGORIES.some((c) => c.id === value);
}

export function saveQuote(quote: StoredQuote) {
  if (typeof window === "undefined") return;
  sessionStorage.setItem(QUOTE_STORAGE_KEY, JSON.stringify(quote));
}

export function loadQuote(): StoredQuote | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(QUOTE_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredQuote;
    if (!parsed?.id || !isIntent(parsed.intent) || !isLocation(parsed.location)) {
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

export function locationLabel(id: LocationId | undefined) {
  return locationById(id)?.city ?? "";
}
