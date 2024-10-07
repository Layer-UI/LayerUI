"use client";

import { cn } from "@/lib/utils";
import React, { useState, ReactElement } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Define FAQ item type
interface FaqItem {
  title: string;
  answer: string;
}

// Sample FAQ data
const faqList: FaqItem[] = [
  {
    title: "Accordion Question 1",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus iure sequi sint sunt, dolor magnam temporibus modi placeat laboriosam dicta!",
  },
  {
    title: "Accordion Question 2",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus iure sequi sint sunt, dolor magnam temporibus modi placeat laboriosam dicta!",
  },
  {
    title: "Accordion Question 3",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus iure sequi sint sunt, dolor magnam temporibus modi placeat laboriosam dicta!",
  },
];

const Faq: React.FC = () => {
  return (
    <section className="flex w-full flex-col gap-5 items-center py-10 px-5">
      <div className="flex flex-col items-center mb-4 gap-4 max-w-xl">
        <p className="border py-0.5 px-3 rounded-full text-sm shadow-sm dark:bg-black/5 dark:shadow-white/20">
          FAQ
        </p>
        <p className="text-2xl sm:text-3xl font-semibold">
          Any Questions? Look Here
        </p>
        <p className="text-wrap text-center text-sm sm:text-base">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem reiciendis placeat possimus error officia quis, rem nihil dolor molestias illo!
        </p>
      </div>
      <Accordion className="max-w-2xl">
        {faqList.map((item, index) => (
          <AccordionItem
            className="border-b border-black/50 dark:border-white/50"
            title={item.title}
            answer={item.answer}
            key={index}
          />
        ))}
      </Accordion>
    </section>
  );
};

const Accordion: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  return <div className={cn("flex w-full flex-col gap-4", className)}>{children}</div>;
};

interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  answer: string;
  className?: string;
  rotation?: string;
  icon?: ReactElement;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  answer,
  className,
  ...props
}) => {
  const [accordionOpen, setAccordionOpen] = useState<boolean>(false);

  return (
    <div
      className={cn(
        "relative flex w-full flex-col overflow-hidden rounded-2xl border opacity-70 hover:opacity-100 hover:shadow-md border-black/50 dark:border-white/50 dark:bg-white/5 hover:dark:bg-white/10 bg-white dark:bg-black",
        accordionOpen && "shadow-md opacity-100",
        className
      )}
      {...props}
    >
      <button
        onClick={() => setAccordionOpen(prev => !prev)}
        className="flex w-full items-center justify-between px-5 py-3 rounded-2xl"
      >
        <span className="text-lg font-medium">{title}</span>
        <motion.span
          initial={false}
          animate={accordionOpen ? "open" : "close"}
          variants={{
            open: { rotate: 45 },
            close: { rotate: 0 },
          }}
          transition={{ duration: 0.5, stiffness: 150, type: "spring" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-plus"
          >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {accordionOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
            className="overflow-hidden text-wrap"
          >
            <p className="m-5 opacity-80">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Faq;
