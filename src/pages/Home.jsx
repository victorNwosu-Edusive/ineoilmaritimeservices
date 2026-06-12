import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShip, faUserGear, faRoute } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import heroImage from '../images/IMG-20260609-WA0013.jpg'
import showcaseImage from '../images/IMG-20260609-WA0015.jpg'

const fadeSettings = {
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, ease: 'easeOut' }
}

const stats = [
  { value: '20+', label: 'Years experience' },
  { value: '50+', label: 'Projects completed' },
  { value: '24/7', label: 'Operational readiness' }
]

const aboutPoints = [
  {
    title: 'Local expertise',
    description: 'A premier indigenous maritime company in Nigeria with deep operational knowledge of West African waters.'
  },
  {
    title: 'Safety & compliance',
    description: 'Full adherence to NIMASA, ISO, and international HSE standards across all services.'
  },
  {
    title: 'Operational excellence',
    description: 'Dedicated teams and certified crew committed to maximizing uptime and performance.'
  },
  {
    title: 'Energy sector focus',
    description: 'Tailored vessel management and logistics support for oil, gas, and energy operations.'
  }
]

const services = [
  {
    title: 'Fleet Ownership & Operations',
    icon: faShip,
    description: 'End-to-end operation of a diverse, well-maintained fleet supporting coastal and offshore logistics.'
  },
  {
    title: 'Vessel Management',
    icon: faUserGear,
    description: 'Comprehensive technical and crew management services designed to ensure performance and compliance.'
  },
  {
    title: 'Maritime Logistics Support',
    icon: faRoute,
    description: 'Tailored supply chain and logistical solutions engineered for oil and energy operations.'
  }
]

const advantagePoints = [
  'Certified crews and technical teams',
  'Strict regulatory and environmental compliance',
  'Fast response logistics for offshore projects',
  'Trusted local leadership with global standards'
]

function Home() {
  return (
    <div className="space-y-20 pb-20">
      <motion.section {...fadeSettings} className="relative mx-0 overflow-hidden shadow-brand">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Maritime vessel in West African waters" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-brand-dark/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/50 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_0.9fr] lg:items-end">
            <div className="max-w-2xl text-white">
              <span className="inline-flex rounded-full border border-brand-gold/40 bg-brand-gold/10 px-4 py-1 text-xs uppercase tracking-[0.35em] text-brand-gold">
                Reliable maritime solutions
              </span>
              <h1 className="mt-8 text-4xl font-semibold tracking-tight sm:text-6xl">
                Delivering safe maritime operations for West Africa’s energy sector.
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-200 sm:text-xl">
                INE Oil and Maritime Services Limited combines local insights, certified crews, and offshore logistics excellence to support vessel owners and energy operators across West Africa.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center rounded-full bg-brand-gold px-8 py-4 text-sm font-semibold text-slate-950 transition hover:bg-[#b58c2e]"
                >
                  Explore services
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm font-semibold text-white transition hover:border-brand-gold hover:text-brand-gold"
                >
                  Contact the team
                </Link>
              </div>
              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {stats.map((item) => (
                  <div key={item.label} className="rounded-[24px] border border-white/10 bg-red-700/50 p-5 backdrop-blur-xl">
                    <p className="text-3xl font-semibold text-brand-gold">{item.value}</p>
                    <p className="mt-2 text-sm uppercase tracking-[0.35em] text-slate-300">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/10 p-5 shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.35em] text-brand-gold">Operational strength</p>
              <h2 className="mt-4 text-3xl font-semibold text-white">Local maritime operations with a global standard of delivery.</h2>
              <div className="mt-6 space-y-4 text-slate-200">
                <p>
                  Built for offshore reliability, INE delivers crew management, fleet oversight, and logistics coordination for energy clients across Nigerian waters.
                </p>
                <p>
                  Our portfolio of vessel ownership, technical management, and maritime logistics ensures safe, compliant, and performance-driven operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section {...fadeSettings} className="px-8 grid gap-12 lg:grid-cols-[0.95fr_1.05fr] ">
        <div className="space-y-6 ">
          <p className="text-sm uppercase tracking-[2px] font-bold text-brand-dark">About INE</p>
          <h2 className="text-3xl font-semibold text-slate-950">A trusted indigenous maritime services partner in West Africa.</h2>
          <p className="max-w-3xl text-lg leading-8 text-slate-600">
            INE Oil and Maritime Services Limited is a premier indigenous maritime company in Nigeria. We specialize in vessel ownership, ship management, and offshore logistics while upholding strict safety and compliance standards.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {aboutPoints.map((item) => (
              <div key={item.title} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-brand">
                <p className="text-sm uppercase font-bold text-red-700">{item.title}</p>
                <p className="mt-3 text-sm leading-7 text-slate-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[32px] overflow-hidden border border-slate-200 shadow-brand">
          <img src={showcaseImage} alt="Maritime logistics and offshore operations" className="h-full w-full object-cover" />
        </div>
      </motion.section>

      <motion.section {...fadeSettings} className="space-y-10 px-8">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[2px] font-bold text-brand-dark">Core services</p>
          <h2 className="text-3xl font-semibold text-slate-950">Services designed for energy-sector reliability.</h2>
          <p className="max-w-3xl text-lg leading-8 text-slate-600">
            Our services support vessel ownership, technical management, and offshore logistics with tailored planning, compliance, and safe execution.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((item) => (
            <div key={item.title} className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-brand transition hover:-translate-y-1 hover:shadow-xl">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-gold/10 text-brand-gold shadow-sm">
                <FontAwesomeIcon icon={item.icon} className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-4 text-base leading-7 text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section {...fadeSettings} className="md:mx-8 rounded-[36px] border border-slate-200 bg-brand-dark/95 p-10 text-white shadow-brand">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            <p className="text-3xl font-bold text-brand-gold">The INE advantage</p>
            <h2 className="text-3xl font-semibold">Safety, compliance, and local operational excellence.</h2>
            <p className="max-w-xl text-base leading-8 text-slate-200">
              Our teams deliver dependable maritime services that protect assets, ensure crew readiness, and keep operations aligned with the highest standards.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {advantagePoints.map((item) => (
              <div key={item} className="rounded-[28px] bg-slate-950/90 p-6 text-slate-100">
                <p className="font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default Home
