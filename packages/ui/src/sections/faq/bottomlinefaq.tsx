"use client"
import { Accordion, AccordionItem } from "@/components/ui/accordionItem";
import React, { useState } from "react";

// Define a type for FAQ items
interface FaqItem {
  title: string;
  answer: string;
}

// Sample FAQ data
const faqList: FaqItem[] = [
  {
    title: "Accordion Question 1",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus iure sequi sint sunt, dolor magnam temporibus modi placeat laboriosam dicta!",
  },
  {
    title: "Accordion Question 2",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus iure sequi sint sunt, dolor magnam temporibus modi placeat laboriosam dicta!",
  },
  {
    title: "Accordion Question 3",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus iure sequi sint sunt, dolor magnam temporibus modi placeat laboriosam dicta!",
  },
];

const Faq: React.FC = () => {
  // State to manage which accordion item is open
  const [accordionOpen, setAccordionOpen] = useState<number>(-1);

  return (
    <section className="flex flex-col items-center py-20 bg-white dark:bg-black">
      <div className="max-w-5xl md:px-10 px-5 flex w-full md:flex-row flex-col gap-9 md:gap-5">
        <div className="mx-2 flex flex-col gap-4">
          <p className="font-semibold text-center md:text-start mb-2">FAQ</p>
          <p className="md:text-4xl text-2xl text-center md:text-start font-semibold">
            Any{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text">
              Questions?
            </span>{" "}
            Look Here
          </p>
          <p className="text-wrap text-sm md:text-base text-center md:text-start px-5 md:px-0">
            There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.
          </p>
        </div>
        <Accordion>
          {faqList.map((item, index) => (
            <AccordionItem
              className="border-b border-black dark:border-white"
              accordionOpen={accordionOpen}
              setAccordionOpen={setAccordionOpen}
              title={item.title}
              answer={item.answer}
              key={index}
              i={index}
            />
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
