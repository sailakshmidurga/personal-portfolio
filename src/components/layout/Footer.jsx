import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import { personal, navLinks } from '../../data/portfolio'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socials = [
    { icon: Github, href: personal.github, label: 'GitHub' },
    { icon: Linkedin, href: personal.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${personal.email}`, label: 'Email' },
  ]

  const scrollTo = (href) => {
    const id = href.slice(1)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-white/[0.05] bg-surface/50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="font-display font-bold text-2xl mb-3">
              <span className="accent-text">SLD</span>
              <span className="text-white/30 text-sm font-mono ml-2">.dev</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Building robust systems and elegant interfaces — one commit at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-white/70 text-xs uppercase tracking-widest mb-4">
              Navigation
            </h3>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="text-white/40 hover:text-white/80 text-sm text-left transition-colors w-fit"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-white/70 text-xs uppercase tracking-widest mb-4">
              Connect
            </h3>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -4 }}
                  className="w-10 h-10 glass-card flex items-center justify-center text-white/50 hover:text-accent hover:border-accent/30 transition-colors"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
            <p className="text-white/30 text-xs mt-4">{personal.email}</p>
          </div>
        </div>

        <div className="section-divider mb-8" />

        <div className="flex items-center justify-center text-white/25 text-xs">
          <p>© {currentYear} Sai Lakshmi Durga Koneti. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
