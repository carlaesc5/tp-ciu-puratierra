import React, { useEffect, useState } from 'react';
import './Componentes.css';
import Title from '../Title/Title';

const Componentes = () => {
  const [componentes, setComponentes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/componentes') 
      .then(response => {
        if (!response.ok) {
          throw new Error('Error en la respuesta del servidor');
        }
        return response.json();
      })
      .then(data => {
        setComponentes(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error al obtener los componentes:', error);
        setLoading(false);
      });
  }, []);  

  if (loading) {
    return <div>Cargando componentes...</div>;
  }

  return (
    <div>
      <div className='container'>
        <Title subtitle='' title='Componentes' />
      </div>

      <div className="catalogo">
        {componentes.map(componente => (
          <div key={componente.id} className="component-card">
            <h3>{componente.nombre}</h3>
            <p>{componente.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Componentes;
