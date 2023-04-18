import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "../lib/utils";

const buttonVariants = cva("flex", {
  variants: {
    variant: {
      default: "text-base lowercase border px-2 py-1 rounded-xl w-fit",
      link: "text-base lowercase underline opacity-60 hover:opacity-100 transition-opacity cursor-pointer",
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
