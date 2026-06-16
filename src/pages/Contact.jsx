import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import officeImage from '../images/IMG-20260609-WA0014.jpg'

const fadeSettings = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, ease: 'easeOut' }
}

function Contact() {
  return (
    <div className="space-y-16 pb-10">
      <motion.section {...fadeSettings} className="mx-3 relative overflow-hidden rounded-b-[40px] bg-slate-950 text-white shadow-brand">
        <div className="absolute inset-0">
          <img src={officeImage} alt="Maritime operations image" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-brand-dark/85 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/40 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10 lg:py-28">
          <div className="max-w-3xl space-y-6">
            <p className="text-sm uppercase font-bold tracking-[2px] text-brand-gold">Contact</p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
              Let’s plan the next maritime operation together.
            </h1>
            <p className="text-lg leading-8 text-slate-200 sm:text-xl">
              Connect with INE Oil and Maritime Services for vessel management, fleet operations, and offshore logistics tailored to energy sector needs.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section {...fadeSettings} className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-brand">
          <div className="space-y-6">
            <p className="text-sm uppercase font-bold tracking-[2px] text-brand-dark">Get in touch</p>
            <h2 className="text-3xl font-semibold text-slate-950">INE Oil and Maritime Services Limited</h2>
            <p className="max-w-2xl text-base leading-7 text-slate-600">
              Reach out for maritime support in vessel ownership, offshore logistics, and crew management across West Africa.
            </p>
          </div>
          <div className="mt-10 grid gap-6 grid-cols-1 md:grid-cols-2">
            <div className="rounded-[28px] bg-slate-50 p-6">
              <p className="text-sm uppercase font-bold text-brand-gold">Nigeria address</p>
              <p className="mt-3 text-base leading-7 text-slate-700">8 Ediale Street, GRA, Benin City</p>
          <hr className='mt-5 mb-5' />
              <p className="text-sm uppercase font-bold text-brand-gold">Ghana address</p>
              <p className="mt-3 text-base leading-7 text-slate-700">CJ, 209 Opener Street, off Fra-Fra-Ha, Forter Home, Adenta Municipal</p>
              <p className="mt-1 text-base leading-7 text-slate-700">Greater Accra Region, GD 105-5824</p>
              
            </div>

              <div className="rounded-[28px] bg-slate-50 p-6">
              <p className="text-sm uppercase font-bold text-brand-gold">DIRECT CONTACTS</p>
              <p className="mt-4 text-sm font-bold text-slate-500">Chief (Dr) Francis Inegbeniki</p>
              <p className="mt-2 text-base text-slate-700">MD CEO</p>
              <p className="mt-2 flex items-center text-base text-slate-700">
                <FontAwesomeIcon icon={faPhone} className="mr-3 text-brand-gold" />
                +234 706 333 3336
              </p>
              <hr className='mt-5 mb-5' />
              <p className="mt-4 text-sm font-bold text-slate-500">Jolly Inegbeniki</p>
              <p className="mt-2 text-base text-slate-700">Director</p>
              <p className="mt-2 flex items-center text-base text-slate-700">
                <FontAwesomeIcon icon={faPhone} className="mr-3 text-brand-gold" />
                +234 813 965 0997
              </p>
            </div>
          </div>
          <div className="mt-10 rounded-[28px] bg-[#ffbf00] p-8 text-black">
            <p className="text-3xl font-bold">Send us a brief!</p>
            <p className="mt-4 text-base leading-7">
              Tell us about your vessel needs or logistics requirements, and our operations team will follow up promptly.
            </p>
          </div>
        </div>

        <div className="rounded-[32px] bg-transparent  p-8 text-black">
          <div className="rounded-[28px] overflow-hidden border ">
            <iframe
              title="INE Oil and Maritime Services location map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.7100639484736!2d5.608161275761513!3d6.327246295364999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1041bcd5fd3107f9%3A0x4b1bd7f8d47de77d!2s8%20Ediale%20Street%2C%20GRA%2C%20Benin%20City%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1710000000000"
              className="h-[420px] w-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="mt-8 space-y-4 text-slate-300">
            <p className="text-sm font-bold uppercase tracking-[2px] text-brand-gold">Location</p>
            <p className="text-base text-slate-700 leading-7">A strong operational presence in Nigeria, ready to serve oil and maritime clients throughout West Africa.</p>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default Contact
