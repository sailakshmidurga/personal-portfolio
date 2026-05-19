import { motion } from 'framer-motion'
import { ExternalLink, ShieldCheck, Calendar } from 'lucide-react'
import { useScrollReveal, fadeUp, staggerContainer, staggerItem } from '../../hooks/useScrollReveal'
import { certifications } from '../../data/portfolio'

// ─── Single certification card ────────────────────────────────────────────────
function CertCard({ cert }) {
  return (
    <motion.article
      variants={staggerItem}
      className="relative rounded-2xl p-6 flex flex-col gap-0 overflow-hidden transition-all duration-400 group"
      style={{
        background: 'rgba(255,255,255,0.02)',
        border: `1px solid ${cert.featured ? cert.issuerColor + '55' : 'rgba(255,255,255,0.07)'}`,
        boxShadow: cert.featured ? `0 0 30px ${cert.issuerColor}10` : 'none',
      }}
      whileHover={{
        y: -5,
        borderColor: cert.issuerColor + '55',
        boxShadow: `0 0 32px ${cert.issuerColor}18`,
        transition: { duration: 0.25 },
      }}
      aria-label={`Certificate: ${cert.title}`}
    >
      {/* Subtle top glow line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${cert.issuerColor}60, transparent)` }}
        aria-hidden="true"
      />

      {/* Top row: icon + issuer badge */}
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
          style={{ background: cert.iconBg, border: `1px solid ${cert.borderColor}` }}
          aria-hidden="true"
        >
          {cert.icon}
        </div>
        <span
          className="text-xs font-mono font-semibold px-3 py-1.5 rounded-lg border"
          style={{ color: cert.issuerColor, borderColor: cert.issuerColor + '40', background: cert.issuerColor + '10' }}
        >
          {cert.issuer}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-display font-bold text-white text-base mb-2 leading-snug">
        {cert.title}
      </h3>

      {/* Description */}
      <p className="text-white/40 text-xs leading-relaxed mb-4 flex-1">
        {cert.description}
      </p>

      {/* Skills chips */}
      <div className="flex flex-wrap gap-x-3 gap-y-1 mb-5" role="list" aria-label="Skills covered">
        {cert.skills.map((skill) => (
          <span key={skill} role="listitem" className="text-xs font-mono text-white/45">
            <span style={{ color: cert.issuerColor }}>✓</span>{skill}
          </span>
        ))}
      </div>

      {/* Divider */}
      <div className="h-px bg-white/[0.06] mb-4" aria-hidden="true" />

      {/* Footer: date + action buttons */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-1.5 text-xs text-white/30 font-mono">
          <Calendar size={11} aria-hidden="true" />
          <span>{cert.date}</span>
        </div>

        {/* View + Verify buttons */}
        <div className="flex items-center gap-3">
          {cert.viewUrl && (
            <motion.a
              href={cert.viewUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${cert.title} certificate`}
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all"
              style={{
                color: cert.issuerColor,
                background: cert.issuerColor + '12',
                border: `1px solid ${cert.issuerColor}35`,
              }}
              onMouseEnter={e => { e.currentTarget.style.background = cert.issuerColor + '22' }}
              onMouseLeave={e => { e.currentTarget.style.background = cert.issuerColor + '12' }}
            >
              <ExternalLink size={11} aria-hidden="true" />
              View
            </motion.a>
          )}
          {cert.verifyUrl && cert.verifyUrl !== cert.viewUrl && (
            <motion.a
              href={cert.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Verify ${cert.title} certificate on Credly`}
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono text-white/50 hover:text-white/80 transition-all"
              style={{ border: '1px solid rgba(255,255,255,0.1)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.22)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)' }}
            >
              <ShieldCheck size={11} aria-hidden="true" />
              Verify
            </motion.a>
          )}
          {cert.verifyUrl && cert.verifyUrl === cert.viewUrl && (
            <motion.a
              href={cert.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Verify ${cert.title} certificate`}
              whileHover={{ scale: 1.05, y: -1 }}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono text-white/50 hover:text-white/80 transition-all"
              style={{ border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <ShieldCheck size={11} aria-hidden="true" />
              Verify
            </motion.a>
          )}
          {!cert.viewUrl && !cert.verifyUrl && (
            <span className="text-xs font-mono text-white/20 italic">Certificate pending</span>
          )}
        </div>
      </div>
    </motion.article>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────
export default function Certifications() {
  const { ref: headRef, isInView: headInView } = useScrollReveal()
  const { ref: gridRef, isInView: gridInView } = useScrollReveal({ amount: 0.05 })

  const issuers = [...new Set(certifications.map(c => c.issuer))].length

  return (
    <section id="certifications" className="relative py-28" aria-label="Certifications section">
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,237,100,0.05) 0%, transparent 70%)', filter: 'blur(40px)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={headRef}
          variants={fadeUp}
          initial="hidden"
          animate={headInView ? 'visible' : 'hidden'}
          className="text-center mb-6"
        >
          <span className="font-mono text-xs accent-text uppercase tracking-[0.3em] mb-4 block">
            05 / Certifications
          </span>
          <h2 className="section-heading text-white mb-4">
            Verified <span className="gradient-text">Credentials</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto text-sm leading-relaxed">
            Industry-recognized certifications validating my technical expertise.
          </p>
          <div className="w-16 h-px bg-accent mx-auto mt-6" />
        </motion.div>

        {/* Issuer count badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={headInView ? 'visible' : 'hidden'}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.02]">
            <span className="font-display font-bold text-accent text-sm">{issuers}+</span>
            <span className="text-white/40 text-xs font-mono">Issuers</span>
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div
          ref={gridRef}
          variants={staggerContainer}
          initial="hidden"
          animate={gridInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto"
        >
          {certifications.map((cert) => (
            <CertCard key={cert.title} cert={cert} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
