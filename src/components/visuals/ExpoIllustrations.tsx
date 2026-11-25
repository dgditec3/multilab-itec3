import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import type { ExpoCardId } from '../../data/projectData'

/**
 * Ilustraciones vectoriales geométricas para EXPO ITEC 2027 · Edición 20° Aniversario.
 * Paleta oficial del Manual de Normas ITEC 3 (#0C2340, #1D4F91, #FE5000, #CE1482, #009A17).
 */

const D = 'var(--itec-dark-blue)'
const B = 'var(--itec-blue)'
const O = 'var(--itec-orange)'
const F = 'var(--itec-fucsia)'
const G = 'var(--itec-green)'

const careerNodes = [
  { label: 'Programación', color: O, x: 92, y: 112 },
  { label: 'PyMES', color: G, x: 186, y: 66 },
  { label: 'Marketing', color: B, x: 280, y: 50 },
  { label: 'Diseño', color: F, x: 374, y: 66 },
  { label: 'RRPP', color: D, x: 468, y: 112 },
]

/** Composición principal del módulo EXPO ITEC 2027: número 20, estación cultural y las 5 carreras hacia la comunidad. */
export function ExpoHeroIllustration() {
  return (
    <svg
      viewBox="0 0 560 430"
      role="img"
      aria-label="Ilustración geométrica EXPO ITEC 2027: los 20 años, la estación cultural de encuentro y las cinco tecnicaturas convergiendo hacia la comunidad"
      className="mx-auto block h-auto w-full max-w-[560px] select-none"
    >
      <defs>
        <pattern id="expo-dots" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.2" fill={D} fillOpacity="0.1" />
        </pattern>
      </defs>

      {/* Fondo arquitectónico sutil */}
      <rect x="16" y="16" width="528" height="398" rx="28" fill="var(--itec-surface)" stroke="var(--itec-line)" strokeWidth="2" />
      <rect x="16" y="16" width="528" height="398" rx="28" fill="url(#expo-dots)" />

      {/* Arco de convergencia hacia la comunidad */}
      <path d="M 92 112 Q 280 28 468 112" fill="none" stroke={D} strokeOpacity="0.15" strokeWidth="2" strokeDasharray="3 8" strokeLinecap="round" />

      {/* Líneas de convergencia desde las 5 tecnicaturas hacia el escenario */}
      {careerNodes.map((n, i) => (
        <motion.line
          key={n.label}
          x1={n.x}
          y1={n.y}
          x2={280}
          y2={250}
          stroke={n.color}
          strokeWidth="2.5"
          strokeOpacity="0.55"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.6 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 + i * 0.08, ease: [0.22, 0.8, 0.24, 1] }}
        />
      ))}

      {/* 5 nodos de las tecnicaturas */}
      {careerNodes.map((n, i) => (
        <motion.g
          key={n.label}
          initial={{ scale: 0.7, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.12 + i * 0.06 }}
        >
          <circle cx={n.x} cy={n.y} r="20" fill="#fff" stroke={n.color} strokeWidth="3.5" />
          <circle cx={n.x} cy={n.y} r="8" fill={n.color} />
        </motion.g>
      ))}

      {/* Pabellón / Estación Cultural geométrica */}
      <path d="M 110 278 L 154 218 L 406 218 L 450 278" fill="none" stroke={B} strokeWidth="3.5" strokeLinejoin="round" />
      <rect x="128" y="278" width="304" height="14" rx="7" fill={D} />

      {/* Tres arcos de encuentro (muestra · en vivo · clases abiertas) */}
      <path d="M 156 278 v -28 a 28 28 0 0 1 56 0 v 28" fill="none" stroke={O} strokeWidth="3" />
      <path d="M 244 278 v -38 a 36 36 0 0 1 72 0 v 38" fill="none" stroke={F} strokeWidth="3" />
      <path d="M 348 278 v -28 a 28 28 0 0 1 56 0 v 28" fill="none" stroke={G} strokeWidth="3" />

      {/* Gran número geométrico 20 en el centro */}
      <rect x="176" y="132" width="208" height="94" rx="18" fill="#fff" stroke={D} strokeWidth="3" />
      <text
        x="248"
        y="196"
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontWeight="700"
        fontSize="64"
        letterSpacing="-3"
        fill={D}
      >
        2
      </text>
      <circle cx="316" cy="175" r="24" fill="none" stroke={B} strokeWidth="11" />
      <circle cx="316" cy="175" r="7" fill={O} />

      {/* Señal en vivo sobre el escenario */}
      <path d="M 412 162 a 16 16 0 0 1 0 26" fill="none" stroke={O} strokeWidth="3" strokeLinecap="round" />
      <path d="M 424 152 a 28 28 0 0 1 0 46" fill="none" stroke={O} strokeWidth="3" strokeLinecap="round" strokeOpacity="0.65" />

      {/* Base: encuentro con la comunidad */}
      <rect x="44" y="314" width="472" height="68" rx="16" fill={D} />
      <text
        x="280"
        y="343"
        textAnchor="middle"
        fill="#fff"
        fontFamily="var(--font-display)"
        fontWeight="700"
        fontSize="12.5"
        letterSpacing="1.4"
      >
        7 DE AGOSTO DE 2027 · EDICIÓN ANIVERSARIO
      </text>
      <text
        x="280"
        y="366"
        textAnchor="middle"
        fill="#fff"
        fillOpacity="0.82"
        fontFamily="var(--font-body)"
        fontSize="12.5"
      >
        Muestra anual · Intervenciones · Clases abiertas a la comunidad
      </text>
      {/* Cinco puntos de color en la base */}
      {careerNodes.map((n, i) => (
        <circle key={`dot-${n.label}`} cx={240 + i * 20} cy="396" r="4" fill={n.color} />
      ))}
    </svg>
  )
}

function CardFrame({ bg, label, children }: { bg: string; label: string; children: ReactNode }) {
  return (
    <svg viewBox="0 0 320 172" role="img" aria-label={label} className="block h-auto w-full">
      <rect width="320" height="172" fill={bg} />
      <defs>
        <pattern id={`expo-card-dots-${label.length}`} width="14" height="14" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.2" fill={D} fillOpacity="0.1" />
        </pattern>
      </defs>
      <rect width="320" height="172" fill={`url(#expo-card-dots-${label.length})`} />
      {children}
    </svg>
  )
}

/** 01 · Sede y 2 Jornadas: pabellón cultural geométrico + señal en vivo */
export function ExpoSedeIllustration() {
  return (
    <CardFrame bg="var(--itec-orange-10)" label="Pabellón de la Estación Cultural con dos jornadas y señal en vivo">
      {/* Pabellón */}
      <polygon points="44,74 160,28 276,74" fill="#fff" stroke={D} strokeWidth="3" strokeLinejoin="round" />
      <rect x="52" y="74" width="216" height="62" rx="6" fill="#fff" stroke={D} strokeWidth="3" />
      {/* Arcos de la estación */}
      <path d="M 76 136 v -30 a 22 22 0 0 1 44 0 v 30" fill="var(--itec-orange-10)" stroke={O} strokeWidth="3" />
      <path d="M 138 136 v -34 a 22 22 0 0 1 44 0 v 34" fill="var(--itec-blue-10)" stroke={B} strokeWidth="3" />
      <path d="M 200 136 v -30 a 22 22 0 0 1 44 0 v 30" fill="var(--itec-orange-10)" stroke={O} strokeWidth="3" />
      <rect x="38" y="136" width="244" height="10" rx="5" fill={D} />
      {/* Señal en vivo */}
      <circle cx="256" cy="40" r="7" fill={O} />
      <path d="M 271 29 a 16 16 0 0 1 0 22" fill="none" stroke={O} strokeWidth="3" strokeLinecap="round" />
      <path d="M 282 22 a 26 26 0 0 1 0 36" fill="none" stroke={O} strokeWidth="3" strokeLinecap="round" strokeOpacity="0.6" />
      {/* Dos bloques de jornada */}
      <rect x="64" y="152" width="88" height="10" rx="5" fill={O} />
      <rect x="168" y="152" width="88" height="10" rx="5" fill={D} />
    </CardFrame>
  )
}

/** 02 · Vinculación Regional: red geométrica Garupá – Posadas – Misiones */
export function ExpoRegionalIllustration() {
  return (
    <CardFrame bg="var(--itec-green-10)" label="Red territorial entre Posadas, Garupá y la provincia de Misiones">
      {/* Silueta geométrica estilizada de territorio */}
      <polygon points="84,142 134,34 252,26 218,142" fill="#fff" stroke={G} strokeWidth="3" strokeLinejoin="round" />
      {/* Vínculos entre nodos */}
      <line x1="118" y1="108" x2="184" y2="90" stroke={B} strokeWidth="3.5" strokeLinecap="round" />
      <line x1="184" y1="90" x2="216" y2="52" stroke={G} strokeWidth="3.5" strokeLinecap="round" />
      <line x1="118" y1="108" x2="216" y2="52" stroke={D} strokeWidth="2.2" strokeDasharray="3 6" strokeLinecap="round" />
      {/* Nodos Garupá / Posadas / Misiones */}
      <circle cx="118" cy="108" r="14" fill="#fff" stroke={B} strokeWidth="3.5" />
      <circle cx="118" cy="108" r="5" fill={B} />
      <circle cx="184" cy="90" r="17" fill={G} />
      <circle cx="184" cy="90" r="6" fill="#fff" />
      <circle cx="216" cy="52" r="13" fill="#fff" stroke={D} strokeWidth="3.5" />
      <circle cx="216" cy="52" r="5" fill={O} />
      {/* Referencias modulares */}
      <rect x="28" y="42" width="54" height="14" rx="7" fill={D} />
      <rect x="28" y="64" width="42" height="14" rx="7" fill={B} />
      <rect x="28" y="86" width="48" height="14" rx="7" fill={G} />
    </CardFrame>
  )
}

/** 03 · Aliados y Sponsors: convergencia de marcas hacia pantalla y megáfono */
export function ExpoAliadosIllustration() {
  return (
    <CardFrame bg="var(--itec-fucsia-10)" label="Bloques de aliados estratégicos convergiendo hacia pantalla y difusión institucional">
      {/* Tres bloques de aliados / sectores */}
      <rect x="30" y="34" width="44" height="28" rx="8" fill={O} />
      <rect x="30" y="72" width="44" height="28" rx="8" fill={B} />
      <rect x="30" y="110" width="44" height="28" rx="8" fill={G} />
      {/* Trazos de convergencia */}
      <path d="M 74 48 C 110 48, 108 86, 142 86" fill="none" stroke={D} strokeWidth="3" strokeLinecap="round" />
      <line x1="74" y1="86" x2="142" y2="86" stroke={D} strokeWidth="3" strokeLinecap="round" />
      <path d="M 74 124 C 110 124, 108 86, 142 86" fill="none" stroke={D} strokeWidth="3" strokeLinecap="round" />
      {/* Pantalla de visibilidad */}
      <rect x="142" y="36" width="110" height="82" rx="12" fill="#fff" stroke={F} strokeWidth="3" />
      <rect x="156" y="52" width="52" height="8" rx="4" fill={D} />
      <rect x="156" y="68" width="82" height="8" rx="4" fill={F} fillOpacity="0.45" />
      <rect x="156" y="86" width="24" height="18" rx="5" fill={O} />
      <rect x="186" y="86" width="24" height="18" rx="5" fill={B} />
      <rect x="216" y="86" width="24" height="18" rx="5" fill={G} />
      {/* Megáfono */}
      <path d="M 266 96 v 16 h 10 l 18 10 V 86 l -18 10 z" fill={F} stroke={D} strokeWidth="2.5" strokeLinejoin="round" />
    </CardFrame>
  )
}

/** 04 · Casas de Estudio Invitadas: módulos interconectados en red académica */
export function ExpoRedIllustration() {
  const nodes: [number, number, string][] = [
    [160, 46, D],
    [88, 96, B],
    [232, 96, G],
    [122, 134, O],
    [198, 134, F],
  ]
  const edges: [number, number][] = [
    [0, 1],
    [0, 2],
    [1, 2],
    [1, 3],
    [2, 4],
    [3, 4],
    [0, 3],
    [0, 4],
  ]
  return (
    <CardFrame bg="var(--itec-blue-10)" label="Módulos interconectados representando red académica regional">
      {edges.map(([a, b]) => (
        <line
          key={`${a}-${b}`}
          x1={nodes[a][0]}
          y1={nodes[a][1]}
          x2={nodes[b][0]}
          y2={nodes[b][1]}
          stroke={D}
          strokeOpacity="0.28"
          strokeWidth="2.6"
        />
      ))}
      {nodes.map(([x, y, color], i) => (
        <g key={i}>
          <rect x={x - 20} y={y - 16} width="40" height="32" rx="9" fill="#fff" stroke={color} strokeWidth="3" />
          <rect x={x - 10} y={y - 5} width="20" height="4" rx="2" fill={color} />
          <rect x={x - 6} y={y + 3} width="12" height="4" rx="2" fill={color} fillOpacity="0.45" />
        </g>
      ))}
    </CardFrame>
  )
}

export const expoCardIllustrations: Record<ExpoCardId, () => ReactNode> = {
  sede: ExpoSedeIllustration,
  vinculacion: ExpoRegionalIllustration,
  aliados: ExpoAliadosIllustration,
  red: ExpoRedIllustration,
}
