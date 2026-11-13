import { useState } from 'react'
import SectionLabel from './SectionLabel'
import { profile, socials } from '../data/projects'

const EMAIL = profile.email

const inputClass =
  'w-full h-12 px-4 rounded-sm bg-paper-raised dark:bg-night-raised border border-line dark:border-line-dark text-sm text-ink dark:text-night-ink placeholder:text-ink-soft dark:placeholder:text-night-muted focus:outline-none focus:border-clay focus:ring-2 focus:ring-clay/20 transition-colors'

export default function Contact({ onToast }) {
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget
    setSending(true)

    // Placeholder submission — wire this to your form endpoint or email service.
    setTimeout(() => {
      setSending(false)
      setSent(true)
      form.reset()
      onToast('Message sent successfully!')
      setTimeout(() => setSent(false), 6000)
    }, 900)
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      onToast('Email copied to clipboard!')
    } catch {
      onToast('Could not copy email.')
    }
  }

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-line dark:border-line-dark">
      <div className="max-w-page mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-12 items-start">
          <div className="lg:col-span-5 reveal">
            <SectionLabel index="05" className="mb-5">
              Contact
            </SectionLabel>

            <h2 className="text-[1.9rem] sm:text-4xl font-bold tracking-[-0.02em] leading-[1.15] text-ink dark:text-night-ink mb-5 max-w-[20ch]">
              Let's build something remarkable.
            </h2>
            <p className="text-ink-muted dark:text-night-muted leading-[1.7] mb-10 max-w-[52ch]">
              Have a project in mind, need a design consultation, or just want to say hello? Fill
              out the form or reach out directly.
            </p>

            <div className="border border-line dark:border-line-dark rounded-md divide-y divide-line dark:divide-line-dark">
              <div className="flex items-center gap-4 p-4">
                <i className="fa-regular fa-envelope text-ink-soft dark:text-night-muted w-5 text-center" />
                <div className="min-w-0 flex-1">
                  <p className="font-label text-[10px] uppercase tracking-[0.12em] text-ink-soft dark:text-night-muted mb-0.5">
                    Email
                  </p>
                  <p className="text-sm font-medium text-ink dark:text-night-ink truncate">
                    {EMAIL}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={copyEmail}
                  aria-label="Copy email address"
                  title="Copy email"
                  className="w-8 h-8 rounded-sm border border-line dark:border-line-dark flex items-center justify-center text-ink-muted dark:text-night-muted hover:border-ink hover:text-ink dark:hover:border-night-ink dark:hover:text-night-ink transition-colors"
                >
                  <i className="fa-regular fa-copy text-xs" />
                </button>
              </div>

              <div className="flex items-center gap-4 p-4">
                <i className="fa-solid fa-location-dot text-ink-soft dark:text-night-muted w-5 text-center" />
                <div>
                  <p className="font-label text-[10px] uppercase tracking-[0.12em] text-ink-soft dark:text-night-muted mb-0.5">
                    Location
                  </p>
                  <p className="text-sm font-medium text-ink dark:text-night-ink">
                    {profile.location} — open to remote
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <p className="font-label text-[11px] uppercase tracking-[0.14em] text-ink-soft dark:text-night-muted mb-4">
                Connect
              </p>
              <div className="flex items-center gap-2">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-9 h-9 rounded-sm border border-line dark:border-line-dark flex items-center justify-center text-ink-muted dark:text-night-muted hover:text-clay hover:border-clay dark:hover:text-clay-soft dark:hover:border-clay-soft transition-colors"
                  >
                    <i className={`${social.icon} text-sm`} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 reveal">
            <form
              onSubmit={handleSubmit}
              className="border border-line dark:border-line-dark rounded-md p-6 sm:p-8 space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-label text-[11px] uppercase tracking-[0.12em] text-ink-muted dark:text-night-muted mb-2"
                  >
                    Your name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your full name"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block font-label text-[11px] uppercase tracking-[0.12em] text-ink-muted dark:text-night-muted mb-2"
                  >
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block font-label text-[11px] uppercase tracking-[0.12em] text-ink-muted dark:text-night-muted mb-2"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="Project inquiry / collaboration"
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-label text-[11px] uppercase tracking-[0.12em] text-ink-muted dark:text-night-muted mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  placeholder="Tell me about your timeline, goals, and project details…"
                  className={`${inputClass} h-auto py-3 resize-none`}
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                <p className="font-mono text-[11px] text-ink-soft dark:text-night-muted">
                  Usually replies within 24 hours.
                </p>
                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center justify-center gap-2.5 h-12 px-7 rounded-sm bg-ink dark:bg-night-ink text-paper dark:text-ink text-sm font-semibold hover:bg-clay dark:hover:bg-clay-soft dark:hover:text-ink transition-colors disabled:opacity-70"
                >
                  {sending ? (
                    <>
                      <i className="fa-solid fa-circle-notch fa-spin text-xs" />
                      <span>Sending…</span>
                    </>
                  ) : (
                    <>
                      <span>Send message</span>
                      <i className="fa-solid fa-paper-plane text-[11px]" />
                    </>
                  )}
                </button>
              </div>

              {sent && (
                <div className="p-4 rounded-sm border border-line dark:border-line-dark text-sm flex items-start gap-3">
                  <i className="fa-solid fa-circle-check text-clay dark:text-clay-soft mt-0.5" />
                  <span className="text-ink dark:text-night-ink">
                    Thanks for reaching out! Your message has been sent and I'll get back to you
                    soon.
                  </span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
