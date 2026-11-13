import { useEffect, useState } from 'react'
import { profile } from '../data/projects'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar({ activeSection, isDark, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)

  // Close the drawer when the viewport grows past the md breakpoint.
  useEffect(() => {
    const query = window.matchMedia('(min-width: 768px)')
    const onChange = () => query.matches && setMenuOpen(false)
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-paper dark:bg-night border-b border-line dark:border-line-dark">
      <div className="max-w-page mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#home" className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-sm bg-ink dark:bg-night-ink text-paper dark:text-ink flex items-center justify-center font-label font-semibold text-sm tracking-wide">
              {profile.initials}
            </span>
            <span className="font-semibold tracking-tight text-ink dark:text-night-ink">
              {profile.firstName}<span className="text-clay dark:text-clay-soft">.dev</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-9">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link text-sm ${activeSection === link.href.slice(1) ? 'is-active' : ''}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              className="w-9 h-9 rounded-sm border border-line dark:border-line-dark text-ink dark:text-night-ink flex items-center justify-center hover:border-ink dark:hover:border-night-ink transition-colors"
            >
              <i className={isDark ? 'fa-solid fa-sun text-[13px]' : 'fa-solid fa-moon text-[13px]'} />
            </button>

            <a
              href="#contact"
              className="hidden sm:inline-flex items-center justify-center h-9 px-4 rounded-sm bg-ink dark:bg-night-ink text-paper dark:text-ink text-sm font-semibold hover:bg-clay dark:hover:bg-clay-soft dark:hover:text-ink transition-colors"
            >
              Let's talk
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
              className="md:hidden w-9 h-9 rounded-sm border border-line dark:border-line-dark text-ink dark:text-night-ink flex items-center justify-center"
            >
              <i className={menuOpen ? 'fa-solid fa-xmark text-[13px]' : 'fa-solid fa-bars text-[13px]'} />
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-paper dark:bg-night border-t border-line dark:border-line-dark px-6 py-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-sm font-medium text-ink dark:text-night-ink border-b border-line dark:border-line-dark last:border-0 last:text-clay dark:last:text-clay-soft last:font-semibold"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
