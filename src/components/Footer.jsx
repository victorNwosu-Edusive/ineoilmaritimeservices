import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="border-t border-slate-200/70 bg-white py-10">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-3 gap-16 px-6 text-slate-700 lg:px-8">
        <div>
          <p className="text-sm uppercase text-slate-500">INE OIL AND MARITIME SERVICES LIMITED</p>
          <p className="mt-4 max-w-lg text-sm leading-7">
            Precision maritime services across West Africa with a focus on safe vessel operations, operational excellence, and client-first logistics.
          </p>
        </div>

        <div className="space-y-3 text-sm">
          <p className="font-semibold text-xl text-slate-900">Navigate</p>
          <div className='grid gap-3'>
          <Link to="/" className="text-slate-600 hover:text-red-500">Home &#8599;</Link>
          <Link to="/services" className="text-slate-600 hover:text-red-500">Services &#8599;</Link>
          <Link to="/contact" className="text-slate-600 hover:text-red-500">Contact &#8599;</Link>
          </div>
        </div>

        <div className="space-y-3 text-sm">
          <p className="font-semibold text-xl text-slate-900">Contact us:</p>
          <p><span className='font-bold text-[12px]'>ADDRESS:</span><br/>
             <span>8 Ediale Street, GRA, Benin City</span></p>
             <p><span className='font-bold text-[12px]'>GHANA ADDRESS:</span><br/>
             <span>CJ, 209 , opener street, off fra-fra-ha, forter home, Adenta municipal, Greater Accra region. GD, 105-5824</span></p>
          <p>info@ineoilmaritime.com</p>
          <p>+234 706 333 3336</p>
        </div>
      </div>
      <div className='text-center mt-28 text-black border-t-[1px] border-black/15 p-4'>
            <p className='text-[13px] text-slate-500 md:text-md lg:text-md'> © {new Date().getFullYear()} Ine Oil Maritime Services</p>
            </div>
    </footer>
  )
}

export default Footer
