"use client";

import { cn } from "@/lib/utils";
import React, { useState, ReactElement } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BlurFade from "./blur-fade";

const FaqList = [
    {
        title: "What is LayerUI?",
        answer:
            "LayerUI is a React-based UI library designed to help developers create beautiful, interactive user interfaces effortlessly. It offers a wide range of customizable components.",
    },
    {
        title: "What technologies does LayerUI use?",
        answer:
            "Every component in LayerUI is built with React and Tailwind CSS. Animations are primarily crafted using Framer Motion or JavaScript, with occasional use of other animation libraries.",
    },
    {
        title: "Can I customize LayerUI components?",
        answer:
            "Yes, LayerUI is highly customizable. You can easily override styles and behaviors to fit your design requirements.",
    },
    {
        title: "How do I integrate LayerUI with my existing project?",
        answer:
            "LayerUI can be seamlessly integrated into any React project. Simply install the library, import the components you need, and start using them. Detailed integration instructions are available in our documentation.",
    },
    {
        title: "How do I address a broken component in LayerUI?",
        answer:
            "First, ensure you're using the latest versions of React, Tailwind, and any animation frameworks employed by the component. Check for CSS conflicts on your page, such as issues with sticky positioning inside elements with overflow settings. If the problem persists, contact us for assistance, and we'll investigate promptly.",
    },
];

export default function Faq() {
    return (
        <section className="flex max-w-2xl mx-auto shadow -z-10 bg-[#fffefd] border-dashed border   w-full flex-col gap-5 items-center py-10 px-5">
            <div className=" flex flex-col items-center mb-4 gap-4 max-w-xl">
                <BlurFade>
                    <div className=" flex px-3.5 w-[6.8rem] py-1 text-sm  bg-white border dark:bg-black dark:border-white/30 dark:shadow-white/20 dark:shadow-inner  items-center rounded-full shadow-sm justify-center  transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                        FAQ
                    </div>
                </BlurFade>
                <BlurFade className=" text-lg md:text-2xl font-semibold">
                    Frequently Asked Questions about LayerUI
                </BlurFade>
                <BlurFade className=" text-wrap text-center text-sm md:text-base">Everything you need to know about our React-based UI library.</BlurFade>
            </div>
            <Accordion className=" max-w-2xl">
                {FaqList.map((val: {
                    title: string;
                    answer: string;
                }, i: number) => (
                    <AccordionItem
                        className=""
                        title={val.title}
                        answer={val.answer}
                        key={i}
                    >
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    );
}

const Accordion = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return <div className={cn("flex w-full flex-col gap-4 ", className)}>{children}</div>;
};

interface AcoordionInputType extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    answer: string;
    children?: React.ReactNode;
    className?: string;
    rotation?: string;
    icon?: ReactElement;
}

const AccordionItem: React.FC<AcoordionInputType> = ({
    title,
    answer,
    children,
    className,
    rotation,
    ...props
}) => {
    const [accordionOpen, setAccordionOpen] = useState<Boolean>(false);

    return (
        <BlurFade
            className={cn(
                "relative border p-1 border-black/25 border-dashed dark:border-white/40 flex w-full flex-col overflow-hidden rounded-2xl"
            )}
            {...props}
        >
            <div className=" rounded-xl bg-white dark:bg-black dark:shadow-inner dark:shadow-white/20y   border shadow">
                <button
                    onClick={() => {
                        setAccordionOpen(!accordionOpen);
                    }}
                    className={cn(
                        "flex w-full items-center justify-between  px-5 py-3 rounded-2xl",
                    )}
                >
                    <span className={cn("sm:text-lg  text-sm font-medium")}>{title}</span>
                    <motion.span
                        initial={false}
                        animate={accordionOpen ? "open" : "close"}
                        variants={{
                            open: {
                                rotate: 45,
                            },
                            close: {
                                rotate: 0,
                            },
                        }}
                        transition={{ duration: 0.5, stiffness: 150, type: "spring" }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-plus"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                    </motion.span>
                </button>
                <AnimatePresence initial={false}>
                    {accordionOpen && (
                        <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{ height: 0 }}
                            transition={{ ease: "easeInOut", duration: 0.5 }}
                            className={cn(
                                "overflow-hidden text-wrap",
                            )}
                        >
                            <p className="m-5 opacity-80">{answer}</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </BlurFade>
    );
};

