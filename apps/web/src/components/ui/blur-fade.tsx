"use client";

import { motion } from "framer-motion";

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
}

export default function BlurFade({
  children,
  className, }: BlurFadeProps) {

  const blur = "6px"

  return (
    <motion.div
      initial={{ y: 20, opacity: 0, filter: `blur(${blur})` }}
      whileInView={{ y: 0, opacity: 1, filter: `blur(0px)` }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{
        duration: 0.5,
        ease: 'easeIn',
        stiffness: 50,
        type: 'spring'
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
