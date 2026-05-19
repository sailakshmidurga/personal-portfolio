import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Github, Linkedin, Send, CheckCircle, AlertCircle, MapPin, Clock } from 'lucide-react'
import { useScrollReveal, fadeUp, fadeLeft, fadeRight } from '../../hooks/useScrollReveal'
import { personal } from '../../data/portfolio'

// ─── Email validation ─────────────────────────────────────────────────────────
const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

// ─── EmailJS config — values come from .env file ──────────────────────────────
// Create a .env file in your project root with these three values.
// See the setup guide in README.md for step-by-step EmailJS instructions.
const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  || ''
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || ''
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  || ''

export default function Contact() {
  const [form, setForm]     = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const { ref: headRef, isInView: headInView } = useScrollReveal()
  const { ref: leftRef, isInView: leftInView } = useScrollReveal()
  const { ref: rightRef, isInView: rightInView } = useScrollReveal()

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!isValidEmail(form.email)) e.email = 'Enter a valid email address'
    if (!form.message.trim()) e.message = 'Message is required'
    else if (form.message.trim().length < 10) e.message = 'Message must be at least 10 characters'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }

    // Guard: EmailJS not configured yet
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setErrorMsg('Email service not configured. Please set up your .env file. See README for instructions.')
      setStatus('error')
      setTimeout(() => setStatus('idle'), 6000)
      return
    }

    setStatus('sending')

    try {
      // Dynamic import — EmailJS SDK loaded only when actually needed
      const emailjs = await import('@emailjs/browser')

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:    form.name.trim(),
          from_email:   form.email.trim(),
          subject:      form.subject.trim() || 'Portfolio Contact',
          message:      form.message.trim(),
          to_name:      'Sai Lakshmi',
          reply_to:     form.email.trim(),
        },
        EMAILJS_PUBLIC_KEY,
      )

      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus('idle'), 6000)
    } catch (err) {
      console.error('EmailJS error:', err)
      setErrorMsg('Failed to send. Please try emailing directly.')
      setStatus('error')
      setTimeout(() => setStatus('idle'), 6000)
    }
  }

  const socials = [
    { icon: Github,   label: 'GitHub',   href: personal.github,              username: 'sailakshmidurga',             color: '#e0e0f0' },
    { icon: Linkedin, label: 'LinkedIn', href: personal.linkedin,            username: 'sai-lakshmi-k-b7b61a2a4',     color: '#0ea5e9' },
    { icon: Mail,     label: 'Email',    href: `mailto:${personal.email}`,   username: personal.email,                color: '#00e5ff' },
  ]

  return (
    <section id="contact" className="relative py-28 overflow-hidden" aria-label="Contact section">
      <div
        className="absolute bottom-0 right-0 w-96 h-96 orb pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(123,97,255,0.08) 0%, transparent 70%)' }}
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
            06 / Get In Touch
          </span>
          <h2 className="section-heading text-white mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto text-sm leading-relaxed">
            Open to new opportunities, collaborations, or just a good conversation about backend systems.
          </p>
          <div className="w-16 h-px bg-accent mx-auto mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Info */}
          <motion.div
            ref={leftRef}
            variants={fadeLeft}
            initial="hidden"
            animate={leftInView ? 'visible' : 'hidden'}
            className="space-y-7"
          >
            <div className="glass-card p-7">
              <h3 className="font-display font-semibold text-white mb-2">Ready to build something great?</h3>
              <p className="text-white/45 text-sm leading-relaxed">
                Whether you have a project in mind, a question about my work, or just want to connect — my inbox is always open.
              </p>
            </div>

            <div className="space-y-3">
              {socials.map(({ icon: Icon, label, href, username, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={`${label}: ${username}`}
                  whileHover={{ x: 6 }}
                  className="glass-card p-4 flex items-center gap-4 group hover:border-white/15 transition-all"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${color}12`, color, border: `1px solid ${color}20` }}
                    aria-hidden="true"
                  >
                    <Icon size={16} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white/30 text-xs font-mono uppercase tracking-widest">{label}</p>
                    <p className="text-white/70 text-sm truncate group-hover:text-white transition-colors">{username}</p>
                  </div>
                  <div className="text-white/20 group-hover:text-white/40 transition-colors">→</div>
                </motion.a>
              ))}
            </div>

            <div className="flex flex-col gap-3 text-sm text-white/40">
              <div className="flex items-center gap-2">
                <MapPin size={13} className="text-accent/60" aria-hidden="true" />
                <span>{personal.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={13} className="text-accent/60" aria-hidden="true" />
                <span>IST (UTC+5:30) · Available for remote work</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            ref={rightRef}
            variants={fadeRight}
            initial="hidden"
            animate={rightInView ? 'visible' : 'hidden'}
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card p-8 space-y-5"
              noValidate
              aria-label="Contact form"
            >
              {/* Name + Email */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono text-white/40 mb-2 uppercase tracking-wider">
                    Name *
                  </label>
                  <input
                    id="contact-name" name="name" type="text"
                    value={form.name} onChange={handleChange}
                    placeholder="Your name"
                    className="form-input w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 transition-all"
                    aria-required="true" aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="text-rose text-xs mt-1.5 flex items-center gap-1" role="alert">
                      <AlertCircle size={10} /> {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono text-white/40 mb-2 uppercase tracking-wider">
                    Email *
                  </label>
                  <input
                    id="contact-email" name="email" type="email"
                    value={form.email} onChange={handleChange}
                    placeholder="your@email.com"
                    className="form-input w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 transition-all"
                    aria-required="true" aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-rose text-xs mt-1.5 flex items-center gap-1" role="alert">
                      <AlertCircle size={10} /> {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="contact-subject" className="block text-xs font-mono text-white/40 mb-2 uppercase tracking-wider">
                  Subject
                </label>
                <input
                  id="contact-subject" name="subject" type="text"
                  value={form.subject} onChange={handleChange}
                  placeholder="What's this about?"
                  className="form-input w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" className="block text-xs font-mono text-white/40 mb-2 uppercase tracking-wider">
                  Message *
                </label>
                <textarea
                  id="contact-message" name="message" rows={5}
                  value={form.message} onChange={handleChange}
                  placeholder="Tell me about your project or idea..."
                  className="form-input w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 transition-all resize-none"
                  aria-required="true" aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="text-rose text-xs mt-1.5 flex items-center gap-1" role="alert">
                    <AlertCircle size={10} /> {errors.message}
                  </p>
                )}
              </div>

              {/* Error banner */}
              <AnimatePresence>
                {status === 'error' && errorMsg && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    className="flex items-start gap-2 p-3 rounded-xl bg-rose/10 border border-rose/20 text-rose text-xs"
                    role="alert"
                  >
                    <AlertCircle size={13} className="flex-shrink-0 mt-0.5" />
                    {errorMsg}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={status === 'sending' || status === 'success'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary justify-center disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:transform-none"
                aria-label="Send message"
              >
                <AnimatePresence mode="wait">
                  {status === 'idle' && (
                    <motion.span key="idle" className="flex items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <Send size={15} /> Send Message
                    </motion.span>
                  )}
                  {status === 'sending' && (
                    <motion.span key="sending" className="flex items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <span className="w-4 h-4 border-2 border-void/40 border-t-void rounded-full animate-spin" aria-hidden="true" />
                      Sending...
                    </motion.span>
                  )}
                  {status === 'success' && (
                    <motion.span key="success" className="flex items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <CheckCircle size={15} /> Message Sent — I'll reply soon!
                    </motion.span>
                  )}
                  {status === 'error' && !errorMsg && (
                    <motion.span key="error" className="flex items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <AlertCircle size={15} /> Failed — Try Again
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>

              <p className="text-center text-white/25 text-xs">
                Or reach me directly at{' '}
                <a href={`mailto:${personal.email}`} className="accent-text hover:underline">
                  {personal.email}
                </a>
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
