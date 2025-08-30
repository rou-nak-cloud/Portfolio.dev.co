import React from 'react'
import { motion } from 'motion/react'

const Card = ({ style, text, image, containerRef }) => {
  return image && !text ? (
    <motion.img className='absolute w-13 cursor-grab' 
    src={image} 
    style={style}
    whileHover={{ scale: 1.1}}
    drag
    dragConstraints={containerRef}
    dragElastic={1}
    />
  ) : (
    <motion.div className='absolute px-1 py-4 text-xl text-center rounded-full ring ring-blue-800 font-extralight bg-storm w-[12rem] cursor-grab'
        style={ style }
         whileHover={{ scale: 1.05}}
         drag
         dragConstraints={containerRef}
         dragElastic={0.5}
        >
        { text }
    </motion.div>
  )
}

export default Card
