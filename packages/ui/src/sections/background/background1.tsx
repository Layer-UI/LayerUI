import { useMotionValue, motion, useMotionTemplate } from 'framer-motion';

export default function background1() {
    const x = new Array(20).fill(0);
    const y = new Array(30).fill(0);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    return (
        <div className=' h-screen w-full relative overflow-hidden'>
            <div className=' absolute'
                style={{
                    maskImage: `linear-gradient(to top, transparent, black 100%)`,
                }}

            >
                <div
                    onMouseMove={(e) => {
                        const { left, top } = e.currentTarget.getBoundingClientRect();

                        mouseX.set(e.clientX - left);
                        mouseY.set(e.clientY - top);
                    }}
                    className='relative h-full w-full'>

                    {
                        y.map((_i, i) => (
                            <div
                                key={i}
                                className=' flex flex-nowrap '>
                                {
                                    x.map((_j, j) => (
                                        <div key={j} className=' bg-white  relative p-1 w-28 h-28 dark:bg-black shadow-md  m-[0.8;px] z-10'>
                                        </div>
                                    ))
                                }
                            </div>
                        ))
                    }
                    <motion.div
                        className="pointer-events-none blur-3xl absolute inset-0 -z-10 rounded-xl transition duration-300 opacity-100"
                        style={{
                            background: useMotionTemplate`
      radial-gradient(
        200px circle at ${mouseX}px ${mouseY}px,
rgba(237, 252, 0, 0.8),
        rgba(255, 124, 0, 1) 40%,
        rgba(32, 121, 255, 1) 70%,
        transparent 90%
      )
    `,
                        }}
                    />

                </div>
            </div>
        </div>
    )
}


