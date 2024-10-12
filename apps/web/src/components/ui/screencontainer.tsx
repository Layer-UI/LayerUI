"use client"

import React from 'react'
import { motion, MotionValue } from 'framer-motion';

export default function Screeencontainer({
    rotate,
    scale,
}: {
    rotate: MotionValue<number>;
    scale: MotionValue<number>;
}) {
    return (
        <motion.div
            style={{
                rotateX:rotate,
                scale:scale,
                transformOrigin: 'top',
            }}
            className='w-full mx-auto p-2.5 bg-black/10 backdrop-blur-lg rounded-2xl mt-10 shadow  max-w-3xl'>
                <div className=' p-2 rounded-2xl bg-black/90   backdrop-blur-2xl'>
                    <div className="w-full h-full p-2 bg-[#fffefd] rounded-2xl shadow-black/70 shadow-inner">
                        <video
                            width="100%"
                            height="100%"
                            autoPlay
                            loop
                            muted
                            preload="none"
                            style={{ display: 'block' }}
                            className=" rounded-2xl shadow-md border"
                        >
                            <source src="/hero/herovideo.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
            </div>
        </motion.div>
    )
}
