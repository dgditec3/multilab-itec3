import type { ReactNode } from 'react'

/**
 * Diagrama pensado para Rectorado: autonomía tecnológica y escalabilidad
 * del ecosistema digital propio del ITEC 3 (sin proveedores ni herramientas internas).
 * HTML + SVG: se reordena en vertical en celulares.
 */

const D = 'var(--itec-dark-blue)'
const O = 'var(--itec-orange)'
const B = 'var(--itec-blue)'
const G = 'var(--itec-green)'
const F = 'var(--itec-fucsia)'

function Node({
  icon,
  accent,
  title,
  sub,
  strong = false,
}: {
  icon: ReactNode
  accent: string
  title: string
  sub: string
  strong?: boolean
}) {
  return (
    <div
      className="avoid-break flex h-full flex-col items-center gap-3 rounded-2xl px-4 py-5 text-center"
      style={{
        ['--accent' as string]: accent,
        background: strong ? 'var(--itec-dark-blue)' : '#fff',
        color: strong ? '#fff' : 'var(--itec-dark-blue)',
        border: strong ? '2px solid var(--itec-dark-blue)' : `2px solid ${accent}`,
      }}
    >
      <span
        className="flex h-14 w-14 items-center justify-center rounded-2xl"
        style={{ background: strong ? 'rgb(255 255 255 / 0.12)' : `color-mix(in srgb, ${accent} 12%, white)`, color: strong ? '#fff' : accent }}
      >
        {icon}
      </span>
      <div>
        <p className="font-display text-base font-bold leading-tight break-words">{title}</p>
        <p className="mt-1 text-[0.8rem] leading-snug" style={{ opacity: strong ? 0.85 : 0.75 }}>
          {sub}
        </p>
      </div>
    </div>
  )
}

/** Conector con trazo animado; horizontal en desktop, vertical en mobile. */
function Link({ both = false, label }: { both?: boolean; label?: string }) {
  return (
    <div className="flex items-center justify-center py-1 lg:px-1 lg:py-0" aria-hidden="true">
      <svg viewBox="0 0 60 60" className="h-10 w-10 rotate-90 lg:h-14 lg:w-14 lg:rotate-0">
        <line className="flow-dash" x1="8" y1="30" x2="52" y2="30" stroke={D} strokeWidth="3" strokeLinecap="round" />
        <polyline points="44,22 52,30 44,38" fill="none" stroke={D} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        {both && <polyline points="16,22 8,30 16,38" fill="none" stroke={D} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />}
      </svg>
      {label && <span className="sr-only">{label}</span>}
    </div>
  )
}

const ico = { fill: 'none', stroke: 'currentColor', strokeWidth: 2.4, strokeLinecap: 'round', strokeLinejoin: 'round' } as const

const CodeTeamIcon = (
  <svg viewBox="0 0 48 48" className="h-8 w-8">
    <polyline points="17,15 8,24 17,33" {...ico} />
    <polyline points="31,15 40,24 31,33" {...ico} />
    <line x1="27" y1="11" x2="21" y2="37" {...ico} />
  </svg>
)
const GlobeIcon = (
  <svg viewBox="0 0 48 48" className="h-8 w-8">
    <circle cx="24" cy="24" r="16" {...ico} />
    <ellipse cx="24" cy="24" rx="7" ry="16" {...ico} />
    <line x1="8" y1="24" x2="40" y2="24" {...ico} />
  </svg>
)
const PortalSiteIcon = (
  <svg viewBox="0 0 48 48" className="h-8 w-8">
    <rect x="7" y="9" width="34" height="30" rx="6" {...ico} />
    <line x1="7" y1="19" x2="41" y2="19" {...ico} />
    <circle cx="14" cy="14" r="1.4" fill="currentColor" />
    <circle cx="20" cy="14" r="1.4" fill="currentColor" />
    <line x1="14" y1="27" x2="34" y2="27" {...ico} />
    <line x1="14" y1="33" x2="26" y2="33" {...ico} />
  </svg>
)
const CapIcon = (
  <svg viewBox="0 0 48 48" className="h-8 w-8">
    <polygon points="24,10 43,19 24,28 5,19" {...ico} />
    <path d="M13 25 v8 c0 3 6 6 11 6 s11 -3 11 -6 v-8" {...ico} />
  </svg>
)
const CustomAppsIcon = (
  <svg viewBox="0 0 48 48" className="h-8 w-8">
    <rect x="7" y="7" width="15" height="15" rx="4" {...ico} />
    <rect x="26" y="7" width="15" height="15" rx="4" {...ico} />
    <rect x="7" y="26" width="15" height="15" rx="4" {...ico} />
    <circle cx="33.5" cy="33.5" r="7.5" {...ico} />
  </svg>
)

export function DigitalFlowIllustration() {
  return (
    <figure className="w-full" aria-label="Diagrama del ecosistema digital propio del ITEC 3">
      <div className="grid items-stretch gap-0 lg:grid-cols-[1fr_auto_1.15fr_auto_1fr_auto_1fr]">
        <Node icon={CodeTeamIcon} accent={O} title="Desarrollo Propio" sub="Soporte y creación web desde el Multilab" />
        <Link label="impulsa" />
        <Node icon={GlobeIcon} accent={D} strong title="multilab.itec3misiones.edu.ar" sub="Portal Multilab y archivo digital" />
        <Link both label="se integra con" />
        <div className="flex flex-col gap-0">
          <Node icon={PortalSiteIcon} accent={F} title="itec3misiones.edu.ar" sub="Sitio Institucional oficial" />
          <div className="flex justify-center py-1" aria-hidden="true">
            <svg viewBox="0 0 20 28" className="h-7 w-5">
              <line className="flow-dash" x1="10" y1="2" x2="10" y2="22" stroke={D} strokeWidth="3" strokeLinecap="round" />
              <polyline points="4,16 10,23 16,16" fill="none" stroke={D} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <Node icon={CapIcon} accent={G} title="Aula Virtual" sub="Cursos, talleres y formación en línea" />
        </div>
        <Link both label="escala hacia" />
        <Node icon={CustomAppsIcon} accent={B} title="Plataformas a Medida" sub="Sitios para eventos, muestras y proyectos" />
      </div>
    </figure>
  )
}
