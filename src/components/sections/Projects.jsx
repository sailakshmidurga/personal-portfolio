import { motion } from 'framer-motion'
import { Github, ExternalLink, Code2 } from 'lucide-react'
import { useScrollReveal, fadeUp, staggerContainer, staggerItem } from '../../hooks/useScrollReveal'
import { projects } from '../../data/portfolio'

function ProjectCard({ project }) {
  const hasValidGithub = project.github && project.github !== '#'

  return (
    <motion.article
      variants={staggerItem}
      className="glass-card p-7 project-card group relative overflow-hidden"
      aria-label={`Project: ${project.title}`}
    >
      {/* Hover gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        aria-hidden="true"
      />
      {/* Corner accent */}
      <div
        className="absolute top-0 right-0 w-24 h-24 rounded-bl-3xl opacity-10 group-hover:opacity-20 transition-opacity"
        style={{ background: project.accent }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col h-full">
        {/* Subtitle + Title */}
        <div className="mb-4">
          <span
            className="text-xs font-mono uppercase tracking-widest mb-2 block opacity-60"
            style={{ color: project.accent }}
          >
            {project.subtitle}
          </span>
          <h3 className="font-display font-bold text-xl text-white leading-tight">
            {project.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-white/50 text-sm leading-relaxed mb-5 flex-1">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-6" role="list" aria-label="Technologies used">
          {project.tags.map((tag) => (
            <span
              key={tag}
              role="listitem"
              className="px-2.5 py-1 rounded-md text-xs font-mono"
              style={{
                color: project.accent,
                background: `${project.accent}12`,
                border: `1px solid ${project.accent}25`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* ─── Action Buttons ─── */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/[0.06]">
          {/* Source Code button */}
          {hasValidGithub ? (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} source code on GitHub`}
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all"
              style={{
                color: project.accent,
                background: `${project.accent}10`,
                border: `1px solid ${project.accent}30`,
              }}
              onMouseEnter={e => { e.currentTarget.style.background = `${project.accent}20`; e.currentTarget.style.boxShadow = `0 0 16px ${project.accent}20` }}
              onMouseLeave={e => { e.currentTarget.style.background = `${project.accent}10`; e.currentTarget.style.boxShadow = 'none' }}
            >
              <Github size={13} aria-hidden="true" />
              Source Code
            </motion.a>
          ) : (
            <span className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono text-white/20 border border-white/[0.06] cursor-not-allowed">
              <Code2 size={13} aria-hidden="true" />
              Repo Coming Soon
            </span>
          )}

          {/* Live Demo button — only shown when live URL exists */}
          {project.live && (
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View live demo of ${project.title}`}
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-medium border border-white/10 text-white/60 hover:text-white hover:border-white/25 transition-all"
            >
              <ExternalLink size={13} aria-hidden="true" />
              Live Demo
            </motion.a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const { ref: headRef, isInView: headInView } = useScrollReveal()
  const { ref: gridRef, isInView: gridInView } = useScrollReveal({ amount: 0.05 })

  return (
    <section id="projects" className="relative py-28" aria-label="Projects section">
      {/* Background orb */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 orb pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(0,229,255,0.05) 0%, transparent 70%)' }}
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
            03 / Projects
          </span>
          <h2 className="section-heading text-white mb-4">
            What I've <span className="gradient-text">Built</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto text-sm leading-relaxed">
            Production-quality projects showcasing backend architecture, API design, and full stack development.
          </p>
          <div className="w-16 h-px bg-accent mx-auto mt-6" />
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          ref={gridRef}
          variants={staggerContainer}
          initial="hidden"
          animate={gridInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={gridInView ? 'visible' : 'hidden'}
          className="text-center mt-14"
        >
          <a
            href="https://github.com/sailakshmidurga"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <Github size={16} />
            See All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
