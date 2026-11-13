import { useState } from 'react'
import SectionLabel from './SectionLabel'
import { profile, socials } from '../data/projects'

const highlights = [
  {
    icon: 'fa-solid fa-code',
    title: 'Full-stack development',
    body: 'React, Next.js and Supabase — the interface, plus the auth, database and deployment behind it.',
  },
  {
    icon: 'fa-solid fa-brain',
    title: 'Artificial intelligence',
    body: "Studying machine learning and data fundamentals as part of my BSc at SZABIST.",
  },
]

const facts = [
  { label: 'Education', value: profile.degree },
  { label: 'University', value: profile.university },
  { label: 'Focus', value: 'Web & AI' },
  { label: 'Based in', value: profile.location },
]

export default function About() {
  const [photoMissing, setPhotoMissing] = useState(false)

  return (
    <section id="about" className="py-20 md:py-28 border-t border-line dark:border-line-dark">
      <div className="max-w-page mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-12 items-start">
          <div className="lg:col-span-5 reveal">
            <div className="border border-line dark:border-line-dark rounded-md p-3 bg-paper-raised dark:bg-night-raised">
              <div className="aspect-square overflow-hidden rounded-sm bg-paper-sunken dark:bg-night">
                {photoMissing ? (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-3">
                    <span className="font-label text-4xl font-semibold tracking-[0.12em] text-ink dark:text-night-ink">
                      {profile.initials}
                    </span>
                    <span className="font-label text-[10px] uppercase tracking-[0.14em] text-ink-soft dark:text-night-muted">
                      {profile.name}
                    </span>
                  </div>
                ) : (
                  <img
                    src={profile.photo}
                    alt={profile.name}
                    onError={() => setPhotoMissing(true)}
                    className="w-full h-full object-cover object-[center_28%]"
                  />
                )}
              </div>
              <div className="mt-3 flex items-center justify-between gap-3 px-1">
                <div className="flex items-center gap-2.5">
                  <i className="fa-solid fa-graduation-cap text-clay dark:text-clay-soft text-sm" />
                  <div>
                    <p className="font-label text-[10px] uppercase tracking-[0.12em] text-ink-soft dark:text-night-muted">
                      Studying
                    </p>
                    <p className="text-sm font-semibold text-ink dark:text-night-ink leading-tight">
                      Artificial Intelligence
                    </p>
                  </div>
                </div>
                <span className="font-mono text-[11px] text-ink-soft dark:text-night-muted">
                  {profile.university}
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 reveal">
            <SectionLabel index="01" className="mb-5">
              About
            </SectionLabel>

            <h2 className="text-[1.9rem] sm:text-4xl font-bold tracking-[-0.02em] leading-[1.15] text-ink dark:text-night-ink mb-6 max-w-[22ch]">
              Building products that feel as good as they work.
            </h2>

            <div className="space-y-4 text-ink-muted dark:text-night-muted leading-[1.7] max-w-[66ch]">
              <p>
                I'm Sameer Shah, an Artificial Intelligence undergraduate at SZABIST with a strong
                pull toward full-stack web development. I like the part where a design decision and
                an engineering decision have to agree — that's where an interface starts to feel
                fast and obvious.
              </p>
              <p>
                Most recently I designed and shipped Samify, a music player with real-time karaoke
                lyrics, precise scrubbing and a cloud-synced library, all the way from the Supabase
                schema to the iOS wrapper. Getting there took me through O Levels and A Levels and
                into my bachelor's in AI, where the maths behind the features I build is finally
                catching up with the intuition.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px mt-10 bg-line dark:bg-line-dark border border-line dark:border-line-dark rounded-md overflow-hidden">
              {highlights.map((item) => (
                <div key={item.title} className="bg-paper-raised dark:bg-night-raised p-5">
                  <i className={`${item.icon} text-clay dark:text-clay-soft text-sm mb-3`} />
                  <h3 className="font-semibold text-ink dark:text-night-ink text-sm mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-ink-muted dark:text-night-muted">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>

            <dl className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-5 mt-9 pt-7 border-t border-line dark:border-line-dark">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="font-label text-[10px] uppercase tracking-[0.12em] text-ink-soft dark:text-night-muted mb-1.5">
                    {fact.label}
                  </dt>
                  <dd className="text-[13px] font-medium text-ink dark:text-night-ink leading-snug">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 h-11 px-5 rounded-sm border border-ink dark:border-night-ink text-ink dark:text-night-ink text-sm font-semibold hover:bg-ink hover:text-paper dark:hover:bg-night-ink dark:hover:text-ink transition-colors"
              >
                <i className="fa-regular fa-paper-plane text-[12px]" />
                Work with me
              </a>
              <a
                href={socials[0].href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 h-11 px-5 rounded-sm text-ink-muted dark:text-night-muted text-sm font-medium hover:text-clay dark:hover:text-clay-soft transition-colors"
              >
                <i className="fa-brands fa-github text-[13px]" />
                See my code
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
