import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProdDetalles.css';  

const ProductoDetalle = () => {
  const { id } = useParams(); 
  const [producto, setProducto] = useState(null); 

  async function cargarProducto(id) { 
    try {
      const respuesta = await fetch(`http://localhost:5000/productos/${id}`);
      const productoData = await respuesta.json();

      const respuestaFabricantes = await fetch(`http://localhost:5000/productos/${id}/fabricantes`);
      const productoConFabricantes = await respuestaFabricantes.json();
      productoData.fabricantes = productoConFabricantes.Fabricantes;

      const respuestaComponentes = await fetch(`http://localhost:5000/productos/${id}/componentes`);
      const productoConComponentes = await respuestaComponentes.json();
      productoData.componentes = productoConComponentes.Componentes;

      setProducto(productoData);

    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  }

  useEffect(() => {
    cargarProducto(id);
  }, [id]);

  if (!producto) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="producto-detalles">
    <img src={producto.pathImg} alt={producto.nombre} />
    <div className="producto-detalles-info">
      <h3>Detalles del Producto</h3>
      <p><strong>Nombre:</strong> {producto.nombre}</p>
      <p><strong>Descripción:</strong> {producto.descripcion}</p>
      <p><strong>Precio:</strong> ${producto.precio}</p>
      
      <div>
      
      <section>
            <h3>Componentes</h3>
            <ul>
              {producto?.componentes?.length > 0 ? (
                producto.componentes.map((componente) => (
                  <li key={componente.id}>
                    <a>{componente.nombre}</a>
                  </li>
                ))
              ) : (
                <p>No se encontraron componentes asociados a este producto.</p>
              )}
            </ul>
          </section>
      </div>

      <div>
      <section>
            <h3>Fabricantes</h3>
            <ul>
              {producto?.fabricantes?.length > 0 ? (
                producto.fabricantes.map((fabricante) => (
                  <li key={fabricante.id}>
                    <a>{fabricante.nombre} </a>
                  </li>
                ))
              ) : (
                <p>No se encontraron fabricantes asociados a este producto.</p>
              )}
            </ul>
          </section>
      </div>
    </div>
  </div>
);
};

export default ProductoDetalle;