import { NavLink } from 'react-router-dom'
import logo from '../images/logo.png'
import { useState } from 'react';

const links = [
  { label: 'Home', path: '/' },
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
    <header className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm">
      <div className="bg-slate-950 text-slate-100">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-[11px] font-bold uppercase md:px-6">
          <span>24/7 Support: +234 706 333 3336</span>
          <span>Nigeria / Ghana</span>
        </div>
      </div>

      <div className="border-b border-slate-200/80 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-16 w-16 items-center justify-center overflow-hidden">
              <img src={logo} alt="INE Oil Maritime Services logo" className="h-full w-full object-contain" />
            </div>
            <div>
              <p className="text-base font-bold text-slate-900">INE Oil Maritime Services</p>
              <p className="text-sm font-semibold text-slate-600">Professional maritime solutions</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition ${isActive ? 'text-brand-dark' : 'text-slate-600 hover:text-brand-dark'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

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
      } fixed inset-0 z-40 flex flex-col p-10 justify-center gap-8 bg-[#040a17] transition-transform duration-500 ease-in-out md:hidden`}
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

