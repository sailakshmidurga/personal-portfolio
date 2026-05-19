import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, Download, Sparkles } from 'lucide-react'
import { personal } from '../../data/portfolio'

// ─── Typing effect hook ───────────────────────────────────────────────────────
function useTypewriter(words, speed = 80, pause = 2000) {
  const [display, setDisplay] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[wordIdx]
    let timeout

    if (!deleting && charIdx < word.length) {
      timeout = setTimeout(() => setCharIdx(c => c + 1), speed)
    } else if (!deleting && charIdx === word.length) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx(c => c - 1), speed / 2)
    } else if (deleting && charIdx === 0) {
      setDeleting(false)
      setWordIdx(i => (i + 1) % words.length)
    }

    setDisplay(word.slice(0, charIdx))
    return () => clearTimeout(timeout)
  }, [charIdx, deleting, wordIdx, words, speed, pause])

  return display
}

// ─── Floating particle ────────────────────────────────────────────────────────
function Particle({ x, y, size, delay }) {
  return (
    <motion.div
      className="absolute rounded-full bg-accent/20"
      style={{ left: `${x}%`, top: `${y}%`, width: size, height: size }}
      animate={{ y: [0, -30, 0], opacity: [0.2, 0.6, 0.2] }}
      transition={{ duration: 4 + Math.random() * 3, delay, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}

export default function Hero() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] })

  // Parallax transforms for background orbs
  const orbY1 = useTransform(scrollYProgress, [0, 1], ['0%', '-40%'])
  const orbY2 = useTransform(scrollYProgress, [0, 1], ['0%', '-25%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  const typedRole = useTypewriter(personal.roles, 80, 2200)

  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    delay: i * 0.3,
  }))

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* ─── Background Layers ─── */}
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-100" aria-hidden="true" />

      {/* Radial gradient at top */}
      <div className="absolute inset-0 bg-radial-accent" aria-hidden="true" />

      {/* Parallax Orb 1 — large cyan */}
      <motion.div
        style={{ y: orbY1 }}
        className="parallax-bg absolute -top-40 -right-40 w-[600px] h-[600px] orb"
        style={{ y: orbY1, background: 'radial-gradient(circle, rgba(0,229,255,0.12) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      {/* Parallax Orb 2 — violet */}
      <motion.div
        style={{ y: orbY2, background: 'radial-gradient(circle, rgba(123,97,255,0.10) 0%, transparent 70%)' }}
        className="parallax-bg absolute -bottom-20 -left-40 w-[500px] h-[500px] orb"
        aria-hidden="true"
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {particles.map(p => (
          <Particle key={p.id} {...p} />
        ))}
      </div>

      {/* ─── Main Content ─── */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24 md:pt-28"
      >
        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none mb-6"
        >
          <span className="text-white">Sai Lakshmi</span>
          <br />
          <span className="gradient-text">Durga Koneti</span>
        </motion.h1>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-mono text-lg sm:text-xl md:text-2xl text-white/50 mb-6 h-8"
          aria-label={`Role: ${typedRole}`}
        >
          <span className="accent-text">{'>'}</span>{' '}
          <span className="typing-cursor">{typedRole}</span>
        </motion.div>

        {/* Badge — placed AFTER name so it never overlaps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 bg-accent/5 text-accent text-xs font-mono mb-6"
        >
          <Sparkles size={12} />
          Available for opportunities
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-white/40 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {personal.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            View My Work
          </button>
          <a href={personal.resumeUrl} download className="btn-outline">
            <Download size={16} />
            Download Resume
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex items-center justify-center gap-6"
        >
          {[
            { icon: Github, href: personal.github, label: 'GitHub profile' },
            { icon: Linkedin, href: personal.linkedin, label: 'LinkedIn profile' },
            { icon: Mail, href: `mailto:${personal.email}`, label: 'Send email' },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-11 h-11 glass-card flex items-center justify-center text-white/50 hover:text-accent hover:border-accent/30 transition-colors"
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* ─── Scroll Indicator ─── */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors group"
        aria-label="Scroll to about section"
      >
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  )
}
