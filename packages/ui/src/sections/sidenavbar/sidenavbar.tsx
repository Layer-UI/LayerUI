import { cn } from '@/lib/utils'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import { LayoutGrid, Home, Bell, Settings, MessageSquare, Layers3, Users, User, LogOut } from 'lucide-react';



function SideNavbar() {

    const SidebarList = {
        Menu: [{
            name: "Dashboard",
            icon: <Home className=" min-w-7 min-h-7 stroke-[0.9] w-7" />,
            link: "#"
        },
        {
            name: "Projects",
            icon: <LayoutGrid className=" min-w-7 min-h-7 stroke-[0.9] w-7" />,
            link: "#"
        },
        {
            name: "Notifiction",
            icon: <Bell className=" min-w-7 min-h-7 stroke-[0.9] w-7" />,
            link: "#"
        },
        {
            name: "Messages",
            icon: <MessageSquare className=" min-w-7 min-h-7 stroke-[0.9] w-7 " />,
            link: "#"
        },
        ],
        Task: [
            {
                name: "Avialble Task",
                icon: <Layers3 className=" min-w-7 min-h-7 stroke-[0.9] w-7 " />,
                link: "#"
            },
            {
                name: "Clients",
                icon: <Users className=" min-w-7 min-h-7 stroke-[0.9] w-7" />,
                link: "#"
            },
        ],
        Profile: [
            {
                name: "Profile",
                icon: <User className=" min-w-7 min-h-7 stroke-[0.9] w-7 " />,
                link: "#"
            },
            {
                name: "Settings",
                icon: <Settings className=" min-w-7 min-h-7 stroke-[0.9] w-7" />,
                link: "#"
            },
            {
                name: "Logout",
                icon: <LogOut className=" min-w-7 min-h-7 stroke-[0.9] w-7" />,
                link: "#"
            },
        ]
    }


    const [isMenuOpen, setMenuOpen] = useState(false)



    const sidebarvariants = {
        open: {
            height: "100%", width: "25%",
            transition: { ease: 'easeInOut', duration: 1, type: 'spring', stiffness: 100 }

        },
        close: {
            height: 50, width: 50, transition: { duration: 0.4, type: 'spring', stiffness: 40, ease: 'easeInOut' }
        }
    }

    return (
        <aside
            className=' h-screen w-full'>
            <MenuHumbergar isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen}></MenuHumbergar>
            <motion.div
                initial="close"
                animate={isMenuOpen ? "open" : "close"}
                exit="close"
                variants={sidebarvariants}
                className={cn(" absolute top-0 left-0 z-30 border shadow-lg rounded-lg bg-white dark:bg-black sm:w-1/4")}

            >
                <AnimatePresence >
                    {
                        isMenuOpen && (
                            <motion.div
                                initial={{
                                    x: -200,
                                    opacity: 0
                                }}
                                animate={{
                                    x: 0,
                                    opacity: 1
                                }}
                                exit={{
                                    x: -200,
                                    opacity: 0
                                }}
                                transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
                                className=' relative flex flex-col h-full w-full py-12 px-5 gap-1 overflow-hidden'>
                                <div className=" relative bg-gradient-to-r from-transparent dark:via-white  via-black to-transparent my-8 h-[1px] w-full" >
                                    <span className='absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 dark:bg-black bg-white' >Menu</span>
                                </div>
                                <div className=' flex flex-col gap-3'>
                                    {
                                        SidebarList.Menu.map((val: {
                                            name: string;
                                            icon: React.JSX.Element;
                                            link: string;
                                        }, index: number) => (
                                            <a key={index} href={val.link} className=' flex gap-3 opacity-80 hover:opacity-100 hover:translate-x-1 transition-all duration-150 ease-in-out items-center dark:bg-black bg-white hover:scale-105 hover:bg-zink-100 dark:hover:bg-zinc-800 hover:border dark:hover:bg-white/70 px-3 py-1 rounded-lg hover:shadow-md active:scale-95 dark:hover:shadow-white/10'>
                                                <span>{val.icon}</span>{val.name}
                                            </a>
                                        ))
                                    }
                                </div>
                                <div className=" relative bg-gradient-to-r from-transparent dark:via-white  via-black to-transparent my-8 h-[1px] w-full" >
                                    <span className='absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 dark:bg-black bg-white' >Task</span>
                                </div>
                                <div className=' flex flex-col gap-3'>
                                    {
                                        SidebarList.Task.map((val: {
                                            name: string;
                                            icon: React.JSX.Element;
                                            link: string;
                                        }, index: number) => (
                                            <a key={index} href={val.link} className=' flex gap-3 opacity-80 hover:opacity-100 hover:translate-x-1 transition-all duration-150 ease-in-out items-center dark:bg-black bg-white hover:scale-105 hover:bg-zink-100 dark:hover:bg-zinc-800 hover:border dark:hover:bg-white/70 px-3 py-1 rounded-lg hover:shadow-md active:scale-95 dark:hover:shadow-white/10 '>
                                                <span>{val.icon}</span>{val.name}
                                            </a>
                                        ))
                                    }
                                </div>
                                <div className=" relative bg-gradient-to-r from-transparent dark:via-white  via-black to-transparent my-8 h-[1px] w-full" >
                                    <span className='absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 dark:bg-black bg-white ' >Settings</span>
                                </div>
                                <div className=' flex flex-col gap-3'>
                                    {
                                        SidebarList.Profile.map((val: {
                                            name: string;
                                            icon: React.JSX.Element;
                                            link: string;
                                        }, index: number) => (
                                            <a key={index} href={val.link} className=' flex gap-3 opacity-80 hover:opacity-100 hover:translate-x-1 transition-all duration-150 ease-in-out items-center dark:bg-black bg-white hover:scale-105 hover:bg-zink-100 dark:hover:bg-zinc-800 hover:border dark:hover:bg-white/70 px-3 py-1 rounded-lg hover:shadow-md active:scale-95 dark:hover:shadow-white/10 '>
                                                <span>{val.icon}</span>{val.name}
                                            </a>
                                        ))
                                    }
                                </div>
                            </motion.div>
                        )
                    }
                </AnimatePresence>
            </motion.div >
        </aside >
    )
}

function MenuHumbergar({
    isMenuOpen, setMenuOpen
}:
    {
        isMenuOpen: boolean,
        setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
    }) {
    return (
        <button className={cn("  absolute top-0 left-0  z-40 group inline-flex w-12 h-12 text-center items-center justify-center transition rounded-lg text-black dark:text-white")} onClick={() => (setMenuOpen(!isMenuOpen))}>
            <svg className="w-6 h-6 fill-current pointer-events-none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <rect className={cn("origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)]", isMenuOpen ? "rotate-[315deg] [x:0] [y:7] " : "")} y="2" x="7" width="9" height="2" rx="1"></rect>
                <rect className={cn("origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)]", isMenuOpen ? "rotate-45" : "")} y="7" width="16" height="2" rx="1"></rect>
                <rect className={cn("origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)]", isMenuOpen ? "[y:7] [x:0] -rotate-[225deg]" : "")} y="12" width="9" height="2" rx="1"></rect>
            </svg>
        </button>
    )
}

export default SideNavbar

