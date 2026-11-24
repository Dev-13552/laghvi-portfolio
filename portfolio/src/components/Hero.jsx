import { Mail, MapPin, GraduationCap, CalendarDays } from 'lucide-react'
import { Github, Linkedin } from './BrandIcons'
import { profile } from '../data/profile'

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="section !pt-16 sm:!pt-24">
      <div className="grid items-center gap-12 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="eyebrow">Hello, I&apos;m</p>
          <h1 id="hero-title" className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-3 text-lg font-medium text-accent">B.Sc. B.Ed. Student | Aspiring Educator</p>
          <p className="mt-5 max-w-xl leading-relaxed text-muted">{profile.heroSummary}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#highlights" className="btn-primary">View My Highlights</a>
            <a href="#contact" className="btn-secondary">Contact Me</a>
          </div>

          <ul className="mt-8 flex items-center gap-4 text-muted" aria-label="Profile links">
            <li>
              <a href={`mailto:${profile.email}`} aria-label="Email Laghvi" className="transition hover:text-accent">
                <Mail size={20} aria-hidden="true" />
              </a>
            </li>
            {profile.linkedin && (
              <li>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="transition hover:text-accent">
                  <Linkedin size={20} aria-hidden="true" />
                </a>
              </li>
            )}
            {profile.github && (
              <li>
                <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="transition hover:text-accent">
                  <Github size={20} aria-hidden="true" />
                </a>
              </li>
            )}
          </ul>
        </div>

        <aside aria-label="Quick facts" className="card !p-7">
          <p className="eyebrow">At a glance</p>
          <ul className="mt-4 space-y-4 text-sm">
            <li className="flex gap-3">
              <GraduationCap size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
              <span>B.Sc. B.Ed. (4-year integrated)<br /><span className="text-muted">Invertis University, Bareilly</span></span>
            </li>
            <li className="flex gap-3">
              <CalendarDays size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
              <span>Expected graduation<br /><span className="text-muted">June 2027</span></span>
            </li>
            <li className="flex gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
              <span>{profile.location}</span>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  )
}
