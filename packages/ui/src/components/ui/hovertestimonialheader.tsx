import { motion } from 'framer-motion';

const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { duration: 1, type: "spring" } },
};

const TestimonialHeader = () => (
    <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
            hidden: {},
            show: {
                transition: {
                    staggerChildren: 0.3,
                },
            },
        }}
        className='max-w-3xl flex flex-col items-center px-5 lg:px-0'
    >
        <motion.p
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className='mb-5 rounded-2xl p-2 w-40 font-medium text-sm border text-center bg-black shadow-inner shadow-white text-white'
        >
            Words from Others
        </motion.p>
        <motion.h1
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className="text-xl md:text-4xl font-bold text-center"
        >
            What our happy clients say
        </motion.h1>
        <motion.h1
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className="pt-6 pb-8 text-base max-w-2xl text-center m-auto"
        >
            Lorem ipsum dolor sit amet consectetur adipisicing elit nam maxime quas fugiat tempore blanditiis, eveniet quia accusantium.
        </motion.h1>
    </motion.div>
);

export default TestimonialHeader;
