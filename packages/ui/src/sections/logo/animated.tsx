import { motion } from "framer-motion";

const logos = [
    { name: 'Docker', image: '/sociallogos/Docker.svg' },
    { name: 'Google', image: '/sociallogos/Google.svg' },
    { name: 'Instagram', image: '/sociallogos/Instagram.svg' },
    { name: 'Microsoft', image: '/sociallogos/Microsoft.svg' },
    { name: 'Netflix', image: '/sociallogos/Netflix.svg' },
    { name: 'Spotify', image: '/sociallogos/Spotify.svg' },
];

const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { duration: 1, type: "spring" } },
};

const LogoCarousel = () => (
    <div
        className="group relative mt-6 flex gap-6 overflow-hidden p-5"
        style={{
            maskImage: 'linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)',
        }}
    >
        <motion.div
            animate={{ translateX: '-50%' }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
            className="flex shrink-0 flex-row justify-around gap-6 pr-6"
        >
            {logos.map((logo, i) => (
                <img
                    key={i}
                    src={logo.image}
                    className="h-10 w-28 dark:brightness-0 dark:invert"
                    alt={logo.name}
                />
            ))}
            {/** second set of logo */}
            {logos.map((logo, i) => (
                <img
                    key={i}
                    src={logo.image}
                    className="h-10 w-28 dark:brightness-0 dark:invert"
                    alt={logo.name}
                />
            ))}
        </motion.div>
    </div>
);

const LogoProof = () => (
    <section className="w-full py-12 flex flex-col items-center">
        <motion.div
            className="max-w-2xl"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
                hidden: {},
                show: {
                    transition: { staggerChildren: 0.3 },
                },
            }}
        >
            <motion.h1
                variants={FADE_DOWN_ANIMATION_VARIANTS}
                className="text-xl sm:text-4xl font-bold text-center"
            >
                Partnerships with Coveted Brands
            </motion.h1>
            <motion.h1
                variants={FADE_DOWN_ANIMATION_VARIANTS}
                className="p-6 sm:text-base max-w-2xl text-sm text-center m-auto"
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit nam maxime quas fugiat tempore blanditiis, eveniet quia accusantium.
            </motion.h1>
        </motion.div>
        <motion.div
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            initial="hidden"
            animate="show"
            transition={{ duration: 1, type: 'spring', stiffness: 150 }}
            className="mx-auto w-full px-4 md:px-8 max-w-4xl"
        >
            <LogoCarousel />
        </motion.div>
    </section>
);

export default LogoProof;
