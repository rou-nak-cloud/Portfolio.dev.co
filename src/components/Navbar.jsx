import React from 'react'
import { navLogos } from '../assets/assets'
import { motion } from 'motion/react'

const Navbar = () => {
    const variants = {
        hidden:{opacity:0,y:-10},
        visible:(idx) => ({opacity:1, y:0,transition:{delay: idx * 0.4,duration:0.8, ease:"easeOut"}}),
    }
  return (
    <>
      <div className="navbar h-14 px-12 sm:px-16 md:px-10 lg:px-36 xl:px-50">
        {/* sidebar */}
        <div className="wrapper max-w-[1466px] h-full m-auto flex items-center justify-between">
          <motion.h3 
            initial={{opacity:0,scale:0.3}}
            animate={{opacity:1,scale:1}}
            transition={{duration:1}}
          className="font-bold text-base sm:text-sm md:text-sm lg:text-md cursor-grab select-none">
            Rounak <span className="text-[#FF4040] text-lg">Bakshi.</span>
          </motion.h3>

          <div className="social flex items-center gap-2 sm:gap-3 md:gap-4">
            {navLogos.map((logo, idx) => (
              <motion.li key={idx} className="list-none" 
              variants={variants}
              initial='hidden'
              animate='visible'
              custom={idx}
              >
                <a href={logo.link}>
                  <img
                    src={logo.icon}
                    alt="navLogos"
                    className="w-5 h-5 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 
                               hover:scale-125 transition-transform duration-300"
                  />
                </a>
              </motion.li>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
