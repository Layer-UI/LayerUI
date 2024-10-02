'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Copy } from 'lucide-react'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export function CopyButton({
  value,
  className,
}: {
  value: string
  className?: string
}) {
  let [copyCount, setCopyCount] = useState(0)
  let copied = copyCount > 0
  const variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  }
  useEffect(() => {
    if (copyCount > 0) {
      let timeout = setTimeout(() => setCopyCount(0), 1000)
      return () => {
        clearTimeout(timeout)
      }
    }
  }, [copyCount])

  return (
    <button
      type="button"
      className={cn(
        `group/button absolute right-2 top-2 overflow-hidden rounded-lg border p-1.5 text-2xs font-medium backdrop-blur transition focus:opacity-100 ${className}`,
        copied
          ? 'bg-blue-400/20 ring-1 ring-inset ring-blue-400/30'
          : 'bg-white/10 hover:bg-white/15 dark:bg-white/2.5 dark:hover:bg-white/5',
      )}
      onClick={() => {
        window.navigator.clipboard.writeText(value).then(() => {
          setCopyCount((count) => count + 1)
        })
      }}
    >
      <AnimatePresence mode="wait" initial={false}>
        {copied ? (
          <motion.span
            key="checkmark"
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <Check size={16} />
          </motion.span>
        ) : (
          <motion.span
            key="copy"
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <Copy size={16} />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  )
}


