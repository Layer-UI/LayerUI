
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Lightsprak({ variants, className }: {
    className?: string, variants?: {
        initial: {
            left?: string | '0';
            top?: string | '0';
            right?: string | '0';
        };
        animate: {
            left?: string | '0';
            right?: string | '0';
            bottom?: string | '0';

        };
    }
}) {
    return (
        <motion.span
            className={cn(" absolute h-16 w-[3px] rounded-full bg-gradient-to-b from-transparent via-sky-500 to-blue-500", className)}

            variants={variants}
            initial={{
                top: 0
            }}
            animate={{
                top: "100%"
            }}
            transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
                repeatDelay: 2,
                delay: Math.random() * 2,
            }}>
        </motion.span>
    )
}