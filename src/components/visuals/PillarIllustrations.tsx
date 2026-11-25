import type { ReactNode } from 'react'

/**
 * Cuatro ilustraciones editoriales, una por pilar.
 * Estilo: geometría plana, formas puras, paleta oficial + tintes.
 */

const O = 'var(--itec-orange)'
const G = 'var(--itec-green)'
const B = 'var(--itec-blue)'
const F = 'var(--itec-fucsia)'
const D = 'var(--itec-dark-blue)'

function Frame({ bg, label, children }: { bg: string; label: string; children: ReactNode }) {
  return (
    <svg viewBox="0 0 320 180" role="img" aria-label={label} className="block h-auto w-full">
      <rect width="320" height="180" fill={bg} />
      {/* trama de puntos sutil */}
      <defs>
        <pattern id={`dots-${label.length}`} width="14" height="14" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.2" fill="var(--itec-dark-blue)" fillOpacity="0.1" />
        </pattern>
      </defs>
      <rect width="320" height="180" fill={`url(#dots-${label.length})`} />
      {children}
    </svg>
  )
}

/** 01 · Portal de Contenidos y Streaming */
export function PortalIllustration() {
  return (
    <Frame bg="var(--itec-dark-blue-10)" label="Micrófono, ondas, pantalla y tarjeta editorial">
      {/* ondas concéntricas */}
      {[34, 54, 74].map((r, i) => (
        <circle key={r} cx="92" cy="88" r={r} fill="none" stroke={D} strokeOpacity={0.32 - i * 0.08} strokeWidth="2" />
      ))}
      {/* micrófono */}
      <rect x="80" y="56" width="24" height="46" rx="12" fill={D} />
      <path d="M70 90 a22 22 0 0 0 44 0" fill="none" stroke={D} strokeWidth="5" strokeLinecap="round" />
      <line x1="92" y1="112" x2="92" y2="124" stroke={D} strokeWidth="5" strokeLinecap="round" />
      <line x1="80" y1="124" x2="104" y2="124" stroke={D} strokeWidth="5" strokeLinecap="round" />
      {/* pantalla / cámara */}
      <rect x="170" y="34" width="116" height="74" rx="10" fill="#fff" stroke={D} strokeWidth="3" />
      <polygon points="214,56 214,86 240,71" fill={F} />
      <circle cx="182" cy="46" r="3.5" fill={O} />
      {/* tarjeta editorial */}
      <rect x="150" y="122" width="140" height="38" rx="9" fill={D} />
      <rect x="162" y="133" width="62" height="6" rx="3" fill="#fff" />
      <rect x="162" y="145" width="96" height="5" rx="2.5" fill="#fff" fillOpacity="0.5" />
      <rect x="262" y="132" width="16" height="16" rx="4" fill={O} />
    </Frame>
  )
}

/** 02 · Centro de Desarrollo Web */
export function WebIllustration() {
  return (
    <Frame bg="var(--itec-orange-10)" label="Navegador modular, código y nodos conectados">
      <rect x="28" y="30" width="170" height="120" rx="10" fill="#fff" stroke={O} strokeWidth="3" />
      <line x1="28" y1="52" x2="198" y2="52" stroke={O} strokeWidth="3" />
      <circle cx="42" cy="41" r="3.5" fill={O} />
      <circle cx="54" cy="41" r="3.5" fill={O} fillOpacity="0.55" />
      <circle cx="66" cy="41" r="3.5" fill={O} fillOpacity="0.3" />
      <text x="113" y="105" textAnchor="middle" fontFamily="var(--font-display)" fontWeight="700" fontSize="36" fill={O}>
        {'</>'}
      </text>
      <rect x="44" y="124" width="74" height="7" rx="3.5" fill={O} fillOpacity="0.35" />
      <rect x="44" y="136" width="46" height="7" rx="3.5" fill={O} fillOpacity="0.2" />
      {/* nodos conectados: flujo de publicación */}
      <line x1="198" y1="70" x2="246" y2="52" stroke={D} strokeWidth="3" />
      <line x1="198" y1="92" x2="246" y2="104" stroke={D} strokeWidth="3" />
      <line x1="246" y1="52" x2="282" y2="86" stroke={D} strokeWidth="3" strokeDasharray="2 6" strokeLinecap="round" />
      <line x1="246" y1="104" x2="282" y2="86" stroke={D} strokeWidth="3" />
      <line x1="246" y1="104" x2="262" y2="144" stroke={D} strokeWidth="3" />
      <circle cx="246" cy="52" r="12" fill="#fff" stroke={D} strokeWidth="3" />
      <circle cx="246" cy="104" r="12" fill={D} />
      <circle cx="282" cy="86" r="10" fill="#fff" stroke={O} strokeWidth="3" />
      <circle cx="262" cy="144" r="9" fill={O} />
    </Frame>
  )
}

/** 03 · Workshops y Cursos en Línea */
export function WorkshopsIllustration() {
  const nodes: [number, number][] = [
    [58, 54],
    [104, 38],
    [96, 92],
    [146, 68],
    [140, 118],
  ]
  const links: [number, number][] = [
    [0, 1],
    [0, 2],
    [1, 3],
    [2, 3],
    [2, 4],
    [3, 4],
  ]
  return (
    <Frame bg="var(--itec-green-10)" label="Nodos de aprendizaje, pantalla interactiva y calendario modular">
      {links.map(([a, b]) => (
        <line key={`${a}-${b}`} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} stroke={G} strokeWidth="2.5" strokeOpacity="0.6" />
      ))}
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i === 3 ? 11 : 8} fill={i % 2 ? G : '#fff'} stroke={G} strokeWidth="3" />
      ))}
      {/* pantalla */}
      <rect x="32" y="128" width="112" height="34" rx="8" fill="#fff" stroke={D} strokeWidth="3" />
      <polygon points="46,138 46,152 58,145" fill={B} />
      <rect x="68" y="139" width="58" height="6" rx="3" fill={D} fillOpacity="0.35" />
      <rect x="68" y="149" width="36" height="5" rx="2.5" fill={D} fillOpacity="0.2" />
      {/* calendario modular */}
      <rect x="188" y="28" width="104" height="124" rx="12" fill="#fff" stroke={G} strokeWidth="3" />
      <rect x="188" y="28" width="104" height="26" rx="12" fill={G} />
      <rect x="188" y="40" width="104" height="14" fill={G} />
      {Array.from({ length: 12 }, (_, i) => {
        const x = 200 + (i % 4) * 22
        const y = 64 + Math.floor(i / 4) * 26
        const hl = i === 6
        const hl2 = i === 2 || i === 9
        return <rect key={i} x={x} y={y} width="16" height="18" rx="5" fill={hl ? B : hl2 ? G : G} fillOpacity={hl ? 1 : hl2 ? 0.55 : 0.18} />
      })}
    </Frame>
  )
}

/** 04 · Agencia-Escuela para Emprendedores */
export function AgenciaIllustration() {
  return (
    <Frame bg="var(--itec-fucsia-10)" label="Piezas modulares que encajan: colaboración entre carreras y emprendedores">
      {/* piezas que encajan */}
      <rect x="52" y="42" width="84" height="84" rx="16" fill={F} />
      <circle cx="136" cy="84" r="16" fill={F} />
      <rect x="152" y="58" width="84" height="84" rx="16" fill={B} />
      <circle cx="152" cy="100" r="16" fill="var(--itec-fucsia-10)" />
      <circle cx="152" cy="100" r="16" fill="none" stroke={B} strokeWidth="0" />
      {/* piezas satélite */}
      <rect x="236" y="30" width="34" height="34" rx="9" fill={O} />
      <polygon points="88,150 112,150 100,130" fill={G} />
      <circle cx="262" cy="130" r="14" fill="none" stroke={D} strokeWidth="3" />
      <circle cx="262" cy="130" r="4" fill={D} />
      {/* trazos de unión */}
      <path d="M136 84 C 144 84, 144 100, 152 100" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
      <path d="M72 70 h30 M72 84 h46" stroke="#fff" strokeWidth="5" strokeLinecap="round" strokeOpacity="0.85" />
      <path d="M176 92 h36 M176 106 h22" stroke="#fff" strokeWidth="5" strokeLinecap="round" strokeOpacity="0.85" />
    </Frame>
  )
}

export const pillarIllustrations = {
  portal: PortalIllustration,
  web: WebIllustration,
  workshops: WorkshopsIllustration,
  agencia: AgenciaIllustration,
} as const
