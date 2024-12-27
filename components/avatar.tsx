"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import { MotionTransition } from "./transition-component";
import "aos/dist/aos.css"; // Importa los estilos de AOS

export function Avatar() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de la animación
      easing: "ease-in-out", // Tipo de transición
      once: true, // Animación solo se ejecuta una vez
    });
  }, []);

  return (
    <MotionTransition position="bottom" className="bottom-0 right-0 hidden md:inline-block md:absolute">
      <div
        className="w-full h-full"
        data-aos="fade-up" // Animación AOS cuando aparece
        data-aos-delay="200" // Retardo en la animación para dar tiempo a otros elementos
      >
        <Image
          src="/avatar-1.png"
          width="400"
          height="400"
          className="w-full h-full object-cover rounded-full shadow-xl"
          alt="Particles"
        />
      </div>
    </MotionTransition>
  );
}
