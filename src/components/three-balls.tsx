export function ThreeBalls({
  className,
  size = 32,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="16" cy="8.4" r="6.1" fill="currentColor" />
      <circle cx="8.7" cy="22.1" r="6.1" fill="currentColor" />
      <circle cx="23.3" cy="22.1" r="6.1" fill="currentColor" />
    </svg>
  );
}
