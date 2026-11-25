import { useState } from 'react'

interface Props {
  /** `color`: sobre fondos claros · `negativo`: sobre Dark Blue #0C2340 */
  variant?: 'color' | 'negativo'
  className?: string
}

const SRC = {
  color: '/brand/logo-itec-color.png',
  negativo: '/brand/logo-itec-negativo.png',
}

/**
 * Logotipo ITEC 3. Usa el PNG oficial de /public/brand y, si todavía no
 * fue copiado, cae a un SVG fiel al logotipo (wordmark "Itec" + caja del 3).
 */
export function ItecLogo({ variant = 'color', className = 'h-9' }: Props) {
  const [failed, setFailed] = useState(false)
  const neg = variant === 'negativo'

  if (!failed) {
    return (
      <img
        src={SRC[variant]}
        alt="Instituto Tecnológico N° 3 · ITEC 3"
        className={`w-auto ${className}`}
        onError={() => setFailed(true)}
        decoding="async"
      />
    )
  }

  const ink = neg ? '#ffffff' : '#3c3c3b'
  const box = neg ? 'rgb(255 255 255 / 0.28)' : '#706f6f'
  return (
    <svg viewBox="0 0 200 60" role="img" aria-label="Instituto Tecnológico N° 3 · ITEC 3" className={`w-auto ${className}`}>
      <text x="0" y="48" fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif" fontWeight="700" fontSize="58" letterSpacing="-3" fill={ink}>
        Itec
      </text>
      <rect x="140" y="0" width="60" height="60" rx="8" fill={box} />
      <text x="170" y="47" textAnchor="middle" fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif" fontWeight="700" fontSize="48" fill="#fff">
        3
      </text>
    </svg>
  )
}
