import { useState } from 'react'
import { Menu, Presentation, X } from 'lucide-react'
import { ItecLogo } from './ItecLogo'
import { sections } from '../../data/projectData'

interface Props {
  activeIndex: number
  presenting: boolean
  onTogglePresentation: () => void
}

export function Navbar({ activeIndex, presenting, onTogglePresentation }: Props) {
  const [menu, setMenu] = useState(false)

  return (
    <header
      data-site-nav
      className="no-print sticky top-0 z-40 border-b border-itec-line bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/80"
    >
      <div className="wrap flex h-16 items-center justify-between gap-3">
        <a href="#inicio" className="flex shrink-0 items-center gap-3" aria-label="MULTILAB ITEC 3 · ir al inicio">
          <ItecLogo className="h-7" />
          <span className="hidden border-l border-itec-line pl-3 font-display text-sm font-bold tracking-wide text-itec-dark 2xl:block">
            MULTILAB
          </span>
        </a>

        <nav aria-label="Secciones" className="hidden lg:block">
          <ul className="flex items-center gap-0.5">
            {sections.map((s, i) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  aria-current={i === activeIndex ? 'true' : undefined}
                  className={`whitespace-nowrap rounded-full px-2 py-1.5 font-display text-xs font-bold transition-colors xl:px-2.5 xl:text-[0.84rem] ${
                    i === activeIndex
                      ? 'bg-itec-dark text-white'
                      : s.id === 'expo-2027'
                        ? 'text-itec-blue hover:bg-itec-surface hover:text-itec-dark'
                        : 'text-itec-muted hover:text-itec-dark'
                  }`}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={onTogglePresentation}
            aria-pressed={presenting}
            className="btn btn-ghost shrink-0 whitespace-nowrap !px-3.5 !py-2 text-xs xl:text-sm"
          >
            <Presentation size={18} strokeWidth={1.75} aria-hidden />
            <span className="hidden xl:inline">{presenting ? 'Salir de presentación' : 'Modo presentación'}</span>
            <span className="xl:hidden">{presenting ? 'Salir' : 'Presentar'}</span>
          </button>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-itec-line text-itec-dark lg:hidden"
            aria-expanded={menu}
            aria-controls="mobile-menu"
            aria-label={menu ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setMenu((m) => !m)}
          >
            {menu ? <X size={20} strokeWidth={1.75} aria-hidden /> : <Menu size={20} strokeWidth={1.75} aria-hidden />}
          </button>
        </div>
      </div>

      {menu && (
        <nav id="mobile-menu" aria-label="Secciones" className="border-t border-itec-line bg-white lg:hidden">
          <ul className="wrap grid grid-cols-2 gap-1 py-3">
            {sections.map((s, i) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={() => setMenu(false)}
                  className={`block rounded-xl px-3 py-2.5 font-display text-sm font-bold ${
                    i === activeIndex ? 'bg-itec-dark text-white' : 'text-itec-dark hover:bg-itec-surface'
                  }`}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
