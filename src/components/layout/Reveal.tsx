import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

/** Aparición suave al entrar en pantalla (respeta prefers-reduced-motion vía <MotionConfig>). */
export function Reveal({
  children,
  delay = 0,
  className = '',
  y = 24,
}: {
  children: ReactNode
  delay?: number
  className?: string
  y?: number
}) {
  return (
    <motion.div
      className={`reveal ${className}`}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -80px 0px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 0.8, 0.24, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function SectionHeader({
  eyebrow,
  title,
  lead,
  accent,
}: {
  eyebrow: string
  title: ReactNode
  lead?: ReactNode
  accent?: string
}) {
  return (
    <Reveal className="max-w-3xl">
      <p className="eyebrow" style={accent ? { ['--accent' as string]: accent } : undefined}>
        {eyebrow}
      </p>
      <h2 className="h-section mt-3">{title}</h2>
      {lead && <p className="lead mt-4">{lead}</p>}
    </Reveal>
  )
}
