"use client";
import { motion } from "framer-motion";
import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";
import CoverParticicles2 from "@/components/cover-particicles2";

const ServicesPage = () => {
  return (
    <main className="relative flex flex-col min-h-screen bg-no-repeat bg-gradient-to-r from-[#0d0c1a] via-[#220044] to-[#46018a] overflow-hidden">
      {/* Transiciones y elementos visuales */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <CoverParticicles2 />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <TransitionPage />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <CircleImage />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -45 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <AvatarServices />
      </motion.div>

      {/* Contenido principal */}
      <motion.section
        className="flex flex-col items-center justify-center min-h-screen max-w-7xl gap-6 mx-auto px-4 sm:px-6 lg:px-8 md:grid md:grid-cols-2 md:gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        {/* Información del servicio */}
        <motion.div
          className="w-full max-w-[320px] sm:max-w-[450px] space-y-4 text-center md:text-left px-2 sm:px-4"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-lg sm:text-2xl lg:text-4xl font-semibold text-white">
            Mis{" "}
            <span className="font-bold text-terciary animate-text-glow">
              servicios
            </span>
          </h1>
          <p className="text-xs sm:text-sm lg:text-lg text-gray-300 leading-relaxed">
            Ofrezco servicios de desarrollo web frontend especializados en la
            creación de sitios web y aplicaciones atractivas y funcionales.
            Utilizando las últimas tecnologías, como HTML, CSS y JavaScript,
            diseño interfaces de usuario intuitivas y responsivas que reflejan
            la identidad de marca de mis clientes y mejoran su presencia en
            línea.
          </p>
          <motion.button
            aria-label="Contacta conmigo"
            className="px-3 py-2 sm:px-5 sm:py-3 text-sm sm:text-base lg:text-lg font-semibold rounded-lg bg-terciary text-black hover:bg-terciary/80 transition-transform duration-300 transform hover:scale-105"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Contacta conmigo
          </motion.button>
        </motion.div>

        {/* Slider de servicios */}
        <motion.div
          className="w-full max-w-[280px] sm:max-w-[600px] flex justify-center items-center"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <SliderServices />
        </motion.div>
      </motion.section>
    </main>
  );
};

export default ServicesPage;
