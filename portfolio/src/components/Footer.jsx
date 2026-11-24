import { Mail } from 'lucide-react'
import { Github, Linkedin } from './BrandIcons'
import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-muted sm:flex-row sm:px-8">
        <p>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <ul className="flex items-center gap-4" aria-label="Footer links">
          <li>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-accent">
              <Mail size={18} aria-hidden="true" />
            </a>
          </li>
          {profile.linkedin && (
            <li>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-accent">
                <Linkedin size={18} aria-hidden="true" />
              </a>
            </li>
          )}
          {profile.github && (
            <li>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-accent">
                <Github size={18} aria-hidden="true" />
              </a>
            </li>
          )}
        </ul>
        <p>Built with React</p>
      </div>
    </footer>
  )
}
