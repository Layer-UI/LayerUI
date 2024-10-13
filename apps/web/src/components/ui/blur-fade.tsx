"use client";

import { motion } from "framer-motion";

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  y?:number;
  delay?:number
}

export default function BlurFade({
  children,
  className,y=20,delay=0 }: BlurFadeProps) {

  const blur = "16px"

  return (
    <motion.div
      initial={{ y: y, opacity: 0, filter: `blur(${blur})` }}
      whileInView={{ y: 0, opacity: 1, filter: `blur(0px)` }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{
        delay:delay,
        duration: 0.6,
        ease: 'easeIn',
        stiffness: 100,
        type: 'spring'
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
