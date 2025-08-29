import React, { useRef } from 'react'
import assets from '../assets/assets'
import {motion,useScroll, useTransform} from 'motion/react'


const Parallax = ({ type }) => {
  const ref = useRef()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset:["start start" , "end start"]
  })

  const yHParallax = useTransform(scrollYProgress,[0,1], ["0%","500%"])
  return (
    <>
      <div
      ref={ref}
        className="parallax w-full h-full relative flex items-center justify-center overflow-hidden"
        style={{
          background:
            type === 'education'
              ? 'linear-gradient(180deg, #14143c, #0c0c1d)'
              : 'linear-gradient(180deg, #111132, #505064)',
        }}
      >
        <motion.h1 
        style={{y: yHParallax}}
        className="text-4xl font-semibold sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-widest text-center px-2 bg-gradient-to-r from-red-700/90 to-purple-600 bg-clip-text text-transparent">
          {type === 'education' ? 'My Study' : 'My projects'}
        </motion.h1>

       <motion.div className="mountains">
        <img
          src={assets.mountains}
          alt="mountains"
          className="absolute bottom-0 left-0 w-full h-auto object-cover z-3"
        />
      </motion.div>

      <motion.div className="planets">
        <motion.img
          src={assets.planets}
          alt="planets"
          className="absolute bottom-0 max-sm:top-[50px] top-[-100px] left-0 w-full h-auto object-contain z-2"
        />
      </motion.div>

      <motion.div className="stars">
        <img
          src={assets.stars}
          alt="stars"
          className="absolute bottom-0 left-0 w-full h-full object-cover z-1"
        />
      </motion.div>
      </div>
    </>
  )
}

export default Parallax
