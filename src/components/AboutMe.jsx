import React, { useRef } from 'react'
import { TimeDisplay } from './TimeDisplay';
import Card from './Card';

import { FaMapMarkerAlt } from 'react-icons/fa';
import assets from '../assets/assets';



const AboutMe = () => {
     const grid2ContainerRef = useRef();
  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-20 min-h-screen mt-10 md:mt-20">
  <h2 className="font-bold text-2xl sm:text-3xl md:text-5xl text-center 
  bg-gradient-to-r from-purple-600 to-red-600 bg-clip-text text-transparent">
    About Me - My Coding Bucket
  </h2>

  <div className="grid grid-cols-1 gap-6 md:grid-cols-6 md:auto-rows-[18rem] mt-8 sm:mt-12">
    {/* Grid 1 */}
    <div className="flex items-end p-4 sm:p-6 bg-gradient-to-b from-storm to-indigo rounded-2xl 
    row-span-2 md:col-span-3 h-[18rem] sm:h-[20rem] md:h-full relative overflow-hidden 
    hover:-translate-y-1 duration-200">
      <img
        src={assets.codingPov}
        alt="coding image"
        className="absolute scale-[2] sm:scale-[1.85] -right-10 -top-5 
        md:scale-[3.1] md:left-1/2 md:-translate-x-1/2 lg:scale-[2.8]"
      />
      <div className="z-10 text-sm sm:text-base">
        <p className="mt-2 mb-2 text-lg sm:text-xl font-mono">
          Hi, I'm Rounak <span className="text-red-500">Bakshi.</span>
        </p>
        <p className="text-slate-50 font-bold text-sm sm:text-base leading-relaxed pb-3">
          Over the last 2 years, I developed my frontend dev skills and the last 3–6 months 
          backend skills to make dynamic UIs and ready for Job Application.
        </p>
        <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo-950" />
      </div>
    </div>

    {/* Grid 2 */}
    <div className="p-4 sm:p-6 bg-gradient-to-b from-purple-800 to-black rounded-2xl 
    row-span-1 md:col-span-3 h-[18rem] sm:h-[20rem] md:h-full relative overflow-hidden 
    hover:-translate-y-1 duration-200">
      <div ref={grid2ContainerRef} className="flex flex-col items-center justify-center w-full h-full">
        <p className="text-2xl sm:text-3xl md:text-5xl text-red-800 font-mono">CODE IS CRAFT</p>
        <p className="text-lg sm:text-xl md:text-3xl text-gray-400 font-mono">Grab ME</p>
        {/* Cards stay same */}
        {/* ...your Card components */}
        <Card
                    style={{ rotate: "75deg", top: "30%", left: "20%" }} 
                    text='GRASP'
                    containerRef={grid2ContainerRef}
                    />
                    <Card
                    style={{ rotate: "-30deg", top:"60%", left:"45%"}}
                    text='SOLID'
                    containerRef={grid2ContainerRef}
                     />
                    <Card 
                    style={{ rotate:"90deg", bottom:"30%", left:"70%"}}
                    image={assets.html} 
                    containerRef={grid2ContainerRef}
                    />
                    <Card 
                    style={{ rotate:"-45deg", top:"55%", left:"0%"}}
                    image={assets.css} 
                    containerRef={grid2ContainerRef}
                    />
                    <Card 
                    style={{ rotate:"20deg", top:"10%", left:"30%"}}
                    text='CHILL' 
                    containerRef={grid2ContainerRef}
                    />
                    {/* Images */}
                    <Card 
                    style={{ rotate:"30deg", top:"70%", left:"70%"}}
                    image={assets.cPlus} 
                    containerRef={grid2ContainerRef}
                    />
                    <Card 
                    style={{ rotate:"45deg", top:"20%", left:"19%"}}
                    image={assets.react} 
                    containerRef={grid2ContainerRef}
                    />
                    <Card 
                    style={{ rotate:"30deg", top:"76%", left:"40%"}}
                    image={assets.mongoDb} 
                    containerRef={grid2ContainerRef}
                    />
                    <Card 
                    style={{ rotate:"30deg", top:"10%", left:"83%"}}
                    image={assets.nodeJs} 
                    containerRef={grid2ContainerRef}
                    />
                    <Card 
                    style={{ rotate:"30deg", top:"55%", left:"63%"}}
                    image={assets.cloudinary} 
                    containerRef={grid2ContainerRef}
                    />
                    <Card 
                    style={{ rotate:"30deg", top:"87%", left:"27%"}}
                    image={assets.tailwindCss} 
                    containerRef={grid2ContainerRef}
                    />
                    <Card 
                    style={{ rotate:"30deg", top:"90%", left:"10%"}}
                    image={assets.vsCode} 
                    containerRef={grid2ContainerRef}
                    />
                    <Card 
                    style={{ rotate:"30deg", top:"22%", left:"71%"}}
                    image={assets.vite} 
                    containerRef={grid2ContainerRef}
                    />
                    <Card 
                    style={{ rotate:"-45deg", top:"63%", left:"25%"}}
                    image={assets.c}
                    containerRef={grid2ContainerRef}
                    />
                    <Card 
                    style={{ rotate:"-15deg", top:"10%", left:"65%"}}
                    image={assets.javascript}
                    containerRef={grid2ContainerRef}
                    />
      </div>
    </div>

    {/* Grid 3 */}
    <div className="p-4 sm:p-6 bg-gradient-to-tl from-blue-950 via-[#101010db] to-blue-900 rounded-2xl 
    row-span-1 md:col-span-3 h-[11rem] sm:h-[20rem] md:h-full relative overflow-hidden 
    hover:-translate-y-1 duration-200">
      <div className="z-10 w-full sm:w-[70%] md:w-[80%]">
        <p className="mt-2 mb-2 text-lg sm:text-xl text-purple-500">Time Zone</p>
        <p className="flex items-center text-sm sm:text-base md:text-lg text-neutral-400">
          <FaMapMarkerAlt className="mr-2" /> Kolkata, India 
        </p>
        <TimeDisplay  />
        <p className="text-sm sm:text-base md:text-lg text-neutral-400 mt-2">
          Open to remote work across India.
        </p>
        <p className="text-xs sm:text-sm md:text-base italic text-slate-400 mt-2">
          "I enjoy coding in quiet early mornings and late nights!"
        </p>
      </div>
    </div>
  </div>
</section>
  )
}

export default AboutMe


