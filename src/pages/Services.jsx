import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShip, faUserGear, faRoute } from '@fortawesome/free-solid-svg-icons'
import serviceHero from '../images/IMG-20260609-WA0016.jpg'

const fadeSettings = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, ease: 'easeOut' }
}

const serviceCards = [
  {
    title: 'Fleet Ownership & Operations',
    icon: faShip,
    description: 'End-to-end operation of a diverse, well-maintained fleet supporting coastal and offshore logistics across West Africa.',
    points: ['Coastal shipment support', 'Vessel oversight', 'Operational readiness']
  },
  {
    title: 'Vessel Management',
    icon: faUserGear,
    description: 'Comprehensive technical and crew management services designed to ensure optimal vessel performance, regulatory compliance, and cost efficiency.',
    points: ['Technical maintenance', 'Crew certification', 'Regulatory compliance']
  },
  {
    title: 'Maritime Logistics Support',
    icon: faRoute,
    description: 'Tailored supply chain and logistical solutions engineered for the unique demands of the oil, gas, and energy industries.',
    points: ['Cargo coordination', 'Offshore provisioning', 'Logistics planning']
  }
]

const strengths = [
  'HSE-driven project execution',
  'Certified crew and technical teams',
  'Local expertise with global service standards',
  'Fast, reliable maritime logistics support'
]

function Services() {
  return (
    <div className="space-y-16 pb-10">
      <motion.section
        {...fadeSettings}
        className="mx-5 relative overflow-hidden rounded-[40px] bg-slate-950 text-white shadow-brand"
      >
        <div className="absolute inset-0">
          <img src={serviceHero} alt="Offshore vessels and maritime logistics" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-brand-dark/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/40 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10 lg:py-28">
          <div className="max-w-3xl space-y-6">
            <p className="text-sm uppercase font-bold tracking-[2px] text-brand-gold">Our services</p>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
              Maritime service solutions built for safety, reliability, and offshore performance.
            </h1>
            <p className="text-lg leading-8 text-slate-200 sm:text-xl">
              From fleet ownership to vessel management and logistics support, INE delivers the operational discipline and local knowledge energy clients require.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section {...fadeSettings} className="mx-4 grid gap-6 lg:grid-cols-3">
        {serviceCards.map((service) => (
          <div key={service.title} className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-brand transition hover:-translate-y-1 hover:shadow-xl">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-gold/10 text-brand-gold shadow-sm">
              <FontAwesomeIcon icon={service.icon} className="h-6 w-6" />
            </div>
            <h2 className="mt-6 text-2xl font-semibold text-slate-950">{service.title}</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">{service.description}</p>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              {service.points.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-brand-dark" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </motion.section>

      <motion.section {...fadeSettings} className="grid gap-10 rounded-[32px] border border-slate-200 bg-brand-dark/95 p-10 text-white shadow-brand lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <p className="text-3xl font-bold text-brand-gold">Why INE?</p>
          <h2 className="text-3xl font-semibold">A maritime partner designed for energy-sector demands.</h2>
          <p className="max-w-xl text-base leading-8 text-slate-200">
            INE combines local expertise, certified crew management, and offshore logistics solutions to ensure your vessels remain compliant, ready, and operational.
          </p>
        </div>
        <div className="rounded-[28px] bg-slate-950/90 p-8 text-slate-100">
          <p className="text-sm uppercase tracking-[0.35em] text-brand-gold">Core strengths</p>
          <ul className="mt-6 space-y-4 text-base leading-8">
            {strengths.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </motion.section>

      <motion.section {...fadeSettings} className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-brand">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[2px] text-brand-dark">Service delivery</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-950">Operational readiness from planning to execution.</h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
              We pair fleet care, crew competence, and logistics coordination to support offshore and coastal projects across Nigerian waters.
            </p>
          </div>
          <div className="rounded-[28px] bg-slate-50 p-8">
            <div className="space-y-5">
              <div className="rounded-3xl bg-brand-gold p-5">
                <p className="text-sm uppercase tracking-[2px] font-bold text-brand-dark">Responsive logistics</p>
                <p className="mt-3 text-base leading-7 text-slate-700">Flexible provisioning, spare parts delivery, and support for offshore missions.</p>
              </div>
              <div className="rounded-3xl bg-slate-900 p-5 text-white">
                <p className="text-sm uppercase tracking-[2px] font-bold text-brand-gold">Vessel management</p>
                <p className="mt-3 text-base leading-7 text-slate-200">Technical oversight, regulatory compliance, and crew operations for reliable asset performance.</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default Services
