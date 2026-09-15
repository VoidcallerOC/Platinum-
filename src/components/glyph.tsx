import { cn } from "@/lib/utils";

export function Glyph({
  children = "↗︎",
  marker = false,
  className,
}: {
  children?: string;
  marker?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "glyph",
        marker ? "glyph--marker" : "glyph--inline glyph--optical-bold",
        className,
      )}
      aria-hidden="true"
    >
      {children}
    </span>
  );
}
