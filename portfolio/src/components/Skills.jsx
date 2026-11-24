import { GraduationCap, FlaskConical, Users, Languages, Laptop } from 'lucide-react'
import { skillGroups } from '../data/skills'
import Reveal from './Reveal'

const icons = { GraduationCap, FlaskConical, Users, Languages, Laptop }

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="section border-t border-line">
      <Reveal>
        <p className="eyebrow">Skills</p>
        <h2 id="skills-title" className="section-title">Core competencies</h2>
      </Reveal>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => {
          const Icon = icons[group.icon]
          return (
            <Reveal key={group.title} delay={i * 0.05}>
              <article className="card h-full">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-soft text-accent">
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <h3 className="font-medium">{group.title}</h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="tag">{item}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
