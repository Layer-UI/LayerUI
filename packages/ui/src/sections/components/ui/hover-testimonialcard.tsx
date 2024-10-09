import React, { FC, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';

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
    const [isHover, setHover] = useState(false);

    const CardVariants = {
        open: { height: "auto", opacity: 1, y: "-110%" },
        close: { height: 0, opacity: 0, y: "30%" },
    };

    return (
        <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className='relative'
        >
            <AnimatePresence>
                {isHover && (
                    <motion.div
                        variants={CardVariants}
                        className='absolute border shadow-inner bg-gradient-to-r from-slate-900 to-slate-700 shadow-white/70 rounded-2xl'
                        initial="close"
                        animate={isHover ? "open" : "close"}
                        exit="close"
                        transition={{ duration: 0.5, type: 'spring', stiffness: 150 }}
                    >
                        <p className="text-white text-sm font-light m-1 bg-black p-3 text-center shadow-md rounded-2xl">
                            {description}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
            <div className='flex cursor-pointer justify-center items-center border shadow-inner dark:bg-white/20 backdrop-blur-xl bg-black dark:shadow-black/30 shadow-white rounded-2xl'>
                <div className={cn('m-0.5 bg-white dark:bg-black shadow-lg rounded-xl flex border transition-all duration-150 ease-in-out', isHover ? "rotate-0" : "even:rotate-2 odd:-rotate-2")}>
                    <div>
                        <img
                            className="block h-full w-12 rounded-l-xl object-cover"
                            src={image}
                            alt={name}
                        />
                    </div>
                    <div className='my-2 mx-3'>
                        <div className="flex w-full gap-4">
                            <h3 className="m-0 text-sm font-semibold text-gray-900 dark:text-gray-100">
                                {name}
                            </h3>
                            <p className="font-regular m-0 text-center text-sm text-gray-600 dark:text-gray-400">
                                {profession}
                            </p>
                        </div>
                        <div className='flex mt-2 -translate-x-1 mb-0 justify-start items-center'>
                            {Array(5).fill(0).map((_, i) => (
                                <svg
                                    key={i}
                                    className={cn("w-3 h-3 ms-1", i + 1 <= stars ? "text-yellow-300" : "text-gray-300 dark:text-gray-500")}
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
