import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "../lib/utils";

const buttonVariants = cva("flex", {
  variants: {
    variant: {
      default: "inline-flex gap-1 justify-center content-center items-center text-base lowercase border px-2 py-1 rounded-xl w-fit hover:bg-default-50 transition-colors",
      link: "text-base lowercase opacity-50 hover:opacity-100 transition-opacity cursor-pointer",
      disabled: "select-none cursor-default opacity-50"
    },
    position: {
      default: "relative",
    },
  },
  defaultVariants: {
    variant: "default",
    position: "default",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, position, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, position, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
