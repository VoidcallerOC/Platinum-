import { useNavigate } from "@tanstack/react-router";
import { useId, useMemo, useState, type FormEvent, type ReactNode } from "react";
import {
  CATEGORIES,
  DEMO_NOTICE,
  EXPECTATION_LINE,
  LOCATION_LIST,
  PHOTO_GUIDANCE,
  type CategoryId,
  type IntentId,
  type LocationId,
} from "@/lib/business";
import { isCategory, isIntent, isLocation, saveQuote } from "@/lib/quote-store";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const MAX_PHOTOS = 5;

type QuoteFormProps = {
  initialIntent?: IntentId;
  initialCategory?: CategoryId;
  initialLocation?: LocationId;
};

type Photo = { id: string; file: File; url: string };

export function QuoteForm({
  initialIntent,
  initialCategory,
  initialLocation,
}: QuoteFormProps) {
  const navigate = useNavigate();
  const formId = useId();
  const [intent, setIntent] = useState<IntentId | undefined>(initialIntent);
  const [category, setCategory] = useState<CategoryId | undefined>(
    initialCategory,
  );
  const [location, setLocation] = useState<LocationId | undefined>(
    initialLocation,
  );
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const [extra, setExtra] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const errorSummary = useMemo(
    () => Object.values(errors).filter(Boolean),
    [errors],
  );

  function onFiles(list: FileList | null) {
    if (!list) return;
    const next: Photo[] = [];
    for (const file of Array.from(list)) {
      if (!file.type.startsWith("image/")) continue;
      next.push({
        id: `${file.name}-${file.size}-${file.lastModified}-${Math.random()}`,
        file,
        url: URL.createObjectURL(file),
      });
    }
    setPhotos((prev) => {
      const merged = [...prev, ...next].slice(0, MAX_PHOTOS);
      for (const extraPhoto of next) {
        if (!merged.includes(extraPhoto)) URL.revokeObjectURL(extraPhoto.url);
      }
      return merged;
    });
  }

  function removePhoto(id: string) {
    setPhotos((prev) => {
      const found = prev.find((p) => p.id === id);
      if (found) URL.revokeObjectURL(found.url);
      return prev.filter((p) => p.id !== id);
    });
  }

  function validate() {
    const next: Record<string, string> = {};
    if (!intent) next.intent = "Choose pawn or sell.";
    if (!category) next.category = "Choose an item type.";
    if (!location) next.location = "Choose Bristol or New Britain.";
    if (!description.trim()) next.description = "Describe the item.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (!validate()) {
      const first = document.getElementById(`${formId}-errors`);
      first?.focus();
      return;
    }
    setSubmitting(true);
    saveQuote({
      id: `demo-${Date.now()}`,
      submittedAt: new Date().toISOString(),
      intent,
      category,
      location,
      brand: brand.trim() || undefined,
      description: description.trim(),
      extra: extra.trim() || undefined,
      contactName: contactName.trim() || undefined,
      contactPhone: contactPhone.trim() || undefined,
      photoCount: photos.length,
    });
    void navigate({ to: "/quote/received" });
  }

  return (
    <form onSubmit={onSubmit} noValidate className="contact-form space-y-8">
      <p className="rounded-2xl border-l-4 border-brick bg-paper-2 px-[1.35rem] py-5 text-sm leading-relaxed text-ink">
        {DEMO_NOTICE}
      </p>

      {errorSummary.length > 0 ? (
        <div
          id={`${formId}-errors`}
          tabIndex={-1}
          role="alert"
          className="rounded-2xl border border-danger/30 bg-danger/8 px-4 py-3 text-sm text-danger"
        >
          <p className="font-semibold">Fix the following to continue:</p>
          <ul className="mt-1 list-disc pl-5">
            {errorSummary.map((msg) => (
              <li key={msg}>{msg}</li>
            ))}
          </ul>
        </div>
      ) : null}

      <fieldset>
        <legend className="block text-[0.83rem] font-bold text-ink">
          What are you looking to do?
        </legend>
        <p className="mt-1 text-sm text-muted">
          Pawn it if you want it back. Sell it if you don’t.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {(
            [
              {
                id: "pawn" as const,
                title: "Pawn",
                body: "Need cash, keep the option to get the item back.",
              },
              {
                id: "sell" as const,
                title: "Sell",
                body: "Ready to part with it. Final offer in person.",
              },
            ] as const
          ).map((option) => {
            const selected = intent === option.id;
            return (
              <label
                key={option.id}
                className={cn(
                  "flex min-h-24 cursor-pointer flex-col justify-center rounded-2xl px-5 py-4 transition-colors",
                  selected
                    ? "border border-green bg-green text-paper"
                    : "border border-wood bg-cream text-ink hover:border-green",
                )}
              >
                <input
                  className="sr-only"
                  type="radio"
                  name="intent"
                  value={option.id}
                  checked={selected}
                  onChange={() => {
                    if (isIntent(option.id)) setIntent(option.id);
                    setErrors((e) => ({ ...e, intent: "" }));
                  }}
                />
                <span className="text-xl font-semibold tracking-tight">
                  {option.title}
                </span>
                <span
                  className={cn(
                    "mt-1 text-sm",
                    selected ? "text-paper/80" : "text-muted",
                  )}
                >
                  {option.body}
                </span>
              </label>
            );
          })}
        </div>
        {errors.intent ? (
          <p className="mt-2 text-sm text-danger">{errors.intent}</p>
        ) : null}
      </fieldset>

      <fieldset>
        <legend className="block text-[0.83rem] font-bold text-ink">
          What type of item is it?
        </legend>
        <div className="mt-4 flex flex-wrap gap-2">
          {CATEGORIES.map((item) => {
            const selected = category === item.id;
            return (
              <label
                key={item.id}
                className={cn("chip cursor-pointer", selected && "is-active")}
              >
                <input
                  className="sr-only"
                  type="radio"
                  name="category"
                  value={item.id}
                  checked={selected}
                  onChange={() => {
                    if (isCategory(item.id)) setCategory(item.id);
                    setErrors((e) => ({ ...e, category: "" }));
                  }}
                />
                {item.label}
              </label>
            );
          })}
        </div>
        {errors.category ? (
          <p className="mt-2 text-sm text-danger">{errors.category}</p>
        ) : null}
      </fieldset>

      <fieldset>
        <legend className="block text-[0.83rem] font-bold text-ink">
          Which location?
        </legend>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {LOCATION_LIST.map((loc) => {
            const selected = location === loc.id;
            return (
              <label
                key={loc.id}
                className={cn(
                  "flex min-h-24 cursor-pointer flex-col justify-center rounded-2xl px-5 py-4",
                  selected
                    ? "border border-green bg-green text-paper"
                    : "border border-wood bg-cream text-ink hover:border-green",
                )}
              >
                <input
                  className="sr-only"
                  type="radio"
                  name="location"
                  value={loc.id}
                  checked={selected}
                  onChange={() => {
                    if (isLocation(loc.id)) setLocation(loc.id);
                    setErrors((e) => ({ ...e, location: "" }));
                  }}
                />
                <span className="text-xl font-semibold tracking-tight">
                  {loc.city}
                </span>
                <span
                  className={cn(
                    "mt-1 text-sm",
                    selected ? "text-paper/80" : "text-muted",
                  )}
                >
                  {loc.street}
                  <br />
                  {loc.phone} · {loc.sundayNote}
                </span>
              </label>
            );
          })}
        </div>
        {errors.location ? (
          <p className="mt-2 text-sm text-danger">{errors.location}</p>
        ) : null}
      </fieldset>

      <div className="grid gap-6 md:grid-cols-2">
        <Field
          id={`${formId}-brand`}
          label="Brand / model"
          hint="If it applies — Rolex, DeWalt, Fender, Louis Vuitton, and so on."
        >
          <input
            id={`${formId}-brand`}
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="field-input"
            autoComplete="off"
          />
        </Field>
        <Field
          id={`${formId}-phone`}
          label="Phone (optional, demo only)"
          hint="Not sent anywhere. Included so the live intake can be shown."
        >
          <input
            id={`${formId}-phone`}
            value={contactPhone}
            onChange={(e) => setContactPhone(e.target.value)}
            className="field-input"
            type="tel"
            autoComplete="tel"
          />
        </Field>
      </div>

      <Field id={`${formId}-name`} label="Your name (optional, demo only)">
        <input
          id={`${formId}-name`}
          value={contactName}
          onChange={(e) => setContactName(e.target.value)}
          className="field-input"
          autoComplete="name"
        />
      </Field>

      <Field
        id={`${formId}-description`}
        label="Description"
        required
        error={errors.description}
      >
        <textarea
          id={`${formId}-description`}
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
            setErrors((err) => ({ ...err, description: "" }));
          }}
          rows={4}
          className="field-input min-h-28 py-3"
          required
        />
      </Field>

      <Field
        id={`${formId}-extra`}
        label="Additional information"
        hint="Hallmarks, carat, box/papers, damage, mileage, serial numbers — whatever helps."
      >
        <textarea
          id={`${formId}-extra`}
          value={extra}
          onChange={(e) => setExtra(e.target.value)}
          rows={3}
          className="field-input min-h-24 py-3"
        />
      </Field>

      <fieldset>
        <legend className="block text-[0.83rem] font-bold text-ink">
          Photos
        </legend>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
          {PHOTO_GUIDANCE}
        </p>
        <div className="mt-4">
          <label className="flex min-h-28 cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-line-strong bg-cream px-4 py-6 text-center hover:border-green">
            <span className="text-sm font-bold">Add photos</span>
            <span className="text-xs text-muted">
              {photos.length} attached, {MAX_PHOTOS} maximum. Stays on this
              device.
            </span>
            <input
              type="file"
              accept="image/*"
              multiple
              className="sr-only"
              onChange={(e) => {
                onFiles(e.target.files);
                e.target.value = "";
              }}
            />
          </label>
          {photos.length > 0 ? (
            <ul className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-5">
              {photos.map((photo, index) => (
                <li key={photo.id} className="relative">
                  <img
                    src={photo.url}
                    alt={`Upload ${index + 1}: ${photo.file.name}`}
                    className="aspect-square w-full rounded-2xl object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => removePhoto(photo.id)}
                    className="absolute top-1 right-1 flex size-8 items-center justify-center rounded-full bg-paper text-ink"
                    aria-label={`Remove ${photo.file.name}`}
                  >
                    ×
                  </button>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </fieldset>

      <div className="rounded-2xl border border-wood bg-cream px-5 py-5">
        <p className="text-xl font-semibold tracking-tight">Before you send</p>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">
          {EXPECTATION_LINE}
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" size="lg" disabled={submitting}>
          {submitting ? "Saving request…" : "Submit request"}
        </Button>
        <p className="text-sm text-muted">{DEMO_NOTICE}</p>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  hint,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  hint?: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-[0.83rem] font-bold text-ink">
        {label}
        {required ? <span className="text-danger"> *</span> : null}
      </label>
      {hint ? <p className="mt-1 text-sm text-muted">{hint}</p> : null}
      <div className="mt-2">{children}</div>
      {error ? (
        <p className="mt-2 text-sm text-danger" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
