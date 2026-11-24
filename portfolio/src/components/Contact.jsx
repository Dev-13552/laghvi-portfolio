import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { Github, Linkedin } from './BrandIcons'
import { profile } from '../data/profile'
import Reveal from './Reveal'

// Optional: set VITE_FORMSPREE_ID in a .env file to send messages straight to your inbox.
// Without it, the form opens the visitor's email app with the message pre-filled.
const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID

const fieldClass =
  'mt-1.5 w-full rounded-lg border border-line bg-surface px-3.5 py-2.5 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20'

function Field({ label, id, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium">{label}</label>
      {children}
      {error && <p id={`${id}-error`} role="alert" className="mt-1 text-xs text-red-700">{error}</p>}
    </div>
  )
}

export default function Contact() {
  const [status, setStatus] = useState(null) // { type: 'success' | 'info' | 'error', text }
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues: { name: '', email: '', subject: '', message: '' } })

  const onSubmit = async (data) => {
    setStatus(null)
    if (FORMSPREE_ID) {
      try {
        const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(data),
        })
        if (!res.ok) throw new Error('Request failed')
        setStatus({ type: 'success', text: 'Thank you. Your message has been sent.' })
        reset()
      } catch {
        setStatus({
          type: 'error',
          text: `Something went wrong and your message was not sent. Please email me directly at ${profile.email}.`,
        })
      }
      return
    }

    const body = `${data.message}\n\nFrom: ${data.name} (${data.email})`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(body)}`
    setStatus({
      type: 'info',
      text: 'Your email app should now open with this message ready. It is only sent once you press Send there. If nothing opened, please write to me at the address on the left.',
    })
  }

  const statusStyle = {
    success: 'border-accent/30 bg-accent-soft text-accent',
    info: 'border-line bg-surface text-ink',
    error: 'border-red-200 bg-red-50 text-red-800',
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="section border-t border-line">
      <Reveal>
        <p className="eyebrow">Contact</p>
        <h2 id="contact-title" className="section-title">Let&apos;s connect</h2>
        <p className="mt-3 max-w-2xl text-muted">
          I am open to teaching opportunities, school placements and conversations about education. Write to me and I will reply as soon as I can.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-10 md:grid-cols-[1fr_1.3fr]">
        <Reveal>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-accent" aria-hidden="true" />
              <a href={`mailto:${profile.email}`} className="break-all hover:underline">{profile.email}</a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-accent" aria-hidden="true" />
              <a href={profile.phoneHref} className="hover:underline">{profile.phone}</a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={18} className="text-accent" aria-hidden="true" />
              <span>{profile.location}</span>
            </li>
            {profile.linkedin && (
              <li className="flex items-center gap-3">
                <Linkedin size={18} className="text-accent" aria-hidden="true" />
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
              </li>
            )}
            {profile.github && (
              <li className="flex items-center gap-3">
                <Github size={18} className="text-accent" aria-hidden="true" />
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
              </li>
            )}
          </ul>
        </Reveal>

        <Reveal delay={0.08}>
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="card space-y-4 !p-6 hover:!translate-y-0">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" id="name" error={errors.name?.message}>
                <input
                  id="name"
                  type="text"
                  autoComplete="name"
                  className={fieldClass}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  {...register('name', { required: 'Please enter your name.' })}
                />
              </Field>
              <Field label="Email" id="email" error={errors.email?.message}>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  className={fieldClass}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  {...register('email', {
                    required: 'Please enter your email.',
                    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Please enter a valid email address.' },
                  })}
                />
              </Field>
            </div>
            <Field label="Subject" id="subject" error={errors.subject?.message}>
              <input
                id="subject"
                type="text"
                className={fieldClass}
                aria-invalid={!!errors.subject}
                aria-describedby={errors.subject ? 'subject-error' : undefined}
                {...register('subject', { required: 'Please add a subject.' })}
              />
            </Field>
            <Field label="Message" id="message" error={errors.message?.message}>
              <textarea
                id="message"
                rows={5}
                className={fieldClass}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
                {...register('message', {
                  required: 'Please write a message.',
                  minLength: { value: 10, message: 'Message should be at least 10 characters.' },
                })}
              />
            </Field>

            <button type="submit" disabled={isSubmitting} className="btn-primary disabled:opacity-60">
              <Send size={16} aria-hidden="true" /> {isSubmitting ? 'Sending...' : FORMSPREE_ID ? 'Send message' : 'Compose email'}
            </button>

            {status && (
              <p role="status" className={`rounded-lg border px-4 py-3 text-sm ${statusStyle[status.type]}`}>
                {status.text}
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  )
}
