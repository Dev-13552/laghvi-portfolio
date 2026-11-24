import { education, training } from '../data/experience'
import Reveal from './Reveal'

function Timeline({ title, entries }) {
  return (
    <div>
      <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-muted">{title}</h3>
      <ol className="space-y-6 border-l border-line pl-6">
        {entries.map((e) => (
          <li key={`${e.org}-${e.role}`} className="relative">
            <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-paper" aria-hidden="true" />
            <p className="text-xs font-medium text-muted">{e.dates}</p>
            <h4 className="mt-0.5 font-medium">{e.role}</h4>
            <p className="text-sm text-accent">{e.org} <span className="text-muted">| {e.place}</span></p>
            {e.description && <p className="mt-2 text-sm leading-relaxed text-muted">{e.description}</p>}
          </li>
        ))}
      </ol>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="section border-t border-line">
      <Reveal>
        <p className="eyebrow">Experience &amp; Education</p>
        <h2 id="experience-title" className="section-title">Where I&apos;ve learned</h2>
      </Reveal>
      <div className="mt-10 grid gap-12 md:grid-cols-2">
        <Reveal><Timeline title="Education" entries={education} /></Reveal>
        <Reveal delay={0.08}><Timeline title="Internship & practical training" entries={training} /></Reveal>
      </div>
    </section>
  )
}
