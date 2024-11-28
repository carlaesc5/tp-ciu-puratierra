import React from 'react'
import './Products.css'
import { useNavigate } from 'react-router-dom';
import prod1 from '../../assets/azucar-organic.jpg'
import prod2 from '../../assets/pasta-organic.jpg'
import prod3 from '../../assets/yerba-organic.jpg'
import arrow from '../../assets/right-arrow.png'


const Products = () => {
    const navigate = useNavigate();
    const redirigir = () => {
        navigate('/productos');  
      };

    return (
        <div className='container'>
            <div className='products'>
                <div className="product">
                    <img src={prod1} alt="Azúcar orgánica Dicomere" title="Azúcar orgánica Dicomere" />
                    <div className="caption">
                        <p>Azucar Organica Libre de Agrotoxicos x 1kg - Dicomere</p>
                    </div>
                </div>

                <div className="product">
                    <img src={prod2} alt="Pasta con Tomate Pampa Gourmet" title="Pasta con Tomate Pampa Gourmet" />
                    <div className="caption">
                        <p>Pasta Organica Tallarines con Tomate x 500g - Pampa Gourmet</p>
                    </div>
                </div>

                <div className="product">
                    <img src={prod3} alt="Yerba Mate Roapipo" title="Yerba Mate Roapipo" />
                    <div className="caption">
                        <p>Yerba Mate Organica con Hierbas x 500g - Roapipo</p>
                    </div>
                </div>
            </div>
            <div className="button">
                <button className='btn' onClick={redirigir}>Ver más <img src={arrow} alt="" /> </button>
            </div>
        </div>

    )
}

export default Products