import React from 'react'
import './About.css'

const Philosophy = () => {
    return (
        <div className='about'>
            <div className="about-left">
                <p>En Pura Tierra, creemos que la salud y el bienestar de nuestros clientes van de la mano con el respeto al medio ambiente. Nos dedicamos a ofrecer productos orgánicos de la más alta calidad, libres de químicos, promoviendo prácticas agrícolas sostenibles y apoyando a los productores locales. Nuestra misión es proporcionar alternativas saludables y responsables, brindando transparencia y educación para fomentar decisiones conscientes.</p>
            </div>
            <about className="right">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/6K1a7lhDLbM?si=835zmQS4xiCkV9ew" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </about>
        </div>
    )
}

export default Philosophy