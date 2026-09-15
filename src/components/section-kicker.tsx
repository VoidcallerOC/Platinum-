export function SectionKicker({
  index,
  children,
}: {
  index?: string;
  children: string;
}) {
  return (
    <p className="kicker">
      {index ? `${index} — ${children}` : children}
    </p>
  );
}
