import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Products from './Components/Products/Products'
import Title from './Components/Title/Title'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Philosophy from './Components/About/Philosophy'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Philosophy/>
      <div className='container'>
        <Title subtitle='Conoce' title='Nuestros Productos Destacados'/>
        <Products/>
      </div>
      <Title subtitle='Contactate' title='Con Nosotros'/>
      <Contact/>
      <Footer />
    </div>
  )
}

export default App