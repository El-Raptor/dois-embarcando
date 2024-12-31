import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import { useNavigate } from "react-router-dom";

const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-50m.json";

const WorldMap = () => {
  const [position, setPosition] = useState({ coordinates: [0, 0], zoom: 1 });
  const navigate = useNavigate();

  const handleMoveEnd = (position) => {
    setPosition(position); // Atualiza as coordenadas e o nível de zoom ao finalizar a movimentação
  };

  const handleCountryClick = (country) => {
    navigate(`/country/${country}`)
  };

  return (
    <div style={{ width: "60%", margin: "0 auto" }}>
      <ComposableMap
        width={800} // Largura do mapa
        height={400} // Altura do mapa
        projectionConfig={{ scale: 160 }} // Ajuste da escala
      >
        <ZoomableGroup
          center={position.coordinates}
          zoom={position.zoom}
          onMoveEnd={handleMoveEnd} // Atualiza a posição ao finalizar o movimento
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={() => handleCountryClick(geo.properties.name)}
                  style={{
                    default: { fill: "#D6D6DA", outline: "none" },
                    hover: { fill: "#F53", outline: "none" },
                    pressed: { fill: "#E42", outline: "none" },
                  }}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default WorldMap;
