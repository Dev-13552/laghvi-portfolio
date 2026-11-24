import { useState } from 'react'
import { Download, Menu, X } from 'lucide-react'
import { profile } from '../data/profile'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Highlights', href: '#highlights' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="font-display text-lg font-semibold text-accent" onClick={close}>
          {profile.name}
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm text-muted transition hover:text-ink">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href={profile.resumeUrl} download="Laghvi_Singh_Resume.pdf" className="btn-primary hidden !py-2 sm:inline-flex">
            <Download size={16} aria-hidden="true" /> Download Resume
          </a>
          <button
            type="button"
            className="rounded-lg p-2 text-ink md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-paper md:hidden">
          <ul className="mx-auto flex max-w-5xl flex-col px-5 py-3">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={close} className="block py-3 text-base text-ink">
                  {l.label}
                </a>
              </li>
            ))}
            <li className="py-3">
              <a href={profile.resumeUrl} download="Laghvi_Singh_Resume.pdf" className="btn-primary w-full" onClick={close}>
                <Download size={16} aria-hidden="true" /> Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
