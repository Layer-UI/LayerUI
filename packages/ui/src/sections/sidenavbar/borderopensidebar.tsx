"use client"

import { cn } from '@/lib/utils';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { LayoutGrid, Home, Bell, Settings, MessageSquare, Layers, Users, User, LogOut } from 'lucide-react';

// Define the type for SidebarItem
interface SidebarItem {
    name: string;
    icon: React.JSX.Element;
    link: string;
}

// Define the type for SidebarList
interface SidebarList {
    Menu: SidebarItem[];
    Task: SidebarItem[];
    Profile: SidebarItem[];
}

const SideNavbar: React.FC = () => {
    // Sidebar menu items
    const sidebarList: SidebarList = {
        Menu: [
            {
                name: "Dashboard",
                icon: <Home className="min-w-7 min-h-7 stroke-[0.9] w-7" />,
                link: "#"
            },
            {
                name: "Projects",
                icon: <LayoutGrid className="min-w-7 min-h-7 stroke-[0.9] w-7" />,
                link: "#"
            },
            {
                name: "Notification",
                icon: <Bell className="min-w-7 min-h-7 stroke-[0.9] w-7" />,
                link: "#"
            },
            {
                name: "Messages",
                icon: <MessageSquare className="min-w-7 min-h-7 stroke-[0.9] w-7" />,
                link: "#"
            },
        ],
        Task: [
            {
                name: "Available Task",
                icon: <Layers className="min-w-7 min-h-7 stroke-[0.9] w-7" />,
                link: "#"
            },
            {
                name: "Clients",
                icon: <Users className="min-w-7 min-h-7 stroke-[0.9] w-7" />,
                link: "#"
            },
        ],
        Profile: [
            {
                name: "Profile",
                icon: <User className="min-w-7 min-h-7 stroke-[0.9] w-7" />,
                link: "#"
            },
            {
                name: "Settings",
                icon: <Settings className="min-w-7 min-h-7 stroke-[0.9] w-7" />,
                link: "#"
            },
            {
                name: "Logout",
                icon: <LogOut className="min-w-7 min-h-7 stroke-[0.9] w-7" />,
                link: "#"
            },
        ]
    };

    const [isMenuOpen, setMenuOpen] = useState(false);

    // Motion variants for sidebar animation
    const sidebarVariants = {
        open: {
            height: "100%",
            width: "var(--width-to)",
            transition: { ease: 'easeInOut', duration: 1, type: 'spring', stiffness: 100 }
        },
        close: {
            height: 50,
            width: 50,
            transition: { duration: 0.4, type: 'spring', stiffness: 40, ease: 'easeInOut' }
        }
    };

    return (
        <aside className='h-screen w-full bg-black dark:bg-white'>
            <MenuHamburger isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
            <motion.div
                initial="close"
                animate={isMenuOpen ? "open" : "close"}
                exit="close"
                variants={sidebarVariants}
                className={cn("absolute top-0 left-0 z-30 border-2 border-black dark:border-white shadow-lg rounded-lg bg-white dark:bg-black md:[--width-to:27%] [--width-to:80%]")}
            >
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ x: -200, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -200, opacity: 0 }}
                            transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
                            className='relative flex flex-col h-full w-full py-12 px-5 gap-1 overflow-y-scroll'
                        >
                            <div className='flex gap-4 my-5'>
                                <img src='/logo.png' className='h-10 w-10' alt="Logo" />
                                <span>LayerUI</span>
                            </div>
                            <SidebarSection title="Menu" items={sidebarList.Menu} />
                            <SidebarSection title="Task" items={sidebarList.Task} />
                            <SidebarSection title="Profile" items={sidebarList.Profile} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </aside>
    );
};

// Sidebar section component
const SidebarSection: React.FC<{ title: string, items: SidebarItem[] }> = ({ title, items }) => (
    <>
        <span className='my-3 font-semibold dark:bg-black bg-white'>{title}</span>
        <div className='flex flex-col gap-3'>
            {items.map((val, index) => (
                <a key={index} href={val.link} className='flex gap-3 opacity-80 hover:opacity-100 hover:translate-x-1 transition-all duration-150 ease-in-out items-center dark:bg-black bg-white hover:scale-105 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:border dark:hover:bg-white/70 px-3 py-1 rounded-lg hover:shadow-md active:scale-95 dark:hover:shadow-white/10'>
                    <span>{val.icon}</span>{val.name}
                </a>
            ))}
        </div>
    </>
);


const MenuHamburger: React.FC<{ isMenuOpen: boolean, setMenuOpen: React.Dispatch<React.SetStateAction<boolean>> }> = ({ isMenuOpen, setMenuOpen }) => (
    <button
        className={cn("absolute top-0 left-0 z-40 group inline-flex w-12 h-12 text-center items-center justify-center transition rounded-lg text-black dark:text-white")}
        onClick={() => setMenuOpen(!isMenuOpen)}>
        <svg className="w-6 h-6 fill-current pointer-events-none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <rect className={cn("origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)]", isMenuOpen ? "rotate-[315deg] [x:0] [y:7] " : "")} y="2" x="7" width="9" height="1.5" rx="1"></rect>
            <rect className={cn("origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)]", isMenuOpen ? "rotate-45" : "")} y="7" width="16" height="1.5" rx="1"></rect>
            <rect className={cn("origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)]", isMenuOpen ? "[y:7] [x:0] -rotate-[225deg]" : "")} y="12" width="9" height="1.5" rx="1"></rect>
        </svg>
    </button >
)


export default SideNavbar

