import React, { useState, useEffect } from 'react';
import './ProdCatalog.css'
import { Link } from 'react-router-dom';

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
    const producto = productos.find(p => p.id === productoId);
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
            <Link to={`/producto/${producto.id}`}>
              <button>Ver Detalles</button>
            </Link>
          </div>
        ))}
      </div>

    </div>
  );
};

export default CatalogoProductos;
