"use client"

import { SparklesCore } from '@/components/ui/sparkles'
import { ChevronRight } from 'lucide-react'
import React from 'react'

export default function Glowsphere() {
  return (
    <section id='hero' className=' h-full relative w-full pb-[20rem]'>
      <div className=' absolute w-full h-full  overflow-hidden flex flex-col justify-end'>
        <div className=' relative h-[20rem]  bottom-0 w-full mx-auto ' >
          <div className=' absolute left-1/2 transform  -translate-x-1/2   -bottom-[60%] z-10  bg-blend-color-dodge  rounded-ful size-72 blur-3xl rounded-full bg-white/70'>
          </div>
          <div className=' absolute left-1/2 transform   -translate-x-1/2  -bottom-[210%]  blur-[60px] size-[60rem] rounded-full bg-gradient-to-t from-teal-500 via-cyan-400 to-blue-600'>
          </div>
          <div className=' absolute left-1/2 transform  -translate-x-1/2  z-10 -bottom-[215%]   bg-white/30 shadow-inner shadow-white/70 size-[60rem] rounded-full'>
          </div>
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="size-[68rem] [mask-image:radial-gradient(600px_circle_at_center,white,transparent)] left-1/2 transform -translate-x-1/2  -bottom-[180%] absolute"
            particleColor="#FFFFFF"
          />
        </div>
      </div>
      <div className=' flex z-20 px-2   flex-col items-center pt-40 gap-6'>
        <p className=' max-w-4xl text-3xl sm:text-4xl md:text-6xl text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-neutral-600 via-black to-neutral-400 dark:from-neutral-200 dark:via-gray-50 dark:to-neutral-700'>
          LayerUI turns ideas into interfaces in minutes.
        </p>
        <p className=' max-w-lg text-base px-5 sm:px-0 sm:text-lg text-center text-neutral-900 dark:text-neutral-200'>
          Optimize your workflow with responsive, animated components built for modern web development.
        </p>
        <div className=' flex  gap-8  mt-3  '>

          <a className=' relative mx-auto z-20 group/button cursor-pointer'>
            <div className=' absolute transition-all -inset-px duration-300 opacity-65 blur-md group-hover/button:blur-lg group-hover/button:opacity-100 bg-gradient-to-t from-blue-800 via-cyan-400 to-blue-800 '>
            </div>
            <div className=' text-sm sm:text-base  flex gap-1 justify-center items-center sm:px-6 sm:py-2 relative text-white border border-white/20 shadow-inner shadow-white/40  bg-black px-3 py-1.5 rounded-full group-hover/button:'>
              Browse Components
              <ChevronRight strokeWidth={1.2} className='  block group-hover/button:translate-x-2 duration-500 ease-in-out transition-all' />
            </div>
          </a>
          <a className=' relative mx-auto z-20 group/button cursor-pointer'>
            <div className=' absolute transition-all -inset-px duration-300 opacity-65 blur-md group-hover/button:blur-lg group-hover/button:opacity-100 bg-gradient-to-t from-blue-800 via-cyan-400 to-blue-800 '>
            </div>
            <div className='text-sm sm:text-base  flex gap-1 justify-center items-center sm:px-6 sm:py-2 relative text-white border border-white/20 shadow-inner shadow-white/40  bg-black px-3 py-1.5 rounded-full group-hover/button:'>
              Get Started
              <ChevronRight strokeWidth={1.2} className='  block group-hover/button:translate-x-2 duration-500 ease-in-out transition-all' />
            </div>
          </a>

        </div>
      </div>
    </section>
  )
}
