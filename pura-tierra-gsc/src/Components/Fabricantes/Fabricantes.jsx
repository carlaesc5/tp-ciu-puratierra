import React, { useEffect, useState } from 'react';
import './Fabricante.css';
import Title from '../Title/Title';

const Fabricantes = () => {
  const [fabricantes, setFabricantes] = useState([]);
  const [fabricanteSeleccionado, setFabricanteSeleccionado] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/fabricantes')
      .then(response => response.json())
      .then(data => {
        setFabricantes(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error al obtener los fabricantes:", error);
        setLoading(false);
      });
  }, []);

  const verDetallesFabricantes = (fabricanteId) => {
    const fabricante = fabricantes.find(f => f.id === fabricanteId);   
};

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <div className='container'>
        <Title subtitle='' title='Fabricantes' />
      </div>

      <div className="catalogo">
        {fabricantes.map(fabricante => (
          <div key={fabricante.id} className="fabricante-card" onClick={() => verDetallesFabricantes(fabricante.id)}>
            <img src={fabricante.pathImgPerfil} alt={fabricante.nombre} />
            <h3>{fabricante.nombre}</h3>
            <p>{fabricante.direccion}</p>
            <p>{fabricante.numeroContacto}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fabricantes;