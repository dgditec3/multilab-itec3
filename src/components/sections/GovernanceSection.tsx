import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { BadgeCheck } from 'lucide-react'
import { BackgroundGeometry } from '../visuals/BackgroundGeometry'
import { DrawerList, useDrawer } from '../layout/DrawerModal'
import { Reveal, SectionHeader } from '../layout/Reveal'
import { TabList } from '../layout/Tabs'
import {
  acreditacion,
  agendaBlocks,
  beneficiosDocentes,
  beneficiosEstudiantes,
  gobernanza,
} from '../../data/projectData'

type TabId = 'docentes' | 'estudiantes' | 'agenda'

const tabs: { id: TabId; label: string; accent: string }[] = [
  { id: 'docentes', label: 'Para Docentes', accent: 'var(--itec-blue)' },
  { id: 'estudiantes', label: 'Para Estudiantes', accent: 'var(--itec-green)' },
  { id: 'agenda', label: 'Agenda Común del Multilab', accent: 'var(--itec-orange)' },
]

function BenefitGrid({ items, accent }: { items: { title: string; text: string }[]; accent: string }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {items.map((b, i) => (
        <li key={b.title} className="card avoid-break p-6" style={{ ['--accent' as string]: accent }}>
          <span className="flex h-9 w-9 items-center justify-center rounded-xl font-display text-sm font-bold text-white" style={{ background: accent }}>
            {i + 1}
          </span>
          <h4 className="mt-4 font-display text-lg font-bold">{b.title}</h4>
          <p className="mt-1 text-[0.95rem] leading-snug text-itec-muted">{b.text}</p>
        </li>
      ))}
    </ul>
  )
}

export function GovernanceSection() {
  const [tab, setTab] = useState<TabId>('docentes')
  const drawer = useDrawer()

  const openCert = () =>
    drawer.open({
      eyebrow: 'Régimen de acreditación y certificación',
      title: 'Cada hora cuenta y queda certificada',
      accent: 'var(--itec-green)',
      body: <DrawerList items={acreditacion} />,
    })

  return (
    <section id="beneficios" className="section" aria-labelledby="ben-title">
      <BackgroundGeometry variant="dots" color="var(--itec-green)" opacity={0.07} className="-left-24 bottom-0" />
      <div className="wrap relative">
        <SectionHeader
          eyebrow="Beneficios, gobernanza y agenda"
          title={<span id="ben-title">Oportunidades para quienes enseñan y para quienes aprenden.</span>}
        />

        <Reveal className="mt-10">
          <TabList
            label="Beneficios y agenda"
            idPrefix="gov"
            value={tab}
            onChange={(id) => setTab(id as TabId)}
            className="flex flex-wrap gap-2"
            items={tabs.map((t) => ({ id: t.id, label: t.label, style: { ['--accent' as string]: t.accent } }))}
            tabClassName={(sel) =>
              `gov-tab rounded-full border-2 px-5 py-2.5 font-display text-sm font-bold transition-colors ${sel ? 'is-selected' : ''}`
            }
          />
        </Reveal>

        <div className="mt-6 min-h-[22rem]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={tab}
              role="tabpanel"
              id={`gov-panel-${tab}`}
              aria-labelledby={`gov-tab-${tab}`}
              tabIndex={0}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              {tab === 'docentes' && <BenefitGrid items={beneficiosDocentes} accent="var(--itec-blue)" />}
              {tab === 'estudiantes' && <BenefitGrid items={beneficiosEstudiantes} accent="var(--itec-green)" />}
              {tab === 'agenda' && (
                <div className="grid gap-8 lg:grid-cols-[1.15fr_1fr]">
                  <div>
                    <h3 className="font-display text-xl">Cuatro bloques semanales</h3>
                    <p className="mt-1 text-itec-muted">Un reglamento simple de reservas ordena el uso del Multilab.</p>
                    <ol className="mt-5 grid grid-cols-2 gap-3">
                      {agendaBlocks.map((b) => (
                        <li
                          key={b.n}
                          className="avoid-break rounded-2xl p-5 text-white"
                          style={{ background: b.color, borderRadius: b.n % 2 ? '1.5rem 0.5rem 1.5rem 0.5rem' : '0.5rem 1.5rem 0.5rem 1.5rem' }}
                        >
                          <span className="font-display text-3xl font-bold opacity-60">{b.n}</span>
                          <p className="mt-2 font-display text-[1.02rem] font-bold leading-tight">{b.title}</p>
                          <p className="mt-1.5 text-[0.82rem] leading-snug opacity-90">{b.text}</p>
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div>
                    <h3 className="font-display text-xl">Gobernanza simple</h3>
                    <p className="mt-1 text-itec-muted">Cuatro niveles, un mismo objetivo.</p>
                    <ol className="relative mt-5 space-y-3 before:absolute before:bottom-6 before:left-[1.05rem] before:top-6 before:w-[3px] before:bg-itec-dark-40">
                      {gobernanza.map((g, i) => (
                        <li key={g.title} className="avoid-break relative flex gap-4">
                          <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-itec-dark font-display text-sm font-bold text-white">{i + 1}</span>
                          <div className="card flex-1 px-4 py-3">
                            <p className="font-display text-[0.98rem] font-bold leading-tight">{g.title}</p>
                            <p className="mt-0.5 text-[0.85rem] leading-snug text-itec-muted">{g.text}</p>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <Reveal className="no-print mt-4">
          <button type="button" onClick={openCert} className="btn btn-ghost" aria-haspopup="dialog">
            <BadgeCheck size={18} strokeWidth={1.75} aria-hidden /> Acreditación y certificación
          </button>
        </Reveal>
      </div>
    </section>
  )
}
