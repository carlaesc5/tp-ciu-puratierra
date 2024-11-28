import React, { useState, useEffect } from 'react';
import './ProdCatalog.css'

const CatalogoProductos = () => {
  const [productos, setProductos] = useState([]);  
  const [productoSeleccionado, setProductoSeleccionado] = useState(null); 
  const [loading, setLoading] = useState(true);  
  
 
  useEffect(() => {
    fetch('http://localhost:3001/productos') 
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
            <img src={producto.image} alt={producto.name} />
            <h3>{producto.name}</h3>
            <p>{producto.description}</p>
            <p><strong>${producto.price}</strong></p>
          </div>
        ))}
      </div>

      {productoSeleccionado && (
        <div className="producto-detalle">
          <h2>{productoSeleccionado.name}</h2>
          <img src={productoSeleccionado.image} alt={productoSeleccionado.name} />
          <p>{productoSeleccionado.description}</p>
          <p><strong>Precio: ${productoSeleccionado.price}</strong></p>
        </div>
      )}
    </div>
  );
};

export default CatalogoProductos;
