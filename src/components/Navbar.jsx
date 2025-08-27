import React, { useEffect, useState } from 'react'
import { navLogos } from '../assets/assets'
import { motion, scale } from 'motion/react'
import Sidebar from './Sidebar'

const Navbar = () => {
    const variants = {
        hidden:{opacity:0,y:-10},
        visible:(idx) => ({opacity:1, y:0,transition:{delay: idx * 0.4,duration:0.8, ease:"easeOut"}}),
    }

    const [constraints, setConstraints] = useState({
        left: 50,
        top: 0,
        right: 970,
        bottom: 700,
    });

  useEffect(() => {
    const updateConstraints = () => {
      if (window.innerWidth < 640) {
        //  Mobile
        setConstraints({
          left: 20,
          top: 0,
          right: 150,
          bottom: 600,
        });
      } else if (window.innerWidth < 1024) {
        // Tablet / small laptops
        setConstraints({
          left: 30,
          top: 0,
          right: 500,
          bottom: 500,
        });
      } else {
        //  Large screens
        setConstraints({
          left: 50,
          top: 0,
          right: 970,
          bottom: 700,
        });
      }
    };

    updateConstraints(); // run on mount
    window.addEventListener("resize", updateConstraints); // update on resize

    return () => window.removeEventListener("resize", updateConstraints);
  }, []);

  return (
    <>
      <div className="navbar h-10 sm:h-14 max-sm:px-16 sm:px-16 md:px-10 lg:px-36 xl:px-50">
        <Sidebar />
        <div className="wrapper max-w-[1466px] h-full m-auto flex items-center justify-between">
          <motion.h3 
            initial={{opacity:0,scale:0.3}}
            animate={{opacity:1,scale:1}}
            transition={{duration:1}}
            drag
            dragConstraints={constraints}
            whileDrag={{scale:0.8}}
          className="font-bold text-base sm:text-sm md:text-sm lg:text-md cursor-grab select-none z-99">
            <span className="text-[#FF4040] text-lg">&bakshi.</span>
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
