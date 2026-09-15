import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium tracking-tight transition-transform duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-green disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary:
          "bg-green text-cream shadow-[0_0_0_1px_rgb(18_53_38)] hover:bg-green-deep",
        ink: "bg-ink text-cream hover:bg-ink-soft",
        outline:
          "bg-transparent text-ink shadow-[0_0_0_1px_var(--color-line-strong)] hover:bg-paper-2",
        ghost: "bg-transparent text-ink hover:bg-paper-2",
        cream:
          "bg-cream text-green-deep shadow-[0_0_0_1px_rgb(250_247_240_/_0.2)] hover:bg-paper",
      },
      size: {
        sm: "h-10 min-h-10 rounded-md px-3.5 text-sm",
        md: "h-12 min-h-12 rounded-md px-5 text-[0.95rem]",
        lg: "h-14 min-h-14 rounded-lg px-6 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
