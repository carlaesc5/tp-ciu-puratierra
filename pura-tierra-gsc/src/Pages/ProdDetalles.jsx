import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProdDetalles.css';  

const ProductoDetalle = () => {
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/productos/${id}`)
      .then(response => response.json())
      .then(data => {
        setProducto(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error al obtener los detalles del producto:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (!producto) {
    return <div>Producto no encontrado.</div>;
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
          <p><strong>Componentes:</strong></p>
          <ul>
            {producto.componentes && producto.componentes.length > 0 ? (
              producto.componentes.map((componente) => (
                <li key={componente.id}>{componente.nombre} - {componente.descripcion}</li>
              ))
            ) : (
              <p>No tiene componentes.</p>
            )}
          </ul>
        </div>

        <div>
          <p><strong>Fabricantes:</strong></p>
          <ul>
            {producto.fabricantes && producto.fabricantes.length > 0 ? (
              producto.fabricantes.map((fabricante) => (
                <li key={fabricante.id}>{fabricante.nombre}</li>
              ))
            ) : (
              <p>No tiene fabricantes.</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductoDetalle;
