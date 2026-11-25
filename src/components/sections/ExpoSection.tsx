import { CalendarCheck, Plus } from 'lucide-react'
import { BackgroundGeometry } from '../visuals/BackgroundGeometry'
import { ExpoHeroIllustration, expoCardIllustrations } from '../visuals/ExpoIllustrations'
import { DrawerBlock, useDrawer } from '../layout/DrawerModal'
import { Reveal } from '../layout/Reveal'
import { expo2027, type ExpoCard } from '../../data/projectData'

export function ExpoSection() {
  const drawer = useDrawer()

  const openCard = (card: ExpoCard) => {
    const Art = expoCardIllustrations[card.id]
    drawer.open({
      eyebrow: `EXPO ITEC 2027 · Eje ${card.n}`,
      title: card.title,
      accent: card.accent,
      body: (
        <>
          <div className="-mx-6 -mt-6 mb-7 overflow-hidden md:-mx-8">
            <Art />
          </div>
          {card.details.map((d, i) => (
            <DrawerBlock key={d.heading ?? i} title={d.heading ?? 'Detalle'}>
              <p className="text-[0.97rem] leading-relaxed text-itec-dark/90">{d.text}</p>
            </DrawerBlock>
          ))}
        </>
      ),
    })
  }

  return (
    <section id="expo-2027" className="section" aria-labelledby="expo-title">
      <BackgroundGeometry variant="hex" color="var(--itec-blue)" opacity={0.05} className="-right-24 top-8" />
      <BackgroundGeometry variant="dots" color="var(--itec-fucsia)" opacity={0.06} className="-left-24 bottom-12 !h-72 !w-72" />

      <div className="wrap relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr]">
          <Reveal>
            <p
              className="chip !px-3.5 !py-1.5 !text-[0.68rem] tracking-[0.11em] md:!text-xs"
              style={{ ['--accent' as string]: 'var(--itec-dark-blue)' }}
            >
              {expo2027.badge}
            </p>
            <p className="mt-4 font-display text-xs font-bold uppercase tracking-[0.14em] text-itec-orange">
              {expo2027.milestone}
            </p>
            <h2 id="expo-title" className="h-section mt-2">
              {expo2027.title}
            </h2>
            <p className="lead mt-4">{expo2027.lead}</p>
            <div className="no-print mt-6">
              <a href="#hoja-de-ruta" className="btn btn-ghost">
                <CalendarCheck size={18} strokeWidth={1.75} aria-hidden /> Ver hito en la Hoja de Ruta 2027
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ExpoHeroIllustration />
          </Reveal>
        </div>

        {/* 4 tarjetas interactivas con desglose en cajón lateral */}
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {expo2027.cards.map((card, i) => {
            const Art = expoCardIllustrations[card.id]
            return (
              <li key={card.id}>
                <Reveal delay={i * 0.08} className="h-full">
                  <button
                    type="button"
                    onClick={() => openCard(card)}
                    aria-haspopup="dialog"
                    className="card card-interactive avoid-break group flex h-full w-full flex-col overflow-hidden text-left"
                    style={{ ['--accent' as string]: card.accent }}
                  >
                    <div className="overflow-hidden">
                      <div className="transition-transform duration-500 group-hover:scale-[1.04] motion-reduce:transform-none">
                        <Art />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <p className="font-display text-sm font-bold tracking-[0.14em]" style={{ color: card.accent }}>
                        {card.n}
                      </p>
                      <h3 className="mt-1 text-[1.18rem] leading-tight">{card.title}</h3>
                      <p className="mt-2 flex-1 text-[0.93rem] leading-snug text-itec-muted">{card.summary}</p>
                      <span className="no-print mt-4 inline-flex items-center gap-1.5 font-display text-sm font-bold" style={{ color: card.accent }}>
                        <span className="flex h-6 w-6 items-center justify-center rounded-full text-white" style={{ background: card.accent }}>
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

        {/* Nota de gobernanza visible al pie */}
        <Reveal delay={0.12} className="mt-10">
          <aside
            aria-label="Instancia de validación institucional"
            className="avoid-break rounded-r-2xl border-l-4 border-itec-blue bg-itec-surface px-6 py-5"
          >
            <p className="text-[0.95rem] leading-relaxed text-itec-dark/90">
              <strong className="font-display text-itec-dark">Instancia de validación institucional:</strong>{' '}
              {expo2027.governanceNote}
            </p>
          </aside>
        </Reveal>

        {/* Síntesis impresa */}
        <div className="print-only mt-6 space-y-2.5 text-xs">
          {expo2027.cards.map((card) => (
            <div key={card.id} className="avoid-break rounded-xl border border-itec-line p-3">
              <p className="font-bold text-itec-dark">
                {card.n} · {card.title}
              </p>
              {card.details.map((d, idx) => (
                <p key={idx} className="mt-1 text-itec-muted">
                  {d.heading ? <strong>{d.heading}: </strong> : null}
                  {d.text}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
