import { useCallback, useEffect } from 'react'
import { ChevronDown, ChevronUp, X } from 'lucide-react'
import { sections } from '../../data/projectData'

interface Props {
  activeIndex: number
  presenting: boolean
  onExit: () => void
}

function goTo(index: number) {
  const i = Math.max(0, Math.min(sections.length - 1, index))
  document.getElementById(sections[i].id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function PresentationControls({ activeIndex, presenting, onExit }: Props) {
  const step = useCallback((dir: 1 | -1) => goTo(activeIndex + dir), [activeIndex])

  // Navegación por teclado (solo en modo presentación): ↑↓ ←→ RePág/AvPág · Esc sale.
  useEffect(() => {
    if (!presenting) return
    const onKey = (e: KeyboardEvent) => {
      if (document.querySelector('dialog[open]')) return // el panel abierto tiene prioridad (Esc lo cierra)
      const t = e.target as HTMLElement | null
      if (t?.closest('input, textarea, select')) return
      const inTabs = !!t?.closest('[role="tablist"]')
      switch (e.key) {
        case 'ArrowDown':
        case 'PageDown':
          e.preventDefault()
          step(1)
          break
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault()
          step(-1)
          break
        case 'ArrowRight':
          if (inTabs) return
          e.preventDefault()
          step(1)
          break
        case 'ArrowLeft':
          if (inTabs) return
          e.preventDefault()
          step(-1)
          break
        case 'Escape':
          onExit()
          break
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [presenting, step, onExit])

  return (
    <>
      {/* Indicador lateral discreto de progreso */}
      <nav
        data-progress
        aria-label="Progreso de la presentación"
        className="no-print fixed right-3 top-1/2 z-30 hidden -translate-y-1/2 rounded-full bg-white/90 px-2.5 py-3.5 shadow-[0_6px_24px_-8px_rgb(12_35_64/0.35)] ring-1 ring-itec-line backdrop-blur xl:block"
      >
        <ol className="flex flex-col items-end gap-3">
          {sections.map((s, i) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                aria-label={`Ir a ${s.label}`}
                aria-current={i === activeIndex ? 'true' : undefined}
                className="group relative flex items-center gap-2"
              >
                <span
                  className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full bg-white px-3 py-1 font-display text-xs font-bold text-itec-dark opacity-0 shadow-md ring-1 ring-itec-line transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
                >
                  {s.label}
                </span>
                <span
                  className="block rounded-full transition-all duration-300"
                  style={{
                    width: i === activeIndex ? 12 : 8,
                    height: i === activeIndex ? 12 : 8,
                    background: i === activeIndex ? 'var(--itec-orange)' : 'var(--itec-dark-blue-40)',
                  }}
                />
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {/* Barra del modo presentación */}
      {presenting && (
        <div
          role="toolbar"
          aria-label="Controles de presentación"
          className="no-print fixed bottom-4 right-4 z-30 flex items-center gap-0.5 whitespace-nowrap rounded-full bg-itec-dark/95 p-1 pl-3.5 text-white shadow-[0_14px_32px_-12px_rgb(12_35_64/0.7)]"
        >
          <span className="pr-2 font-display text-sm font-bold tabular-nums" aria-live="polite">
            {activeIndex + 1} / {sections.length}
          </span>
          <button type="button" onClick={() => step(-1)} disabled={activeIndex === 0} aria-label="Sección anterior" className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-white/15 disabled:opacity-35">
            <ChevronUp size={20} strokeWidth={1.75} aria-hidden />
          </button>
          <button type="button" onClick={() => step(1)} disabled={activeIndex === sections.length - 1} aria-label="Sección siguiente" className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-white/15 disabled:opacity-35">
            <ChevronDown size={20} strokeWidth={1.75} aria-hidden />
          </button>
          <button type="button" onClick={onExit} aria-label="Salir del modo presentación" className="flex h-10 items-center gap-1.5 rounded-full bg-white/15 px-3 font-display text-sm font-bold hover:bg-white/25">
            <X size={16} strokeWidth={1.75} aria-hidden /> Salir
          </button>
        </div>
      )}
    </>
  )
}
