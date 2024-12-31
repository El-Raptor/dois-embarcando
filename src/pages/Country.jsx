import React from 'react';
import { useParams } from 'react-router-dom';

const Country = () => {
  const { countryId } = useParams();

  return (
    <div>
      <h1>Informações sobre o país: {countryId}</h1>
      <p>Detalhes e destaques sobre o país aqui.</p>
    </div>
  );
};

export default Country;
