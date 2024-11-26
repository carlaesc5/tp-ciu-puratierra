import React from 'react'
import './About.css'
import organic from '../../assets/organic.png'

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <a href="https://www.youtube.com/watch?v=LTERF9t2bws&ab_channel=InstitutodeCapacitaci%C3%B3ndelOriente%28ICO%29"><img src={organic} alt='Mujer sosteniendo planta - link a youtube' title='Mujer sosteniendo planta - link a youtube' className='organic'></img></a>
      </div>
      <about className="right">
        <h3>Sobre Nosotros</h3>
        <h2>De la tierra a tu mesa, con amor y sin químicos.</h2>
        <p>Somos una empresa dedicada a la comercialización de productos orgánicos. Fundada en 2017, Pura Tierra nació con el objetivo de ofrecer opciones saludables y sostenibles, respondiendo a las crecientes preocupaciones sobre la salud y el medio ambiente.</p>
        <p>Desde nuestros inicios en Buenos Aires, hemos crecido gracias a la confianza de nuestros clientes y la calidad de nuestros productos.</p>
        <p>Hoy en día, Pura Tierra tiene presencia tanto en el mercado digital como en tiendas físicas, brindando acceso a una amplia gama de productos que cumplen con los más altos estándares de calidad y sostenibilidad.</p>
      </about>
    </div>
  )
}

export default About