import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "button inline-flex items-center justify-center gap-2 rounded-[0.2rem] font-bold tracking-tight transition-[background-color,color,border-color,transform] duration-160 ease-out focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-brick disabled:pointer-events-none disabled:opacity-50 hover:-translate-y-0.5",
  {
    variants: {
      variant: {
        primary:
          "bg-brick text-paper border border-brick hover:bg-ink hover:text-paper hover:border-ink",
        ink: "bg-ink text-paper border border-ink hover:bg-brick hover:border-brick",
        outline:
          "bg-transparent text-ink border border-wood hover:border-brick hover:bg-cream",
        ghost:
          "bg-transparent text-ink border border-transparent hover:text-brick",
        cream:
          "bg-brick text-paper border border-brick hover:bg-ink hover:text-paper hover:border-ink",
      },
      size: {
        sm: "h-11 min-h-[2.75rem] px-[0.92rem] text-[0.82rem]",
        md: "h-[3.35rem] min-h-[3.35rem] px-5 text-[0.91rem]",
        lg: "h-16 min-h-16 px-[1.45rem] text-base",
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
