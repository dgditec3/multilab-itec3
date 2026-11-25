import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Layers, MousePointerClick } from 'lucide-react'
import { CareerPictogram, CareerPictogramSet } from '../visuals/CareerPictograms'
import { BackgroundGeometry } from '../visuals/BackgroundGeometry'
import { Reveal, SectionHeader } from '../layout/Reveal'
import { TabList } from '../layout/Tabs'
import { careerById, careers, productions, type CareerId } from '../../data/projectData'

type Mode = 'single' | 'integrated'

interface Props {
  selected: CareerId
  onSelect: (id: CareerId) => void
}

const blocks = [
  { key: 'aporte', title: 'Aporte al Multilab' },
  { key: 'workshops', title: 'Workshops y Transferencia' },
  { key: 'rol', title: 'Rol en Prácticas Profesionalizantes' },
] as const

export function CareersSection({ selected, onSelect }: Props) {
  const [mode, setMode] = useState<Mode>('single')
  const [productionId, setProductionId] = useState<'streaming' | 'emprendedores'>('streaming')
  const career = careerById(selected)
  const production = productions.find((p) => p.id === productionId) ?? productions[0]

  return (
    <section id="tecnicaturas" className="section bg-itec-surface" aria-labelledby="tec-title">
      <BackgroundGeometry variant="hex" color="var(--itec-orange)" opacity={0.06} className="-left-28 -top-10" />
      <div className="wrap relative">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            eyebrow="El corazón de la propuesta"
            title={<span id="tec-title">Cinco tecnicaturas, un mismo propósito.</span>}
            lead="Cada carrera aporta su saber dentro de células de trabajo interdisciplinarias."
          />
          <Reveal className="no-print">
            <div role="group" aria-label="Modo de vista" className="inline-flex rounded-full border-2 border-itec-dark bg-white p-1">
              <button
                type="button"
                aria-pressed={mode === 'single'}
                onClick={() => setMode('single')}
                className={`flex items-center gap-2 rounded-full px-4 py-2 font-display text-sm font-bold transition-colors ${
                  mode === 'single' ? 'bg-itec-dark text-white' : 'text-itec-dark hover:bg-itec-surface'
                }`}
              >
                <MousePointerClick size={16} strokeWidth={1.75} aria-hidden /> <span className="whitespace-nowrap">Por tecnicatura</span>
              </button>
              <button
                type="button"
                aria-pressed={mode === 'integrated'}
                onClick={() => setMode('integrated')}
                className={`flex items-center gap-2 rounded-full px-4 py-2 font-display text-sm font-bold transition-colors ${
                  mode === 'integrated' ? 'bg-itec-dark text-white' : 'text-itec-dark hover:bg-itec-surface'
                }`}
              >
                <Layers size={16} strokeWidth={1.75} aria-hidden /> <span className="whitespace-nowrap">Vista Integrada<span className="sr-only sm:not-sr-only"> (5 en 1)</span></span>
              </button>
            </div>
          </Reveal>
        </div>

        <div className="no-print mt-10">
          <AnimatePresence mode="wait" initial={false}>
            {mode === 'single' ? (
              <motion.div
                key="single"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                <TabList
                  label="Tecnicaturas"
                  idPrefix="career"
                  value={selected}
                  onChange={(id) => onSelect(id as CareerId)}
                  className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5"
                  items={careers.map((c) => ({
                    id: c.id,
                    label: c.short,
                    style: { ['--accent' as string]: c.color },
                    content: (
                      <>
                        {c.isNew2027 && (
                          <span className="absolute -top-2.5 right-3 rounded-full bg-itec-orange px-2.5 py-0.5 font-display text-[0.65rem] font-bold tracking-wide text-white">
                            Nueva 2027
                          </span>
                        )}
                        <CareerPictogram id={c.id} className="h-9 w-9 shrink-0" />
                        <span className="font-display text-sm font-bold leading-tight">{c.short}</span>
                      </>
                    ),
                  }))}
                  tabClassName={(sel) =>
                    `career-tab relative flex min-w-0 flex-col items-start gap-2 rounded-2xl border-2 px-3.5 py-3.5 text-left sm:flex-row sm:items-center sm:gap-3 sm:px-4 ${sel ? 'shadow-lg' : ''}`
                  }
                />

                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={career.id}
                    role="tabpanel"
                    id={`career-panel-${career.id}`}
                    aria-labelledby={`career-tab-${career.id}`}
                    tabIndex={0}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3, ease: [0.22, 0.8, 0.24, 1] }}
                    className="mt-6 overflow-hidden rounded-3xl border-2 bg-white"
                    style={{ borderColor: career.color, ['--accent' as string]: career.color }}
                  >
                    <div className="dots h-3.5 w-full" aria-hidden />
                    <div className="grid gap-0 md:grid-cols-[17rem_1fr]">
                      <div className="tint-10 flex flex-col gap-5 p-6" style={{ color: career.color }}>
                        <div>
                          {career.isNew2027 && <span className="mb-2 inline-block rounded-full bg-itec-orange px-2.5 py-0.5 font-display text-[0.65rem] font-bold text-white">Nueva oferta 2027</span>}
                          <h3 className="text-[1.45rem] leading-tight" style={{ color: career.color }}>
                            {career.name}
                          </h3>
                        </div>
                        <CareerPictogramSet id={career.id} className="max-w-[13rem]" />
                      </div>
                      <div className="grid gap-px bg-itec-line md:grid-rows-3">
                        {blocks.map((b, i) => (
                          <div key={b.key} className="flex gap-4 bg-white p-5 md:p-6">
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl font-display text-sm font-bold text-white" style={{ background: career.color }}>
                              {i + 1}
                            </span>
                            <div>
                              <h4 className="font-display text-sm font-bold uppercase tracking-[0.1em]" style={{ color: career.color }}>
                                {b.title}
                              </h4>
                              <p className="mt-1.5 text-[0.97rem] leading-relaxed text-itec-dark/90">{career[b.key]}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            ) : (
              <motion.div
                key="integrated"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-display text-sm font-bold text-itec-muted">Una misma producción:</span>
                  <TabList
                    label="Producciones de ejemplo"
                    idPrefix="prod"
                    value={productionId}
                    onChange={(id) => setProductionId(id as 'streaming' | 'emprendedores')}
                    className="flex flex-wrap gap-2"
                    items={productions.map((p) => ({ id: p.id, label: p.title }))}
                    tabClassName={(sel) =>
                      `rounded-full border-2 px-4 py-2 font-display text-sm font-bold transition-colors ${
                        sel ? 'border-itec-dark bg-itec-dark text-white' : 'border-itec-line bg-white text-itec-dark hover:border-itec-dark'
                      }`
                    }
                  />
                </div>

                <div
                  role="tabpanel"
                  id={`prod-panel-${production.id}`}
                  aria-labelledby={`prod-tab-${production.id}`}
                  className="mt-6 rounded-3xl border-2 border-itec-dark bg-white p-5 md:p-8"
                >
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="flex h-14 w-14 items-center justify-center bg-itec-dark text-center font-display text-[0.62rem] font-bold leading-tight text-white" style={{ clipPath: 'polygon(25% 5%,75% 5%,100% 50%,75% 95%,25% 95%,0 50%)' }}>
                      MULTI
                      <br />
                      LAB
                    </span>
                    <div>
                      <h3 className="text-2xl">{production.title}</h3>
                      <p className="text-itec-muted">{production.summary}</p>
                    </div>
                  </div>

                  <div className="mt-6 flex h-2 overflow-hidden rounded-full" aria-hidden>
                    {careers.map((c) => (
                      <span key={c.id} className="flex-1" style={{ background: c.color }} />
                    ))}
                  </div>

                  <motion.ul
                    key={production.id}
                    initial="hidden"
                    animate="show"
                    variants={{ show: { transition: { staggerChildren: 0.07 } } }}
                    className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5"
                  >
                    {careers.map((c) => (
                      <motion.li
                        key={c.id}
                        variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
                        className="rounded-2xl p-4"
                        style={{ background: `color-mix(in srgb, ${c.color} 9%, white)`, color: c.color }}
                      >
                        <CareerPictogram id={c.id} className="h-9 w-9" />
                        <p className="mt-3 font-display text-sm font-bold">{c.short}</p>
                        <p className="mt-1 text-[0.9rem] leading-snug text-itec-dark">{production.roles[c.id]}</p>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Síntesis impresa: las cinco carreras, sin interacción */}
        <div className="print-only mt-6 space-y-3">
          {careers.map((c) => (
            <article key={c.id} className="avoid-break rounded-xl border-2 p-3 text-sm" style={{ borderColor: c.color }}>
              <h3 className="font-bold" style={{ color: c.color }}>
                {c.name}
                {c.isNew2027 ? ' · Nueva 2027' : ''}
              </h3>
              <p><strong>Aporte al Multilab:</strong> {c.aporte}</p>
              <p><strong>Workshops y Transferencia:</strong> {c.workshops}</p>
              <p><strong>Rol en Prácticas Profesionalizantes:</strong> {c.rol}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
