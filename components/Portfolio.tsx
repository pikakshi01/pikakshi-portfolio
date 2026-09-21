'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import {
  ArrowDown,
  ArrowUpRight,
  ChevronDown,
  Download,
  Github,
  Linkedin,
  Mail,
  ShieldCheck,
  Terminal
} from 'lucide-react'

import {
  SiLeetcode,
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiReact,
  SiFlask,
  SiMysql,
  SiSqlite,
  SiGit,
  SiGithub,
  SiFigma,
  SiLinux,
  SiNumpy,
  SiPandas,
  SiWireshark
} from 'react-icons/si'

import {
  email,
  projects,
  tech,
  certifications
} from '../data/portfolio'


const icons: any = {
  Python: SiPython,
  JavaScript: SiJavascript,
  HTML: SiHtml5,
  CSS: SiCss,
  React: SiReact,
  Flask: SiFlask,
  MySQL: SiMysql,
  SQLite: SiSqlite,
  Git: SiGit,
  GitHub: SiGithub,
  Figma: SiFigma,
  Linux: SiLinux,
  NumPy: SiNumpy,
  Pandas: SiPandas,
  // MATLAB: SiMatlab,
  Wireshark: SiWireshark
}


/* -----------------------------
   TECH LOGO COLORS
----------------------------- */

const techColors: Record<string, string> = {
  Python: '#3776AB',
  JavaScript: '#F7DF1E',
  HTML: '#E34F26',
  CSS: '#1572B6',
  React: '#61DAFB',
  Flask: '#FFFFFF',
  MySQL: '#4479A1',
  SQLite: '#003B57',
  Git: '#F05032',
  GitHub: '#FFFFFF',
  Figma: '#F24E1E',
  Linux: '#FCC624',
  NumPy: '#4DABCF',
  Pandas: '#E70488',
  MATLAB: '#FF8C00',
  Wireshark: '#1679A7'
}


/* -----------------------------
   PROJECT COLORS
----------------------------- */

const projectColors: Record<string, any> = {

  nyxai: {
    accent: '#A78BFA',
    bg: 'rgba(139,92,246,.10)',
    border: 'rgba(139,92,246,.35)'
  },

  portfolioweb: {
    accent: '#38BDF8',
    bg: 'rgba(56,189,248,.10)',
    border: 'rgba(56,189,248,.35)'
  },

  zephyr: {
    accent: '#60A5FA',
    bg: 'rgba(96,165,250,.10)',
    border: 'rgba(96,165,250,.35)'
  },

  semantic: {
    accent: '#34D399',
    bg: 'rgba(52,211,153,.10)',
    border: 'rgba(52,211,153,.35)'
  },

  fog: {
    accent: '#FB923C',
    bg: 'rgba(251,146,60,.10)',
    border: 'rgba(251,146,60,.35)'
  },

  queue: {
    accent: '#F472B6',
    bg: 'rgba(244,114,182,.10)',
    border: 'rgba(244,114,182,.35)'
  },

  iris: {
    accent: '#C084FC',
    bg: 'rgba(192,132,252,.10)',
    border: 'rgba(192,132,252,.35)'
  },

  scheduni: {
    accent: '#22D3EE',
    bg: 'rgba(34,211,238,.10)',
    border: 'rgba(34,211,238,.35)'
  },

  phishing: {
    accent: '#F87171',
    bg: 'rgba(248,113,113,.10)',
    border: 'rgba(248,113,113,.35)'
  }
}


function scrollToId(id: string) {
  document
    .getElementById(id)
    ?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
}


/* -----------------------------
   NAVBAR
----------------------------- */

function Nav() {

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/[.06] bg-[#0B0D10]/80 backdrop-blur-xl">

      <div className="section-shell flex h-16 items-center justify-between">

        <a
          href="#top"
          className="focus-ring font-display text-sm font-semibold tracking-wide"
        >
          PS
          <span className="text-violet-400">.</span>
        </a>

        <nav className="hidden items-center gap-6 text-xs font-medium text-zinc-400 sm:flex">

          <a
            className="focus-ring transition hover:text-white"
            href="#projects"
          >
            Projects
          </a>

          <a
            className="focus-ring transition hover:text-white"
            href="#internships"
          >
            Internships
          </a>

          <a
            className="focus-ring transition hover:text-white"
            href="#stack"
          >
            Stack
          </a>

          <a
            className="focus-ring transition hover:text-white"
            href="#certifications"
          >
            Certifications
          </a>

        </nav>

        <a
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=sarohapikakshi@gmail.com`}
          target="_blank"
          rel="noreferrer"
          className="focus-ring rounded-lg border border-violet-500/40 bg-violet-500/10 px-3 py-2 text-xs font-semibold text-white transition hover:border-violet-400 hover:bg-violet-500/20"
        >
          Contact Me
        </a>

      </div>

    </header>
  )
}

/* -----------------------------
   SOCIAL
----------------------------- */

function Social() {

  return (

    <div
      className="flex gap-3"
      aria-label="Social profiles"
    >

      <a
        aria-label="GitHub"
        target="_blank"
        rel="noreferrer"
        href="https://github.com/pikakshi01"
        className="focus-ring flex h-11 w-11 items-center justify-center rounded-full border border-zinc-700 bg-white/[.02] text-white transition hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/[.06]"
      >
        <Github size={18} />
      </a>


      <a
        aria-label="LinkedIn"
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/pikakshi-saroha-9b40a9291/"
        className="focus-ring flex h-11 w-11 items-center justify-center rounded-full border border-zinc-700 bg-white/[.02] text-[#0A66C2] transition hover:-translate-y-0.5 hover:border-[#0A66C2]/60 hover:bg-[#0A66C2]/10"
      >
        <Linkedin size={18} />
      </a>


      <a
        aria-label="LeetCode"
        target="_blank"
        rel="noreferrer"
        href="https://leetcode.com/u/aS9j64BziC/"
        className="focus-ring flex h-11 w-11 items-center justify-center rounded-full border border-zinc-700 bg-white/[.02] text-[#FFA116] transition hover:-translate-y-0.5 hover:border-[#FFA116]/60 hover:bg-[#FFA116]/10"
      >
        <SiLeetcode size={18} />
      </a>

    </div>

  )
}


/* -----------------------------
   HERO
----------------------------- */

function Hero() {

  return (

    <section
      id="top"
      className="relative flex min-h-[760px] items-center overflow-hidden border-b border-white/[.06] pt-16"
    >

      <div className="pointer-events-none absolute left-[12%] top-[18%] h-72 w-72 rounded-full bg-violet-500/[.055] blur-3xl" />


      <div className="section-shell grid w-full gap-14 py-24 lg:grid-cols-[1fr_340px] lg:items-end">

        <div>

          <div className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[.18em] text-zinc-500">

            <span className="h-px w-10 bg-zinc-700" />

            01 — Intro

          </div>


          <h1 className="font-display max-w-4xl text-[clamp(4rem,10vw,8.6rem)] font-semibold leading-[.86] tracking-[-.07em]">

            Pikakshi
            <br />

            <span className="text-zinc-500">
              Saroha
            </span>

          </h1>


          <p className="mt-8 font-display text-xl font-medium text-white sm:text-2xl">

            Cybersecurity
            <span className="text-violet-400">
              .
            </span>

          </p>


          <div className="mt-9 flex flex-wrap gap-3">

            <button
              onClick={() => scrollToId('projects')}
              className="focus-ring group inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200"
            >
              View Projects

              <ArrowDown
                size={16}
                className="transition group-hover:translate-y-0.5"
              />

            </button>


            <a
              href="/resume.pdf"
              download
              className="focus-ring inline-flex items-center gap-2 rounded-xl border border-violet-500/50 bg-violet-500/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-violet-400 hover:bg-violet-500/20"
            >
              Download Resume
              <Download size={16} />
            </a>


            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex items-center gap-2 rounded-xl border border-cyan-500/40 bg-cyan-500/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-400 hover:bg-cyan-500/20"
            >
              Contact Me
              <Mail size={16} />
            </a>

          </div>


          <div className="mt-8">
            <Social />
          </div>

        </div>


        <div className="card p-6">

          <div className="mb-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-[.16em] text-zinc-500">

            <ShieldCheck
              size={15}
              className="text-violet-400"
            />

            Education

          </div>


          <div className="space-y-1">

            <p className="font-display text-lg font-semibold text-white">
              BML Munjal University
            </p>

            <p className="text-sm text-zinc-400">
              B.Tech CSE
            </p>

            <p className="text-sm text-zinc-400">
              Specialization: Cybersecurity
            </p>

            <p className="pt-3 text-xs font-medium text-zinc-600">
              2023 — 2027
            </p>

          </div>

        </div>

      </div>


      <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[10px] uppercase tracking-[.2em] text-zinc-600 sm:flex">

        <span>
          Scroll
        </span>

        <ArrowDown size={12} />

      </div>

    </section>
  )
}


/* -----------------------------
   SECTION HEADER
----------------------------- */

function SectionHead({
  num,
  title,
  id
}: {
  num: string
  title: string
  id: string
}) {

  return (

    <div
      className="mb-10"
      id={id}
    >

      <div className="section-label">

        <span>
          {num}
        </span>

        {title}

      </div>

    </div>

  )
}


/* -----------------------------
   INTERNSHIPS
----------------------------- */

function Internships() {

  return (

    <section
      id="internships"
      className="section-pad border-b border-white/[.06]"
    >

      <div className="section-shell">

        <SectionHead
          num="02"
          title="Internships"
          id="internships-heading"
        />


        <div className="grid gap-4 lg:grid-cols-[1.4fr_.8fr]">


          <article className="card card-hover p-7 sm:p-9">

            <div className="flex flex-col justify-between gap-7 sm:flex-row">

              <div>

                <p className="text-xs font-semibold uppercase tracking-[.16em] text-cyan-400">
                  Technical Intern
                </p>

                <h3 className="mt-2 font-display text-2xl font-semibold text-white">
                  Ekors Pvt. Ltd.
                </h3>

              </div>

              <span className="text-xs text-zinc-500">
                June 2025 — July 2025
              </span>

            </div>


            <p className="mt-7 max-w-2xl text-sm leading-7 text-zinc-400">

              Worked on the company’s multi-page website, independently developed the Projects page, and collaborated on responsive testing across mobile, tablet and desktop.

            </p>


            <div className="mt-7 flex flex-wrap gap-2">

              {['HTML', 'CSS', 'JavaScript'].map(t => (

                <span
                  key={t}
                  className="rounded-md border border-zinc-800 bg-white/[.025] px-2.5 py-1 text-xs text-zinc-300"
                >
                  {t}
                </span>

              ))}

            </div>

          </article>


          <article className="card card-hover p-7 sm:p-9">

            <p className="text-xs font-semibold uppercase tracking-[.16em] text-violet-400">
              Internship Selection
            </p>

            <h3 className="mt-2 font-display text-2xl font-semibold text-white">
              HCL Tech
            </h3>

            <p className="mt-4 text-sm leading-7 text-zinc-400">
              Selected after Class XII for an internship opportunity.
            </p>

            <p className="mt-6 text-sm font-medium text-emerald-400">
              ₹10,000 / month stipend
            </p>

          </article>

        </div>

      </div>

    </section>

  )
}


/* -----------------------------
   PROJECT CARD
----------------------------- */

function ProjectCard({
  p,
  index
}: {
  p: any
  index: number
}) {

  const [open, setOpen] = useState(false)

  const fallbackColors = [
    '#A78BFA',
    '#38BDF8',
    '#60A5FA',
    '#34D399',
    '#FB923C',
    '#F472B6'
  ]

  const color =
    projectColors[p.id] || {
      accent: fallbackColors[index % fallbackColors.length],
      bg: 'rgba(139,92,246,.10)',
      border: 'rgba(139,92,246,.35)'
    }


  return (

    <motion.article
      layout
      className="project-card card card-hover overflow-hidden"
      style={{
        borderColor: open
          ? color.border
          : undefined
      }}
    >

      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="focus-ring w-full text-left"
      >

        <div className="flex min-h-[390px] flex-col p-6 sm:p-7">


          <div className="flex items-start justify-between">

            <div
              className="project-icon flex h-11 w-11 items-center justify-center rounded-xl border"
              style={{
                color: color.accent,
                background: color.bg,
                borderColor: color.border
              }}
            >
              <Terminal size={18} />
            </div>


            <span
              className="text-xs"
              style={{
                color: color.accent
              }}
            >
              {open ? 'Collapse' : '01 / View'}
            </span>

          </div>


          <div className="mt-auto">

            <p
              className="text-xs font-semibold uppercase tracking-[.14em]"
              style={{
                color: color.accent
              }}
            >
              {p.subtitle}
            </p>


            <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-white">
              {p.name}
            </h3>


            <p className="mt-3 max-w-sm text-sm leading-6 text-zinc-400">
              {p.description}
            </p>


            <div className="mt-5 flex flex-wrap gap-2">

              {p.tech.map((t: string) => (

                <span
                  key={t}
                  className="rounded-md border border-zinc-800 bg-black/10 px-2 py-1 text-[11px] text-zinc-400"
                >
                  {t}
                </span>

              ))}

            </div>


            <div
              className="mt-6 flex items-center gap-2 text-xs font-semibold"
              style={{
                color: color.accent
              }}
            >

              {open ? 'View less' : 'View more'}

              <ChevronDown
                size={14}
                className={open ? 'rotate-180' : ''}
              />

            </div>

          </div>

        </div>

      </button>


      <AnimatePresence initial={false}>

        {open && (

          <motion.div
            initial={{
              height: 0,
              opacity: 0
            }}
            animate={{
              height: 'auto',
              opacity: 1
            }}
            exit={{
              height: 0,
              opacity: 0
            }}
            className="border-t border-zinc-800"
          >

            <div className="space-y-5 p-6 text-sm leading-6 text-zinc-400 sm:p-7">


              <div>

                <p className="mb-1 text-[10px] font-bold uppercase tracking-[.16em] text-zinc-600">
                  What is it?
                </p>

                <p>
                  {p.concept}
                </p>

              </div>


              <div>

                <p className="mb-1 text-[10px] font-bold uppercase tracking-[.16em] text-zinc-600">
                  Problem it solves
                </p>

                <p>
                  {p.problem}
                </p>

              </div>


              <div>

                <p className="mb-1 text-[10px] font-bold uppercase tracking-[.16em] text-zinc-600">
                  How it works
                </p>

                <p>
                  {p.solution}
                </p>

              </div>


              <div>

                <p className="mb-2 text-[10px] font-bold uppercase tracking-[.16em] text-zinc-600">
                  Tech stack
                </p>

                <div className="flex flex-wrap gap-2">

                  {p.tech.map((t: string) => (

                    <span
                      key={t}
                      className="rounded-md border border-zinc-800 px-2.5 py-1 text-xs text-zinc-400"
                    >
                      {t}
                    </span>

                  ))}

                </div>

              </div>


              <div className="flex flex-wrap gap-3 pt-1">

                <a
                  href={
                    p.github.startsWith('http')
                      ? p.github
                      : '#'
                  }
                  onClick={e => {
                    if (!p.github.startsWith('http')) {
                      e.preventDefault()
                    }
                  }}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-xs font-semibold transition"
                  style={{
                    borderColor: color.border,
                    color: color.accent,
                    background: color.bg
                  }}
                >

                  <Github size={14} />

                  GitHub

                  <ArrowUpRight size={13} />

                </a>

              </div>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </motion.article>

  )
}


/* -----------------------------
   PROJECTS
----------------------------- */

function Projects() {

  return (

    <section
      id="projects"
      className="section-pad border-b border-white/[.06]"
    >

      <div className="section-shell">

        <SectionHead
          num="03"
          title="Projects"
          id="projects-heading"
        />


        <div className="mb-8 flex items-end justify-between gap-6">

          <p className="max-w-xl text-sm leading-6 text-zinc-400">

            Technical work across cybersecurity, AI, software development, information retrieval and IoT.

          </p>


          <span className="hidden text-xs text-zinc-500 sm:block">

            Scroll →

          </span>

        </div>


        <div className="project-track no-scrollbar flex gap-4 overflow-x-auto pb-5">

          {projects.map((p, index) => (

            <ProjectCard
              key={p.id}
              p={p}
              index={index}
            />

          ))}

        </div>

      </div>

    </section>

  )
}


/* -----------------------------
   TECH STACK
----------------------------- */

function TechStack() {

  return (

    <section
      id="stack"
      className="section-pad border-b border-white/[.06]"
    >

      <div className="section-shell">

        <SectionHead
          num="04"
          title="Tech Stack"
          id="stack-heading"
        />


        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          {tech.map(([cat, items]) => (

            <div key={cat}>

              <p className="mb-4 text-xs font-bold uppercase tracking-[.15em] text-zinc-600">
                {cat}
              </p>


              <div className="grid grid-cols-2 gap-2">

                {items.map(item => {

                  const Icon = icons[item]

                  const iconColor =
                    techColors[item] || '#FFFFFF'


                  return (

                    <div
                      key={item}
                      className="tech-card card card-hover flex items-center gap-3 px-3 py-3"
                    >

                      <span
                        className="tech-icon flex h-8 w-8 items-center justify-center rounded-lg bg-white/[.025]"
                        style={{
                          color: iconColor
                        }}
                      >

                        {Icon ? (
                          <Icon size={17} />
                        ) : (
                          <span className="text-[10px] font-bold">
                            {item
                              .slice(0, 2)
                              .toUpperCase()}
                          </span>
                        )}

                      </span>


                      <span className="text-xs font-medium text-zinc-300">
                        {item}
                      </span>

                    </div>

                  )

                })}

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  )
}


/* -----------------------------
   CERTIFICATIONS
----------------------------- */

function CertificationCard({
  c,
  index
}: {
  c: any
  index: number
}) {

  return (

    <article className="card card-hover min-h-[230px] p-6 sm:p-7">

      <div className="flex items-start justify-between">

        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-500/30 bg-violet-500/10 text-violet-400">

          <ShieldCheck size={19} />

        </div>


        <span className="text-xs text-zinc-600">
          0{index + 1}
        </span>

      </div>


      <div className="mt-9">

        <p className="text-xs font-semibold uppercase tracking-[.14em] text-violet-400">
          {c.issuer}
        </p>


        <h3 className="mt-2 font-display text-lg font-semibold leading-6 text-white">
          {c.name}
        </h3>


        <p className="mt-3 text-xs leading-5 text-zinc-500">
          {c.detail}
        </p>

      </div>

    </article>

  )
}


function Certifications() {

  return (

    <section
      id="certifications"
      className="section-pad border-b border-white/[.06]"
    >

      <div className="section-shell">

        <SectionHead
          num="05"
          title="Certifications"
          id="certifications-heading"
        />


        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {certifications.map((c, i) => (

            <CertificationCard
              key={c.name + c.issuer}
              c={c}
              index={i}
            />

          ))}

        </div>

      </div>

    </section>

  )
}


/* -----------------------------
   CONTACT
----------------------------- */

function Contact() {

  return (

    <section
      id="contact"
      className="section-pad"
    >

      <div className="section-shell">

        <div className="section-label">

          <span>
            06
          </span>

          Let’s Connect

        </div>


        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">

          <div>

            <h2 className="font-display text-5xl font-semibold tracking-[-.045em] text-white sm:text-7xl">
              Pikakshi Saroha
            </h2>


            <p className="mt-5 max-w-xl text-lg leading-8 text-zinc-500">
              “Building, learning, and securing what comes next.”
            </p>

          </div>


          <a
            href={`mailto:${email}`}
            className="focus-ring group inline-flex items-center gap-4 border-b border-violet-500/40 pb-3 text-sm font-semibold text-white transition hover:border-violet-400"
          >

            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-violet-500/40 bg-violet-500/10">

              <Mail size={17} />

            </span>


            <span>

              Contact Me

              <br />

              <span className="font-normal text-zinc-500">
                {email}
              </span>

            </span>


            <ArrowUpRight
              size={16}
              className="text-zinc-600 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />

          </a>

        </div>

      </div>

    </section>

  )
}


/* -----------------------------
   MAIN PORTFOLIO
----------------------------- */

export default function Portfolio() {

  return (
    <>

      <Nav />

      <main>

        <Hero />

        <Internships />

        <Projects />

        <TechStack />

        <Certifications />

        <Contact />

      </main>


      <footer className="border-t border-white/[.06] py-7">

        <div className="section-shell flex items-center justify-between text-xs text-zinc-600">

          <span>
            © 2026 Pikakshi Saroha
          </span>


          <a
            className="focus-ring hover:text-zinc-400"
            href="#top"
          >
            Back to top ↑
          </a>

        </div>

      </footer>

    </>
  )
}