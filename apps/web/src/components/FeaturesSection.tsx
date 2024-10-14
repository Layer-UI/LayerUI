"use client"

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Techlogos } from "./ui/Feature_Block _Card";
import BlurFade from "./ui/blur-fade";



export function FeaturesSection() {
    const features = [
        {
            title: "Easily Add Trending Sections to Your Website",
            description:
                "Use the most popular and trending components in your websites effortlessly, without the hassle of handling styling and animations.",
            skeleton: <TrendingSections />,
            className: "col-span-1 lg:col-span-3 ",
        },
        {
            title: "Copy, Paste, and Instantly Use",
            description:
                "Just copy and paste! Simply drop the code into your UI folder and start using these trendy components in your projects. It's as easy as that!.",
            skeleton: <InstantlyUse />,
            className:
                "col-span-1 lg:col-span-3   ",
        },
        {
            title: "Code Quality ",
            description:
                "Experience high code quality with sections that are both top-notch and easy to understand.",
            skeleton: <CodeQuality />,
            className:
                "col-span-1 lg:col-span-3   ",
        },
        {
            title: "Build with the Latest Technologies",
            description:
                "Build with cutting-edge technologies like React, Next.js, Framer Motion, Tailwind CSS, and TypeScript. Accelerate your development and create stunning, modern applications faster than ever!",
            skeleton: <Technologies />,
            className: "col-span-1 lg:col-span-3 ",
        },
    ];
    return (
        <div className="relative z-20 py-10 lg:py-40 max-w-5xl mx-auto">
            <div className="px-8">
                <BlurFade
                    className={cn(
                        " text-center text-base mb-3",
                    )}
                >
                    OVERVIEW
                </BlurFade>
                <BlurFade className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
                    What’s the big deal about LayerUI?
                </BlurFade>

            </div>

            <div className="relative ">
                <div className="grid grid-cols-1 lg:grid-cols-6 mt-12">
                    {features.map((feature) => (
                        <FeatureCard key={feature.title} className={feature.className}>
                            <FeatureTitle>{feature.title}</FeatureTitle>
                            <FeatureDescription>{feature.description}</FeatureDescription>
                            <div className=" h-full w-full">{feature.skeleton}</div>
                        </FeatureCard>
                    ))}
                </div>
            </div>
        </div>
    );
}

const FeatureCard = ({
    children,
    className,
}: {
    children?: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
            {children}
        </div>
    );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
    return (
        <BlurFade className=" max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
            {children}
        </BlurFade>
    );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
    return (
        <BlurFade
            className={cn(
                "text-sm md:text-base  max-w-4xl text-left mx-auto",
                "text-neutral-500 text-center font-normal dark:text-neutral-300",
                "text-left max-w-sm mx-0 md:text-sm my-2"
            )}
        >
            {children}
        </BlurFade>
    );
};

export const CodeQuality = () => {
    return (
        <div className="relative flex py-8 px-2 gap-10 h-full ">
            <div className="w-full  p-5  mx-auto bg-white dark:bg-neutral-900 shadow-xl dark:shadow-inner dark:shadow-white/80 rounded-t-xl  group h-full ">
                <BlurFade className="flex flex-1 w-full h-full flex-col space-y-2 rounded-xl  shadow-md ">
                    {/* TODO */}
                    <img
                        src="/hero/code.png"
                        alt="header"
                        className="h-full w-full object-cover object-left-top rounded-sm"
                    />
                </BlurFade>
            </div>

            <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none" />
            <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none" />
        </div>
    );
};

export const InstantlyUse = () => {
    return (

        <div className="w-full  group h-full">
            <BlurFade className="w-full h-full ">
                <video
                    width="100%"
                    height="100%"
                    autoPlay
                    loop
                    muted
                    preload="none"
                    style={{ display: 'block' }}
                    className=" rounded-xl  shadow-md mt-10 lg:mt-20"
                >
                    <source src="/hero/copypast.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </BlurFade>
        </div>
    );
};

export const TrendingSections = () => {
    const images = [
        "/hero/Picsart_24-08-02_15-52-26-591.jpg",
        "/hero/testimonials.jpg",
        "/hero/pricing1.jpg",
        "/hero/Picsart_24-08-02_15-53-28-330.jpg",
        "/hero/Picsart_24-08-02_15-08-15-980.jpg",
        "/hero/Picsart_24-08-02_13-13-23-424.jpg",
        "/hero/Picsart_24-08-02_15-05-56-350.jpg",
        "/hero/Picsart_24-08-02_15-07-28-295.jpg",
    ];

    const imageVariants = {
        whileHover: {
            scale: 1.1,
            rotate: 0,
            zIndex: 100,
        },
        whileTap: {
            scale: 1.1,
            rotate: 0,
            zIndex: 100,
        },
    };
    return (
        <div className="relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden">
            {/* TODO */}
            <div className="flex flex-row -ml-20">
                {images.map((image, idx) => (
                    <motion.div
                        variants={imageVariants}
                        key={"images-first" + idx}
                        style={{
                            rotate: Math.random() * 20 - 10,
                        }}

                        whileHover="whileHover"
                        whileTap="whileTap"
                        className="rounded-xl -mr-4 mt-4 bg-white dark:bg-neutral-800    flex-shrink-0 overflow-hidden"
                    >
                        <motion.img
                            initial={{ x: 20, opacity: 0, filter: `blur(6px)` }}
                            whileInView={{ x: 0, opacity: 1, filter: `blur(0px)` }}
                            viewport={{ amount: 0.6 }}
                            transition={{ delay: 0.3 * idx, duration: 0.5, ease: 'easeIn', stiffness: 150, type: 'spring' }}
                            src={image}
                            alt="section images"
                            width="500"
                            height="500"
                            className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                        />
                    </motion.div>
                ))}
            </div>
            <div className="flex flex-row">
                {images.slice().reverse().map((image, idx) => (
                    <motion.div
                        key={"images-second" + idx}
                        style={{
                            rotate: Math.random() * 20 - 10,
                        }}
                        variants={imageVariants}
                        whileHover="whileHover"
                        whileTap="whileTap"
                        className="rounded-xl -mr-4 mt-4 bg-white dark:bg-neutral-800    flex-shrink-0 overflow-hidden"
                    >
                        <motion.img
                            initial={{ x: 20, opacity: 0, filter: `blur(6px)` }}
                            whileInView={{ x: 0, opacity: 1, filter: `blur(0px)` }}
                            viewport={{ amount: 0.6 }}
                            transition={{ delay: 0.2 * idx, duration: 0.5, ease: 'easeIn', stiffness: 150, type: 'spring' }}

                            src={image}
                            alt="section images"
                            width="500"
                            height="500"
                            className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                        />
                    </motion.div>
                ))}
            </div>

            <div className="absolute  left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-white dark:from-black to-transparent  h-full pointer-events-none" />
            <div className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-white dark:from-black  to-transparent h-full pointer-events-none" />
        </div>
    );
};

export const Technologies = () => {
    return (
            <Techlogos></Techlogos>
    );
};


