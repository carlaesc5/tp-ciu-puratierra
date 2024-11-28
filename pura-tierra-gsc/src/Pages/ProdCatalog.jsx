import React, { useState, useEffect } from 'react';
import './ProdCatalog.css'

const CatalogoProductos = () => {
  const [productos, setProductos] = useState([]);  
  const [productoSeleccionado, setProductoSeleccionado] = useState(null); 
  const [loading, setLoading] = useState(true);  
  
 
  useEffect(() => {
    fetch('http://localhost:3001/productos',{
    }) 
      .then(response => response.json())
      .then(data => {
        setProductos(data);
        setLoading(false); 
      })
      .catch(error => {
        console.error("Error al obtener los productos:", error);
        setLoading(false);
      });
  }, []);  

 
  const verDetallesProducto = (productoId) => {
    const producto = producto.find(p => p.id === productoId);
    setProductoSeleccionado(producto);
  };

  
  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>Catálogo de Productos</h1>

      <div className="catalogo">
        {productos.map(producto => (
          <div key={producto.id} className="producto-card" onClick={() => verDetallesProducto(producto.id)}>
            <img src={producto.pathImg} alt={producto.nombre} />
            <h3>{producto.nombre}</h3>
            <p>{producto.descripcion}</p>
            <p><strong>${producto.precio}</strong></p>
          </div>
        ))}
      </div>

      {productoSeleccionado && (
        <div className="producto-detalle">
          <h2>{productoSeleccionado.nombre}</h2>
          <img src={productoSeleccionado.pathImg} alt={productoSeleccionado.nombre} />
          <p>{productoSeleccionado.descripcion}</p>
          <p><strong>Precio: ${productoSeleccionado.precio}</strong></p>
        </div>
      )}
    </div>
  );
};

export default CatalogoProductos;
