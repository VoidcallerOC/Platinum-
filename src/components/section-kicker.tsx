export function SectionKicker({
  index,
  children,
}: {
  index?: string;
  children: string;
}) {
  return (
    <p className="text-[0.72rem] font-semibold tracking-[0.18em] text-muted uppercase">
      {index ? `${index} — ${children}` : children}
    </p>
  );
}
