'use client'

import { FeaturesSection } from '@/components/FeaturesSection'
import Footer from '@/components/Footer'
import Herosection from '@/components/Herosection'
import Faq from '@/components/ui/Faq'
import { useTheme } from 'next-themes'
import React from 'react'

export default function page() {
  const { theme, setTheme } = useTheme()

  setTheme("light")

  return (
    <main>
      <Herosection></Herosection>
      <div className=' w-full -mt-5  shadow-xl bg-[#fffefd] border-dashed border z-20'>
        <FeaturesSection></FeaturesSection>
        <Faq></Faq>
        <Footer></Footer>
      </div>
    </main>
  )
}
