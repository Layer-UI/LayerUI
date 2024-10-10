import { cn } from "@/lib/utils";
import React from "react";

// Define the input props interface extending from React's input attributes
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

// ForwardRef is used to pass refs to the input component
const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, ...props }, ref) => {
        return (
            <input
                type={type}
                className={cn(
                    "flex h-10 w-full rounded-lg border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none",
                    className
                )}
                ref={ref}
                {...props}
            />
        );
    }
);

// Adding a display name for better debugging in React DevTools
Input.displayName = "Input";

export default Input;
