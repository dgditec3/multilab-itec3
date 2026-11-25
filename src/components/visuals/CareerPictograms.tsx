import type { ReactNode, SVGProps } from 'react'
import type { CareerId } from '../../data/projectData'

/**
 * Pictogramas por carrera — gramática geométrica del Manual de Normas ITEC 3
 * (pp. 26 y 28): trazo uniforme, esquinas redondeadas, formas puras.
 * Todos usan `currentColor` sobre una grilla de 48 × 48.
 */

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const

type GlyphProps = { title?: string } & SVGProps<SVGSVGElement>

function Glyph({ title, children, ...rest }: GlyphProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 48 48"
      role={title ? 'img' : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
      {...rest}
    >
      {children}
    </svg>
  )
}

/* ---------------------------- Programación ---------------------------- */
const Code = (p: GlyphProps) => (
  <Glyph {...p}>
    <polyline points="17,14 7,24 17,34" {...stroke} />
    <polyline points="31,14 41,24 31,34" {...stroke} />
    <line x1="27" y1="10" x2="21" y2="38" {...stroke} />
  </Glyph>
)
const WebWindow = (p: GlyphProps) => (
  <Glyph {...p}>
    <rect x="6" y="9" width="36" height="30" rx="5" {...stroke} />
    <line x1="6" y1="19" x2="42" y2="19" {...stroke} />
    <circle cx="12" cy="14" r="1.2" fill="currentColor" />
    <circle cx="17" cy="14" r="1.2" fill="currentColor" />
    <line x1="13" y1="27" x2="27" y2="27" {...stroke} />
    <line x1="13" y1="33" x2="22" y2="33" {...stroke} />
  </Glyph>
)
const Cursor = (p: GlyphProps) => (
  <Glyph {...p}>
    <path d="M13 8 L13 36 L20.5 29.5 L25.5 40 L30.5 37.8 L25.6 27.6 L35 27 Z" {...stroke} />
  </Glyph>
)
const Monitor = (p: GlyphProps) => (
  <Glyph {...p}>
    <rect x="6" y="8" width="36" height="24" rx="4" {...stroke} />
    <line x1="24" y1="32" x2="24" y2="40" {...stroke} />
    <line x1="15" y1="40" x2="33" y2="40" {...stroke} />
  </Glyph>
)

/* ---------------------------- Admin. PyMES ---------------------------- */
const Coin = (p: GlyphProps) => (
  <Glyph {...p}>
    <circle cx="24" cy="24" r="17" {...stroke} />
    <text
      x="24"
      y="31.5"
      textAnchor="middle"
      fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
      fontWeight="700"
      fontSize="22"
      fill="currentColor"
    >
      $
    </text>
  </Glyph>
)
const Briefcase = (p: GlyphProps) => (
  <Glyph {...p}>
    <rect x="6" y="16" width="36" height="23" rx="5" {...stroke} />
    <path d="M17 16 V12 a2 2 0 0 1 2 -2 h10 a2 2 0 0 1 2 2 V16" {...stroke} />
    <line x1="6" y1="27" x2="42" y2="27" {...stroke} />
    <line x1="24" y1="25" x2="24" y2="30" {...stroke} />
  </Glyph>
)
const Puzzle = (p: GlyphProps) => (
  <Glyph {...p}>
    <path
      d="M10 14h10a4 4 0 1 1 8 0h10v10a4 4 0 1 0 0 8v8H28a4 4 0 1 0-8 0H10V32a4 4 0 1 1 0-8z"
      {...stroke}
    />
  </Glyph>
)
const Sheet = (p: GlyphProps) => (
  <Glyph {...p}>
    <rect x="8" y="8" width="32" height="32" rx="5" {...stroke} />
    <line x1="8" y1="19" x2="40" y2="19" {...stroke} />
    <line x1="8" y1="29" x2="40" y2="29" {...stroke} />
    <line x1="19" y1="8" x2="19" y2="40" {...stroke} />
  </Glyph>
)

/* ------------------------------ Marketing ----------------------------- */
const Megaphone = (p: GlyphProps) => (
  <Glyph {...p}>
    <path d="M9 19 v10 h7 l15 8 V11 l-15 8 z" {...stroke} />
    <path d="M16 29 l2.5 9" {...stroke} />
    <path d="M36 19 a7 7 0 0 1 0 10" {...stroke} />
  </Glyph>
)
const Bars = (p: GlyphProps) => (
  <Glyph {...p}>
    <rect x="8" y="26" width="8" height="14" rx="2" {...stroke} />
    <rect x="20" y="18" width="8" height="22" rx="2" {...stroke} />
    <rect x="32" y="8" width="8" height="32" rx="2" {...stroke} />
  </Glyph>
)
const Target = (p: GlyphProps) => (
  <Glyph {...p}>
    <circle cx="22" cy="26" r="16" {...stroke} />
    <circle cx="22" cy="26" r="9" {...stroke} />
    <circle cx="22" cy="26" r="2.6" fill="currentColor" />
    <line x1="22" y1="26" x2="39" y2="9" {...stroke} />
    <polyline points="33,9 39,9 39,15" {...stroke} />
  </Glyph>
)
const Bulb = (p: GlyphProps) => (
  <Glyph {...p}>
    <path d="M24 6 a12 12 0 0 0 -6.5 22 v4.5 h13 V28 A12 12 0 0 0 24 6z" {...stroke} />
    <line x1="19" y1="37" x2="29" y2="37" {...stroke} />
    <line x1="21" y1="42" x2="27" y2="42" {...stroke} />
  </Glyph>
)

/* --------------------------- Diseño Gráfico --------------------------- */
const Nib = (p: GlyphProps) => (
  <Glyph {...p}>
    <path d="M24 5 L37 22 L24 43 L11 22 Z" {...stroke} />
    <circle cx="24" cy="23" r="3.2" {...stroke} />
    <line x1="24" y1="26" x2="24" y2="43" {...stroke} />
  </Glyph>
)
const Camera = (p: GlyphProps) => (
  <Glyph {...p}>
    <rect x="6" y="14" width="36" height="25" rx="5" {...stroke} />
    <path d="M17 14 l3 -5 h8 l3 5" {...stroke} />
    <circle cx="24" cy="26.5" r="7" {...stroke} />
  </Glyph>
)
const Cmyk = (p: GlyphProps) => (
  <Glyph {...p}>
    <circle cx="18" cy="19" r="11" fill="currentColor" fillOpacity="0.28" {...{ stroke: 'currentColor', strokeWidth: 2.2 }} />
    <circle cx="30" cy="19" r="11" fill="currentColor" fillOpacity="0.28" {...{ stroke: 'currentColor', strokeWidth: 2.2 }} />
    <circle cx="24" cy="30" r="11" fill="currentColor" fillOpacity="0.28" {...{ stroke: 'currentColor', strokeWidth: 2.2 }} />
  </Glyph>
)
const Pencil = (p: GlyphProps) => (
  <Glyph {...p}>
    <path d="M9 39 l2.5 -9.5 L30.5 10.5 a3.2 3.2 0 0 1 4.5 0 l2.5 2.5 a3.2 3.2 0 0 1 0 4.5 L18.5 36.5 z" {...stroke} />
    <line x1="27" y1="14" x2="34" y2="21" {...stroke} />
  </Glyph>
)

/* --------------------- RRPP y Comunicación (nuevo) -------------------- */
const Mic = (p: GlyphProps) => (
  <Glyph {...p}>
    <rect x="17" y="5" width="14" height="24" rx="7" {...stroke} />
    <path d="M10 23 a14 14 0 0 0 28 0" {...stroke} />
    <line x1="24" y1="37" x2="24" y2="43" {...stroke} />
    <line x1="16" y1="43" x2="32" y2="43" {...stroke} />
  </Glyph>
)
const Dialogue = (p: GlyphProps) => (
  <Glyph {...p}>
    <path d="M6 12 a4 4 0 0 1 4 -4 h16 a4 4 0 0 1 4 4 v11 a4 4 0 0 1 -4 4 H17 l-7 6 v-6 a4 4 0 0 1 -4 -4z" {...stroke} />
    <path d="M35 17 a8 8 0 0 1 0 14" {...stroke} />
    <path d="M40 12 a15 15 0 0 1 0 24" {...stroke} />
  </Glyph>
)
const Network = (p: GlyphProps) => (
  <Glyph {...p}>
    <line x1="24" y1="12" x2="24" y2="25" {...stroke} />
    <line x1="24" y1="25" x2="10" y2="37" {...stroke} />
    <line x1="24" y1="25" x2="38" y2="37" {...stroke} />
    <circle cx="24" cy="10" r="5" fill="#fff" stroke="currentColor" strokeWidth="2.6" />
    <circle cx="24" cy="26" r="4" fill="currentColor" />
    <circle cx="9" cy="38" r="5" fill="#fff" stroke="currentColor" strokeWidth="2.6" />
    <circle cx="39" cy="38" r="5" fill="#fff" stroke="currentColor" strokeWidth="2.6" />
  </Glyph>
)
const Document = (p: GlyphProps) => (
  <Glyph {...p}>
    <path d="M12 6 h17 l9 9 v27 H12z" {...stroke} />
    <path d="M29 6 v9 h9" {...stroke} />
    <line x1="18" y1="24" x2="32" y2="24" {...stroke} />
    <line x1="18" y1="30" x2="32" y2="30" {...stroke} />
    <line x1="18" y1="36" x2="26" y2="36" {...stroke} />
  </Glyph>
)

type GlyphComponent = (p: GlyphProps) => ReactNode

export const careerGlyphs: Record<CareerId, { name: string; Icon: GlyphComponent }[]> = {
  prog: [
    { name: 'Código', Icon: Code },
    { name: 'Ventana web', Icon: WebWindow },
    { name: 'Cursor', Icon: Cursor },
    { name: 'Monitor', Icon: Monitor },
  ],
  pymes: [
    { name: 'Moneda', Icon: Coin },
    { name: 'Maletín', Icon: Briefcase },
    { name: 'Pieza de puzzle', Icon: Puzzle },
    { name: 'Grilla de cálculo', Icon: Sheet },
  ],
  mkt: [
    { name: 'Megáfono', Icon: Megaphone },
    { name: 'Gráfico de barras', Icon: Bars },
    { name: 'Blanco', Icon: Target },
    { name: 'Idea', Icon: Bulb },
  ],
  dg: [
    { name: 'Plumilla vectorial', Icon: Nib },
    { name: 'Cámara', Icon: Camera },
    { name: 'Círculos CMYK', Icon: Cmyk },
    { name: 'Lápiz', Icon: Pencil },
  ],
  rrpp: [
    { name: 'Micrófono de estudio', Icon: Mic },
    { name: 'Ondas de diálogo', Icon: Dialogue },
    { name: 'Red institucional', Icon: Network },
    { name: 'Documento editorial', Icon: Document },
  ],
}

interface PictogramProps extends SVGProps<SVGSVGElement> {
  id: CareerId
  /** Índice del glifo (0–3). Por defecto, el principal. */
  variant?: number
  title?: string
}

/** Pictograma principal (o variante) de una carrera. */
export function CareerPictogram({ id, variant = 0, title, ...rest }: PictogramProps) {
  const { Icon } = careerGlyphs[id][variant % 4]
  return <Icon title={title} {...rest} />
}

/** Set completo de 4 glifos de la carrera, en grilla 2×2. */
export function CareerPictogramSet({ id, className = '' }: { id: CareerId; className?: string }) {
  return (
    <ul className={`grid grid-cols-2 gap-3 ${className}`} aria-label="Pictogramas de la carrera">
      {careerGlyphs[id].map(({ name, Icon }) => (
        <li
          key={name}
          className="flex aspect-square items-center justify-center rounded-2xl bg-white/85 p-4 shadow-[0_1px_0_rgb(0_0_0/0.04)]"
        >
          <Icon title={name} className="h-full w-full" />
        </li>
      ))}
    </ul>
  )
}
