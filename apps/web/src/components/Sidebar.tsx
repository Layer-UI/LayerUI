"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export interface SidebarNavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  label?: string;
  items?: SidebarNavItem[] | string[];
  code?: string;
  livelink?: string;
  source?: string;
}

export interface SidebarProps {
  items: SidebarNavItem[];
}

export function Sidebar({ items }: SidebarProps) {
  const pathname = usePathname();

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <div key={index} className={cn("pb-4")}>
          <h4 className="mb-1 text-start rounded-md px-2 py-1 text-sm font-semibold">
            {item.title}
          </h4>
          {item.items && <SidebarItems items={item.items} pathname={pathname} />}
        </div>
      ))}
    </div>
  );
}

interface SidebarItemsProps {
  items: SidebarNavItem[] | string[];
  pathname: string | null;
}

export function SidebarItems({ items, pathname }: SidebarItemsProps) {
  return (
    <div className="grid grid-flow-row auto-rows-max text-sm">
      {items.map((item, index) =>
        typeof item === "string" ? (
          <span key={index} className="flex w-full items-center rounded-md p-2 text-muted-foreground">
            {item}
          </span>
        ) : (
          <SidebarLink key={index} item={item} pathname={pathname} />
        )
      )}
    </div>
  );
}

interface SidebarLinkProps {
  item: SidebarNavItem;
  pathname: string | null;
}

function SidebarLink({ item, pathname }: SidebarLinkProps) {
  const isActive = pathname === item.href;

  return item.href && !item.disabled ? (
    <Link
      href={item.href}
      className={cn(
        "group flex w-full items-center text-sm tracking-wider rounded-md px-2 py-1 border-transparent hover:translate-x-3 hover:scale-105 hover:text-black dark:hover:text-white hover:font-semibold transition-all duration-300",
        item.disabled && "cursor-not-allowed opacity-60",
        isActive ? "font-medium text-foreground" : "text-muted-foreground"
      )}
      target={item.external ? "_blank" : ""}
      rel={item.external ? "noreferrer" : ""}
    >
      <span className="shrink-0">{item.title}</span>
      {item.label && <LabelBadge label={item.label} />}
    </Link>
  ) : (
    <span className={cn("flex w-full items-center p-2 text-muted-foreground", item.disabled && "opacity-60")}>
      {item.title}
      {item.label && <LabelBadge label={item.label} />}
    </span>
  );
}

interface LabelBadgeProps {
  label: string;
}

function LabelBadge({ label }: LabelBadgeProps) {
  return (
    <div className="ml-2 border rounded-full p-[2px] flex items-center justify-center border-black/25 dark:border-white/40">
      <span className="text-xs bg-white dark:bg-black dark:border-white/30 rounded-full px-1 py-0.5 shadow-sm">
        {label}
      </span>
    </div>
  );
}
