import { Suspense, lazy } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'

// Lazy load below-fold sections for performance
const About          = lazy(() => import('./components/sections/About'))
const Skills         = lazy(() => import('./components/sections/Skills'))
const Projects       = lazy(() => import('./components/sections/Projects'))
const Experience     = lazy(() => import('./components/sections/Experience'))
const Certifications = lazy(() => import('./components/sections/Certifications'))
const Contact        = lazy(() => import('./components/sections/Contact'))

function SectionLoader() {
  return (
    <div className="py-28 flex items-center justify-center" aria-label="Loading section">
      <div className="w-8 h-8 border-2 border-accent/20 border-t-accent rounded-full animate-spin" />
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-void text-white">
      {/* Accessibility: skip to main content */}
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-void focus:rounded-lg focus:font-semibold"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />

        <div className="section-divider" aria-hidden="true" />

        <Suspense fallback={<SectionLoader />}>
          <About />
        </Suspense>

        <div className="section-divider" aria-hidden="true" />

        <Suspense fallback={<SectionLoader />}>
          <Skills />
        </Suspense>

        <div className="section-divider" aria-hidden="true" />

        <Suspense fallback={<SectionLoader />}>
          <Projects />
        </Suspense>

        <div className="section-divider" aria-hidden="true" />

        <Suspense fallback={<SectionLoader />}>
          <Experience />
        </Suspense>

        <div className="section-divider" aria-hidden="true" />

        <Suspense fallback={<SectionLoader />}>
          <Certifications />
        </Suspense>

        <div className="section-divider" aria-hidden="true" />

        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>
      </main>

      <div className="section-divider" aria-hidden="true" />
      <Footer />
    </div>
  )
}
