export function SectionKicker({
  index,
  children,
}: {
  index?: string;
  children: string;
}) {
  return (
    <p className="m-0 mb-4 font-sans text-[0.78rem] font-semibold tracking-[0.14em] text-green-bright uppercase">
      {index ? `${index} — ${children}` : children}
    </p>
  );
}
