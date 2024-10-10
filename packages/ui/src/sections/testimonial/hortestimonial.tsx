import { cn } from '@/lib/utils';
import React, { FC } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        name: 'Daniella Doe',
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing e quis tempore cupiditate. Sint libero voluptas.",
        profession: 'Mobile dev',
        image: '/person/women.jpg',
        stars: 5,
    },
    {
        name: 'Jane doe',
        profession: 'Marketing',
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing e quis tempore cupiditate. Sint libero voluptas.",
        image: '/person/women.jpg',
        stars: 5,
    },
    {
        name: 'Yanick Doe',
        profession: 'Software Engineer',
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing e quis tempore cupiditate. Sint libero voluptas.",
        image: '/person/women.jpg',
        stars: 4,
    },
    {
        name: 'Andy Doe',
        profession: 'Frontend Developer',
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing e quis tempore cupiditate. Sint libero voluptas.",
        image: '/person/women.jpg',
        stars: 5,
    },
    {
        name: 'Saud',
        profession: 'Game Developer',
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing e quis tempore cupiditate. Sint libero voluptas.",
        image: '/person/women.jpg',
        stars: 4,
    },
    {
        name: 'Yanndy Doe',
        profession: 'Mobile dev',
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing e quis tempore cupiditate. Sint libero voluptas.",
        image: '/person/women.jpg',
        stars: 5,
    },
];

const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { duration: 1, type: "spring" } },
};

const Testimonial: FC = () => {
    return (
        <section className="w-full py-12">
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{
                    hidden: {},
                    show: { transition: { staggerChildren: 0.3 } },
                }}
                className='flex flex-col items-center'
            >
                <motion.p
                    variants={FADE_DOWN_ANIMATION_VARIANTS}
                    className='mb-5 rounded-2xl p-2 w-40 font-medium text-sm border text-center shadow-lg dark:shadow-inner dark:shadow-white/30 bg-white dark:bg-black'
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
                    className="pt-6 pb-8 md:text-base max-w-2xl text-center text-sm m-auto md:px-0 px-7"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit nam maxime quas fugiat tempore blanditiis, eveniet quia accusantium.
                </motion.h1>
            </motion.div>
            <div className="mx-auto w-full px-4 md:px-8">
                <div
                    className="group relative mt-6 flex gap-6 overflow-hidden p-5"
                    style={{
                        maskImage: 'linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)',
                    }}
                >
                    {Array(6).fill(null).map((_, index) => (
                        <motion.div
                            key={index}
                            initial={{ translateX: 0 }}
                            animate={{ translateX: 'calc(-100% - 3rem)' }}
                            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                            className="flex shrink-0 flex-row justify-around gap-6"
                        >
                            {testimonials.map((testimonial, i) => (
                                <div key={i} className="flex flex-row justify-center">
                                    <TestimonialCard key={testimonial.name} {...testimonial} />
                                </div>
                            ))}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

interface TestimonialCardProps {
    name: string;
    description: string;
    image: string;
    profession: string;
    stars: number;
}

const TestimonialCard: FC<TestimonialCardProps> = ({
    name,
    description,
    image,
    profession,
    stars
}) => {
    return (
        <div
            className={`card-shadow shadow-lg bg-white dark:bg-black dark:shadow-inner dark:shadow-white/30 p-5 dark:border-neutral-90 relative flex h-auto max-w-[16rem] select-none flex-col items-baseline py-5 justify-center overflow-hidden rounded-2xl border transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-5`}
        >
            <p className="mt-3 text-left text-sm font-light text-gray-600 md:text-base dark:text-gray-400">
                {description}
            </p>
            <div className='w-full mt-4 flex justify-between'>
                <img
                    className="block h-7 w-7 rounded-full object-cover"
                    src={`${image}`}
                    alt={image}
                    width={120}
                    height={80}
                />
                <span className='w-[1px] mx-1 bg-gradient-to-t from-transparent dark:via-gray-500 via-gray-800 to-transparent'></span>
                <div className='flex -translate-x-1 mb-0 justify-start items-center'>
                    {Array(5).fill(0).map((_, index) => (
                        <svg key={index} className={cn("w-3 h-3 ms-1", index + 1 <= stars ? "text-yellow-300" : "text-gray-300 dark:text-gray-500")} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                    ))}
                </div>
            </div>
            <div className="mb-0 mt-3 flex w-full justify-between">
                <h3 className="m-0 text-sm font-semibold text-gray-900 dark:text-gray-100">
                    {name}
                </h3>
                <p className="font-regular m-0 text-center text-sm text-gray-600 dark:text-gray-400">
                    {profession}
                </p>
            </div>
        </div>
    );
};

export default Testimonial;
