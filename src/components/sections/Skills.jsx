import { motion } from 'framer-motion'
import { useScrollReveal, fadeUp, staggerContainer, staggerItem } from '../../hooks/useScrollReveal'
import { skillCategories } from '../../data/portfolio'

function SkillCategory({ category, icon, color, skills, index }) {
  return (
    <motion.div
      variants={staggerItem}
      className="glass-card p-6 group hover:border-white/15 transition-all duration-400 skill-badge"
      style={{ '--cat-color': color }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold"
          style={{ background: `${color}15`, color, border: `1px solid ${color}25` }}
          aria-hidden="true"
        >
          {icon}
        </div>
        <h3
          className="font-display font-semibold text-sm uppercase tracking-wider"
          style={{ color }}
        >
          {category}
        </h3>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2" role="list" aria-label={`${category} skills`}>
        {skills.map((skill) => (
          <span
            key={skill}
            role="listitem"
            className="px-3 py-1.5 rounded-lg text-xs font-mono text-white/60 border border-white/[0.07] bg-white/[0.02] hover:text-white/90 hover:border-white/20 transition-all cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const { ref: headRef, isInView: headInView } = useScrollReveal()
  const { ref: gridRef, isInView: gridInView } = useScrollReveal({ amount: 0.1 })

  return (
    <section id="skills" className="relative py-28 overflow-hidden" aria-label="Skills section">
      {/* Accent orb */}
      <div
        className="absolute top-0 right-0 w-80 h-80 orb pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,229,255,0.06) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

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
            02 / Technical Skills
          </span>
          <h2 className="section-heading text-white mb-4">
            My <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto text-sm leading-relaxed">
            A curated set of technologies I use to design, build, and ship production-ready systems.
          </p>
          <div className="w-16 h-px bg-accent mx-auto mt-6" />
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          ref={gridRef}
          variants={staggerContainer}
          initial="hidden"
          animate={gridInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {skillCategories.map((cat, i) => (
            <SkillCategory key={cat.category} {...cat} index={i} />
          ))}
        </motion.div>

        {/* Tech bar — visual accent */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={gridInView ? 'visible' : 'hidden'}
          className="mt-16 p-6 glass-card overflow-hidden relative"
        >
          <div
            className="absolute inset-0 opacity-20"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(0,229,255,0.1), transparent)' }}
          />
          <p className="text-center text-white/30 text-xs font-mono uppercase tracking-widest mb-4">
            Core focus areas
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Event-Driven Architecture', 'REST API Design', 'Async Processing', 'JWT Auth', 'Idempotency', 'Webhooks', 'Message Queues', 'Responsive UI'].map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-full text-xs font-mono text-accent/70 border border-accent/15 bg-accent/5 hover:bg-accent/10 hover:text-accent transition-all cursor-default"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
