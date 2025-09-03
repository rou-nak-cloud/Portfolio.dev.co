import React, { useRef } from 'react'
import { myProjects } from '../assets/assets'
import { motion, useScroll, useSpring, useTransform } from 'motion/react'

const Projects = () => {
    const ref = useRef();
    // calculate progress
    const { scrollYProgress } = useScroll({
        target: ref,
        offset:["end end", "start start"],
    })
    // progress Bar
    const scaleX = useSpring(scrollYProgress, {
        stiffness:100,
        damping:30,
    })
    
    const Single = ({myProjects}) => {
        const projectRef = useRef();

        const { scrollYProgress } = useScroll({
            target: projectRef,
            // offset:["end end", "start start"],
        })
        const yTextRaw = useTransform(scrollYProgress, [0,1], [-80,80])
         const yImageRaw = useTransform(scrollYProgress, [0,1], [60,-60]) 

         const yText = useSpring(yTextRaw, { stiffness: 90, damping: 40 })
         const yImage = useSpring(yImageRaw, { stiffness: 80, damping: 40 })

        const { title, description, subDescription, href, logo, image } = myProjects;
        return(
            <section id='Projects'>
                <div className='projectContainer flex items-center justify-center w-full h-full px-4 sm:px-6 md:px-8'>
                    <div className='wrapper max-w-[1266px] min-h-screen m-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 py-8'>
                    
                    <motion.div
                        ref={projectRef}
                        style={{ y: yImage }}
                        className='imageContainer w-full md:w-1/2 flex items-center justify-center shadow-2xl shadow-purple-900/40 transition-all duration-200 ease-in-out hover:scale-105'
                    >
                        <img src={image} alt="chatAppImage" className='w-full max-h-[350px] md:max-h-[500px] object-cover rounded-2xl' />
                    </motion.div>

                    <motion.div
                        style={{ y: yText }}
                        className='textContainer w-full md:w-1/2 flex flex-col gap-4 overflow-hidden text-center md:text-left mt-6 md:mt-0'
                    >
                        <h2 className='text-3xl sm:text-4xl md:text-5xl font-semibold'>{title}</h2>
                        <p className='text-base sm:text-lg text-gray-400 leading-relaxed'>{description}</p>

                        <div className='buttons bg-gradient-to-br from-purple-800 to-red-800 max-sm:p-1 p-2 rounded-xl flex flex-col sm:flex-row items-center justify-center sm:justify-around gap-4 mt-6'>
                        <a href={href} className='text-white font-bold text-base sm:text-lg tracking-wider px-6 sm:px-8 py-2 rounded-xl transition-all duration-300 ease-in-out hover:bg-red-900/60 hover:scale-105'>
                            See Live
                        </a>
                        <a href={logo} className='text-white font-light text-base sm:text-lg tracking-wider px-6 sm:px-8 py-2 rounded-xl transition-all duration-300 ease-in-out hover:bg-purple-900/60 hover:scale-105'>
                            See Github project
                        </a>
                        </div>
                    </motion.div>
                    </div>
                </div>
            </section>
        )
    }
  return (
    <div ref={ref} className="projects max-sm:pt-54 pt-1">
        <div className="progress sticky text-center top-0 left-0 z-50 pt-4 sm:pt-6 pb-4 sm:pb-6 text-3xl sm:text-5xl md:text-6xl tracking-widest font-light bg-gradient-to-br  backdrop-blur-xs from-red-900/50 text-purple-700 rounded-2xl sm:rounded-3xl md:rounded-4xl shadow-md">
        <h1 className="pb-1 sm:pb-2">
            Featured Project
            <span className="text-red-600/80 font-light">s</span>
        </h1>
        <motion.div
            style={{ scaleX }}
            className="progressBar h-1 mt-1 sm:mt-2 rounded-full bg-gradient-to-r from-purple-800 to-red-700"
        ></motion.div>
        </div>

        {myProjects.map((project) => (
        <Single key={project.id} myProjects={project} />
        ))}
    </div>
    );
}

export default Projects