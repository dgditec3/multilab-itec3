import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { careers, type Career, type CareerId } from '../../data/projectData'
import { CareerPictogram } from './CareerPictograms'

const CX = 300
const CY = 270
const R = 190 // radio de la órbita
const NODE_R = 40
const HEX_R = 76

const hexPoints = (r: number) =>
  Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 3) * i - Math.PI / 6
    return `${(r * Math.cos(a)).toFixed(1)},${(r * Math.sin(a)).toFixed(1)}`
  }).join(' ')

const pos = (i: number) => {
  const a = -Math.PI / 2 + (i * 2 * Math.PI) / 5
  return { a, x: CX + R * Math.cos(a), y: CY + R * Math.sin(a), ux: Math.cos(a), uy: Math.sin(a) }
}

/** Arco de "abrazo" entre dos nodos consecutivos, sobre la órbita. */
const arcBetween = (i: number) => {
  const gap = Math.asin((NODE_R + 8) / R)
  const a1 = pos(i).a + gap
  const a2 = pos(i + 1).a - gap
  const p = (a: number) => `${(CX + R * Math.cos(a)).toFixed(1)} ${(CY + R * Math.sin(a)).toFixed(1)}`
  return `M ${p(a1)} A ${R} ${R} 0 0 1 ${p(a2)}`
}

interface Props {
  onOpenCareer: (id: CareerId) => void
}

export function HeroEcosystemIllustration({ onOpenCareer }: Props) {
  const [hover, setHover] = useState<CareerId | null>(null)
  const [pinned, setPinned] = useState<CareerId | null>(null)
  const activeId = hover ?? pinned
  const active: Career | undefined = careers.find((c) => c.id === activeId)

  return (
    <div className="w-full">
      <svg
        viewBox="0 0 600 540"
        className="mx-auto block h-auto w-full max-w-[640px] select-none"
        role="group"
        aria-label="Ilustración interactiva: MULTILAB ITEC 3 conecta a las cinco tecnicaturas"
      >
        {/* Órbita punteada */}
        <circle cx={CX} cy={CY} r={R} fill="none" stroke="var(--itec-dark-blue)" strokeOpacity="0.12" strokeDasharray="2 9" strokeLinecap="round" strokeWidth="2" />

        {/* Arcos de abrazo */}
        {careers.map((c, i) => (
          <motion.path
            key={`arc-${c.id}`}
            d={arcBetween(i)}
            fill="none"
            stroke={c.color}
            strokeWidth={3}
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: activeId && activeId !== c.id ? 0.18 : 0.55 }}
            transition={{ duration: 0.9, delay: 0.25 + i * 0.12, ease: [0.22, 0.8, 0.24, 1] }}
          />
        ))}

        {/* Conectores núcleo → nodo */}
        {careers.map((c, i) => {
          const p = pos(i)
          const on = activeId === c.id
          return (
            <motion.line
              key={`ln-${c.id}`}
              x1={CX + (HEX_R + 6) * p.ux}
              y1={CY + (HEX_R + 6) * p.uy}
              x2={p.x - (NODE_R + 2) * p.ux}
              y2={p.y - (NODE_R + 2) * p.uy}
              stroke={c.color}
              strokeLinecap="round"
              animate={{ strokeWidth: on ? 5 : 2.5, opacity: activeId && !on ? 0.3 : 1 }}
              transition={{ duration: 0.25 }}
            />
          )
        })}

        {/* Núcleo MULTILAB */}
        <g transform={`translate(${CX} ${CY})`}>
          <motion.polygon
            points={hexPoints(HEX_R + 16)}
            fill="none"
            stroke="var(--itec-dark-blue)"
            strokeOpacity="0.28"
            strokeWidth="2"
            animate={{ rotate: active ? 30 : 0 }}
            transition={{ type: 'spring', stiffness: 70, damping: 14 }}
          />
          <motion.polygon
            points={hexPoints(HEX_R)}
            fill="var(--itec-dark-blue)"
            animate={{ scale: active ? 1.04 : 1 }}
            transition={{ type: 'spring', stiffness: 220, damping: 18 }}
          />
          <text x="0" y="-2" textAnchor="middle" fill="#fff" fontFamily="var(--font-display)" fontWeight="700" fontSize="21" letterSpacing="0.5">
            MULTILAB
          </text>
          <text x="0" y="22" textAnchor="middle" fill="#fff" fillOpacity="0.8" fontFamily="var(--font-display)" fontWeight="400" fontSize="15" letterSpacing="3">
            ITEC 3
          </text>
        </g>

        {/* Nodos satelitales */}
        {careers.map((c, i) => {
          const p = pos(i)
          const on = activeId === c.id
          // Rótulo: arriba (nodo superior), abajo (nodos inferiores) o al costado (nodos laterales)
          const above = p.uy < -0.9
          const below = p.uy > 0.5
          const anchor = above || below ? 'middle' : p.ux > 0 ? 'start' : 'end'
          const lx = above || below ? p.x : p.x + (p.ux > 0 ? 1 : -1) * (NODE_R + 14)
          const ly = above ? p.y - NODE_R - 14 : below ? p.y + NODE_R + 26 : p.y + 6
          return (
            <g key={c.id}>
              <g transform={`translate(${p.x.toFixed(1)} ${p.y.toFixed(1)})`}>
                <motion.g
                  role="button"
                  tabIndex={0}
                  aria-label={`${c.name}. ${c.micro}`}
                  aria-pressed={pinned === c.id}
                  style={{ cursor: 'pointer', outline: 'none' }}
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: on ? 1.18 : 1, opacity: 1, rotate: on ? 6 : 0 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 18, delay: on ? 0 : 0.05 * i }}
                  onMouseEnter={() => setHover(c.id)}
                  onMouseLeave={() => setHover(null)}
                  onFocus={() => setHover(c.id)}
                  onBlur={() => setHover(null)}
                  onClick={() => setPinned((cur) => (cur === c.id ? null : c.id))}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      setPinned((cur) => (cur === c.id ? null : c.id))
                    }
                  }}
                >
                  <circle r={NODE_R + 7} fill={c.color} fillOpacity={on ? 0.16 : 0} />
                  <circle r={NODE_R} fill="#fff" stroke={c.color} strokeWidth={on ? 5 : 3} />
                  <circle r={NODE_R - 7} fill={c.color} fillOpacity="0.1" />
                  <CareerPictogram
                    id={c.id}
                    x={-20}
                    y={-20}
                    width={40}
                    height={40}
                    style={{ color: c.color }}
                  />
                  {c.isNew2027 && (
                    <g transform="translate(26 -30)">
                      <circle r="13" fill="var(--itec-orange)" />
                      <text y="3.5" textAnchor="middle" fill="#fff" fontFamily="var(--font-display)" fontWeight="700" fontSize="10">
                        2027
                      </text>
                    </g>
                  )}
                </motion.g>
              </g>
              <text
                x={lx}
                y={ly}
                textAnchor={anchor}
                fill={c.color}
                fontFamily="var(--font-display)"
                fontWeight="700"
                fontSize="18"
                opacity={activeId && !on ? 0.45 : 1}
                pointerEvents="none"
              >
                {c.node}
              </text>
            </g>
          )
        })}
      </svg>

      {/* Micro-síntesis */}
      <div className="mx-auto mt-2 min-h-[6.5rem] max-w-md" aria-live="polite">
        <AnimatePresence mode="wait" initial={false}>
          {active ? (
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="rounded-2xl border-l-[6px] bg-itec-surface px-5 py-4"
              style={{ borderColor: active.color }}
            >
              <p className="font-display text-sm font-bold" style={{ color: active.color }}>
                {active.name}
              </p>
              <p className="mt-1 text-[0.95rem] leading-snug text-itec-dark">{active.micro}</p>
              <button
                type="button"
                onClick={() => onOpenCareer(active.id)}
                className="mt-2 inline-flex items-center gap-1.5 font-display text-sm font-bold underline-offset-4 hover:underline"
                style={{ color: active.color }}
              >
                Ver su aporte <ArrowRight size={16} strokeWidth={1.75} aria-hidden />
              </button>
            </motion.div>
          ) : (
            <motion.p
              key="idle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="px-2 pt-3 text-center text-sm text-itec-muted"
            >
              Pasá el cursor o tocá una tecnicatura para ver cómo se suma al Multilab.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
