import { useEffect, useState } from 'react'

const SECTION_IDS = ['home', 'about', 'skills', 'projects', 'education', 'contact']

export function useScrollSpy() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      let current = ''

      SECTION_IDS.forEach((id) => {
        const section = document.getElementById(id)
        if (section && window.scrollY >= section.offsetTop - 120) {
          current = id
        }
      })

      setActiveSection(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return activeSection
}
