import { useState, useEffect } from 'react'

// ── Icons ─────────────────────────────────────────────────────────────────────

const WhatsAppIcon = () => (
  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.124 1.532 5.857L0 24l6.335-1.611A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.032-1.386l-.36-.214-3.733.95.988-3.61-.236-.371A9.818 9.818 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z"/>
  </svg>
)

const GitHubIcon = () => (
  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
)

const MailIcon = () => (
  <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const ArrowIcon = () => (
  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
)

const ExternalIcon = () => (
  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
)

// ── Data ──────────────────────────────────────────────────────────────────────

const SOLUTIONS = [
  {
    name: 'Dzeline Shop',
    tagline: 'Offline-first POS for Kenyan supermarkets',
    description:
      'A full point-of-sale system that works without internet — every sale is saved locally and syncs when back online. Supports M-Pesa STK Push, Pochi la Biashara, thermal receipt printing, KRA eTIMS, AI invoice scanning, and multi-staff PIN login. Runs on any Android phone.',
    tags: ['React PWA', 'FastAPI', 'SQLAlchemy', 'Dexie.js', 'M-Pesa', 'KRA eTIMS'],
    liveUrl: 'https://dzeline.online',
    quoteHref: '#book',
    developerHref: '#experience',
    status: 'Live',
    featured: true,
  },
]

const SERVICES = [
  {
    emoji: '🖥️',
    title: 'Point of Sale Systems',
    desc: 'Offline-first POS built for Kenyan retailers — M-Pesa, thermal printing, KRA eTIMS ready. Works on any Android device with no expensive hardware.',
  },
  {
    emoji: '📡',
    title: 'IoT & Embedded Systems',
    desc: 'Arduino and Raspberry Pi solutions with sensor integration, data logging, and remote monitoring. Designed for real-world Kenyan environments.',
  },
  {
    emoji: '📱',
    title: 'Mobile-First Web Apps',
    desc: 'Progressive Web Apps and Android-optimised applications built with offline capabilities, fast load times, and intuitive touch interfaces.',
  },
  {
    emoji: '🏗️',
    title: 'IT Infrastructure',
    desc: 'Network configuration (routers, switches, servers), VMware virtualisation, and Microsoft Azure cloud setup and management.',
  },
  {
    emoji: '🗄️',
    title: 'ERP & Business Software',
    desc: 'Implementation and support for SAGE Cloud, ERPs, and custom database-backed tools tailored to your business workflows.',
  },
]

const EXPERIENCE = [
  {
    company: 'Geothermal Development Company (GDC)',
    role: 'ICT Attaché',
    period: 'Jun 2023 – Sep 2023',
    location: 'Nakuru, Kenya',
    points: [
      'Managed daily IT infrastructure ensuring limited downtime across company operations.',
      'Configured network infrastructure including routers, switches, and servers.',
      'Led a cross-functional team of attachees across diverse technical areas.',
    ],
  },
  {
    company: "James Finlay's Company",
    role: 'IT Attaché',
    period: 'May 2022 – Aug 2022',
    location: 'Kericho, Kenya',
    points: [
      'Participated in custom in-house software design and development projects.',
      'Enhanced communication efficiency by 30% via advanced project management tooling.',
      'Increased project completion rate by 25% through full lifecycle management.',
    ],
  },
  {
    company: 'BlueBridge Technologies',
    role: 'Junior Software Developer',
    period: 'Dec 2021 – Apr 2022',
    location: 'Nairobi, Kenya',
    points: [
      'Contributed to POS system development — backend inventory management systems.',
      'Reduced project delivery timeline by 10% through effective IT project management.',
      'Improved stakeholder satisfaction by 20% through close collaboration with end-users.',
    ],
  },
]

const SKILLS = [
  { group: 'Languages', items: ['Python', 'Java', 'SQL / SQLite', 'HTML5', 'JavaScript', 'Bash'] },
  { group: 'Web & API', items: ['React', 'FastAPI', 'SQLAlchemy', 'Dexie.js', 'Vite', 'PWA'] },
  { group: 'IoT & Electronics', items: ['Arduino', 'Raspberry Pi', 'Sensory Integration', 'Robotics'] },
  { group: 'Mobile & Design', items: ['Android Studio', 'Figma', 'Mobile-First Design'] },
  { group: 'Cloud & Infra', items: ['Microsoft Azure', 'VMware', 'Server Management', 'Network Config'] },
  { group: 'Business Tools', items: ['SAGE Cloud', 'ERPs', 'Domain Management', 'Microsoft Office'] },
]

// ── Section wrapper ───────────────────────────────────────────────────────────

function Section({ id, children, className = '' }) {
  return (
    <section id={id} className={`py-20 px-6 ${className}`}>
      <div className="max-w-5xl mx-auto">{children}</div>
    </section>
  )
}

function SectionHeading({ label, title, sub }) {
  return (
    <div className="mb-12">
      <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">{label}</p>
      <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">{title}</h2>
      {sub && <p className="text-gray-500 text-base max-w-xl">{sub}</p>}
    </div>
  )
}

// ── Nav ───────────────────────────────────────────────────────────────────────

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'Services',  href: '#services' },
    { label: 'Experience', href: '#experience' },
    { label: 'Get a Price', href: '#book' },
    { label: 'Contact',   href: '#contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-navy/95 backdrop-blur-sm border-b border-border shadow-xl' : 'bg-transparent'}`}>
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-black text-xl tracking-tight">
          <span className="text-primary">D</span><span className="text-white">K</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-gray-400 hover:text-white transition font-medium">
              {l.label}
            </a>
          ))}
        </div>

        {/* GitHub button */}
        <a
          href="https://github.com/Dzeline"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full border border-border text-gray-300 hover:border-white/40 hover:text-white transition"
        >
          <GitHubIcon /> GitHub
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-8 h-8 flex flex-col justify-center gap-1.5"
          aria-label="Toggle menu"
        >
          <span className={`h-0.5 bg-gray-300 transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`h-0.5 bg-gray-300 transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 bg-gray-300 transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-surface border-b border-border px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="text-sm text-gray-300 hover:text-white font-medium">
              {l.label}
            </a>
          ))}
          <a
            href="https://github.com/Dzeline"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-300 hover:text-white font-medium"
          >
            <GitHubIcon /> GitHub
          </a>
        </div>
      )}
    </nav>
  )
}

// ── Hero ──────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-navy px-6 pt-16">
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid pointer-events-none" />
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/8 blur-[140px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto w-full">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-bold mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-slow" />
          Available for projects · Nairobi, Kenya
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-[1.05] tracking-tight mb-4">
          Deline<br />
          <span className="text-primary">Kipchirchir</span>
        </h1>

        {/* Title */}
        <p className="text-lg sm:text-xl text-gray-400 font-semibold mb-4">
          Software Engineer · IoT & Mobile Development
        </p>

        {/* Tagline */}
        <p className="text-base text-gray-500 max-w-lg leading-relaxed mb-10">
          I build practical digital tools for Kenyan businesses — offline-first POS systems,
          IoT solutions, and mobile-first web applications that work in the real world.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3">
          <a
            href="https://wa.me/254708174289?text=Hi%20Deline%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-green-500 hover:bg-green-400 text-white font-bold text-sm transition shadow-lg shadow-green-500/20"
          >
            <WhatsAppIcon /> Chat on WhatsApp
          </a>
          <a
            href="https://github.com/Dzeline"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3.5 rounded-full border border-border text-gray-300 hover:border-white/40 hover:text-white font-semibold text-sm transition"
          >
            <GitHubIcon /> View GitHub
          </a>
          <a
            href="mailto:kipchirchirdeline@gmail.com"
            className="flex items-center gap-2 px-6 py-3.5 rounded-full border border-border text-gray-300 hover:border-white/40 hover:text-white font-semibold text-sm transition"
          >
            <MailIcon /> Email Me
          </a>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-0 hidden md:flex items-center gap-2 text-xs text-gray-600">
          <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
          Scroll to explore
        </div>
      </div>
    </section>
  )
}

// ── Solutions ─────────────────────────────────────────────────────────────────

function Solutions() {
  return (
    <Section id="solutions" className="bg-surface">
      <SectionHeading
        label="What I've Built"
        title="Solutions"
        sub="Production software running in Kenyan businesses today."
      />

      <div className="space-y-6">
        {SOLUTIONS.map((s) => (
          <div
            key={s.name}
            className="group relative rounded-2xl border border-border bg-card p-6 sm:p-8 hover:border-primary/40 transition-all duration-300"
          >
            {/* Status badge */}
            <div className="flex items-start justify-between gap-4 mb-4 flex-wrap">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold px-2 py-0.5 rounded-full bg-green-500/15 text-green-400 border border-green-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400" /> {s.status}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white">{s.name}</h3>
                <p className="text-primary font-semibold text-sm mt-0.5">{s.tagline}</p>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-5">{s.description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {s.tags.map((t) => (
                <span key={t} className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                  {t}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-3">
              {s.liveUrl && (
                <a
                  href={s.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-white text-sm font-bold hover:bg-primary-dark transition shadow-md shadow-primary/20"
                >
                  Visit dzeline.online <ExternalIcon />
                </a>
              )}
              {s.quoteHref && (
                <a
                  href={s.quoteHref}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-primary/40 text-primary text-sm font-bold hover:bg-primary/10 transition"
                >
                  Upgrade to Pro <ArrowIcon />
                </a>
              )}
              {s.developerHref && (
                <a
                  href={s.developerHref}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-border text-gray-300 text-sm font-semibold hover:border-white/40 hover:text-white transition"
                >
                  Meet the Developer
                </a>
              )}
            </div>
          </div>
        ))}

        {/* More coming soon */}
        <div className="rounded-2xl border border-dashed border-border p-6 sm:p-8 text-center">
          <p className="text-gray-600 text-sm font-medium">More projects coming soon</p>
          <p className="text-gray-700 text-xs mt-1">
            View all repositories on{' '}
            <a href="https://github.com/Dzeline" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              github.com/Dzeline
            </a>
          </p>
        </div>
      </div>
    </Section>
  )
}

// ── Services ──────────────────────────────────────────────────────────────────

function Services() {
  return (
    <Section id="services" className="bg-navy">
      <SectionHeading
        label="What I Offer"
        title="Services"
        sub="End-to-end development across software, hardware, and infrastructure."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {SERVICES.map((s) => (
          <div
            key={s.title}
            className="rounded-2xl border border-border bg-card p-6 hover:border-primary/30 transition-all duration-300 group"
          >
            <span className="text-3xl mb-4 block">{s.emoji}</span>
            <h3 className="text-base font-bold text-white mb-2 group-hover:text-primary transition">{s.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

// ── Experience ────────────────────────────────────────────────────────────────

function Experience() {
  return (
    <Section id="experience" className="bg-surface">
      <SectionHeading
        label="Where I've Worked"
        title="Experience"
      />

      {/* Education callout */}
      <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 sm:p-5 mb-10">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 text-lg">🎓</div>
        <div>
          <p className="text-sm font-bold text-white">Bachelor of Science in Software Engineering</p>
          <p className="text-xs text-gray-500">Multimedia University · Ongata Rongai, Kenya · 2020 – 2025</p>
        </div>
      </div>

      {/* Timeline */}
      <div className="space-y-8">
        {EXPERIENCE.map((e, i) => (
          <div key={i} className="relative pl-6 border-l border-border">
            {/* Dot */}
            <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary border-2 border-surface" />

            <div className="rounded-2xl border border-border bg-card p-5 sm:p-6 hover:border-primary/30 transition">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-base font-bold text-white">{e.company}</h3>
                  <p className="text-primary text-sm font-semibold">{e.role}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500 font-medium">{e.period}</p>
                  <p className="text-xs text-gray-600">{e.location}</p>
                </div>
              </div>
              <ul className="space-y-1.5">
                {e.points.map((p, j) => (
                  <li key={j} className="flex gap-2 text-sm text-gray-400">
                    <span className="text-primary mt-1 shrink-0">·</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

// ── Skills ────────────────────────────────────────────────────────────────────

function Skills() {
  return (
    <Section id="skills" className="bg-navy">
      <SectionHeading label="Tech Stack" title="Skills" />
      <div className="space-y-6">
        {SKILLS.map((group) => (
          <div key={group.group}>
            <p className="text-xs font-bold text-gray-600 uppercase tracking-widest mb-3">{group.group}</p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="text-sm font-medium px-3 py-1.5 rounded-full bg-card border border-border text-gray-300 hover:border-primary/40 hover:text-primary transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

// ── Book ──────────────────────────────────────────────────────────────────────

// The Formspree form endpoint leads are posted to, set in .env.production. While unset
// (e.g. `npm run dev`), the form hands the same answers to WhatsApp instead.
const LEADS_URL = import.meta.env.VITE_LEADS_URL
const WHATSAPP_URL = 'https://wa.me/254708174289?text='

const PRO_BENEFITS = [
  { title: 'Every till in sync', desc: 'Stock and sales shared across all your devices whenever they connect.' },
  { title: 'Cloud backup', desc: 'Lose a phone, not your records. History follows the shop.' },
  { title: 'M-Pesa STK Push', desc: "The payment prompt goes straight to your customer's phone." },
]

const BRANCH_OPTIONS = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3+', label: '3 or more' },
]

const DEVICE_OPTIONS = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3-4', label: '3–4' },
  { value: '5+', label: '5 or more' },
]

const USING_OPTIONS = [
  { value: 'yes', label: 'Yes' },
  { value: 'no', label: 'Not yet' },
]

// The POS links here from two buttons:
//   Upgrade to Pro  /?from=pos&shop=<name>#book
//   Renew           /?from=pos&renew=1&shop=<name>#book  (subscription expired)
// POS shops are already using it, so that question is answered for them and hidden.
const entryParams = () => new URLSearchParams(window.location.search)

function initialLead() {
  const params = entryParams()
  const fromPos = params.get('from') === 'pos'
  return {
    name: '', whatsapp: '', shopName: (params.get('shop') || '').slice(0, 80), town: '', staff: '',
    branches: '', devices: '', alreadyUsing: fromPos ? 'yes' : '', reason: '', gotcha: '',
    source: fromPos ? 'pos' : 'site',
  }
}

const isRenewal = () => entryParams().get('renew') === '1'

const isMultiBranch = (f) => f.branches !== '' && f.branches !== '1'

// Accepts 07.., 01.., 254.. and +254.. with any spacing; returns +254XXXXXXXXX or null.
function normalizePhone(raw) {
  const m = raw.replace(/[\s()-]/g, '').match(/^(?:\+?254|0)([17]\d{8})$/)
  return m ? `+254${m[1]}` : null
}

function validateLead(f) {
  const errors = {}
  if (!f.name.trim()) errors.name = 'Your name, so I know who I am talking to.'
  if (!normalizePhone(f.whatsapp)) errors.whatsapp = 'A Kenyan number, e.g. 0712 345 678.'
  if (!f.shopName.trim()) errors.shopName = 'The name customers know the shop by.'
  if (!f.town.trim()) errors.town = 'Town or estate is enough.'
  if (!/^\d{1,3}$/.test(f.staff) || Number(f.staff) < 1) errors.staff = 'A number — count yourself too.'
  if (!f.branches) errors.branches = 'Pick one.'
  if (!f.alreadyUsing) errors.alreadyUsing = 'Pick one.'
  return errors
}

// The fields Formspree records and emails. `_gotcha` is its honeypot: people never
// see it, and Formspree silently drops any submission where it is filled.
function toLead(f) {
  const shop = f.shopName.trim()
  const town = f.town.trim()
  return {
    _subject: `Pro lead: ${shop}, ${town}${isMultiBranch(f) ? ' (multi-branch, talk first)' : ''}`,
    name: f.name.trim(),
    whatsapp: normalizePhone(f.whatsapp),
    shop_name: shop,
    town,
    staff_logins: f.staff,
    branches: f.branches,
    devices_per_branch: f.devices,
    already_using: f.alreadyUsing === 'yes' ? 'Yes' : 'Not yet',
    reason: f.reason.trim(),
    source: f.source,
    _gotcha: f.gotcha,
  }
}

function whatsappLink(lead) {
  const text = [
    lead.branches === '1'
      ? "Hi Deline, I'd like a price for Dzeline Shop Pro."
      : "Hi Deline, I'd like to talk about Dzeline Shop Pro for my branches.",
    '',
    `Name: ${lead.name}`,
    `WhatsApp: ${lead.whatsapp}`,
    `Shop: ${lead.shop_name}, ${lead.town}`,
    `Staff logins: ${lead.staff_logins}`,
    `Branches: ${lead.branches}`,
    lead.devices_per_branch ? `Tills per branch: ${lead.devices_per_branch}` : null,
    `Already using Dzeline Shop: ${lead.already_using}`,
    lead.reason ? `Why now: ${lead.reason}` : null,
  ].filter((line) => line !== null).join('\n')
  return WHATSAPP_URL + encodeURIComponent(text)
}

function renewLink(shop) {
  return WHATSAPP_URL + encodeURIComponent(`Hi Deline, I'd like to renew Dzeline Shop Pro${shop ? ` for ${shop}` : ''}.`)
}

const Optional = () => <span className="font-normal text-gray-600">(optional)</span>

const inputClass = (error) =>
  `w-full rounded-xl bg-navy border px-4 py-3 text-base text-white placeholder-gray-600 focus:outline-none focus:border-primary transition ${error ? 'border-red-500/60' : 'border-border'}`

function FieldMessage({ id, error, hint }) {
  if (error) return <p id={id} className="text-xs text-red-400 mt-1.5">{error}</p>
  if (hint) return <p id={id} className="text-xs text-gray-600 mt-1.5">{hint}</p>
  return null
}

function Field({ name, label, hint, error, children }) {
  return (
    <div>
      <label htmlFor={`book-${name}`} className="block text-sm font-semibold text-white mb-1.5">{label}</label>
      {children}
      <FieldMessage id={`book-${name}-msg`} error={error} hint={hint} />
    </div>
  )
}

function Choices({ name, legend, hint, error, options, value, onChange }) {
  return (
    <fieldset aria-describedby={`book-${name}-msg`}>
      <legend className="block text-sm font-semibold text-white mb-1.5">{legend}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((o, i) => (
          <label key={o.value} className="cursor-pointer">
            <input
              type="radio"
              id={i === 0 ? `book-${name}` : undefined}
              name={name}
              value={o.value}
              checked={value === o.value}
              onChange={() => onChange(o.value)}
              className="peer sr-only"
            />
            <span className={`block min-w-[3rem] text-center px-4 py-2.5 rounded-full border bg-navy text-sm font-semibold text-gray-300 transition hover:border-white/40 peer-checked:bg-primary peer-checked:border-primary peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-primary/60 ${error ? 'border-red-500/60' : 'border-border'}`}>
              {o.label}
            </span>
          </label>
        ))}
      </div>
      <FieldMessage id={`book-${name}-msg`} error={error} hint={hint} />
    </fieldset>
  )
}

function Book() {
  const [form, setForm] = useState(initialLead)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | handed-off | failed
  const [renewing, setRenewing] = useState(isRenewal)

  const multiBranch = isMultiBranch(form)
  const shop = form.shopName.trim()

  const update = (key, value) => {
    setForm((f) => ({ ...f, [key]: value }))
    setErrors((e) => ({ ...e, [key]: undefined }))
  }

  const text = (key) => ({
    id: `book-${key}`,
    value: form[key],
    onChange: (e) => update(key, e.target.value),
    'aria-invalid': !!errors[key],
    'aria-describedby': `book-${key}-msg`,
    className: inputClass(errors[key]),
  })

  async function handleSubmit(e) {
    e.preventDefault()
    const found = validateLead(form)
    setErrors(found)
    const firstInvalid = Object.keys(found)[0]
    if (firstInvalid) {
      document.getElementById(`book-${firstInvalid}`)?.focus()
      return
    }

    if (!LEADS_URL) {
      window.open(whatsappLink(toLead(form)), '_blank', 'noopener')
      setStatus('handed-off')
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(LEADS_URL, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new URLSearchParams(toLead(form)),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      setStatus('sent')
    } catch {
      setStatus('failed')
    }
  }

  const firstName = form.name.trim().split(/\s+/)[0]
  const whatsappButton = 'flex items-center gap-2 px-5 py-2.5 rounded-full bg-green-500 hover:bg-green-400 text-white font-bold text-sm transition'

  return (
    <Section id="book" className="bg-surface">
      <div className="max-w-2xl">
        <SectionHeading
          label="Dzeline Shop Pro"
          title={renewing ? 'Renew Pro.' : 'Upgrade to Pro.'}
          sub={renewing
            ? `Pro has expired${shop ? ` for ${shop}` : ''}, so sync, cloud backup and STK Push are paused. Renew on WhatsApp and I'll switch them back on.`
            : "Dzeline Shop runs offline on a single phone. Pro connects it to the cloud. Tell me about your shop and I'll send you a monthly price on WhatsApp."}
        />

        <div className="grid sm:grid-cols-3 gap-3 mb-8">
          {PRO_BENEFITS.map((b) => (
            <div key={b.title} className="rounded-2xl border border-border bg-card p-4">
              <p className="text-sm font-bold text-white mb-1">{b.title}</p>
              <p className="text-xs text-gray-500 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>

        {renewing ? (
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <a href={renewLink(shop)} target="_blank" rel="noopener noreferrer" className={`${whatsappButton} w-fit`}>
              <WhatsAppIcon /> Renew on WhatsApp
            </a>
            <p className="text-sm text-gray-500 mt-5">
              More staff or a new branch since you signed up?{' '}
              <button type="button" onClick={() => setRenewing(false)} className="font-semibold text-primary hover:underline">
                Tell me about it
              </button>{' '}
              and I'll send an updated price.
            </p>
          </div>
        ) : status === 'sent' ? (
          <div role="status" className="rounded-2xl border border-green-500/30 bg-green-500/10 p-6 sm:p-8">
            <p className="text-lg font-bold text-white mb-1">Got it, {firstName}.</p>
            <p className="text-sm text-gray-400 mb-5">
              {multiBranch
                ? `I'll WhatsApp you on ${normalizePhone(form.whatsapp)} to talk through your branches.`
                : `I'll WhatsApp you on ${normalizePhone(form.whatsapp)} with a monthly price for ${shop}.`}
            </p>
            <a href={whatsappLink(toLead(form))} target="_blank" rel="noopener noreferrer" className={`${whatsappButton} w-fit`}>
              <WhatsAppIcon /> Rather chat now? Message me
            </a>
          </div>
        ) : status === 'handed-off' ? (
          <div role="status" className="rounded-2xl border border-green-500/30 bg-green-500/10 p-6 sm:p-8">
            <p className="text-lg font-bold text-white mb-1">Your answers are in WhatsApp.</p>
            <p className="text-sm text-gray-400 mb-5">
              {multiBranch
                ? `Press send there and I'll get back to you to talk through your branches.`
                : `Press send there and I'll reply with a monthly price for ${shop}.`}
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={whatsappLink(toLead(form))} target="_blank" rel="noopener noreferrer" className={whatsappButton}>
                <WhatsAppIcon /> WhatsApp didn't open? Open it
              </a>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="px-5 py-2.5 rounded-full border border-border text-gray-300 hover:border-white/40 hover:text-white font-semibold text-sm transition"
              >
                Edit answers
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="rounded-2xl border border-border bg-card p-6 sm:p-8 space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <Field name="name" label="Your name" error={errors.name}>
                <input {...text('name')} type="text" autoComplete="name" maxLength={80} />
              </Field>
              <Field name="whatsapp" label="WhatsApp number" hint="This is where the price will come." error={errors.whatsapp}>
                <input {...text('whatsapp')} type="tel" inputMode="tel" autoComplete="tel" placeholder="0712 345 678" maxLength={20} />
              </Field>
              <Field name="shopName" label="Shop name" error={errors.shopName}>
                <input {...text('shopName')} type="text" autoComplete="organization" maxLength={80} />
              </Field>
              <Field name="town" label="Town or estate" error={errors.town}>
                <input {...text('town')} type="text" autoComplete="address-level2" placeholder="e.g. Rongai" maxLength={80} />
              </Field>
            </div>

            <Field name="staff" label="Staff who need a login" hint="Everyone who gets a PIN, including you." error={errors.staff}>
              <input {...text('staff')} type="text" inputMode="numeric" pattern="[0-9]*" placeholder="3" maxLength={3} className={`${inputClass(errors.staff)} max-w-[8rem]`} />
            </Field>

            <div>
              <Choices
                name="branches"
                legend="Branches"
                options={BRANCH_OPTIONS}
                value={form.branches}
                onChange={(v) => update('branches', v)}
                error={errors.branches}
              />
              {multiBranch && (
                <p className="mt-3 rounded-xl border border-primary/25 bg-primary/10 px-4 py-3 text-sm text-gray-300">
                  More than one branch gets a conversation rather than a standard price. Send this and I'll WhatsApp you to talk it through.
                </p>
              )}
            </div>

            <Choices
              name="devices"
              legend={<>Tills or devices per branch <Optional /></>}
              hint="Phones or tablets that make sales."
              options={DEVICE_OPTIONS}
              value={form.devices}
              onChange={(v) => update('devices', v)}
              error={errors.devices}
            />

            {form.source !== 'pos' && (
              <Choices
                name="alreadyUsing"
                legend="Already using Dzeline Shop?"
                options={USING_OPTIONS}
                value={form.alreadyUsing}
                onChange={(v) => update('alreadyUsing', v)}
                error={errors.alreadyUsing}
              />
            )}

            <Field name="reason" label={<>What made you look today? <Optional /></>}>
              <textarea {...text('reason')} rows={3} maxLength={500} placeholder="e.g. We're opening a second counter" />
            </Field>

            {/* Honeypot — hidden from people, filled in by bots. */}
            <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
              <label>
                Leave this empty
                <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" value={form.gotcha} onChange={(e) => update('gotcha', e.target.value)} />
              </label>
            </div>

            {status === 'failed' && (
              <div role="alert" className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-gray-300">
                That didn't go through.{' '}
                <a
                  href={whatsappLink(toLead(form))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-green-400 hover:underline"
                >
                  Send the same answers on WhatsApp instead
                </a>
                .
              </div>
            )}

            <div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className={`w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-white font-bold text-sm transition disabled:opacity-60 ${LEADS_URL ? 'bg-primary hover:bg-primary-dark shadow-lg shadow-primary/20' : 'bg-green-500 hover:bg-green-400 shadow-lg shadow-green-500/20'}`}
              >
                {!LEADS_URL && <WhatsAppIcon />}
                {status === 'sending' ? 'Sending…' : !LEADS_URL ? 'Send on WhatsApp' : multiBranch ? "Let's talk" : 'Get my price'}
              </button>
              <p className="text-xs text-gray-600 mt-3">Your answers only go to me, to size a plan for your shop. No payment is taken here.</p>
            </div>
          </form>
        )}
      </div>
    </Section>
  )
}

// ── Contact ───────────────────────────────────────────────────────────────────

function Contact() {
  return (
    <Section id="contact" className="bg-navy">
      <div className="max-w-2xl">
        <SectionHeading
          label="Get In Touch"
          title="Let's build something."
          sub="Have a project in mind? I'd love to hear about it. Send a WhatsApp message and I'll get back to you quickly."
        />

        <div className="space-y-3">
          {/* WhatsApp — primary */}
          <a
            href="https://wa.me/254708174289?text=Hi%20Deline%2C%20I%20would%20like%20to%20discuss%20a%20project"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 w-full p-5 rounded-2xl bg-green-500 hover:bg-green-400 text-white transition shadow-lg shadow-green-500/15 group"
          >
            <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
              <WhatsAppIcon />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-sm">Chat on WhatsApp</p>
              <p className="text-green-100 text-xs">+254 708 174 289 · Fastest response</p>
            </div>
            <ArrowIcon />
          </a>

          {/* Email */}
          <a
            href="mailto:kipchirchirdeline@gmail.com?subject=Project%20Enquiry"
            className="flex items-center gap-4 w-full p-5 rounded-2xl bg-card border border-border hover:border-primary/40 text-gray-300 hover:text-white transition group"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 text-primary">
              <MailIcon />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-sm text-white">Email</p>
              <p className="text-gray-500 text-xs">kipchirchirdeline@gmail.com</p>
            </div>
            <ArrowIcon />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Dzeline"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 w-full p-5 rounded-2xl bg-card border border-border hover:border-primary/40 text-gray-300 hover:text-white transition group"
          >
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-border flex items-center justify-center shrink-0">
              <GitHubIcon />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-sm text-white">GitHub</p>
              <p className="text-gray-500 text-xs">github.com/Dzeline</p>
            </div>
            <ArrowIcon />
          </a>
        </div>

        <p className="text-xs text-gray-700 mt-6 text-center">
          Based in Nairobi, Kenya · Available for remote and on-site projects
        </p>
      </div>
    </Section>
  )
}

// ── Footer ────────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-navy border-t border-border px-6 py-8">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-700">
        <p>© {new Date().getFullYear()} Deline Kipchirchir · Nairobi, Kenya</p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/Dzeline" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">GitHub</a>
          <a href="https://wa.me/254708174289" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">WhatsApp</a>
          <a href="https://dzeline.online" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">Dzeline Shop</a>
        </div>
      </div>
    </footer>
  )
}

// ── App ───────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="bg-navy min-h-screen text-white">
      <Nav />
      <Hero />
      <Solutions />
      <Services />
      <Experience />
      <Skills />
      <Book />
      <Contact />
      <Footer />
    </div>
  )
}
