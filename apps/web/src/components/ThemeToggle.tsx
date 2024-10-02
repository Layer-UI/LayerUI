'use client'

import { useTheme } from 'next-themes'
import { FiSun } from 'react-icons/fi'
import { PiMoonThin } from "react-icons/pi";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme()

    return (
        <button
            className=''
            onClick={() => {
                if (theme === 'dark') {
                    return setTheme('light')
                }
                return setTheme('dark')
            }}
        >
            <span className=' dark:hidden'><PiMoonThin strokeWidth={3} className=' w-6 h-6 text-gray-800 hover:text-black' /></span>
            <span className='hidden dark:block '><FiSun className='w-6 h-6 text-gray-300 hover:text-white' /></span>
        </button>
    )
}
