import React from 'react'
import Hero from '../Components/Hero/Hero'
import About from '../Components/About/About'
import Title from '../Components/Title/Title'
import Products from '../Components/Products/Products'
import Philosophy from '../Components/About/Philosophy'
import Contact from '../Components/Contact/Contact'


const Home = () => {
    return (
        <div>
            <Hero />
            <About />
            <Philosophy/>
            <div className='container'>
                <Title subtitle='Conoce' title='Nuestros Productos Destacados' />
                <Products />
            </div>
            <Title subtitle='Contactate' title='Con Nosotros' />
            <Contact />
        </div>
    )
}

export default Home