import Lightsprak from '@/components/ui/lightsparks'
import React from 'react'

export default function background3() {
    return (
        <div className=' h-screen w-full relative'>
            <div
                style={{
                    maskImage: `linear-gradient(to top, transparent, black 260%)`,
                }}
                className=' absolute flex justify-center gap-60  h-full w-full'>
                <div className=' max-w-sm sm:max-w-7xl overflow-hidden flex gap-[1rem]'>
                    {
                        Array(6).fill(0).map((_, index) => (
                            <div key={index} className=' shadow-inner shadow-black/50 dark:shadow-white relative h-full w-14 -mt-16   dark:border-white/30  sm:w-20  border-black/25 border-double border-6 px-2'>
                                <Lightsprak className=' right-0 '></Lightsprak>
                                <Lightsprak className=' mb-20 right-0'></Lightsprak>
                                <div className='dark:bg-white/15 bg-black/5 h-full'>
                                </div>
                                <Lightsprak className=' left-0] '></Lightsprak>
                                <Lightsprak className='mb-20 left-0 '></Lightsprak>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
