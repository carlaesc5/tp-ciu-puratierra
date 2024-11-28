import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import './ProdCatalog.css';

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
      <h3>Detalles del Producto</h3>
      <img src={producto.pathImg} alt={producto.nombre} />
      <p><strong>Nombre:</strong> {producto.nombre}</p>
      <p><strong>Descripción:</strong> {producto.descripcion}</p>
      <p><strong>Precio:</strong> ${producto.precio}</p>
      <p><strong>Componentes:</strong> </p>

    </div>
  );
};

export default ProductoDetalle;