import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Headset, Ship, ShieldCheck, LifeBuoy } from 'lucide-react';
import { faShip, faUserGear, faRoute, faLifeRing, faShieldAlt, faClock, faUsers } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import heroImage from '../images/IMG-20260609-WA0013.jpg'
import showcaseImage from '../images/aboutimage.png'
import officeImage from '../images/IMG-20260609-WA0014.jpg'
import fleetImage1 from '../images/IMG-20260609-WA0015.jpg'
import fleetImage2 from '../images/IMG-20260609-WA0016.jpg'

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
    description: 'We own and operate a fleet of vessels supporting offshore and coastal logistics'
  },
  {
    title: 'Vessel Management',
    icon: faUserGear,
    description: 'Full technical and crew management to ensure optimal vessel performance'
  },
  {
    title: 'Maritime Logistics Support',
    icon: faRoute,
    description: 'Tailored logistics solutions for the oil gas and energy sectors'
  },
  {
    title: 'Offshore Support Services',
    icon: faLifeRing,
    description: 'Reliable Support for offshore operations with a focus on safety and efficiency'
  },
  {
    title: 'Safety & Compliance Management',
    icon: faShieldAlt,
    description: 'Ensuring adherence to local and international maritime regulations'
  }
]

const fleetSlides = [
  { src: heroImage, title: 'INE Support 1' },
  { src: officeImage, title: 'INE Support 2' },
  { src: fleetImage1, title: 'INE Support 3' },
  { src: fleetImage2, title: 'INE Support 4' }
]

function Home() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((current) => (current + 1) % fleetSlides.length)
    }, 4500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <motion.section {...fadeSettings} className="relative mx-0 overflow-hidden shadow-brand">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Maritime vessel in West African waters" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-brand-dark/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/50 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[2fr_0.9fr] lg:items-end">
            <div className="max-w-2xl text-white">
              <span className="inline-flex rounded-full font-bold text-base uppercase tracking-[0.35em] text-brand-gold">
                WELCOME TO INE
              </span>
              <h1 className="mt-8 text-4xl font-semibold tracking-tight sm:text-6xl">
                Leading Maritime Excellence Across <br/><span className='text-brand-gold'>Nigeria & West Africa.</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-200 sm:text-xl">
                INE Oil and Maritime Services Limited delivers professional vessel ownership, ship management and maritime logistics solutions with safety, reliability and operational excellence.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center rounded-md bg-brand-gold px-8 py-4 text-sm font-semibold text-slate-950 transition hover:bg-[#b58c2e] shadow-lg shadow-brand-gold/35"
                >
                  Explore our Services &#8599;
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/20 px-8 py-4 text-sm font-semibold text-white transition hover:border-brand-gold hover:text-brand-gold"
                >
                  Contact the team
                </Link>
              </div>
              
            </div>

           
          </div>
        </div>
      </motion.section>


      <motion.section {...fadeSettings} className="bg-white mx-7 md:mx-10 -mt-14 mb-20 relative border rounded-md p-6 lg:p-11 grid md:grid-cols-4 gap-6 shadow-brand">
        <div className="flex gap-5 items-center lg:border-r border-slate-200/70 pr-6">
          <div className=' bg-brand-dark/10 p-4 rounded-full'>
          <LifeBuoy size={25} className='text-brand-dark'/>
          </div>
          <div>
          <p className='font-bold text-sm text-brand-dark'>Maritime Expertise</p>
          <p className='text-[12px] text-brand-dark/75'>Years of hands-on experience across diverse vessel operations.</p>
        </div>
        </div>

        <div className="flex gap-5 items-center lg:border-r border-slate-200/70 pr-6">
          <div className=' bg-brand-dark/10 p-4 rounded-full'>
          <ShieldCheck size={25} className='text-brand-dark'/>
          </div>
          <div>
          <p className='font-bold text-sm text-brand-dark'>Safety & Compliance</p>
          <p className='text-[12px] text-brand-dark/75'>committed to the highest safety and regulatory standards.</p>
        </div>
        </div>

        <div className="flex gap-5 items-center lg:border-r border-slate-200/70 pr-6">
          <div className=' bg-brand-dark/10 p-4 rounded-full'>
          <Ship size={25} className='text-brand-dark'/>
          </div>
          <div>
          <p className='font-bold text-sm text-brand-dark'>Vessel Management</p>
          <p className='text-[12px] text-brand-dark/75'>Optimized performance through technical and crew management.</p>
        </div>
        </div>

        <div className="flex gap-5 items-center ">
          <div className=' bg-brand-dark/10 p-4 rounded-full'>
          <Headset size={25} className='text-brand-dark'/>
          </div>
          <div>
          <p className='font-bold text-sm text-brand-dark'>24/7 Support</p>
          <p className='text-[12px] text-brand-dark/75'>Round-the-clock support for our clients and vessels</p>
        </div>
        </div>
      </motion.section>


      <motion.section {...fadeSettings} className="px-8 pb-28 grid gap-12 lg:grid-cols-[0.95fr_1.05fr] ">
        
         <div className="rounded-[32px] overflow-hidden border border-slate-200 shadow-brand">
          <img src={showcaseImage} alt="Maritime logistics and offshore operations" className="h-full w-full object-cover" />
        </div>
        
        <div className="space-y-6 ">
          <p className="text-base uppercase tracking-[2px] font-bold text-brand-gold">About us</p>
          <h2 className="text-4xl font-semibold text-slate-950">Trusted Maritime Partner for Sustainable Success</h2>
          <p className="max-w-3xl text-lg leading-8 text-slate-600">
            INE Oil and Maritime Services Limited is a Nigerian Maritime services company specializing in vessel ownership 
            ship management and maritime logistics support to teh oil, gas and energy industires accross Nigeria and West Africa.
          </p>
          <Link
                  to="/about"
                  className="inline-flex items-center justify-center rounded-md bg-[#002147] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#020b30] "
                >
                  Learn More about Us &#8599;
                </Link>
          
        </div>
       
      </motion.section>

      <motion.section {...fadeSettings} className="space-y-10 px-8 bg-[#002147] py-32">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[2px] font-bold text-center text-brand-gold">OUR SERVICES</p>
          <h2 className="text-3xl font-semibold text-white text-center">Comprehensive Maritime Solutions</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {services.map((item) => {
            const Icon = item.icon
            const isFontAwesome = Icon && Icon.iconName
            return (
              <div key={item.title} className="rounded-[32px] border border-[#2776ea]/20 bg-[#01152c51] text-white p-4 shadow-brand transition hover:-translate-y-1 hover:shadow-xl">
                <div className="inline-flex h-14 w-14 items-center justify-center p-10 text-white bg-white/5 rounded-full shadow-sm">
                  {isFontAwesome ? (
                    <FontAwesomeIcon icon={Icon} className="h-9 w-9 text-white" />
                  ) : (
                    <Icon className="h-6 w-6 text-white" />
                  )}
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-6 text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-5 text-white">{item.description}</p>
              </div>
            )
          })}
        </div>
      </motion.section>

      <motion.section {...fadeSettings} className="md:mx-8  p-10 text-black mt-20">
        <div className="grid gap-10 lg:grid-cols-[0.6fr_1.05fr]">
          <div className="space-y-6">
            <p className="text-base tracking-[2px] font-bold text-brand-gold">OUR FLEET</p>
            <h2 className="text-3xl font-semibold text-brand-dark">Modern Fleet. <br/> Maximum Reliability.</h2>
            <p className="max-w-xl text-base leading-8 text-brand-dark">
              Our well-maintained vessels are built to deliver exceptional performance in the most demanding marine environments.
            </p>

            <Link
                  to="/"
                  className="inline-flex items-center justify-center rounded-md border-[#002147] border-[2px] bg-transparent px-8 py-4 text-sm font-semibold text-brand-dark transition hover:bg-[#020b30] hover:text-white"
                >
                  View Our Fleet &#8599;
                </Link>

          </div>
          <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-slate-950/95 shadow-brand">
            <div className="relative h-[420px]">
              {fleetSlides.map((slide, index) => (
                <div
                  key={slide.title}
                  className={`absolute inset-0 transition-opacity duration-700 ${index === activeSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                >
                  <img src={slide.src} alt={slide.title} className="h-full w-full object-cover" />
                  <div className="absolute inset-x-0 bottom-0 bg-slate-950/75 px-6 py-4">
                    <p className="text-lg font-semibold text-white">{slide.title}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
              {fleetSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`h-2.5 w-2.5 rounded-full transition-colors ${index === activeSlide ? 'bg-brand-gold' : 'bg-white/40 hover:bg-white'}`}
                  aria-label={`Show slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section {...fadeSettings} className="bg-[#002147] p-12 sm:p-16 text-black mt-20">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center justify-center text-center gap-4 lg:flex-row lg:text-left lg:items-center lg:border-r lg:border-slate-200/30">
                <div className="inline-flex p-4 items-center justify-center rounded-full bg-brand-gold/10 text-brand-gold">
                  <FontAwesomeIcon icon={faClock} className="h-7 w-7" />
                </div>
                <div>
                  <p className="text-5xl text-brand-gold font-bold">15+</p>
                  <p className="text-white">Years of Experience</p>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center text-center gap-4 lg:flex-row lg:text-left lg:items-center lg:border-r lg:border-slate-200/30">
                <div className="inline-flex p-4 items-center justify-center rounded-full bg-brand-gold/10 text-brand-gold">
                  <FontAwesomeIcon icon={faShip} className="h-7 w-7" />
                </div>
                <div>
                  <p className="text-5xl text-brand-gold font-bold">50+</p>
                  <p className="text-white">Vessels & Assets</p>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center text-center gap-4  lg:flex-row lg:text-left lg:items-center lg:border-r lg:border-slate-200/30">
                <div className="inline-flex p-4 items-center justify-center rounded-full bg-brand-gold/10 text-brand-gold">
                  <FontAwesomeIcon icon={faUsers} className="h-7 w-7" />
                </div>
                <div>
                  <p className="text-5xl text-brand-gold font-bold">100+</p>
                  <p className="text-white">Satisfied Clients</p>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center text-center gap-4 lg:flex-row lg:text-left lg:items-center">
                <div className="inline-flex p-4 items-center justify-center rounded-full bg-brand-gold/10 text-brand-gold">
                  <FontAwesomeIcon icon={faShieldAlt} className="h-7 w-7" />
                </div>
                <div>
                  <p className="text-5xl text-brand-gold font-bold">100%</p>
                  <p className="text-white">Safety Commitment</p>
                </div>
              </div>

            </div>
      </motion.section>

      <motion.section {...fadeSettings} className="relative overflow-hidden bg-slate-950 text-white shadow-brand">
              <div className="absolute inset-0">
                <img src={officeImage} alt="Maritime operations image" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-brand-dark/85 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/40 to-transparent" />
              </div>
              <div className="relative mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10 lg:py-16">
                <div className="grid items-center  lg:grid-cols-[1.6fr_0.6fr] space-y-6">
                  <div className='space-y-4'>
                  <p className="text-sm uppercase font-bold tracking-[2px] text-brand-gold">READY TO WORK WITH US?</p>
                  <h1 className="text-xl font-semibold tracking-tight sm:text-4xl">
                    Let's Power your Maritime Success.
                  </h1>
                  <p className="max-w-xl text-base leading-8 text-white">
                  Partner with INE Oil and Maritime Services Limited for reliable <br className="hidden lg:block" /> efficient and safe maritime solutions.
                  </p>
                  </div>
                  <Link
                  to="/services"
                  className="inline-flex items-center w-fit justify-center rounded-md bg-brand-gold px-8 py-4 text-sm font-semibold text-slate-950 transition hover:bg-[#b58c2e] shadow-lg shadow-brand-gold/35"
                >
                  Explore our Services &#8599;
                </Link>
                </div>
              </div>
            </motion.section>
    </div>
  )
}

export default Home

{/* <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {stats.map((item) => (
                  <div key={item.label} className="rounded-[24px] border border-white/10 bg-red-700/50 p-5 backdrop-blur-xl">
                    <p className="text-3xl font-semibold text-brand-gold">{item.value}</p>
                    <p className="mt-2 text-sm uppercase tracking-[0.35em] text-slate-300">{item.label}</p>
                  </div>
                ))}
              </div> */}
