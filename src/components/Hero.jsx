import React from 'react'
import assets from '../assets/assets'
import { motion } from 'motion/react'

const textVariants = {
    initial:{
        x:-500,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
            stagerChildren:0.2,
        },
    },
    scrollPng:{
        opacity:0,
        y:9,
        transition:{
            duration:4,
            repeat:Infinity,
        },
    },
}
const bigTextVariants = {
    initial:{
        x:0,
    },
    animate:{
        x:"-250%",
        transition:{
            repeat:Infinity,
            repeatType:"mirror",
            duration:20,
        },
    },
}

const Hero = () => {
  return (
    <>
     <div className='hero overflow-hidden relative min-h-[calc(100vh-40px)] sm:min-h-[calc   (100vh-60px)] md:min-h-[calc(100vh-70px)] w-full'>
        <div className='wrapper w-[1000px] h-screen flex items-center justify-center'>
            <motion.div
            variants={textVariants}
            initial='initial'
            animate='animate'
            className='textContainer h-screen w-[600px] flex flex-col justify-center gap-9 z-[9]'>
                <motion.h2 variants={textVariants} className='text-3xl tracking-[9px] font-semibold bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent'>ROUNAK BAKSHI</motion.h2>
                <motion.h1 variants={textVariants} className='text-7xl'>Web developer <span className='text-purple-800/90 cursor-grab'>&</span> Electronics engineer<span variants={textVariants} className='text-red-500'>.</span></motion.h1>
                <motion.div variants={textVariants} className="buttons flex gap-4 z-[10]">
                      <a 
                            href="https://github.com/rou-nak-cloud" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                    <motion.button variants={textVariants} className="p-4 border border-purple-800 rounded-lg font-light cursor-pointer transition-all duration-500 ease-in-out hover:bg-gradient-to-r hover:from-red-600 hover:to-purple-700 
                       hover:text-white hover:scale-105">
                        See the projects in <motion.span className='font-bold text-white/90'>github</motion.span>
                    </motion.button>
                    </a>
                    <motion.button variants={textVariants} className="p-4 border border-purple-800 rounded-lg font-light cursor-pointer transition-all duration-300 ease-in-out  hover:bg-gradient-to-r hover:from-purple-700 hover:to-red-600 
                       hover:text-white hover:scale-105">
                        Know about <span className='font-bold text-white/90'>me</span>
                    </motion.button>
                </motion.div>
                <motion.img src={assets.scroll} alt="scroll" 
                variants={textVariants} animate="scrollPng"
                className='w-12 cursor-all-scroll z-[10] opacity-60'/>
            </motion.div>
        </div>
        <motion.div
        variants={bigTextVariants} initial="initial" animate="animate"
        className='slidingText absolute w-1/2 font-semibold text-[50vh] bottom-[-80px] whitespace-nowrap opacity-10 select-none'>
            Full Stack Coder <span className=''>&</span> Calisthenic Athlete
        </motion.div>
            {/* animation gpt */}
           <div className="image absolute h-full w-1/2 top-0 right-0 flex items-center justify-center overflow-hidden">
                <div className="relative w-[400px] h-[400px]">
                    {/* Blob 1 */}
                    <div className="absolute w-[300px] h-[300px] bg-gradient-to-r from-purple-600 to-pink-500 rounded-full opacity-70 mix-blend-saturation filter blur-2xl animate-blob"></div>
                    {/* Blob 2 */}
                    <div className="absolute w-[300px] h-[300px] bg-gradient-to-r from-red-500 to-yellow-500 rounded-full opacity-70 mix-blend-hard-light filter blur-2xl animate-blob animation-delay-2000"></div>
                    {/* Blob 3 */}
                    <div className="absolute w-[300px] h-[300px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-70 mix-blend-color-burn filter blur-2xl animate-blob animation-delay-4000"></div>
                </div>
            </div>
     </div>
    </>
  )
}

export default Hero