"use client";

import { useState, useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const StarsParticles = () => {
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
                  quantity: 5, // Reducimos la cantidad de partículas generadas
                },
                repulse: {
                  distance: 100,
                  duration: 1,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff", // Color blanco para las estrellas
              },
              links: {
                color: "#ffffff", // Enlaces también de color blanco
                distance: 100,
                enable: false, // Deshabilitamos los enlaces entre partículas
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "out",
                },
                random: true,
                speed: 0.3, // Velocidad baja para simular el movimiento lento de las estrellas
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  // area: 800, // Área para las estrellas
                },
                value: 300, // Pocas estrellas
              },
              opacity: {
                value: { min: 0.2, max: 0.8 }, // Opacidad para simular estrellas brillando tenuemente
              },
              shape: {
                type: "circle", // Forma de las partículas como círculos (simulando estrellas)
              },
              size: {
                value: { min: 1, max: 3 }, // Estrellas pequeñas
              },
            },
            detectRetina: true,
          }}
        />
      </div>
    )
  );
};

export default StarsParticles;
