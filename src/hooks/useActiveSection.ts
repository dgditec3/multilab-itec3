import { useEffect, useState } from 'react'

/** Devuelve el índice de la sección que ocupa el centro del viewport. */
export function useActiveSection(ids: string[]): number {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => !!el)
    if (!els.length) return
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const i = ids.indexOf(entry.target.id)
            if (i >= 0) setActive(i)
          }
        }
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids])

  return active
}
