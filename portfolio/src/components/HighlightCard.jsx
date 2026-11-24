import { ImagePlus, ExternalLink } from 'lucide-react'

export default function HighlightCard({ item }) {
  const { title, context, date, description, points, tags, image, certificateUrl, featured } = item

  return (
    <article className={`card flex h-full flex-col ${featured ? 'md:col-span-2' : ''}`}>
      {featured && (
        <div className="mb-5">
          {image ? (
            <img src={image} alt={`${title} model`} loading="lazy" className="h-56 w-full rounded-lg object-cover" />
          ) : (
            <div
              role="img"
              aria-label="Placeholder for a photo of the teaching-aid model"
              className="flex h-44 flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-line bg-accent-soft/50 text-center text-sm text-muted"
            >
              <ImagePlus size={22} aria-hidden="true" />
              <span>Photo of your teaching-aid model goes here</span>
            </div>
          )}
        </div>
      )}

      <p className="text-xs font-medium uppercase tracking-wider text-muted">{date}</p>
      <h3 className="mt-1 font-display text-xl font-semibold leading-snug">{title}</h3>
      <p className="mt-1 text-sm text-accent">{context}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>

      {points.length > 0 && (
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted">
          {points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      )}

      <ul className="mt-auto flex flex-wrap gap-2 pt-5" aria-label="Skills demonstrated">
        {tags.map((t) => (
          <li key={t} className="tag">{t}</li>
        ))}
      </ul>

      {certificateUrl && (
        <a
          href={certificateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
        >
          View certificate <ExternalLink size={14} aria-hidden="true" />
        </a>
      )}
    </article>
  )
}
