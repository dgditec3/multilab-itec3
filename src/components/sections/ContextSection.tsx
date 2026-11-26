import { BookOpenCheck, GraduationCap, Sparkles } from 'lucide-react'
import { BackgroundGeometry } from '../visuals/BackgroundGeometry'
import { DrawerBlock, useDrawer } from '../layout/DrawerModal'
import { Reveal, SectionHeader } from '../layout/Reveal'
import {
  factoresOportunidad,
  marcoNormativo,
  momentCards,
  referenciasUniversitarias,
  type MomentCard,
} from '../../data/projectData'

function MomentIcon({ kind }: { kind: MomentCard['kind'] }) {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 2.4, strokeLinecap: 'round', strokeLinejoin: 'round' } as const
  return (
    <svg viewBox="0 0 64 64" className="h-14 w-14" aria-hidden="true" focusable="false">
      {kind === 'years' && (
        <>
          <circle cx="32" cy="32" r="24" {...common} strokeOpacity="0.35" />
          <circle cx="32" cy="32" r="15" {...common} strokeOpacity="0.65" />
          <circle cx="32" cy="32" r="6" fill="currentColor" />
        </>
      )}
      {kind === 'careers' && (
        <>
          {Array.from({ length: 5 }, (_, i) => {
            const a = -Math.PI / 2 + (i * 2 * Math.PI) / 5
            return <circle key={i} cx={32 + 22 * Math.cos(a)} cy={32 + 22 * Math.sin(a)} r="7" fill="currentColor" fillOpacity={i === 4 ? 1 : 0.55} />
          })}
          <polygon points="32,20 44,28 40,42 24,42 20,28" {...common} strokeOpacity="0.4" />
        </>
      )}
      {kind === 'digital' && (
        <>
          <rect x="8" y="38" width="12" height="18" rx="3" fill="currentColor" fillOpacity="0.4" />
          <rect x="26" y="26" width="12" height="30" rx="3" fill="currentColor" fillOpacity="0.7" />
          <rect x="44" y="10" width="12" height="46" rx="3" fill="currentColor" />
        </>
      )}
    </svg>
  )
}

export function ContextSection() {
  const drawer = useDrawer()

  const openNorma = () =>
    drawer.open({
      eyebrow: 'Marco normativo vigente',
      title: 'Una propuesta con respaldo legal',
      accent: 'var(--itec-dark-blue)',
      body: (
        <>
          <p className="mb-6 text-[0.97rem] text-itec-muted">
            El programa se apoya en el marco de la Educación Técnico Profesional de Nivel Superior en Argentina y en la Provincia de Misiones.
          </p>
          <ul className="space-y-5">
            {marcoNormativo.map((n) => (
              <li key={n.norma} className="border-l-4 pl-4" style={{ borderColor: 'var(--accent)' }}>
                <h2 className="font-display text-base font-bold text-itec-dark">{n.norma}</h2>
                <p className="mt-1 text-[0.95rem] leading-relaxed text-itec-muted">{n.text}</p>
              </li>
            ))}
          </ul>
        </>
      ),
    })

  const openRefs = () =>
    drawer.open({
      eyebrow: 'Referencias universitarias',
      title: 'Aprendizajes de casas de estudio públicas',
      accent: 'var(--itec-blue)',
      body: (
        <ul className="space-y-5">
          {referenciasUniversitarias.map((r) => (
            <li key={r.ref} className="border-l-4 pl-4" style={{ borderColor: 'var(--accent)' }}>
              <h2 className="font-display text-base font-bold text-itec-dark">{r.ref}</h2>
              <p className="mt-1 text-[0.95rem] leading-relaxed text-itec-muted">{r.text}</p>
            </li>
          ))}
        </ul>
      ),
    })

  const openFactores = () =>
    drawer.open({
      eyebrow: 'Por qué 2027',
      title: 'Cinco factores que convergen',
      accent: 'var(--itec-orange)',
      body: (
        <DrawerBlock title="Contexto y oportunidad institucional (AGOSTO 2007 - AGOSTO 2027)">
          <ol className="space-y-5">
            {factoresOportunidad.map((f, i) => (
              <li key={f.title} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-itec-orange font-display text-sm font-bold text-white">{i + 1}</span>
                <div>
                  <h2 className="font-display text-base font-bold normal-case tracking-normal text-itec-dark">{f.title}</h2>
                  <p className="mt-1 text-[0.95rem] leading-relaxed text-itec-muted">{f.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </DrawerBlock>
      ),
    })

  return (
    <section id="momento" className="section bg-itec-surface" aria-labelledby="momento-title">
      <BackgroundGeometry variant="triangles" color="var(--itec-blue)" opacity={0.06} className="-right-16 bottom-0" />
      <div className="wrap relative">
        <SectionHeader
          eyebrow="El momento ITEC 3 · Por qué 2027"
          title={<span id="momento-title">Veinte años de trayectoria. El mejor momento para dar el próximo paso.</span>}
          lead="Tres razones que hacen oportuno institucionalizar el Multilab."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {momentCards.map((c, i) => (
            <Reveal key={c.kind} delay={i * 0.1}>
              <article
                className="card avoid-break relative h-full overflow-hidden p-7"
                style={{ ['--accent' as string]: c.accent }}
              >
                <div className="flex items-start justify-between" style={{ color: c.accent }}>
                  <p className="font-display text-[5.5rem] font-bold leading-[0.9] tracking-tight">{c.figure}</p>
                  <MomentIcon kind={c.kind} />
                </div>
                <h3 className="mt-4 text-2xl" style={{ color: c.accent }}>
                  {c.label}
                </h3>
                <p className="mt-2 text-[0.97rem] leading-relaxed text-itec-muted">{c.line}</p>
                <div className="dots absolute -bottom-6 -right-6 h-24 w-24 opacity-40" aria-hidden />
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="no-print mt-10 flex flex-wrap gap-3">
          <button type="button" onClick={openNorma} className="btn btn-ghost">
            <BookOpenCheck size={18} strokeWidth={1.75} aria-hidden /> Marco Normativo Vigente
          </button>
          <button type="button" onClick={openRefs} className="btn btn-ghost">
            <GraduationCap size={18} strokeWidth={1.75} aria-hidden /> Referencias Universitarias
          </button>
          <button type="button" onClick={openFactores} className="btn btn-ghost">
            <Sparkles size={18} strokeWidth={1.75} aria-hidden /> Cinco factores de oportunidad
          </button>
        </Reveal>
      </div>
    </section>
  )
}
