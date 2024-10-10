import React, { useState, useRef } from "react";
import { cn } from "@/lib/utils";

// Define props for the Input component
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

// Input component with additional functionalities
const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
    const divRef = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLInputElement>) => {
        if (!divRef.current || isFocused) return;

        const div = divRef.current;
        const rect = div.getBoundingClientRect();

        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleFocus = () => {
        setIsFocused(true);
        setOpacity(1);
    };

    const handleBlur = () => {
        setIsFocused(false);
        setOpacity(0);
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <div className='relative'>
            <input
                type={type}
                onMouseMove={handleMouseMove}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={cn(
                    "flex h-10 w-full rounded-lg focus:border-2 border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 focus:border-[#22d3ee] focus:outline-none",
                    className
                )}
                ref={ref}
                {...props}
            />
            <input
                ref={divRef}
                disabled
                style={{
                    border: "2px solid rgb(34, 211, 238)",
                    opacity,
                    WebkitMaskImage: `radial-gradient(30% 30px at ${position.x}px ${position.y}px, black 45%, transparent)`,
                }}
                aria-hidden="true"
                className="border-[rgb(34, 211, 238)] h-10 pointer-events-none absolute left-0 top-0 w-full px-3 py-1 cursor-default rounded-lg border-2 bg-transparent opacity-0 transition-opacity duration-500 placeholder:select-none"
            />
        </div>
    );
});

Input.displayName = 'Input';

export default Input;
