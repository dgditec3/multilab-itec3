import { Layers, Rocket, Zap } from 'lucide-react'
import { DigitalFlowIllustration } from '../visuals/DigitalFlowIllustration'
import { BackgroundGeometry } from '../visuals/BackgroundGeometry'
import { DrawerBlock, DrawerList, useDrawer } from '../layout/DrawerModal'
import { Reveal, SectionHeader } from '../layout/Reveal'
import { brand, ecosystemLayers, ecosystemStages } from '../../data/projectData'

const points = [
  { icon: Layers, title: 'Autonomía tecnológica', text: 'Equipo propio de soporte y desarrollo web bajo el dominio itec3misiones.edu.ar, sin depender de terceros.' },
  { icon: Zap, title: 'Ecosistema escalable', text: 'Sitio Institucional, Aula Virtual, Portal Multilab y sitios dedicados a eventos y proyectos en una misma red.' },
  { icon: Rocket, title: 'Preparado para 2027', text: 'Escala sin rehacer infraestructura y acompaña la inminente digitalización del sistema académico.' },
]

export function EcosystemSection() {
  const drawer = useDrawer()

  const openStages = () =>
    drawer.open({
      eyebrow: 'Ecosistema digital y continuidad',
      title: 'De la presentación 2026 al Portal real 2027',
      accent: 'var(--itec-blue)',
      body: (
        <>
          <ol className="relative space-y-6">
            {ecosystemStages.map((s, i) => (
              <li key={s.stage} className="rounded-2xl border-2 p-5" style={{ borderColor: i === 0 ? 'var(--itec-orange)' : 'var(--itec-blue)' }}>
                <p className="font-display text-xs font-bold uppercase tracking-[0.14em]" style={{ color: i === 0 ? 'var(--itec-orange)' : 'var(--itec-blue)' }}>
                  {s.stage} · {s.when}
                </p>
                <h2 className="mt-1 text-xl">{s.title}</h2>
                <p className="mt-2 text-[0.95rem] text-itec-muted">{s.text}</p>
                <div className="mt-4">
                  <DrawerList items={s.items} />
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-8">
            <DrawerBlock title="Los cuatro ejes del ecosistema digital">
              <ul className="space-y-4">
                {ecosystemLayers.map((l) => (
                  <li key={l.name} className="border-l-4 pl-4" style={{ borderColor: 'var(--accent)' }}>
                    <p className="font-display text-sm font-bold text-itec-dark">{l.tool}</p>
                    <p className="text-xs font-bold uppercase tracking-wider text-itec-muted">{l.name}</p>
                    <p className="mt-1 text-[0.93rem] leading-snug text-itec-muted">{l.role}</p>
                  </li>
                ))}
              </ul>
            </DrawerBlock>
          </div>
        </>
      ),
    })

  return (
    <section id="ecosistema" className="section bg-itec-surface" aria-labelledby="eco-title">
      <BackgroundGeometry variant="bars" color="var(--itec-blue)" opacity={0.05} className="-right-20 -top-10" />
      <div className="wrap relative">
        <SectionHeader
          eyebrow="Ecosistema digital y autonomía"
          title={<span id="eco-title">Un ecosistema digital propio, integrado y escalable.</span>}
          lead={
            <>
              Autonomía tecnológica para el ITEC 3: el Sitio Institucional, el Aula Virtual,{' '}
              <strong className="text-itec-dark">{brand.subdomain}</strong> y nuevas plataformas a medida conviven en un mismo entorno, preparados para acompañar la inminente digitalización del sistema académico.
            </>
          }
        />

        <Reveal className="mt-12" delay={0.05}>
          <div className="rounded-3xl border border-itec-line bg-white p-5 md:p-8">
            <DigitalFlowIllustration />
          </div>
        </Reveal>

        <ul className="mt-8 grid gap-5 md:grid-cols-3">
          {points.map((p, i) => (
            <li key={p.title}>
              <Reveal delay={i * 0.08} className="h-full">
                <div className="flex h-full gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-itec-dark text-white">
                    <p.icon size={22} strokeWidth={1.75} aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-display text-lg">{p.title}</h3>
                    <p className="mt-1 text-[0.95rem] leading-snug text-itec-muted">{p.text}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal className="no-print mt-9">
          <button type="button" onClick={openStages} className="btn btn-ghost" aria-haspopup="dialog">
            Etapa 1 (2026) → Etapa 2 (2027)
          </button>
        </Reveal>
      </div>
    </section>
  )
}
