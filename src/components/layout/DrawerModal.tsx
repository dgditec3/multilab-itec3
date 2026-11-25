import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { X } from 'lucide-react'

export interface DrawerContent {
  eyebrow?: string
  title: string
  /** Color de acento (variable CSS o hex) */
  accent?: string
  body: ReactNode
}

interface DrawerApi {
  open: (content: DrawerContent) => void
  close: () => void
}

const DrawerContext = createContext<DrawerApi | null>(null)

export function useDrawer(): DrawerApi {
  const ctx = useContext(DrawerContext)
  if (!ctx) throw new Error('useDrawer debe usarse dentro de <DrawerProvider>')
  return ctx
}

/**
 * Panel lateral (slide-over) construido sobre <dialog> nativo:
 * `showModal()` aporta top layer, foco contenido, página inerte, Esc y gesto "atrás".
 */
export function DrawerProvider({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDialogElement>(null)
  const bodyRef = useRef<HTMLDivElement>(null)
  const [content, setContent] = useState<DrawerContent | null>(null)

  const open = useCallback((c: DrawerContent) => {
    setContent(c)
    const dialog = ref.current
    if (dialog && !dialog.open) dialog.showModal()
    if (bodyRef.current) bodyRef.current.scrollTop = 0
  }, [])

  const close = useCallback(() => ref.current?.close(), [])

  // Respaldo de "click fuera para cerrar" donde <dialog closedby> no existe (Safari).
  useEffect(() => {
    const dialog = ref.current
    if (!dialog || 'closedBy' in HTMLDialogElement.prototype) return
    const outside = (e: PointerEvent) => {
      const r = dialog.getBoundingClientRect()
      return e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom
    }
    let pressedOutside = false
    const down = (e: PointerEvent) => (pressedOutside = outside(e))
    const up = (e: PointerEvent) => {
      if (pressedOutside && outside(e)) dialog.close()
    }
    dialog.addEventListener('pointerdown', down)
    dialog.addEventListener('pointerup', up)
    return () => {
      dialog.removeEventListener('pointerdown', down)
      dialog.removeEventListener('pointerup', up)
    }
  }, [])

  const api = useMemo(() => ({ open, close }), [open, close])
  const accent = content?.accent ?? 'var(--itec-dark-blue)'

  return (
    <DrawerContext.Provider value={api}>
      {children}
      <dialog
        ref={ref}
        className="drawer"
        aria-labelledby="drawer-title"
        {...({ closedby: 'any' } as Record<string, string>)}
      >
        <div className="flex h-full flex-col" style={{ ['--accent' as string]: accent }}>
          <header className="flex items-start justify-between gap-4 border-b border-itec-line px-6 pb-4 pt-6 md:px-8">
            <div>
              {content?.eyebrow && <p className="eyebrow">{content.eyebrow}</p>}
              <h1 id="drawer-title" className="mt-1 text-2xl md:text-[1.7rem]">
                {content?.title}
              </h1>
              <div className="mt-3 h-1.5 w-16 rounded-full" style={{ background: accent }} />
            </div>
            <button
              type="button"
              onClick={close}
              aria-label="Cerrar panel"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-itec-line text-itec-dark transition-colors hover:border-itec-dark hover:bg-itec-dark hover:text-white"
            >
              <X size={22} strokeWidth={1.75} aria-hidden />
            </button>
          </header>
          <div ref={bodyRef} className="flex-1 overflow-y-auto px-6 py-6 md:px-8">
            {content?.body}
          </div>
          <footer className="border-t border-itec-line px-6 py-3 text-xs text-itec-muted md:px-8">
            Presioná <kbd className="rounded border border-itec-line bg-itec-surface px-1.5 py-0.5 font-mono">Esc</kbd> para cerrar este panel.
          </footer>
        </div>
      </dialog>
    </DrawerContext.Provider>
  )
}

/* ---- Bloques reutilizables para el cuerpo de los paneles ---- */

export function DrawerList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((t) => (
        <li key={t} className="flex gap-3 text-[0.97rem] leading-snug">
          <span className="mt-[0.45rem] h-2 w-2 shrink-0 rounded-[3px]" style={{ background: 'var(--accent)' }} aria-hidden />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  )
}

export function DrawerBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mb-7 last:mb-0">
      <h2 className="mb-3 font-display text-sm font-bold uppercase tracking-[0.1em]" style={{ color: 'var(--accent, var(--itec-dark-blue))' }}>
        {title}
      </h2>
      {children}
    </section>
  )
}
