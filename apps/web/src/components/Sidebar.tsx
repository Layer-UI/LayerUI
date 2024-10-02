"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

// SidebarProps interface to define the shape of the `items` prop passed to Sidebar
export interface SidebarProps {
  items: SidebarNavItem[];
}

// SidebarNavItem interface defines the structure of each sidebar item
export interface SidebarNavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  label?: string;
  items?: SidebarNavItem[] | string[];  // Accept both SidebarNavItem[] and string[]
}


// Sidebar component renders a list of sidebar items
export function Sidebar({ items }: SidebarProps) {
  const pathname = usePathname(); // Get the current path

  return items.length ? (
    <div className="w-full">
      {items.map((item: SidebarNavItem, index: number) => (
        <div key={index} className={cn("pb-4")}>
          <h4 className="mb-1 text-start rounded-md px-2 py-1 text-sm font-semibold">
            {item.title}
          </h4>
          {item.items && (
            <SidebarItems items={item.items} pathname={pathname} />
          )}
        </div>
      ))}
    </div>
  ) : null;
}

interface SidebarItemsProps {
  items: SidebarNavItem[] | string[];  // Adjust the type here
  pathname: string | null;
}

export function SidebarItems({
  items,
  pathname,
}: SidebarItemsProps) {
  return items?.length ? (
    <div className="grid grid-flow-row auto-rows-max text-sm">
      {items.map((item: SidebarNavItem | string, index: number) =>
        typeof item === "string" ? (
          <span key={index} className="flex w-full items-center rounded-md p-2 text-muted-foreground">
            {item}
          </span>
        ) : item.href && !item.disabled ? (
          <Link
            key={index}
            href={item.href}
            className={cn(
              "group flex w-full items-center text-sm tracking-wider rounded-md border border-transparent px-2 py-1 hover:translate-x-3 hover:scale-105 hover:text-black hover:font-semibold transition-all duration-300 ease-in-out",
              item.disabled && "cursor-not-allowed opacity-60",
              pathname === item.href
                ? "font-medium text-foreground "
                : "text-muted-foreground",
            )}
            target={item.external ? "_blank" : ""}
            rel={item.external ? "noreferrer" : ""}
          >
            <span className="shrink-0">{item.title}</span>
            {item.label && (
              <div className="ml-2 border group rounded-full p-[2px] flex justify-center items-center border-black/25 border-dashed dark:border-white/40">
                <span className=" text-xs bg-white border dark:bg-black dark:border-white/30 dark:shadow-white/20 dark:shadow-inner rounded-full shadow-sm px-1 text-center py-0.5 hover:text-neutral-600 hover:dark:text-neutral-400">
                  {item.label}
                </span>
              </div>
            )}
          </Link>
        ) : (
          <span
            key={index}
            className={cn(
              "flex w-full cursor-not-allowed items-center rounded-md p-2 text-muted-foreground hover:underline",
              item.disabled && "cursor-not-allowed opacity-60",
            )}
          >
            {item.title}
            {item.label && (
              <span className="ml-2 rounded-md bg-muted px-1.5 py-0.5 text-xs leading-none text-muted-foreground no-underline group-hover:no-underline">
                {item.label}
              </span>
            )}
          </span>
        ),
      )}
    </div>
  ) : null;
}
