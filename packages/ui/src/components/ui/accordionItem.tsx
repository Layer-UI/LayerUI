import { cn } from "@/lib/utils";
import { ReactElement } from "react";
import { AnimatePresence, motion } from 'framer-motion';

// Define the Accordion component
const Accordion: React.FC<{
    children: React.ReactNode;
    className?: string;
}> = ({ children, className }) => {
    return (
        <div className={cn("flex w-full flex-col gap-4 rounded-2xl px-3 py-7 md:px-10 md:py-10", className)}>
            {children}
        </div>
    );
};

// Define the props interface for AccordionItem
interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string; // The title of the accordion item
    answer: string; // The content to be displayed when the accordion item is open
    children?: React.ReactNode; // Optional children for additional content
    className?: string; // Additional class names
    rotation?: string; // Optional rotation for custom styling
    i: number; // Index of the accordion item
    icon?: ReactElement; // Optional icon for the accordion header
    accordionOpen: number; // The currently open accordion item index
    setAccordionOpen: React.Dispatch<React.SetStateAction<number>>; // State setter for managing open items
}

// Define the AccordionItem component
const AccordionItem: React.FC<AccordionItemProps> = ({
    title,
    answer,
    children,
    className,
    rotation,
    icon,
    i,
    setAccordionOpen,
    accordionOpen,
    ...props
}) => {
    // Handle click event to toggle accordion item
    const handleClick = () => {
        setAccordionOpen(accordionOpen === i ? -1 : i); // Toggle between open and closed state
    };

    return (
        <div
            className={cn(
                "relative flex w-full flex-col overflow-hidden opacity-70 hover:opacity-100",
                accordionOpen === i && "opacity-100",
                className
            )}
            {...props}
        >
            <button
                onClick={handleClick}
                className={cn(
                    "flex w-full items-center justify-between px-5 py-3",
                    accordionOpen === i && "bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text"
                )}
            >
                <span className={cn("text-lg font-medium")}>{title}</span>
                <motion.span
                    initial={false}
                    animate={accordionOpen === i ? "open" : "close"}
                    variants={{
                        open: { rotate: 180 },
                        close: { rotate: 0 },
                    }}
                    transition={{ duration: 0.5, stiffness: 150, type: "spring" }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-chevron-down text-black"
                    >
                        <path d="m6 9 6 6 6-6" />
                    </svg>
                </motion.span>
            </button>
            <AnimatePresence initial={false}>
                {accordionOpen === i && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ ease: "easeInOut", duration: 0.5 }}
                        className="overflow-hidden text-wrap"
                    >
                        <p className="m-5">{answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export { Accordion, AccordionItem };
