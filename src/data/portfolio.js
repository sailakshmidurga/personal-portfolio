// ─── Personal Info ───────────────────────────────────────────────────────────
export const personal = {
  name: 'Sai Lakshmi Durga Koneti',
  shortName: 'Sai Lakshmi',
  title: 'Full Stack Developer',
  roles: ['Backend Engineer', 'Full Stack Developer', 'API Architect', 'React Developer'],
  tagline: 'Building robust backend systems, event-driven architectures, and responsive UIs.',
  bio: `Computer Science student with hands-on experience building backend services, REST APIs, and event-driven systems. I specialize in JavaScript, Node.js, PostgreSQL, and RabbitMQ, with a strong passion for building scalable, production-ready systems. I also develop responsive user interfaces and optimize performance for large-scale datasets.`,
  location: 'Rajahmundry, Andhra Pradesh, India',
  email: 'konetisailakshmidurga@gmail.com',
  github: 'https://github.com/sailakshmidurga',
  linkedin: 'https://www.linkedin.com/in/sai-lakshmi-k-b7b61a2a4/',
  resumeUrl: 'https://drive.google.com/uc?export=download&id=1JplB-eGTheLdlIvaiAR_sX60LXVQ2AfB',
}

// ─── Skills ──────────────────────────────────────────────────────────────────
export const skillCategories = [
  { category: 'Languages', icon: '⟨/⟩', color: '#00e5ff', skills: ['JavaScript', 'C', 'C++', 'HTML5', 'CSS3'] },
  { category: 'Frontend', icon: '◈', color: '#7b61ff', skills: ['React', 'Tailwind CSS', 'Responsive Design', 'Component Architecture'] },
  { category: 'Backend', icon: '⬡', color: '#f0c040', skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication', 'Webhooks'] },
  { category: 'Databases', icon: '◉', color: '#ff4d6d', skills: ['PostgreSQL', 'MongoDB'] },
  { category: 'Systems & Tools', icon: '⚙', color: '#00e5a0', skills: ['RabbitMQ', 'Event-Driven Architecture', 'Idempotency', 'HMAC Verification'] },
  { category: 'Dev Tools', icon: '⟳', color: '#ff9d4d', skills: ['Git', 'GitHub', 'Postman', 'VS Code'] },
]

// ─── Projects ─────────────────────────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    title: 'Smart Exam Evaluator',
    subtitle: 'AI-Powered Examination Platform',
    description: 'An AI-powered automated examination evaluation and analytics platform. Features intelligent answer assessment, performance analytics dashboard, and streamlined grading workflows for educators.',
    tags: ['AI/ML', 'Node.js', 'React', 'PostgreSQL', 'REST APIs'],
    github: 'https://github.com/Ashritagogula/smart-exam-evaluator',
    live: null,
    featured: true,
    gradient: 'from-cyan-500/20 to-violet-500/20',
    accent: '#00e5ff',
  },
  {
    id: 2,
    title: 'Payment Gateway',
    subtitle: 'Production-Ready Async Processing',
    description: 'A production-ready payment processing system with asynchronous workflows, JWT authentication, webhook notifications, HMAC signature verification, and idempotency keys for bulletproof secure transactions.',
    tags: ['Node.js', 'Express.js', 'PostgreSQL', 'JWT', 'Webhooks', 'HMAC'],
    github: 'https://github.com/sailakshmidurga/payment-gateway-2',
    live: null,
    featured: true,
    gradient: 'from-yellow-500/20 to-orange-500/20',
    accent: '#f0c040',
  },
  {
    id: 3,
    title: 'Order Fulfilment Service',
    subtitle: 'Event-Driven with RabbitMQ',
    description: 'A production-grade event-driven microservice architecture using RabbitMQ. Implements message queues for asynchronous order processing and dedicated worker services for reliable background task execution.',
    tags: ['Node.js', 'RabbitMQ', 'Microservices', 'Event-Driven', 'Message Queues'],
    github: 'https://github.com/sailakshmidurga/user-event-processing-service',
    live: null,
    featured: false,
    gradient: 'from-green-500/20 to-cyan-500/20',
    accent: '#00e5a0',
  },
  {
    id: 4,
    title: 'Chrome Extension Suite',
    subtitle: 'Productivity Tools — Manifest V3',
    description: 'A browser productivity extension built with Chrome Manifest V3 APIs. Features browser event listeners, background scripts for task automation, and a polished UI for improved workflow productivity.',
    tags: ['JavaScript', 'Chrome APIs', 'Manifest V3', 'Browser Extension'],
    github: 'https://github.com/sailakshmidurga/Productivity-Suite-with-Manifest-V3',
    live: null,
    featured: false,
    gradient: 'from-pink-500/20 to-violet-500/20',
    accent: '#ff4d6d',
  },
  {
    id: 5,
    title: 'Personal Portfolio Website',
    subtitle: 'Modern Animated Portfolio',
    description: 'This portfolio itself — a fully responsive animated personal portfolio built with React + Vite, Tailwind CSS, and Framer Motion. Features parallax effects, scroll-triggered animations, and a premium dark UI.',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    github: '#',
    live: null,
    featured: false,
    gradient: 'from-violet-500/20 to-pink-500/20',
    accent: '#7b61ff',
  },
]

// ─── Experience ───────────────────────────────────────────────────────────────
export const experience = [
  {
    role: 'Frontend Development Intern',
    company: 'Technical Hub',
    period: '2025',
    type: 'Internship',
    points: [
      'Built responsive webpages using HTML and CSS with cross-browser compatibility',
      'Developed user-friendly layouts and improved overall website styling and UX',
      'Collaborated with team members to deliver professional web projects on schedule',
    ],
    tech: ['HTML', 'CSS', 'Responsive Design'],
    certificateUrl: 'https://drive.google.com/file/d/1YSuF07SSnmm8LPcnmskLQqRjJngu4yik/view?usp=sharing',
  },
]

// ─── Education ────────────────────────────────────────────────────────────────
export const education = [
  { degree: 'B.Tech — Computer Science & Engineering', institution: 'Aditya College of Engineering and Technology', score: 'CGPA: 8.96', scoreType: 'cgpa', icon: '🎓', current: true },
  { degree: 'Intermediate (MPC)', institution: 'Sree Vijaya Durga Junior College', score: '985 / 1000', scoreType: 'marks', icon: '📘', current: false },
  { degree: 'SSC (10th Grade)', institution: 'Sraddha Smart School', score: '600 / 600', scoreType: 'marks', icon: '🏫', current: false },
]

// ─── Certifications ───────────────────────────────────────────────────────────
export const certifications = [
  {
    title: 'MongoDB Certificate',
    issuer: 'MongoDB',
    issuerColor: '#00ed64',
    date: 'March 2026',
    description: 'Certified in MongoDB database design, querying, aggregation pipelines, and application development best practices.',
    skills: ['MongoDB', 'Aggregation', 'Indexing', 'Atlas'],
    viewUrl: 'https://drive.google.com/file/d/1CjnF82PjWMUEjC9hbrIfNkr7FV2Qs43W/view?usp=sharing',
    verifyUrl: 'https://www.credly.com/badges/66100dfe-d13c-4c5f-9799-10cd486339ed/public_url',
    icon: '🍃',
    iconBg: '#00ed6415',
    borderColor: '#00ed6440',
    featured: true,
  },
  {
    title: 'Red Hat Certified System Administrator',
    issuer: 'Red Hat',
    issuerColor: '#ee0000',
    date: 'June 2024',
    description: 'Certified in Linux system administration, file systems, user management, networking, and security hardening.',
    skills: ['Linux', 'RHEL', 'Shell', 'Networking'],
    viewUrl: 'https://drive.google.com/file/d/1-jcLcBjz36jx_4Sy4VB7Sl5MOYkQbN_y/view?usp=sharing',
    verifyUrl: 'https://www.credly.com/badges/f60c4460-a409-4516-8cee-26e36a8e11fc/public_url',
    icon: '🎩',
    iconBg: '#ee000015',
    borderColor: '#ee000030',
    featured: false,
  },
  {
    title: 'HTML & CSS Certification',
    issuer: 'Online Certification',
    issuerColor: '#f0c040',
    date: 'August 2024',
    description: 'Certified in HTML5 semantic markup, CSS3 styling, flexbox, grid layouts, and responsive web design.',
    skills: ['HTML5', 'CSS3', 'Flexbox', 'Responsive'],
    viewUrl: 'https://drive.google.com/file/d/1mryfBgJj2LOVEWJjL0fbsELXKDggbfuE/view?usp=sharing',
    verifyUrl: 'https://drive.google.com/file/d/1mryfBgJj2LOVEWJjL0fbsELXKDggbfuE/view?usp=sharing',
    icon: '◈',
    iconBg: '#f0c04015',
    borderColor: '#f0c04030',
    featured: false,
  },
  {
    title: 'Cisco Operating Basics',
    issuer: 'Cisco',
    issuerColor: '#00bceb',
    date: 'February 2025',
    description: 'Certified in networking fundamentals, operating system basics, and Cisco IOS command-line essentials.',
    skills: ['Networking', 'Cisco IOS', 'TCP/IP', 'OS Basics'],
    viewUrl: 'https://drive.google.com/file/d/11glVEAaD2RKv7z96OAUawUVF_xN-6-uG/view?usp=sharing',
    verifyUrl: 'https://drive.google.com/file/d/11glVEAaD2RKv7z96OAUawUVF_xN-6-uG/view?usp=sharing',
    icon: '◉',
    iconBg: '#00bceb15',
    borderColor: '#00bceb30',
    featured: false,
  },
]

// ─── Nav Links ────────────────────────────────────────────────────────────────
export const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]
