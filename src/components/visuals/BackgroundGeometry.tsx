import type { CSSProperties } from 'react'

type Variant = 'hex' | 'dots' | 'triangles' | 'squares' | 'bars'

interface Props {
  variant?: Variant
  color?: string
  /** 0.04 – 0.08 */
  opacity?: number
  className?: string
}

const hex = (cx: number, cy: number, r: number) =>
  Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 3) * i - Math.PI / 6
    return `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`
  }).join(' ')

/**
 * Misceláneas geométricas ultra sutiles (Manual de Normas, p. 24),
 * pensadas para los márgenes de las secciones.
 */
export function BackgroundGeometry({
  variant = 'hex',
  color = 'var(--itec-dark-blue)',
  opacity = 0.06,
  className = '',
}: Props) {
  const style: CSSProperties = { color, opacity }
  return (
    <svg
      data-bg-geometry
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 400 400"
      className={`pointer-events-none absolute -z-0 h-[26rem] w-[26rem] ${className}`}
      style={style}
    >
      {variant === 'hex' && (
        <g fill="none" stroke="currentColor" strokeWidth="3">
          <polygon points={hex(200, 200, 170)} />
          <polygon points={hex(200, 200, 120)} />
          <polygon points={hex(200, 200, 70)} fill="currentColor" stroke="none" />
        </g>
      )}
      {variant === 'dots' && (
        <g fill="currentColor">
          {Array.from({ length: 64 }, (_, i) => (
            <circle key={i} cx={30 + (i % 8) * 48} cy={30 + Math.floor(i / 8) * 48} r="4.5" />
          ))}
        </g>
      )}
      {variant === 'triangles' && (
        <g fill="currentColor">
          <polygon points="40,340 160,340 100,230" />
          <polygon points="180,340 300,340 240,230" fillOpacity="0.55" />
          <polygon points="110,210 230,210 170,100" fillOpacity="0.3" />
        </g>
      )}
      {variant === 'squares' && (
        <g fill="none" stroke="currentColor" strokeWidth="3">
          <rect x="40" y="40" width="200" height="200" rx="28" />
          <rect x="120" y="120" width="200" height="200" rx="28" />
          <rect x="200" y="200" width="150" height="150" rx="28" fill="currentColor" stroke="none" fillOpacity="0.6" />
        </g>
      )}
      {variant === 'bars' && (
        <g fill="currentColor">
          {[60, 120, 180, 240, 300].map((h, i) => (
            <rect key={h} x={30 + i * 70} y={370 - h} width="46" height={h} rx="10" fillOpacity={0.35 + i * 0.13} />
          ))}
        </g>
      )}
    </svg>
  )
}
