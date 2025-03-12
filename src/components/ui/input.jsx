import * as React from "react";
import { cn } from "../../lib/utils";

const Input = React.forwardRef(({ className, type, iconLeft, ...props }, ref) => {
  return (
    <div className="relative flex items-center w-full">
      {iconLeft && (
        <span className="absolute left-3 text-muted-foreground">
          {iconLeft}
        </span>
      )}
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md border border-gray-300 bg-white py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          iconLeft ? "pl-10 pr-3" : "px-3",
          className
        )}
        ref={ref}
        {...props}
      />
    </div>
  );
});

Input.displayName = "Input";

export { Input };