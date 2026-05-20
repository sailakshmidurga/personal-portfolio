import { motion } from 'framer-motion'
import { MapPin, GraduationCap, Code2, Zap } from 'lucide-react'
import { useScrollReveal, fadeUp, fadeLeft, fadeRight, staggerContainer, staggerItem } from '../../hooks/useScrollReveal'
import { personal } from '../../data/portfolio'

const stats = [
  { label: 'Projects Built', value: '4+', icon: Code2, color: '#00e5ff' },
  { label: 'CGPA', value: '8.96', icon: GraduationCap, color: '#f0c040' },
  { label: 'Certifications', value: '4', icon: Zap, color: '#7b61ff' },
  { label: 'Location', value: 'India', icon: MapPin, color: '#ff4d6d' },
]

export default function About() {
  const { ref: headRef, isInView: headInView } = useScrollReveal()
  const { ref: bioRef, isInView: bioInView } = useScrollReveal()
  const { ref: statsRef, isInView: statsInView } = useScrollReveal()

  return (
    <section id="about" className="relative py-28 overflow-hidden" aria-label="About me section">
      {/* Background accent */}
      <div
        className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 orb pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(123,97,255,0.07) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* ─── Section Header ─── */}
        <motion.div
          ref={headRef}
          variants={fadeUp}
          initial="hidden"
          animate={headInView ? 'visible' : 'hidden'}
          className="text-center mb-20"
        >
          <span className="font-mono text-xs accent-text uppercase tracking-[0.3em] mb-4 block">
            01 / About Me
          </span>
          <h2 className="section-heading text-white mb-4">
            Who I <span className="gradient-text">Am</span>
          </h2>
          <div className="w-16 h-px bg-accent mx-auto" />
        </motion.div>

        {/* ─── Content Grid ─── */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          {/* Avatar / Visual */}
          <motion.div
            ref={bioRef}
            variants={fadeLeft}
            initial="hidden"
            animate={bioInView ? 'visible' : 'hidden'}
            className="relative"
          >
            {/* Abstract avatar card */}
            <div className="relative mx-auto w-64 h-64 md:w-72 md:h-72">
              {/* Outer glow ring */}
              <div
                className="absolute inset-0 rounded-3xl"
                style={{ background: 'linear-gradient(135deg, rgba(0,229,255,0.3), rgba(123,97,255,0.3))', padding: '2px' }}
              >
                <div className="w-full h-full rounded-3xl bg-surface" />
              </div>
              {/* Inner content — swap <img> in once you have a photo */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden flex flex-col items-center justify-center gap-3">
                {/*
                  TO ADD YOUR PHOTO: replace the block below with:
                  <img src="/your-photo.jpg" alt="Sai Lakshmi Durga Koneti"
                    className="w-full h-full object-cover rounded-3xl" loading="lazy" />
                */}
                <div
                  className="w-24 h-24 rounded-2xl flex items-center justify-center text-3xl font-display font-black"
                  style={{ background: 'linear-gradient(135deg, #00e5ff22, #7b61ff22)', border: '1px solid rgba(0,229,255,0.2)' }}
                >
                  <span className="gradient-text">SLD</span>
                </div>
                <div className="text-center px-6">
                  <p className="font-display font-semibold text-white text-sm">{personal.shortName}</p>
                  <p className="font-mono text-accent text-xs mt-1">Full Stack Developer</p>
                </div>
              </div>

              {/* Floating badge 1 — RabbitMQ */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-6 glass-card px-3 py-2 text-xs font-mono text-accent whitespace-nowrap"
              >
                RabbitMQ ⚡
              </motion.div>
              {/* Floating badge 2 — REST APIs */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-4 -left-6 glass-card px-3 py-2 text-xs font-mono text-gold whitespace-nowrap"
              >
                REST APIs 🔗
              </motion.div>
            </div>
          </motion.div>

          {/* Bio text */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate={bioInView ? 'visible' : 'hidden'}
            className="space-y-6"
          >
            <p className="text-white/70 text-base leading-relaxed">
              {personal.bio}
            </p>
            <div className="flex items-center gap-2 text-white/40 text-sm">
              <MapPin size={14} className="accent-text" />
              <span>{personal.location}</span>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              {['Problem Solver', 'Backend Architect', 'API Designer', 'Fast Learner'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono text-accent/80 border border-accent/20 bg-accent/5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ─── Stats Grid ─── */}
        <motion.div
          ref={statsRef}
          variants={staggerContainer}
          initial="hidden"
          animate={statsInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          role="list"
          aria-label="Key statistics"
        >
          {stats.map(({ label, value, icon: Icon, color }) => (
            <motion.div
              key={label}
              variants={staggerItem}
              className="glass-card p-6 text-center group hover:border-white/15 transition-all"
              role="listitem"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
                style={{ background: `${color}15`, color }}
              >
                <Icon size={18} />
              </div>
              <div
                className="font-display font-bold text-3xl mb-1"
                style={{ color }}
              >
                {value}
              </div>
              <div className="text-white/40 text-xs font-mono">{label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
