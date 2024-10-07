"use client";

import { motion } from "framer-motion";

const logos = [
    { name: 'Docker', image: '/sociallogos/Docker.svg' },
    { name: 'Google', image: '/sociallogos/Google.svg' },
    { name: 'Instagram', image: '/sociallogos/Instagram.svg' },
    { name: 'Microsoft', image: '/sociallogos/Microsoft.svg' },
    { name: 'Netflix', image: '/sociallogos/Netflix.svg' },
    { name: 'Spotify', image: '/sociallogos/Spotify.svg' },
];

const fadeInOut = {
    visible: { opacity: 1, y: 0, transition: { duration: 2, stiffness: 100, type: 'spring' } },
    hidden: (custom: number) => ({ opacity: 0, y: custom * 10 }),
};

const LogoProof = () => (
    <section className="w-full py-12 mt-40 flex flex-col items-center">
        <div className="max-w-2xl">
            <motion.h1
                custom={1}
                variants={fadeInOut}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-xl sm:text-3xl font-bold text-center"
            >
                Partnerships with Coveted Brands
            </motion.h1>
            <motion.h1
                custom={-1}
                variants={fadeInOut}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="p-3 sm:text-base text-sm text-center m-auto"
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit nam maxime quas fugiat tempore blanditiis, eveniet quia accusantium.
            </motion.h1>
        </div>
        <motion.div
            custom={-1}
            variants={fadeInOut}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto w-full px-4 md:px-8 max-w-4xl"
        >
            <div className="group relative mt-6 flex gap-6 overflow-hidden p-5"
                style={{ maskImage: 'linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)' }}
            >
                <motion.div
                    animate={{ translateX: '-50%' }}
                    transition={{ duration: 15, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
                    className="flex shrink-0 flex-row justify-around gap-6 pr-6"
                >
                    {logos.map(({ image, name }, i) => (
                        <motion.div
                            key={i}
                            animate={{ y: i % 2 === 0 ? [-8, 8, -8] : [8, -8, 8] }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                            className="py-1 px-2"
                        >
                            <img
                                src={image}
                                className="sm:h-10 h-10 w-20 sm:w-28 dark:brightness-0 dark:invert"
                                alt={name}
                            />
                        </motion.div>
                    ))}
                    {logos.map(({ image, name }, i) => (
                        <motion.div
                            key={i}
                            animate={{ y: i % 2 === 0 ? [-8, 8, -8] : [8, -8, 8] }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                            className="py-1 px-2"
                        >
                            <img
                                src={image}
                                className="sm:h-10 h-10 w-20 sm:w-28 dark:brightness-0 dark:invert"
                                alt={name}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    </section>
);

export default LogoProof;
