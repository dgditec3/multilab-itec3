import { ArrowUp, Calendar, ExternalLink, Printer, Users, BarChart3 } from 'lucide-react'
import { BackgroundGeometry } from '../visuals/BackgroundGeometry'
import { ItecLogo } from '../layout/ItecLogo'
import { DrawerBlock, DrawerList, useDrawer } from '../layout/DrawerModal'
import { Reveal, SectionHeader } from '../layout/Reveal'
import { brand, indicadores, roadmap, type Phase } from '../../data/projectData'

const indicatorIcon = { academicos: Users, digitales: BarChart3, territoriales: Calendar } as const

export function RoadmapSection() {
  const drawer = useDrawer()

  const open = (p: Phase) =>
    drawer.open({
      eyebrow: `Fase ${p.n} · ${p.when}`,
      title: p.title,
      accent: p.accent,
      body: (
        <>
          <p className="mb-7 font-display text-lg font-bold leading-snug text-itec-dark">{p.summary}</p>
          <DrawerBlock title="Entregables">
            <DrawerList items={p.deliverables} />
          </DrawerBlock>
          <DrawerBlock title="Responsables">
            <ul className="flex flex-wrap gap-2">
              {p.owners.map((o) => (
                <li key={o} className="chip !text-[0.8rem]">{o}</li>
              ))}
            </ul>
          </DrawerBlock>
          {p.n === 4 && (
            <div className="mt-6">
              <a
                href="#expo-2027"
                onClick={() => drawer.close()}
                className="btn btn-ghost"
              >
                Ir al módulo EXPO ITEC 2027
              </a>
            </div>
          )}
        </>
      ),
    })

  return (
    <section id="hoja-de-ruta" className="section bg-itec-surface !pb-0" aria-labelledby="ruta-title">
      <BackgroundGeometry variant="triangles" color="var(--itec-dark-blue)" opacity={0.05} className="-left-16 top-6" />
      <div className="wrap relative">
        <SectionHeader
          eyebrow="Hoja de ruta 2026 – 2027"
          title={<span id="ruta-title">Cinco hitos, de diciembre de 2026 a diciembre de 2027.</span>}
          lead="Tocá cada fase para ver entregables y responsables, con foco en el 7 de agosto."
        />

        <Reveal className="mt-12">
          <ol className="relative grid gap-6 lg:grid-cols-5 lg:gap-4">
            <span className="absolute bottom-3 left-[21px] top-3 w-[3px] rounded bg-itec-line lg:hidden" aria-hidden />
            <span className="absolute left-4 right-4 top-[21px] hidden h-[3px] rounded bg-itec-line lg:block" aria-hidden />
            {roadmap.map((p) => (
              <li key={p.n} className="relative">
                <button
                  type="button"
                  onClick={() => open(p)}
                  aria-haspopup="dialog"
                  className="group avoid-break relative block w-full pl-14 text-left lg:pl-0 lg:pt-14"
                  style={{ ['--accent' as string]: p.accent }}
                >
                  <span
                    className="absolute left-0 top-0 flex h-11 w-11 items-center justify-center rounded-full border-4 border-white font-display text-base font-bold text-white shadow-md transition-transform duration-300 group-hover:scale-110 motion-reduce:transform-none"
                    style={{ background: p.accent }}
                  >
                    {p.n}
                  </span>
                  <span className="block font-display text-xs font-bold uppercase tracking-[0.1em]" style={{ color: p.accent }}>
                    {p.when}
                  </span>
                  <span className="mt-1 block font-display text-[1.05rem] font-bold leading-tight text-itec-dark group-hover:underline group-hover:decoration-2 group-hover:underline-offset-4">
                    {p.title}
                  </span>
                  <span className="mt-1.5 block text-[0.85rem] leading-snug text-itec-muted">{p.short}</span>
                </button>
              </li>
            ))}
          </ol>
        </Reveal>

        <ul className="mt-14 grid gap-5 md:grid-cols-3">
          {indicadores.map((ind, i) => {
            const Icon = indicatorIcon[ind.kind]
            return (
              <li key={ind.kind}>
                <Reveal delay={i * 0.08} className="h-full">
                  <article className="card avoid-break h-full p-6" style={{ ['--accent' as string]: ind.accent }}>
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl text-white" style={{ background: ind.accent }}>
                        <Icon size={20} strokeWidth={1.75} aria-hidden />
                      </span>
                      <div>
                        <p className="eyebrow">Indicadores</p>
                        <h3 className="font-display text-lg leading-tight">{ind.title}</h3>
                      </div>
                    </div>
                    <div className="mt-4">
                      <DrawerList items={ind.items} />
                    </div>
                  </article>
                </Reveal>
              </li>
            )
          })}
        </ul>
      </div>

      {/* Cierre institucional */}
      <div className="closing relative mt-20 overflow-hidden bg-itec-dark text-white">
        <BackgroundGeometry variant="hex" color="#ffffff" opacity={0.07} className="-right-24 -top-24" />
        <BackgroundGeometry variant="dots" color="#ffffff" opacity={0.06} className="-bottom-28 -left-20 !h-72 !w-72" />
        <div className="wrap relative py-16 md:py-24">
          <Reveal>
            <ItecLogo variant="negativo" className="h-12 md:h-14" />
            <p className="eyebrow mt-10 !text-white/70">20° Aniversario · 2007 – 2027</p>
            <h2 className="mt-3 max-w-4xl text-[clamp(1.9rem,4.6vw,3.4rem)] !text-white">{brand.concept}</h2>
            <p className="mt-6 max-w-2xl text-lg text-white/80">
              Veinte años formando técnicos superiores. El próximo capítulo lo escribimos juntos, con las cinco tecnicaturas en un mismo laboratorio.
            </p>

            <dl className="mt-10 grid gap-6 sm:grid-cols-2">
              <div>
                <dt className="font-display text-xs font-bold uppercase tracking-[0.14em] text-white/60">Portal del proyecto</dt>
                <dd className="mt-1 font-display text-xl font-bold">{brand.subdomain}</dd>
              </div>
              <div>
                <dt className="font-display text-xs font-bold uppercase tracking-[0.14em] text-white/60">Sitio oficial</dt>
                <dd className="mt-1">
                  <a href={brand.officialUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-display text-xl font-bold">
                    {brand.officialSite} <ExternalLink size={18} strokeWidth={1.75} aria-hidden />
                    <span className="sr-only">(se abre en una pestaña nueva)</span>
                  </a>
                </dd>
              </div>
            </dl>

            <div className="no-print mt-10 flex flex-wrap gap-3">
              <button type="button" onClick={() => window.print()} className="btn btn-light">
                <Printer size={18} strokeWidth={1.75} aria-hidden /> Exportar Síntesis PDF
              </button>
              <a href="#inicio" className="btn btn-outline-light">
                <ArrowUp size={18} strokeWidth={1.75} aria-hidden /> Volver al inicio
              </a>
            </div>
          </Reveal>

          <p className="mt-14 border-t border-white/20 pt-5 text-sm text-white/65">
            Instituto Tecnológico N° 3 · Barrio Fátima, Posadas · Misiones, Argentina — Borrador para el Rectorado, diciembre de 2026.
          </p>
        </div>
      </div>
    </section>
  )
}
