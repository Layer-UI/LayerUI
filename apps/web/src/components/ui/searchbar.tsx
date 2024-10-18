"use client"

import * as React from "react"
import { IoIosSearch } from "react-icons/io";
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "@/components/ui/command"
import Link from "next/link";
import { sidebarList } from "@/lib/sidebarlist";

export function SearchBar() {
    const [open, setOpen] = React.useState(false)

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }

        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])

    return (
        <div className="border group rounded-full p-[3px] border-black/25 border-dashed dark:border-white/40 ">
            <button onClick={() => { setOpen(true) }} className="hidden  group lg:flex lg:justify-center lg:items-center py-1.5 px-3 border gap-6 border-black/10 dark:border-white/10 dark:hover:border-white/30 dark:hover:shadow-md rounded-full shadow-sm">
                <div className="flex gap-2 items-center">
                    <IoIosSearch className="w-4 h-4 " />
                    <span className=" text-sm  ">Search Section</span>
                </div>
                <div className="flex items-center">
                    <kbd className="pointer-events-none  hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex"><span className="text-xs">⌘</span>J</kbd>
                </div>
            </button>
            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Type a command or search..." />

                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Getting Started">
                        <CommandItem key={1}>
                            <Link href={'/introduction'}>Introduction</Link >
                        </CommandItem>
                        <CommandItem key={2}>
                            <Link href={'/installation'}>Installation</Link >
                        </CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="Sections">
                        {
                            sidebarList.map((item: {
                                title: string;
                                items: {
                                    title: string;
                                    href: string;
                                    items: string[];
                                }[];
                            }, index: number) => (
                                <CommandItem key={index}>
                                    <Link href={item.items[0].href}>
                                        {item.title}
                                    </Link>
                                </CommandItem>
                            ))
                        }
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </div>
    )
}
