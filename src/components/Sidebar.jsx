import React, { useState } from 'react'
import { motion, scale, stagger } from 'motion/react'
import { sideLinks } from '../assets/assets'
import { FiMenu, FiX } from "react-icons/fi";

const Sidebar = () => {
    const [open, setOpen] = useState(false)

    const sideVariants = {
        open:{
            clipPath: "circle(1200px at 50px 50px)", 
            transition:{
                type: "spring",
                stiffness: 20,
            },
        },
        close:{
            clipPath: "circle(30px at 50px 50px)",
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 30,
            },
        }
    }

    const linkVariants = {
        open: {
            transition: {
                staggerChildren: 0.1,
            },
        },
        close:{
            transition:{
                staggerChildren:0.05,
                staggerDirection:-1,
            },
        },
    }

    const slinkVariants = {
        open:{
            y:0,
            opacity:1,
        },
        close:{
            y:50,
            opacity:0,
        },
    }
  return (
    <>
     <motion.div 
     animate={open ? "open" : "close"}
     className='sidebar flex flex-col items-center justify-center text-black'>
        <motion.div 
        variants={sideVariants}
        className='bg fixed top-10 left-1 sm:top-0 sm:left-0 bottom-0 w-[70%] sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[450px] bg-white/90 sm:bg-white z-[990]'>
            {/* links */}
            <motion.div 
            variants={linkVariants}
            className='links w-full h-screen flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-9'>
                {sideLinks.map((slink,idx)=>(
                    <motion.a
                    variants={slinkVariants} 
                    whileHover={{scale:1.1}}
                    whileTap={{scale:0.90}}
                    className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl'
                    href={`#${slink}`} key={idx}>{slink}</motion.a>
                ))}
            </motion.div>
        </motion.div>
        <div className='toggleButton'>
            <button 
            onClick={()=>setOpen(prev=>!prev)}
            className='w-12 h-12 sm:w-14 sm:h-14 rounded-full fixed top-16 right-4 sm:top-6 sm:left-6 bg-red-600/90 lg:blur-lg border-none cursor-pointer text-black flex items-center justify-center text-2xl z-[999]'>
                <span className="hidden lg:block w-2 h-2 bg-white rounded-full absolute"></span>
                {open ? <FiX /> : <FiMenu />}
            </button>
        </div>
     </motion.div>
    </>
  )
}

export default Sidebar
