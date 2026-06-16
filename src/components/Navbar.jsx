import { NavLink } from 'react-router-dom'
import logo from '../images/logo.png'
import { useState } from 'react';

const links = [
  { label: 'Home', path: '/' },
  { label: 'About Ine', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' }
]

function Navbar(toggleTheme) {

 const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);

    }


  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white border-b-4 border-b-brand-gold shadow-sm">

      <div className="border-b border-slate-200/80 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3">
            <div className="flex h-20 w-20 items-center justify-center overflow-hidden">
              <img src={logo} alt="INE Oil Maritime Services logo" className="h-full w-full object-contain" />
            </div>
            <div>
              <p className=" uppercase font-black text-xl lg:text-3xl leading-[20px] lg:leading-[20px] text-brand-dark"><span className='text-red-600'>INE Oil</span> & Maritime <br/> <span className='text-[12px] lg:text-[15px] tracking-[2px] '>Services limited</span></p>
            </div>
             
          </div>

          <nav className="hidden items-center uppercase gap-8 md:flex">
            {links.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-[13px] font-bold transition ${isActive ? 'text-red-500 border-b-red-600 border-b-2' : 'text-brand-dark hover:text-red-600'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div>
            <NavLink to="/contact" className="hidden md:block px-4 py-2 bg-red-600 text-white text-sm font-bold hover:bg-red-700 transition"
            >
              GET IN TOUCH &#8599;
            </NavLink>
          </div>

            <div className="md:hidden flex items-center" onClick={toggleMenu}>
          <button className="text-slate-900 focus:outline-none relative w-6 h-6">
            <span
              className={`block absolute w-6 h-0.5 bg-current transition-transform duration-300 ${
                isOpen ? 'rotate-45' : '-translate-y-1.5'
              }`}
            ></span>
            <span
              className={`block absolute w-5 h-0.5 bg-current transition-opacity duration-300 ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`}
            ></span>
            <span
              className={`block absolute w-6 h-0.5 bg-current transition-transform duration-300 ${
                isOpen ? '-rotate-45' : 'translate-y-1.5'
              }`}
            ></span>
          </button>
        </div>


        

        </div>
      </div>

<div
      id="mobile"
      className={`${
      isOpen ? 'translate-x-0' : 'translate-x-full'
      } fixed inset-0 z-40 flex pt-20 flex-col p-10 justify-center gap-8 bg-[#002147] transition-transform duration-500 ease-in-out md:hidden`}
      >
      {links.map((item, idx) => (
        <NavLink
          key={item.path}
          to={item.path}
          onClick={closeMenu}
          className={({ isActive }) =>
            `text-2xl font-bold border-b-brand-gold/20 mb-2 pb-1 border-b-[1px] ${isActive ? 'text-brand-gold' : 'text-white'} transition-all ${
              isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`
          }
          style={{
            transitionDelay: isOpen ? `${0.1 + idx * 0.1}s` : '0s'
          }}
        >
          {item.label}
        </NavLink>
        
      ))}
      <p className='absolute bottom-4 text-slate-400 text-[12px] text-center'> © {new Date().getFullYear()} Ine Oil Maritime Services</p>
      <button
        onClick={closeMenu}
        className="absolute top-16 right-2 flex h-10 w-10 items-center justify-center text-white transition focus:outline-none"
        aria-label="Close menu"
      >
        <span className="block h-0.5 w-7 rotate-45 translate-y-0 bg-white" />
        <span className="block h-0.5 w-7 -rotate-45 -translate-x-5 bg-white" />
      </button>
      </div>

    </header>
    

  )
}

export default Navbar

