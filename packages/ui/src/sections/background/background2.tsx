import { motion } from 'framer-motion';

export default function background2() {
    return (
        <div className=' h-screen relative w-full'>
            <div className=' absolute w-full h-full  overflow-hidden flex flex-col justify-end'>
                <div className=' relative h-[20rem]  bottom-0 w-full mx-auto ' >
                    <motion.div
                        initial={{ opacity: 1 }}
                        animate={{ opacity: [1, 0.2, 1] }}
                        transition={{ repeat: Infinity, ease: 'linear', repeatType: 'loop', duration: 6 }}
                        className=' absolute left-1/2 transform  -translate-x-1/2   top-[0%] z-10  bg-blend-color-dodge  rounded-ful h-[30rem] w-[30rem] blur-[90px]  rounded-full bg-white/70'>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 1 }}
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ repeat: Infinity, ease: 'linear', repeatType: 'loop', duration: 6}}

                        className=' absolute left-1/2 z-10 transform   -translate-x-1/2  -bottom-[210%]   size-[60rem] rounded-full blur-lg bg-gradient-to-t from-teal-500 via-cyan-400 to-blue-600'>
                    </motion.div>
                    <div
                        style={{
                            maskImage: `linear-gradient(to top, transparent, black 50%)`,
                        }}
                        className=' absolute left-1/2 transform   -translate-x-1/2  z-10 -bottom-[265%]    bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]  size-[70rem] bg-white dark:bg-black rounded-full'>
                    </div>
                </div>
            </div>
            <div
                className="absolute  h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-white dark:bg-black bg-[size:24px_24px]"
            ></div>
        </div>
    )
}
