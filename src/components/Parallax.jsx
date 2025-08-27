import React from 'react'
import assets from '../assets/assets'

const Parallax = ({ type }) => {
  return (
    <>
     <div className='parallax w-full h-full relative flex items-center justify-center'
     style={{
        background: type === "education"
        ? "linear-gradient(180deg, #14143c, #0c0c1d)"
        : "linear-gradient(180deg, #111132, #505064)"
     }}
     >
        <h1 className='text-8xl tracking-widest bg-gradient-to-r from-red-700/90 to-purple-600 bg-clip-text text-transparent'>{type === "education" ? 'My Study' : "My projects"}</h1>
        <div className='mountains'>
            <img src={assets.mountains} alt="mountains" className='bg-cover bottom-0 left-0 w-full h-full absolute z-1' />
        </div>
        <div className='planets'>
            <img src={assets.planets} alt="planets" className='bg-cover bottom-0 left-0 w-full h-full absolute z-2' />
        </div>
        <div className='stars'>
            <img src={assets.stars} alt="stars" className='bg-cover bottom-0 left-0 w-full h-full absolute' />
        </div>
     </div>
    </>
  )
}

export default Parallax