import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { LayoutGrid, Home, Bell, Settings, MessageSquare } from 'lucide-react';

// Sidebar item type definition
interface SidebarItem {
    name: string;
    icon: JSX.Element;
}

// Variants for the sidebar container animation
const containerVariants = {
    close: {
        width: "5rem",
        transition: {
            type: "spring",
            damping: 15,
            duration: 0.8,
        },
    },
    open: {
        width: "16rem",
        transition: {
            type: "spring",
            damping: 15,
            duration: 0.8,
        },
    },
};

// List of sidebar items
const sidebarItems: SidebarItem[] = [
    { name: "Dashboard", icon: <Home className="stroke-inherit min-w-7 min-h-7 stroke-[0.9] w-7" /> },
    { name: "Projects", icon: <LayoutGrid className="stroke-inherit min-w-7 min-h-7 stroke-[0.9] w-7" /> },
    { name: "Notification", icon: <Bell className="stroke-inherit min-w-7 min-h-7 stroke-[0.9] w-7" /> },
    { name: "Messages", icon: <MessageSquare className="stroke-inherit min-w-7 min-h-7 stroke-[0.9] w-7" /> },
    { name: "Settings", icon: <Settings className="stroke-inherit min-w-7 min-h-7 stroke-[0.9] w-7" /> },
];

// Variants for the toggle button animation
const svgVariants = {
    close: { rotate: 0 },
    open: { rotate: 180 },
};

// Sidebar component
const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <motion.aside
                variants={containerVariants}
                animate={isOpen ? "open" : "close"}
                initial="close"
                className="absolute z-10 top-0 left-0 flex flex-col bg-white dark:bg-black gap-20 h-screen shadow border-r"
            >
                <div className="relative w-full p-5">
                    <div className={cn("transition-opacity duration-100 ease-in-out gap-2 flex items-center")}>
                        <img src="/logo.png" className="w-10 h-10" />
                        {isOpen && <p className="text-2xl font-semibold text-inherit font-poppins whitespace-nowrap tracking-wide transition duration-300 ease-in-out">LayerUI</p>}
                    </div>
                    <button
                        className="absolute -right-3 top-[35%] rounded-full border shadow-md flex items-center justify-center bg-white dark:bg-black"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <motion.svg
                            variants={svgVariants}
                            animate={isOpen ? "open" : "close"}
                            transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-chevron-right"
                        >
                            <path d="m9 18 6-6-6-6" />
                        </motion.svg>
                    </button>
                </div>
                <div className="flex flex-col gap-3 px-5">
                    {sidebarItems.map((item, index) => (
                        <NavigationLink key={index} isOpen={isOpen} name={item.name}>
                            {item.icon}
                        </NavigationLink>
                    ))}
                </div>
            </motion.aside>
            <div className="p-40 h-screen">
                <span className="text-2xl gap-6 font-semibold flex items-center">
                    SideBar On Side
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-move-left size-10"
                    >
                        <path d="M6 8L2 12L6 16" />
                        <path d="M2 12H22" />
                    </svg>
                </span>
            </div>
        </>
    );
};

// Props for the NavigationLink component
interface NavigationLinkProps {
    children: React.ReactNode;
    name: string;
    isOpen: boolean;
}

// NavigationLink component for individual sidebar items
const NavigationLink = ({ children, name, isOpen }: NavigationLinkProps) => {
    return (
        <a
            href="#"
            className="flex py-1 px-1.5 group/item rounded-lg cursor-pointer stroke-[0.75] items-center gap-3 stroke-black dark:stroke-white border dark:border-white/60 dark:hover:border-white border-black/60 hover:border-black opacity-60 hover:opacity-100 hover:translate-x-0.5 ease-in-out hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200"
        >
            {children}
            <p className={cn("text-inherit font-poppins whitespace-nowrap tracking-wide transition duration-300 ease-in-out", isOpen ? "opacity-100" : "opacity-0 overflow-hidden")}>
                {name}
            </p>
            <p className={cn(!isOpen ? "text-inherit text-white dark:text-black dark:bg-white/90 opacity-0 group-hover/item:translate-x-2 border rounded-lg bg-black/90 px-3 py-1 hidden group-hover/item:block group-hover/item:-translate-y-0.5 group-hover/item:opacity-100 font-poppins transition-all duration-300 ease-in-out" : "opacity-0 overflow-hidden")}>
                {name}
            </p>
        </a>
    );
};

export default Navigation;
