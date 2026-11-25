import { Plus } from 'lucide-react'
import { pillarIllustrations } from '../visuals/PillarIllustrations'
import { CareerPictogram } from '../visuals/CareerPictograms'
import { BackgroundGeometry } from '../visuals/BackgroundGeometry'
import { DrawerBlock, DrawerList, useDrawer } from '../layout/DrawerModal'
import { Reveal, SectionHeader } from '../layout/Reveal'
import { careerById, pillars, type Pillar } from '../../data/projectData'

export function PillarsSection() {
  const drawer = useDrawer()

  const open = (p: Pillar) =>
    drawer.open({
      eyebrow: `Pilar ${p.n}`,
      title: p.title,
      accent: p.accent,
      body: (
        <>
          <div className="-mx-6 -mt-6 mb-7 overflow-hidden md:-mx-8">
            {(() => {
              const Art = pillarIllustrations[p.id]
              return <Art />
            })()}
          </div>
          <DrawerBlock title="Propósito">
            <p className="font-display text-lg font-bold leading-snug text-itec-dark">{p.purpose}</p>
          </DrawerBlock>
          <DrawerBlock title="Entregables concretos">
            <DrawerList items={p.deliverables} />
          </DrawerBlock>
          <DrawerBlock title="Recursos del Multilab">
            <DrawerList items={p.resources} />
          </DrawerBlock>
          <DrawerBlock title="Carreras articuladas">
            <ul className="flex flex-wrap gap-2">
              {p.careers.map((id) => {
                const c = careerById(id)
                return (
                  <li
                    key={id}
                    className="flex items-center gap-2 rounded-full py-1 pl-1.5 pr-3.5 text-sm font-bold"
                    style={{ background: `color-mix(in srgb, ${c.cssVar} 10%, white)`, color: c.cssVar }}
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white">
                      <CareerPictogram id={id} className="h-5 w-5" />
                    </span>
                    {c.short}
                  </li>
                )
              })}
            </ul>
          </DrawerBlock>
        </>
      ),
    })

  return (
    <section id="pilares" className="section" aria-labelledby="pilares-title">
      <BackgroundGeometry variant="squares" color="var(--itec-fucsia)" opacity={0.05} className="-left-24 top-10" />
      <div className="wrap relative">
        <SectionHeader
          eyebrow="Qué vamos a construir"
          title={<span id="pilares-title">Cuatro pilares para un Multilab en marcha todo el año.</span>}
          lead="Tocá cualquier pilar para ver propósito, entregables, recursos y carreras que participan."
        />

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {pillars.map((p, i) => {
            const Art = pillarIllustrations[p.id]
            return (
              <li key={p.id}>
                <Reveal delay={i * 0.08} className="h-full">
                  <button
                    type="button"
                    onClick={() => open(p)}
                    aria-haspopup="dialog"
                    className="card card-interactive avoid-break group flex h-full w-full flex-col overflow-hidden text-left"
                    style={{ ['--accent' as string]: p.accent }}
                  >
                    <div className="overflow-hidden">
                      <div className="transition-transform duration-500 group-hover:scale-[1.04] motion-reduce:transform-none">
                        <Art />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <p className="font-display text-sm font-bold tracking-[0.14em]" style={{ color: p.accent }}>
                        {p.n}
                      </p>
                      <h3 className="mt-1 text-[1.2rem] leading-tight">{p.title}</h3>
                      <p className="mt-2 flex-1 text-[0.93rem] leading-snug text-itec-muted">{p.line}</p>
                      <span className="no-print mt-4 inline-flex items-center gap-1.5 font-display text-sm font-bold" style={{ color: p.accent }}>
                        <span className="flex h-6 w-6 items-center justify-center rounded-full text-white" style={{ background: p.accent }}>
                          <Plus size={14} strokeWidth={2} aria-hidden />
                        </span>
                        Ver detalle
                      </span>
                    </div>
                  </button>
                </Reveal>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
