import { FeaturesSection } from '@/components/FeaturesSection'
import Herosection from '@/components/Herosection'
import Faq from '@/components/ui/Faq'
import React from 'react'

export default function page() {
  return (
    <main>
      <Herosection></Herosection>
      <div className=' w-full -mt-5  shadow-xl bg-[#fffefd] border-dashed border z-20'>
        <FeaturesSection></FeaturesSection>
      </div>
      <div className=' bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:12px_12px]'>
        <Faq></Faq>
      </div>
    </main>
  )
}
