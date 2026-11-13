import { useCallback, useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import ProjectModal from './components/ProjectModal'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Toast from './components/Toast'
import { useTheme } from './hooks/useTheme'
import { useScrollSpy } from './hooks/useScrollSpy'
import { useReveal } from './hooks/useReveal'

export default function App() {
  const { isDark, toggleTheme } = useTheme()
  const activeSection = useScrollSpy()
  const [selectedProject, setSelectedProject] = useState(null)
  const [toast, setToast] = useState('')
  const toastTimer = useRef(null)

  useReveal()

  const showToast = useCallback((message) => {
    setToast(message)
    clearTimeout(toastTimer.current)
    toastTimer.current = setTimeout(() => setToast(''), 3000)
  }, [])

  useEffect(() => () => clearTimeout(toastTimer.current), [])

  return (
    <>
      <Navbar activeSection={activeSection} isDark={isDark} onToggleTheme={toggleTheme} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects onOpenProject={setSelectedProject} />
        <Education />
        <Contact onToast={showToast} />
      </main>

      <Footer />

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      <Toast message={toast} />
    </>
  )
}
