import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-[0.2rem] font-bold tracking-tight transition-[background-color,color,border-color,transform] duration-160 ease-out focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-green-bright disabled:pointer-events-none disabled:opacity-50 hover:-translate-y-0.5",
  {
    variants: {
      variant: {
        primary:
          "bg-green text-paper border border-green hover:bg-green-bright hover:border-green-bright",
        ink: "bg-ink text-paper border border-ink hover:bg-green hover:border-green hover:text-paper",
        outline:
          "bg-transparent text-ink border border-wood hover:border-green hover:bg-cream",
        ghost:
          "bg-transparent text-ink border border-transparent hover:text-green-bright",
        cream:
          "bg-green text-paper border border-green hover:bg-green-bright hover:border-green-bright",
      },
      size: {
        sm: "h-11 min-h-11 px-3.5 text-[0.82rem]",
        md: "h-[3.35rem] min-h-[3.35rem] px-5 text-[0.91rem]",
        lg: "h-16 min-h-16 px-6 text-base",
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
