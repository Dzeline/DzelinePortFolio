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
    githubUrl: 'https://github.com/Dzeline',
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
              {s.githubUrl && (
                <a
                  href={s.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-border text-gray-300 text-sm font-semibold hover:border-white/40 hover:text-white transition"
                >
                  <GitHubIcon /> Source Code
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

// ── Contact ───────────────────────────────────────────────────────────────────

function Contact() {
  return (
    <Section id="contact" className="bg-surface">
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
      <Contact />
      <Footer />
    </div>
  )
}
