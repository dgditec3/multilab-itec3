import { useRef, type CSSProperties, type KeyboardEvent, type ReactNode } from 'react'

export interface TabItem {
  id: string
  label: string
  content?: ReactNode
  style?: CSSProperties
}

interface Props {
  label: string
  /** Prefijo para ids de pestaña y panel (aria-controls) */
  idPrefix: string
  items: TabItem[]
  value: string
  onChange: (id: string) => void
  className?: string
  tabClassName: (selected: boolean) => string
}

/** Pestañas accesibles (WAI-ARIA tabs): flechas ← → Inicio/Fin con foco itinerante. */
export function TabList({ label, idPrefix, items, value, onChange, className = '', tabClassName }: Props) {
  const refs = useRef<Record<string, HTMLButtonElement | null>>({})

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const i = items.findIndex((t) => t.id === value)
    let next = -1
    if (e.key === 'ArrowRight') next = (i + 1) % items.length
    else if (e.key === 'ArrowLeft') next = (i - 1 + items.length) % items.length
    else if (e.key === 'Home') next = 0
    else if (e.key === 'End') next = items.length - 1
    if (next < 0) return
    e.preventDefault()
    const id = items[next].id
    onChange(id)
    refs.current[id]?.focus()
  }

  return (
    <div role="tablist" aria-label={label} className={className} onKeyDown={onKeyDown}>
      {items.map((t) => {
        const selected = t.id === value
        return (
          <button
            key={t.id}
            ref={(el) => {
              refs.current[t.id] = el
            }}
            role="tab"
            type="button"
            id={`${idPrefix}-tab-${t.id}`}
            aria-selected={selected}
            aria-controls={`${idPrefix}-panel-${t.id}`}
            tabIndex={selected ? 0 : -1}
            onClick={() => onChange(t.id)}
            className={tabClassName(selected)}
            style={t.style}
          >
            {t.content ?? t.label}
          </button>
        )
      })}
    </div>
  )
}
