import React from 'react'
import assets from '../assets/assets'

const Hero = () => {
  return (
    <>
     <div className='hero overflow-hidden relative min-h-[calc(100vh-40px)] sm:min-h-[calc   (100vh-60px)] md:min-h-[calc(100vh-70px)] w-full'>
        <div className='wrapper w-[1000px] h-screen flex items-center justify-center'>
            <div className='textContainer h-screen w-[600px] flex flex-col justify-center gap-9 z-[9]'>
                <h2 className='text-3xl tracking-[9px] font-semibold bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent'>ROUNAK BAKSHI</h2>
                <h1 className='text-7xl'>Web developer <span className='text-purple-800/90 cursor-grab'>&</span> Electronics engineer<span className='text-red-500'>.</span></h1>
                <div className="buttons flex gap-4 z-[10]">
                      <a 
                            href="https://github.com/rou-nak-cloud" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                    <button className="p-4 border border-purple-800 rounded-lg font-light cursor-pointer transition-all duration-500 ease-in-out hover:bg-gradient-to-r hover:from-red-600 hover:to-purple-700 
                       hover:text-white hover:scale-105">
                        See the projects in <span className='font-bold text-white/90'>github</span>
                    </button>
                    </a>
                    <button className="p-4 border border-purple-800 rounded-lg font-light cursor-pointer transition-all duration-300 ease-in-out  hover:bg-gradient-to-r hover:from-purple-700 hover:to-red-600 
                       hover:text-white hover:scale-105">
                        Know about <span className='font-bold text-white/90'>me</span>
                    </button>
                </div>
                <img src={assets.scroll} alt="scroll" className='w-12 cursor-all-scroll z-[10] opacity-75' />
            </div>
        </div>
        <div className='slidingText absolute text-[50vh] bottom-[-80px] whitespace-nowrap opacity-10 select-none'>
            Full Stack Coder <span className=''>&</span> Calisthenic Athlete
        </div>
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