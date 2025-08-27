import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

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
        <section></section>
        <section></section>
        <section></section>
     </div>
    </>
  )
}

export default App