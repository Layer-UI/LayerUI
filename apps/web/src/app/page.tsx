import { FeaturesSection } from '@/components/FeaturesSection'
import Herosection from '@/components/Herosection'
import React from 'react'

export default function page() {
  return (
    <main>
      <Herosection></Herosection>
      <div className=' w-full -mt-5  shadow-xl bg-[#fffefd] border-dashed border z-20'>
        <FeaturesSection></FeaturesSection>
      </div>
    </main>
  )
}
