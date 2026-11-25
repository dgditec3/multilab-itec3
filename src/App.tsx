import { useCallback, useEffect, useMemo, useState } from 'react'
import { MotionConfig } from 'framer-motion'
import { DrawerProvider } from './components/layout/DrawerModal'
import { Navbar } from './components/layout/Navbar'
import { PresentationControls } from './components/layout/PresentationControls'
import { HeroSection } from './components/sections/HeroSection'
import { ContextSection } from './components/sections/ContextSection'
import { PillarsSection } from './components/sections/PillarsSection'
import { CareersSection } from './components/sections/CareersSection'
import { ExpoSection } from './components/sections/ExpoSection'
import { EcosystemSection } from './components/sections/EcosystemSection'
import { GovernanceSection } from './components/sections/GovernanceSection'
import { RoadmapSection } from './components/sections/RoadmapSection'
import { useActiveSection } from './hooks/useActiveSection'
import { sections, type CareerId } from './data/projectData'

export default function App() {
  const ids = useMemo(() => sections.map((s) => s.id), [])
  const activeIndex = useActiveSection(ids)
  const [presenting, setPresenting] = useState(false)
  const [career, setCareer] = useState<CareerId>('prog')

  const exitPresentation = useCallback(() => {
    setPresenting(false)
    if (document.fullscreenElement) void document.exitFullscreen().catch(() => undefined)
  }, [])

  const togglePresentation = useCallback(() => {
    if (presenting) return exitPresentation()
    setPresenting(true)
    void document.documentElement.requestFullscreen?.().catch(() => undefined)
  }, [presenting, exitPresentation])

  useEffect(() => {
    document.documentElement.classList.toggle('presenting', presenting)
    return () => document.documentElement.classList.remove('presenting')
  }, [presenting])

  // Desde el Hero: elegir una carrera y llevar la vista a su panel.
  const openCareer = useCallback((id: CareerId) => {
    setCareer(id)
    document.getElementById('tecnicaturas')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  return (
    <MotionConfig reducedMotion="user">
      <DrawerProvider>
        <a
          href="#momento"
          className="no-print sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-itec-dark focus:px-4 focus:py-2 focus:text-white"
        >
          Saltar al contenido
        </a>
        <Navbar activeIndex={activeIndex} presenting={presenting} onTogglePresentation={togglePresentation} />
        <PresentationControls activeIndex={activeIndex} presenting={presenting} onExit={exitPresentation} />
        <main>
          <HeroSection onOpenCareer={openCareer} />
          <ContextSection />
          <PillarsSection />
          <CareersSection selected={career} onSelect={setCareer} />
          <ExpoSection />
          <EcosystemSection />
          <GovernanceSection />
          <RoadmapSection />
        </main>
      </DrawerProvider>
    </MotionConfig>
  )
}
