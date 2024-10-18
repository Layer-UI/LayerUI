"use client";

import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { SearchBar } from './ui/searchbar';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import logo from "@/../public/logo.png"
import { Sidebar } from './Sidebar';
import { sidebarList } from '@/lib/sidebarlist';

export default function NavigationBar() {
  const [isMenuOpen, setMenuOpen] = useState(false)
  return (
    <>
      <nav className={cn(
        "flex m-0 border-none gap-5  justify-between items-center dark:backdrop-blur top-0 fixed z-40 inset-x-0 h-14 px-6 sm:px-16 w-full supports-backdrop-blur:bg-background/90 bg-gradient-to-r from-neutral-200/0 via-neutral-200/30 to-neutral-200/0 dark:bg-black/60  bg-background/40 backdrop-blur-lg"
      )}>
        <div className='flex items-center sm:gap-12'>
          <a href='/' className='flex items-center justify-center gap-2'>
            <Image src={logo} alt='logo' className='size-7 ' />
            <span className='tracking-tight hidden font-sans sm:block text-2xl font-bold'>
              Layer<span className=''> UI</span>
            </span>
          </a>
          <div className=' hidden lg:block'>
            <ul className='flex items-center text-sm font-medium gap-4'>
              {NavigationBarList.map(({ name, link }, index) => (
                <Link key={index} href={`/${link}`}>
                  <div>{name}</div>
                </Link>
              ))}
            </ul>
          </div>
        </div>
        <div className='flex gap-3 items-center'>
          <ThemeToggle />
          <SearchBar />
          <MenuHumbergar isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen}></MenuHumbergar>
        </div>
      </nav>
      <AnimatePresence>
        {
          isMenuOpen && (
            <motion.button
              onClick={() => { setMenuOpen(!isMenuOpen) }}
              initial={{ x: "100%" }}
              exit={{ x: "100%" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className='p-10 pt-20 dark:bg-black bg-white z-30 fixed inset-0 top-10  lg:hidden h-full w-full overflow-y-scroll'
            >
              <List></List>
            </motion.button>
          )
        }
      </AnimatePresence>
    </>
  );
}

const NavigationBarList = [
  { name: "Sections", link: "sections/pricing/gridpricing" },
];

function MenuHumbergar({
  isMenuOpen, setMenuOpen
}:
  {
    isMenuOpen: boolean,
    setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
  }) {
  return (
    <button className={cn(" lg:hidden group inline-flex w-12 h-12 text-center items-center justify-center transition rounded-lg text-black dark:text-white")} onClick={() => (setMenuOpen(!isMenuOpen))}>
      <svg className="w-6 h-6 fill-current pointer-events-none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <rect className={cn("origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)]", isMenuOpen ? "rotate-[315deg] [x:0] [y:7] " : "")} y="2" x="7" width="9" height="1.5" rx="1"></rect>
        <rect className={cn("origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)]", isMenuOpen ? "rotate-45" : "")} y="7" width="16" height="1.5" rx="1"></rect>
        <rect className={cn("origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)]", isMenuOpen ? "[y:7] [x:0] -rotate-[225deg]" : "")} y="12" width="9" height="1.5" rx="1"></rect>
      </svg>
    </button>
  )
}

function List() {

  return (
    <>
      <ul className='font-medium gap-3 mb-7  '>
        {NavigationBarList.map(({ name, link }, index) => (
          <Link key={index} href={`/${link}`}>
            <li className=' text-lg font-semibold transition-colors text-black dark:text-white opacity-70 hover:opacity-100'>{name}</li>
          </Link>
        ))}
      </ul>
      <Sidebar items={sidebarList} />
    </>
  )
}