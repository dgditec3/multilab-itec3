import { ArrowDown, Clock } from 'lucide-react'
import { motion } from 'framer-motion'
import { HeroEcosystemIllustration } from '../visuals/HeroEcosystemIllustration'
import { BackgroundGeometry } from '../visuals/BackgroundGeometry'
import { DrawerBlock, DrawerList, useDrawer } from '../layout/DrawerModal'
import {
  brand,
  careers,
  conceptoRector,
  fichaTecnica,
  objetivoGeneral,
  objetivosEspecificos,
  type CareerId,
} from '../../data/projectData'

export function HeroSection({ onOpenCareer }: { onOpenCareer: (id: CareerId) => void }) {
  const drawer = useDrawer()

  const openSummary = () =>
    drawer.open({
      eyebrow: 'Resumen ejecutivo · 1 minuto',
      title: 'MULTILAB ITEC 3',
      accent: 'var(--itec-dark-blue)',
      body: <ExecutiveSummary />,
    })

  return (
    <section id="inicio" className="section !pt-10 lg:!pt-14" aria-labelledby="hero-title">
      <BackgroundGeometry variant="hex" color="var(--itec-dark-blue)" opacity={0.05} className="-right-32 -top-24" />
      <BackgroundGeometry variant="dots" color="var(--itec-orange)" opacity={0.07} className="-bottom-24 -left-24 !h-72 !w-72" />

      <div className="wrap relative grid items-center gap-10 lg:grid-cols-[1.02fr_1fr] lg:gap-6">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="chip !px-3.5 !py-1.5 !text-[0.7rem] tracking-[0.12em] md:!text-xs"
            style={{ ['--accent' as string]: 'var(--itec-dark-blue)' }}
          >
            {brand.badge}
          </motion.p>

          <motion.h1
            id="hero-title"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 0.8, 0.24, 1] }}
            className="mt-6 text-[clamp(2.6rem,6.6vw,5rem)] leading-[1.02]"
          >
            <span className="block text-itec-dark">MULTILAB</span>
            <span className="block">
              ITEC <span className="inline-block rounded-[0.18em] bg-itec-dark px-[0.2em] text-white">3</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-6 font-display text-[clamp(1.35rem,2.6vw,1.9rem)] font-bold leading-tight text-itec-dark"
          >
            {brand.headline}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.26 }}
            className="lead mt-3"
          >
            {brand.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.34 }}
            className="no-print mt-9 flex flex-wrap gap-3"
          >
            <a href="#momento" className="btn btn-primary">
              Recorrer la propuesta <ArrowDown size={18} strokeWidth={1.75} aria-hidden />
            </a>
            <button type="button" onClick={openSummary} className="btn btn-ghost">
              <Clock size={18} strokeWidth={1.75} aria-hidden /> Resumen Ejecutivo (1 min)
            </button>
          </motion.div>

          <ul className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-itec-muted" aria-label="Datos clave">
            <li><strong className="font-display text-itec-dark">5</strong> tecnicaturas</li>
            <li><strong className="font-display text-itec-dark">4</strong> pilares</li>
            <li>
              <a
                href="#expo-2027"
                className="inline-flex items-center gap-1.5 font-display font-bold text-itec-blue underline-offset-4 hover:underline"
              >
                <span className="h-2 w-2 rounded-full bg-itec-orange" aria-hidden />
                {brand.anniversaryMilestone} · EXPO ITEC 2027
              </a>
            </li>
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 0.8, 0.24, 1] }}
        >
          <HeroEcosystemIllustration onOpenCareer={onOpenCareer} />
        </motion.div>
      </div>

      {/* Solo en la síntesis impresa: ficha y concepto, sin paneles interactivos */}
      <div className="print-only wrap mt-8">
        <div className="card p-5">
          <ExecutiveSummary compact />
        </div>
        <ul className="mt-4 grid grid-cols-5 gap-2 text-xs">
          {careers.map((c) => (
            <li key={c.id} className="rounded-lg p-2 font-bold text-white" style={{ background: c.color }}>
              {c.short}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function ExecutiveSummary({ compact = false }: { compact?: boolean }) {
  return (
    <div>
      <DrawerBlock title="Concepto rector">
        <p className="font-display text-xl font-bold leading-snug text-itec-dark">{brand.concept}</p>
        <p className="mt-3 text-[0.97rem] leading-relaxed text-itec-muted">{conceptoRector}</p>
      </DrawerBlock>
      <DrawerBlock title="Ficha técnica">
        <dl className="divide-y divide-itec-line text-[0.93rem]">
          {fichaTecnica.map((f) => (
            <div key={f.label} className="grid gap-1 py-2.5 sm:grid-cols-[9.5rem_1fr] sm:gap-4">
              <dt className="font-display font-bold text-itec-dark">{f.label}</dt>
              <dd className="text-itec-muted">{f.value}</dd>
            </div>
          ))}
        </dl>
      </DrawerBlock>
      {!compact && (
        <>
          <DrawerBlock title="Objetivo general">
            <p className="text-[0.97rem] leading-relaxed">{objetivoGeneral}</p>
          </DrawerBlock>
          <DrawerBlock title="Objetivos específicos">
            <DrawerList items={objetivosEspecificos} />
          </DrawerBlock>
        </>
      )}
    </div>
  )
}
