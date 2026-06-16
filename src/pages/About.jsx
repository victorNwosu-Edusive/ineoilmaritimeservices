import { motion } from 'framer-motion'
import officeImage from '../images/IMG-20260609-WA0014.jpg'

const fadeSettings = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, ease: 'easeOut' }
}

function About() {
  return (
    <div className="space-y-16 pb-20">
      <motion.section {...fadeSettings} className="mx-3 relative overflow-hidden rounded-b-[40px] bg-slate-950 text-white shadow-brand">
        <div className="absolute inset-0">
                  <img src={officeImage} alt="Maritime operations image" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-brand-dark/85 mix-blend-multiply" />
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/40 to-transparent" />
                </div>
                <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10 lg:py-28">
                  <div className="max-w-3xl space-y-6">
                    <p className="text-sm uppercase font-bold tracking-[2px] text-brand-gold">About INE OIL</p>
                    <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
                      A trusted indigenous maritime services partner in West Africa.
                    </h1>
                    <p className="text-lg leading-8 text-slate-200 sm:text-xl">
                      INE Oil and Maritime Services Limited is a premier indigenous maritime company in Nigeria. We specialize in vessel ownership, ship management, and offshore logistics while upholding strict safety and compliance standards.
                    </p>
                  </div>
                </div>
      </motion.section>

      <motion.section {...fadeSettings} className="grid gap-10 lg:grid-cols-2">
        <div className="rounded-[32px] border border-slate-200 bg-[#002147] p-10 text-white shadow-brand">
          <p className="text-sm uppercase tracking-[2px] font-bold text-brand-gold">Our Mission</p>
          <h2 className="mt-4 text-3xl font-semibold">Maximize asset value through safe, efficient vessel management.</h2>
          <p className="mt-6 text-base leading-8 text-slate-200">
            To maximize client asset value through safe, efficient, and professional vessel management, while upholding the highest global standards of operational excellence and environmental responsibility.
          </p>
        </div>

        <div className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-brand">
          <p className="text-sm uppercase tracking-[2px] font-bold text-brand-gold">Our Vision</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-950">Trusted indigenous partner for maritime services.</h2>
          <p className="mt-6 text-base leading-8 text-slate-600">
            To be the most trusted indigenous maritime services partner in West Africa, recognized for fleet management excellence and enduring client partnerships.
          </p>
        </div>
      </motion.section>
    </div>
  )
}

export default About
