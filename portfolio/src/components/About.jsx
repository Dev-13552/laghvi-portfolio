import { profile } from '../data/profile'
import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section border-t border-line">
      <Reveal>
        <p className="eyebrow">About</p>
        <h2 id="about-title" className="section-title">A little about me</h2>
      </Reveal>
      <div className="mt-8 grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <Reveal className="space-y-4 leading-relaxed text-muted">
          {profile.aboutParagraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Reveal>
        <Reveal delay={0.1}>
          <figure className="card !p-7">
            <figcaption className="eyebrow">Career objective</figcaption>
            <blockquote className="text-sm leading-relaxed text-ink">{profile.objective}</blockquote>
          </figure>
        </Reveal>
      </div>
    </section>
  )
}
