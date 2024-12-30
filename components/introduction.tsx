"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import LanguageSwitcher from "./translate";  // Asegúrate de que la ruta sea correcta

const Introduction = () => {
  return (
    <div className="relative w-full min-h-screen z-20 flex items-center justify-center">
      <div className="grid items-center gap-8 px-4 py-6 md:grid-cols-2 md:px-8 lg:py-12 max-w-7xl">
        {/* Agregar LanguageSwitcher en la parte superior */}
        <div className="absolute top-4 right-4 z-30">
          <LanguageSwitcher />
        </div>

        {/* Animación de la imagen */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center items-center"
        >
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 overflow-hidden rounded-full shadow-2xl transform hover:scale-110 transition-all duration-500 ease-out">
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full border-8 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-spin-slow opacity-20"></div>

            {/* Inner Pulse */}
            <div className="absolute inset-0 rounded-full border-4 border-primary animate-pulse"></div>

            {/* Image */}
            <Image
              src="/home-4.png"
              priority
              width={584}
              height={584}
              alt="Avatar"
              className="object-cover rounded-full transition-transform duration-700 ease-in-out transform hover:scale-105"
            />
          </div>
        </motion.div>

        {/* Contenido textual */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          {/* Animación de título */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.3,
              type: "spring",
              stiffness: 100,
            }}
            className="mb-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-green-500"
          >
            Si lo imaginas, <br />
            <TypeAnimation
              sequence={[
                "puedes crearlo",
                1000,
                "puedes perfeccionarlo",
                1000,
                "puedes materializarlo",
                1000,
                "puedes ejecutarlo",
                1000,
                "puedes transformarlo",
                1000,
              ]}
              wrapper="span"
              speed={60}
              repeat={Infinity}
              className="text-2xl sm:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 animate-pulse"
            />
          </motion.h1>

          {/* Descripción */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="mb-6 text-lg sm:text-xl text-gray-300"
          >
            Como desarrollador fullstack, fusiono creatividad y tecnología para
            crear experiencias digitales que no solo impactan, sino que también
            son accesibles y funcionales.
          </motion.p>

          {/* Botones */}
          <motion.div
            className="flex flex-wrap gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <a
              href="/projects"
              className="px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-semibold transition-all duration-300 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white border-2 border-transparent hover:scale-105 hover:from-indigo-600 hover:to-blue-500 hover:border-indigo-500 shadow-lg hover:shadow-xl"
            >
              Explora mis proyectos
            </a>
            <a
              href="/contact"
              className="px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-semibold transition-all duration-300 rounded-full bg-gradient-to-r from-green-500 to-teal-600 text-white border-2 border-transparent hover:scale-105 hover:from-teal-600 hover:to-green-500 hover:border-teal-500 shadow-lg hover:shadow-xl"
            >
              Hablemos
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
