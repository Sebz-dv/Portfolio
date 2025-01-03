import { motion } from 'framer-motion';
import { dataAboutPage } from "@/data";
import { dataAboutPageStudi } from "@/data";

const TimeLine = () => {
  return (
    <div className="flex flex-col justify-center divide-y divide-gray-200">
      <div className="w-full max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Columna de Estudios */}
          <motion.div 
            className="bg-black bg-opacity-70 shadow-md rounded-lg p-6"
            initial={{ opacity: 0, y: 20 }} // Inicia con opacidad 0 y desplazado 20px hacia abajo
            animate={{ opacity: 1, y: 0 }} // Animación final
            transition={{ duration: 0.8 }} // Duración de la animación
          >
            <h2 className="text-3xl font-bold mb-6 text-yellow-300 text-center">
              Estudio
            </h2>
            {dataAboutPageStudi.map((data) => (
              <div key={data.id} className="relative py-4 pl-6 sm:pl-16 group">
                <h3 className="mb-2 text-2xl font-semibold text-white">
                  {data.title}
                </h3>
                <div className="flex flex-col sm:flex-row items-start mb-3">
                  <time className="inline-flex items-center justify-center text-xs font-semibold uppercase px-3 py-1 mb-2 sm:mb-0 text-white bg-emerald-500 rounded-full">
                    {data.date}
                  </time>
                  <div className="text-lg font-medium text-yellow-300 ml-3">
                    {data.subtitle}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Columna de Trabajos */}
          <motion.div 
            className="bg-black bg-opacity-70 shadow-md rounded-lg p-6"
            initial={{ opacity: 0, y: 20 }} // Inicia con opacidad 0 y desplazado 20px hacia abajo
            animate={{ opacity: 1, y: 0 }} // Animación final
            transition={{ duration: 0.8 }} // Duración de la animación
          >
            <h2 className="text-3xl font-bold mb-6 text-yellow-300 text-center">
              Trabajo
            </h2>
            {dataAboutPage.map((data) => (
              <div key={data.id} className="relative py-4 pl-6 sm:pl-16 group">
                <h3 className="mb-2 text-2xl font-semibold text-white">
                  {data.title}
                </h3>
                <div className="flex flex-col sm:flex-row items-start mb-3">
                  <time className="inline-flex items-center justify-center text-xs font-semibold uppercase px-3 py-1 mb-2 sm:mb-0 text-white bg-indigo-500 rounded-full">
                    {data.date}
                  </time>
                  <div className="text-lg font-medium text-yellow-300 ml-3">
                    {data.subtitle}
                  </div>
                </div>
                <p className="text-white">{data.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
