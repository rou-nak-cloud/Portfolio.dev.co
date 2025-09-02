// import React from 'react'
// import { motion } from 'motion/react'
// import assets, { interests } from '../assets/assets'

// const FondThings = () => {

//     const variants = {
//         initial:{
//             x:-500,
//             y:100,
//             opacity:0,
//         },
//         animate:{
//             x:0,
//             y:0,
//             opacity:1,
//             transition:{
//                 duration:1,
//                 staggerChildren:0.3,
//             },
//         },
//         exit:{
//             x:500,
//         },
//     }
//   return (
//     <motion.div
//     variants={variants}
//      initial='initial' whileInView='animate' exit='exit'
//     className='Fond bg-gradient-to-b from-[#0e0e28] to-[#111132] min-h-screen flex flex-col justify-between gap-20'>
//       <motion.div  variants={variants} className='textContainer flex-1 self-end flex items-center gap-2'>
//         <p className='font-light text-xl text-[#425f87] text-right'>
//             I <span className='font-bold text-[#2e5fa3]'>focus</span> on one thing and give my<br /> 110% to it.
//         </p>
//         <hr className='w-xs b-[1px] border-t border-[#425f87] opacity-90' />
//       </motion.div>
//       <motion.div  variants={variants} className='titleContainer flex-2 flex flex-col items-center'>
//         <div className='title flex items-center gap-5'>
//             <div className='img w-[300px] h-[100px] overflow-hidden rounded-[150px] shadow-lg'>
//                 <img src={assets.people} alt="people" className='w-full h-full object-cover' />
//             </div>
//             <h1 className='text-8xl font-extralight pl-1 text-gray-400'>
//                 Things I <b className='font-bold font-mono tracking-tight bg-red-800 bg-clip-text text-transparent cursor-grab'>Love</b>
//             </h1>
//         </div>
//         <div className="titleUnder flex items-center justify-center pl-0 gap-4">
//         <h1 className='text-8xl font-extralight text-gray-400'>
//             in my <b className='font-bold bg-purple-700 bg-clip-text text-transparent cursor-grab font-mono tracking-tighter'>Life</b> to do<span className='text-white'>.</span>
//         </h1>
//         <button className="px-4 py-2 w-[250px] h-[80px] rounded-[150px] 
//             bg-gradient-to-br from-purple-500 to-red-800 
//             text-white/90 text-xl font-light
//             transition-all duration-500 ease-in-out
//             hover:from-red-800 hover:to-purple-600 hover:scale-103">
//             WHAT I DO ?
//         </button>
//         </div>
//       </motion.div>
//       <motion.div  variants={variants} className='listContainer flex-2'>
//         <div className='bg bg-gradient-to-l from-purple-700 to bg-red-800 max-w-[1356px] m-auto p-1 rounded-lg  transition-all duration-500 ease-in-out
//             hover:from-purple-700  hover:to-red-900/90 '>
//         <div className='Box flex gap-3 max-w-[1356px] p-5 rounded-lg border-0 bg-blend-difference'>
//              {interests.map((item, index) => (
//         <div
//           key={index}
//           className="p-5 rounded-lg shadow-2xl shadow-orange-600/60 bg-blend-color text-white transition-all duration-500 ease-in-out hover:scale-106"
//         >
//           <h2 className="text-2xl font-semibold mb-3">{item.title}</h2>
//           <p className="text-gray-300 mb-4">{item.desc}</p>
//           {/* <button className="px-10 py-2 rounded-lg border-none  bg-gray-800/30 hover:scale-105 transition-transform duration-300">
//             Go
//           </button> */}
//         </div>
//       ))}
//         </div>
//         </div>
//       </motion.div>
//     </motion.div>
//   )
// }

// export default FondThings

import React, { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import assets, { interests } from '../assets/assets'

const FondThings = () => {

  const ref = useRef(null);

  const variants = {
    initial: {
      x: -500,
      y: 100,
      opacity: 0,
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.3,
      },
    },
  }

  return (
    <motion.div
     ref={ref}
      variants={variants}
      initial="initial" 
      animate='animate'
      // whileInView='animate' wont work
      viewport={{once:true}}
      className='Fond bg-gradient-to-b from-[#0e0e28] to-[#111132] h-auto p-8 max-sm:mt-24 flex flex-col justify-between gap-20'
    >
      {/* Top text */}
      <motion.div
        variants={variants}
        className='textContainer flex-1 self-end flex items-center gap-2 px-4 md:px-0 mt-8 mb-5'
      >
        <p className='font-light text-lg md:text-xl text-[#425f87] text-right leading-relaxed'>
          I <span className='font-bold text-[#2e5fa3]'>focus</span> on one thing and give my<br /> 110% to it.
        </p>
        <hr className='hidden md:block w-xs b-[1px] border-t border-[#425f87] opacity-90' />
      </motion.div>

      {/* Title */}
      <motion.div
        variants={variants}
        className='titleContainer flex-2 flex flex-col items-center gap-6 px-4'
      >
        <div className='title flex flex-col md:flex-row items-center gap-5 text-center md:text-left'>
          <div className='img w-[200px] h-[80px] md:w-[300px] md:h-[100px] overflow-hidden rounded-[150px] shadow-lg'>
            <img src={assets.people} alt="people" className='w-full h-full object-cover' />
          </div>
          <h1 className='text-4xl md:text-8xl font-extralight pl-0 md:pl-1 text-gray-400'>
            Things I <b className='font-bold font-mono tracking-tight bg-red-800 bg-clip-text text-transparent cursor-grab'>Love</b>
          </h1>
        </div>

        <div className="titleUnder flex flex-col md:flex-row items-center justify-center gap-4">
          <h1 className='text-4xl md:text-8xl font-extralight text-gray-400 text-center'>
            in my <b className='font-bold bg-purple-700 bg-clip-text text-transparent cursor-grab font-mono tracking-tighter'>Life</b> to do<span className='text-white'>.</span>
          </h1>
          <button className="px-4 py-2 w-[180px] h-[60px] md:w-[250px] md:h-[80px] rounded-[150px] 
              bg-gradient-to-br from-purple-500 to-red-800 
              text-white/90 text-lg md:text-xl font-light
              transition-all duration-500 ease-in-out
              hover:from-red-800 hover:to-purple-600 hover:scale-103 mt-4 md:mt-0">
            WHAT I DO ?
          </button>
        </div>
      </motion.div>

      {/* List */}
      <motion.div
        variants={variants}
        className='listContainer flex-2 px-4 md:px-0'
      >
        <div className='bg bg-gradient-to-l from-purple-700 to bg-red-800 max-w-[1356px] m-auto p-1 rounded-lg  
            transition-all duration-500 ease-in-out hover:from-purple-700  hover:to-red-900/90'>
          <div className='Box grid grid-cols-1 sm:grid-cols-2 lg:flex gap-3 max-w-[1356px] p-5 rounded-lg border-0 bg-blend-difference'>
            {interests.map((item, index) => (
              <div
                key={index}
                className="p-5 rounded-lg shadow-2xl shadow-orange-600/60 bg-blend-color text-white 
                transition-all duration-500 ease-in-out hover:scale-106"
              >
                <h2 className="text-xl md:text-2xl font-semibold mb-3">{item.title}</h2>
                <p className="text-gray-300 mb-4 text-sm md:text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default FondThings
