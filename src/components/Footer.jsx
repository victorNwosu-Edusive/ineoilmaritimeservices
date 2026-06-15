import { Link } from 'react-router-dom'
import { MapPin, Flag, Mail, Phone } from 'lucide-react'

function Footer() {
  return (
    <footer className=" bg-[#002147] py-10">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-4 gap-16 px-6 text-slate-700 lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase text-white">INE OIL AND MARITIME SERVICES LIMITED</p>
          <p className="mt-4 max-w-lg text-sm text-white leading-7">
            Precision maritime services across West Africa with a focus on safe vessel operations, operational excellence, and client-first logistics.
          </p>
        </div>

        <div className="space-y-3 text-sm">
          <p className="font-semibold text-xl text-white">Quick Links</p>
          <div className='grid gap-3'>
          <Link to="/" className="text-white hover:text-brand-gold">Home &#8599;</Link>
          <Link to="/about" className="text-white hover:text-brand-gold">About &#8599;</Link>
          <Link to="/services" className="text-white hover:text-brand-gold">Services &#8599;</Link>
          <Link to="/contact" className="text-white hover:text-brand-gold">Contact &#8599;</Link>
          </div>
        </div>

        <div className="space-y-3 text-sm *:text-white">
          <p className="font-semibold text-xl text-white">Our Services</p>
             <p>Fleet Ownership & Operations</p>
             <p>Vessel management</p>
             <p>Maritime Logistics Support</p>
             <p>Offshore Support services</p>
             <p>Safety & Compliance</p>
        </div>

        <div className="space-y-3 text-sm *:text-white">
          <p className="font-semibold text-xl text-white">Contact us:</p>
          <div className="space-y-4 text-white">
            <div className="flex gap-3">
              <MapPin size={18} className="mt-1 text-brand-gold" />
              <div>
                <span className='font-bold text-[12px]'>ADDRESS:</span><br/>
                <span>8 Ediale Street, GRA, Benin City</span>
              </div>
            </div>
            
              <div>
                <span className='font-bold text-[12px]'>GHANA ADDRESS:</span><br/>
                <span>CJ, 209 , opener street, off fra-fra-ha, forter home, Adenta municipal, Greater Accra region. GD, 105-5824</span>
              </div>
           
            <div className="flex gap-3 items-center">
              <Mail size={18} className="text-brand-gold" />
              <span>info@ineoilmaritime.com</span>
            </div>
            <div className="flex gap-3 items-center">
              <Phone size={18} className="text-brand-gold" />
              <span>+234 706 333 3336</span>
            </div>
          </div>
        </div>
      </div>
      <div className='text-center mt-12 text-black border-t-[1px] border-black/15 p-4'>
            <p className='text-[13px] text-slate-500 md:text-md lg:text-md'> © {new Date().getFullYear()} Ine Oil Maritime Services</p>
            </div>
    </footer>
  )
}

export default Footer
