import React, { useEffect, useState } from 'react';
import './Componentes.css';
import Title from '../Title/Title';

const Componentes = () => {
  const [componentes, setComponentes] = useState([]);
  const [componenteSeleccionado, setComponenteSeleccionado] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/componentes')
      .then(response => response.json())
      .then(data => {
        setComponentes(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error al obtener los componentes:", error);
        setLoading(false);
      });
  }, []);

  const verDetallesComponentes = (componenteId) => {
    const componente = componentes.find(c => c.id === componenteId);  // Cambié 'componente' por 'componentes'
    setComponenteSeleccionado(componente);
};

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <div className='container'>
        <Title subtitle='' title='Componentes' />
      </div>

      <div className="catalogo">
        {componentes.map(componente => (
          <div key={componente.id} className="fabricante-card" onClick={() => verDetallesComponentes(componente.id)}>
            <img src={componente.pathImgPerfil} alt={componente.nombre} />
            <h3>{componente.nombre}</h3>
            <p>{componente.direccion}</p>
            <p>{componente.numeroContacto}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Componentes;