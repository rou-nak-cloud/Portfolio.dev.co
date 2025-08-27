import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Parallax from './components/Parallax'

const App = () => {
  return (
    <>
     <div className='body bg-[#090926] text-[#d1d5db]'>
        <section id='Homepage'>
          <Navbar />
          <div className='hero bg-gradient-to-b from-[#090926] to-[#14143c]' >
            <Hero />
          </div>
        </section>
        <section id='Education'>
          <Parallax type='education'/>
        </section>
        <section></section>
        <section id='Projects'>
          <Parallax type='projects' />
        </section>
     </div>
    </>
  )
}

export default App