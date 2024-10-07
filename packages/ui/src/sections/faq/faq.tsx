
"use client"

import { cn } from "@/lib/utils";
import React, { useState, ReactElement, HTMLProps, } from "react";
import { SlArrowDown } from "react-icons/sl";
import { motion, AnimatePresence } from 'framer-motion'


const FaqList = [

    {
        title: "Acoordion Question",
        answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus iure sequi sint sunt, dolor magnam temporibus modi placeat laboriosam dicta!        "
    },
    {
        title: "Acoordion Question",
        answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus iure sequi sint sunt, dolor magnam temporibus modi placeat laboriosam dicta!        "
    },
    {
        title: "Acoordion Question",
        answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus iure sequi sint sunt, dolor magnam temporibus modi placeat laboriosam dicta!        "
    },
]

export default function Faq() {
    return (
        <div className=" flex flex-col w-full gap-5">
            <div className=" grid grid-cols-1  justify-items-center gap-3">
                <span className=" px-5 py-0.5 border-b-2 shadow-md shadow-black/30 dark:shadow-white/15 dark:shadow-inner rounded-full font-semibold">
                    FAQ
                </span>
                <p className=" text-5xl font-bold ">Frequently Asked Questions</p>
                <p>Find answers to common queries about features, usage, and integration possibilities.</p>
            </div>
            <Accordion>
                {
                    FaqList.map((val, i: number) => (
                        <AccordionItem className='' title={val.title} answer={val.answer} key={i}>
                            <SlArrowDown></SlArrowDown>
                        </AccordionItem>
                    ))
                }
            </Accordion>
        </div>
    )
}


const Accordion = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {

    return (
        <div className={cn("w-full  flex flex-col gap-4")}>
            {children}
        </div>
    )
}

interface AcoordionInputType extends React.HTMLAttributes<HTMLDivElement> {
    title: string,
    answer: string,
    children?: React.ReactNode,
    className?: string,
    rotation?: string,
    icon?: ReactElement,
}

const AccordionItem: React.FC<AcoordionInputType> = ({ title, answer, children, className, rotation, icon, ...props }) => {
    const [accordionOpen, setAccordionOpen] = useState<Boolean>(false);

    return (
        <div
            className={cn("w-full relative overflow-hidden border-b-2 border-black dark:border-white  flex flex-col border-opacity-80 hover:border-opacity-100 active:opacity-100")} {...props} >
            <button onClick={() => { setAccordionOpen(!accordionOpen) }} className={cn(" px-5 py-3 flex items-center w-full justify-between hover:opacity-100 opacity-80", accordionOpen && "opacity-100")}>
                <span className={cn("  text-lg font-medium")}>{title}</span>
                <motion.span
                    initial={false}
                    animate={accordionOpen ? "open" : "close"}
                    variants={{
                        open: {
                            rotate: 180
                        },
                        close: {
                            rotate: 0
                        }
                    }}
                    transition={{ duration: 0.5, stiffness: 150, type: 'spring' }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg>
                </motion.span>

            </button>
            <AnimatePresence initial={false}>
                {accordionOpen &&
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ ease: 'easeInOut', duration: 0.5 }}

                        className={cn(" text-wrap bg-white dark:bg-black overflow-hidden")}>
                        <p className="m-5">
                            {answer}
                        </p>
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    )
}


export { Accordion, AccordionItem }