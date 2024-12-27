"use client";

import { useState, useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const CoverParticles = () => {
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
            fpsLimit: 120,
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
                  quantity: 8,
                },
                repulse: {
                  distance: 200,
                  duration: 0.8,
                },
              },
            },
            particles: {
              color: {
                value: "#ff0066", // Cambié el color a un tono vibrante
              },
              links: {
                color: "#ff0066", // Coincide con el color de las partículas
                distance: 120,
                enable: true,
                opacity: 0.6,
                width: 2,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: true,
                speed: 2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 900, // Mayor área para las partículas
                },
                value: 200, // Aumenté la cantidad de partículas
              },
              opacity: {
                value: { min: 0.3, max: 0.8 },
              },
              shape: {
                type: ["circle", "triangle"], // Añadí formas triangulares para variedad
              },
              size: {
                value: { min: 2, max: 6 }, // Tamaños más variados para las partículas
              },
            },
            detectRetina: true,
          }}
        />
      </div>
    )
  );
};

export default CoverParticles;
