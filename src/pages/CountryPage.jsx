import React from "react";
import { useParams } from "react-router-dom";

const CountryPage = () => {
  const { slug } = useParams();

  // Aqui você pode carregar os dados do país com base no slug
  return (
    <div>
      <h1>Bem-vindo à página de {slug.replace(/-/g, " ")}</h1>
      {/* Renderize os dados do país aqui */}
    </div>
  );
};

export default CountryPage;
