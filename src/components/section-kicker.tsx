export function SectionKicker({
  index,
  children,
  dark = false,
}: {
  index?: string;
  children: string;
  dark?: boolean;
}) {
  return (
    <p
      className={
        dark
          ? "m-0 mb-4 font-sans text-[0.78rem] font-semibold tracking-[0.06em] text-ink uppercase"
          : "m-0 mb-4 font-sans text-[0.78rem] font-semibold tracking-[0.06em] text-brick uppercase"
      }
    >
      {index ? `${index} — ${children}` : children}
    </p>
  );
}
