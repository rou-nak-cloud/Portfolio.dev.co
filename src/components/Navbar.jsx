import React from 'react'
import { navLogos } from '../assets/assets'

const Navbar = () => {
  return (
    <>
      <div className="navbar h-14 px-12 sm:px-16 md:px-10 lg:px-36 xl:px-50">
        {/* sidebar */}
        <div className="wrapper max-w-[1466px] h-full m-auto flex items-center justify-between">
          <h3 className="font-bold text-base sm:text-sm md:text-sm lg:text-md cursor-grab select-none">
            Rounak <span className="text-[#FF4040] text-lg">Bakshi</span>
          </h3>

          <div className="social flex items-center gap-2 sm:gap-3 md:gap-4">
            {navLogos.map((logo, idx) => (
              <li key={idx} className="list-none">
                <a href={logo.link}>
                  <img
                    src={logo.icon}
                    alt="navLogos"
                    className="w-5 h-5 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 
                               hover:scale-125 transition-transform duration-300"
                  />
                </a>
              </li>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
