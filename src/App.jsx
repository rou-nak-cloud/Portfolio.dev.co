import React, { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Parallax from './components/Parallax'
import { Education } from './components/Education'
import FondThings from './components/FondThings'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'

const App = () => {
    const dotRef =  useRef(null)
  const outerRingRef =  useRef(null)

  // Refs for custom cursor position tracking
  const mouse = useRef({x:0,y:0}) // actual mouse position (instant)
  const position = useRef({x:0,y:0}) //a lagged/smooth position

    // Track scaling
  const scale = useRef(1)

  useEffect(()=>{
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }

    document.addEventListener('mousemove', handleMouseMove)

    // Hover effects (scale up when hovering text elements)
    const handleMouseEnter = () => {
      scale.current = 2 // grow
    }
    const handleMouseLeave = () => {
      scale.current = 1 // reset
    }
    // Attach to all text elements (p, h1–h6, span, a)
  const textElements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, span, a, button")
  textElements.forEach((el) => {
    el.addEventListener("mouseenter", handleMouseEnter)
    el.addEventListener("mouseleave", handleMouseLeave)
  })

    // smoothing / lag effect:
    const animate = () => {
      position.current.x += (mouse.current.x - position.current.x) * 0.03
      position.current.y += (mouse.current.y - position.current.y) * 0.03

      if(dotRef.current && outerRingRef.current){
        dotRef.current.style.transform = `translate3d(${mouse.current.x - 6}px, ${mouse.current.y - 6}px, 0) scale(${scale.current})`
        outerRingRef.current.style.transform = `translate3d(${position.current.x - 10}px, ${position.current.y - 10}px, 0) scale(${scale.current})`
      }
      requestAnimationFrame(animate) //creates a loop using requestAnimationFrame (optimized for 60fps).
    }
    animate()

    return ()=> {
      document.removeEventListener('mousemove', handleMouseMove) //Cleanup
        textElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  },[])

  return (
    <>
     <div className='body bg-[#090926] text-[#d1d5db]'>
        <section id='Homepage'>
          <Navbar />
          <div className='hero bg-gradient-to-b from-[#090926] to-[#14143c]' >
            <Hero />
          </div>
        </section>
        <section>
          <Parallax type='education'/>
        </section>
        <section id='Education' className="min-h-fit">
          <Education />
        </section>
        <section>
          <AboutMe />
        </section>
        <section>
          <FondThings />
        </section>
        <Projects />

        {/* Mouse move animation */}
          {/* custom curser outer ring */}
          <div ref={outerRingRef} className='fixed top-0 left-0 w-5 h-5 rounded-full border border-[#c026d3] pointer-events-none z-[9999] transition-transform duration-200 ease-out'></div>

          {/* custom cursor dot */}
          <div ref={dotRef} className='fixed top-0 left-0 w-3 h-3 rounded-full bg-[#4338ca] pointer-events-none z-[9999] transition-transform duration-200 ease-out'></div>
     </div>
    </>
  )
}

export default App