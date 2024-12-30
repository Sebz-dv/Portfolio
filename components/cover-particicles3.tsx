"use client";

import { useState, useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const AbstractParticles = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    init && (
      <div className="w-[0px]">
        <Particles
          id="tsparticles"
          options={{
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: {
                  enable: false, // Deshabilitado para evitar partículas al hacer clic
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
              },
              modes: {
                push: {
                  quantity: 3, // Reducimos la cantidad de partículas generadas
                },
                repulse: {
                  distance: 100,
                  duration: 1.5,
                },
              },
            },
            particles: {
              color: {
                value: "#b3b3b3", // Color suave para las partículas
              },
              links: {
                color: "#ffffff", // Color de las líneas de conexión
                distance: 100,
                enable: true, // Habilitamos las líneas de conexión entre partículas
                opacity: 0.3, // Transparencia de las líneas de conexión
                width: 0.5, // Ancho de las líneas de conexión
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "out",
                },
                random: true,
                speed: 0.2, // Velocidad de las partículas
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                //   area: 700, // Área de dispersión de partículas
                },
                value: 200, // Número de partículas
              },
              opacity: {
                value: { min: 0.1, max: 0.6 }, // Opacidad de las partículas
              },
              shape: {
                type: "circle", // Partículas como círculos difusos
              },
              size: {
                value: { min: 2, max: 6 }, // Tamaño de las partículas más pequeño
              },
              life: {
                duration: { min: 2, max: 4 }, // Duración de vida de las partículas
                count: 1, // Cada partícula aparece solo una vez
              },
            },
            detectRetina: true,
          }}
        />
      </div>
    )
  );
};

export default AbstractParticles;
