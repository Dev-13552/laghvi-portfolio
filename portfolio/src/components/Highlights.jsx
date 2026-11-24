import { highlights } from '../data/highlights'
import HighlightCard from './HighlightCard'
import Reveal from './Reveal'

export default function Highlights() {
  return (
    <section id="highlights" aria-labelledby="highlights-title" className="section border-t border-line">
      <Reveal>
        <p className="eyebrow">Highlights</p>
        <h2 id="highlights-title" className="section-title">Teaching practice &amp; achievements</h2>
        <p className="mt-3 max-w-2xl text-muted">
          Hands-on work, certified training and academic events from my time at Invertis University and in school.
        </p>
      </Reveal>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {highlights.map((item, i) => (
          <Reveal key={item.id} delay={(i % 2) * 0.06} className={item.featured ? 'md:col-span-2' : ''}>
            <HighlightCard item={item} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
