import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, CheckCircle2, ExternalLink } from 'lucide-react'
import { useScrollReveal, fadeUp, fadeLeft, fadeRight, staggerContainer, staggerItem } from '../../hooks/useScrollReveal'
import { experience, education } from '../../data/portfolio'

// ─── Experience / Internship Card ─────────────────────────────────────────────
function ExperienceCard({ item }) {
  return (
    <motion.div variants={staggerItem} className="glass-card p-7 relative overflow-hidden group">
      {/* Left accent bar */}
      <div
        className="absolute top-0 left-0 w-1 h-full rounded-l-2xl"
        style={{ background: 'linear-gradient(to bottom, #00e5ff, transparent)' }}
        aria-hidden="true"
      />

      {/* Header */}
      <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
        <div>
          <h3 className="font-display font-bold text-white text-lg">{item.role}</h3>
          <p className="text-white/50 text-sm mt-0.5">{item.company}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono text-accent border border-accent/20 bg-accent/5">
            {item.type}
          </span>
          <span className="text-white/30 text-xs font-mono">{item.period}</span>
        </div>
      </div>

      {/* Points */}
      <ul className="space-y-2.5 mb-5" aria-label="Responsibilities">
        {item.points.map((point, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm text-white/55">
            <CheckCircle2 size={14} className="mt-0.5 flex-shrink-0 text-accent/60" aria-hidden="true" />
            {point}
          </li>
        ))}
      </ul>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2 mb-5" role="list" aria-label="Technologies">
        {item.tech.map((t) => (
          <span
            key={t}
            role="listitem"
            className="px-2.5 py-1 rounded-md text-xs font-mono text-accent/70 border border-accent/15 bg-accent/5"
          >
            {t}
          </span>
        ))}
      </div>

      {/* ─── View Certificate button — only shown when URL exists ─── */}
      {item.certificateUrl && (
        <div className="pt-4 border-t border-white/[0.06]">
          <motion.a
            href={item.certificateUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View internship certificate"
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-semibold transition-all"
            style={{
              color: '#00e5ff',
              background: 'rgba(0,229,255,0.08)',
              border: '1px solid rgba(0,229,255,0.25)',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,229,255,0.15)'; e.currentTarget.style.boxShadow = '0 0 16px rgba(0,229,255,0.15)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(0,229,255,0.08)'; e.currentTarget.style.boxShadow = 'none' }}
          >
            <ExternalLink size={13} aria-hidden="true" />
            View Certificate
          </motion.a>
        </div>
      )}
    </motion.div>
  )
}

// ─── Education Card ───────────────────────────────────────────────────────────
function EducationCard({ item }) {
  return (
    <motion.div
      variants={staggerItem}
      className={`glass-card p-6 flex items-start gap-4 ${item.current ? 'glow-border' : ''}`}
    >
      <div className="text-2xl flex-shrink-0 mt-1" aria-hidden="true">{item.icon}</div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2 flex-wrap">
          <div>
            <h4 className="font-display font-semibold text-white text-sm leading-snug">{item.degree}</h4>
            <p className="text-white/40 text-xs mt-1">{item.institution}</p>
          </div>
          <span
            className={`text-xs font-mono px-2.5 py-1 rounded-lg flex-shrink-0 ${
              item.current
                ? 'text-accent border border-accent/20 bg-accent/5'
                : 'text-white/40 border border-white/10'
            }`}
          >
            {item.score}
          </span>
        </div>
        {item.current && (
          <span className="mt-2 inline-flex items-center gap-1 text-xs font-mono text-green-400">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
            Currently enrolled
          </span>
        )}
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const { ref: headRef, isInView: headInView } = useScrollReveal()
  const { ref: expRef, isInView: expInView } = useScrollReveal()
  const { ref: eduRef, isInView: eduInView } = useScrollReveal()

  return (
    <section id="experience" className="relative py-28" aria-label="Experience and Education">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={headRef}
          variants={fadeUp}
          initial="hidden"
          animate={headInView ? 'visible' : 'hidden'}
          className="text-center mb-20"
        >
          <span className="font-mono text-xs accent-text uppercase tracking-[0.3em] mb-4 block">
            04 / Background
          </span>
          <h2 className="section-heading text-white mb-4">
            Experience &amp; <span className="gradient-text">Education</span>
          </h2>
          <div className="w-16 h-px bg-accent mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Experience */}
          <div>
            <motion.div
              ref={expRef}
              variants={fadeLeft}
              initial="hidden"
              animate={expInView ? 'visible' : 'hidden'}
              className="flex items-center gap-3 mb-7"
            >
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                <Briefcase size={15} className="text-accent" />
              </div>
              <h3 className="font-display font-semibold text-white">Work Experience</h3>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={expInView ? 'visible' : 'hidden'}
              className="space-y-4"
            >
              {experience.map((item, i) => (
                <ExperienceCard key={i} item={item} />
              ))}
            </motion.div>
          </div>

          {/* Right: Education */}
          <div>
            <motion.div
              ref={eduRef}
              variants={fadeRight}
              initial="hidden"
              animate={eduInView ? 'visible' : 'hidden'}
              className="flex items-center gap-3 mb-7"
            >
              <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center">
                <GraduationCap size={15} className="text-violet-400" />
              </div>
              <h3 className="font-display font-semibold text-white">Education</h3>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={eduInView ? 'visible' : 'hidden'}
              className="space-y-4"
            >
              {education.map((item, i) => (
                <EducationCard key={i} item={item} />
              ))}
            </motion.div>

            {/* Quote */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              animate={eduInView ? 'visible' : 'hidden'}
              className="mt-8 p-6 rounded-2xl relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, rgba(0,229,255,0.05), rgba(123,97,255,0.05))', border: '1px solid rgba(0,229,255,0.1)' }}
            >
              <p className="text-white/50 text-sm leading-relaxed italic">
                "Driven by curiosity, shaped by challenges. Every project is a new system to understand and improve."
              </p>
              <div className="mt-3 text-right text-xs font-mono text-accent/50">— Sai Lakshmi Durga</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
