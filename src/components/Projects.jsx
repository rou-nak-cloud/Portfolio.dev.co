import React, { useRef } from 'react'
import { myProjects } from '../assets/assets'
import { motion, useScroll, useSpring } from 'motion/react'

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
        const { title, description, subDescription, href, logo, image } = myProjects;
        return(
            <section ref={projectRef}>
                <div className='projectContainer flex items-center justify-center w-[100%] h-[100%]'>
                    <div className='wrapper max-w-[1266px] h-screen m-auto flex items-center justify-center gap-12'>
                        <div className='imageContainer flex-1 flex items-center justify-center shadow-2xl shadow-purple-900/40 transition-all duration-200 ease-in-out hover:scale-108'>
                         <img src={image} alt="chatAppImage" className='object-cover rounded-2xl' />
                        </div>
                    <div className='textContainer flex-1 flex flex-col gap-4'>
                        <h2 className='text-5xl'>{title}</h2>
                        <p className='text-lg text-gray-400'>{description}</p>
                        <div className='buttons bg-gradient-to-br from-purple-800 to-red-800 p-2 rounded-xl flex items-center justify-around mt-7'>
                            <a href={href} className='text-white font-bold text-lg tracking-wider px-8 py-2 rounded-xl transition-all duration-300 ease-in-out hover:bg-red-900/60 hover:scale-106'>See Live</a>
                            <a href={logo} className='text-white font-light text-lg tracking-wider px-8 py-2 rounded-xl transition-all duration-300 ease-in-out hover:bg-purple-900/60 hover:scale-103'>See Github project</a>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        )
    }
  return (
    <div ref={ref} 
    className='projects '>
        <div className='progress sticky top-0 left-0 pt-18 text-center text-5xl text-purple-700'>
            <h1 className='pb-2'>Featured Projects</h1>
            <motion.div style={{scaleX}}
             className='progressBar h-1 rounded-full bg-gradient-to-r from-purple-800 to-red-700'></motion.div>
        </div>
        {myProjects.map((project) => (
            <Single key={project.id} myProjects={project} />
        ))}
    </div>
  )
}

export default Projects