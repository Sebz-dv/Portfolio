"use client";
import CoverParticicles2 from "@/components/cover-particicles2";
import { useState } from "react";
import { dataPortfolio } from "@/data";
import AvatarPortfolio from "@/components/avatar-portfolio";
import CircleImage from "@/components/circle-image";
import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container-page";
import PortfolioBox from "@/components/portfolio-box";

// Definir tipos explícitos para las props del componente Pagination
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

// Componente de Paginación
const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => (
  <div className="mt-6 flex justify-center space-x-2">
    <button
      onClick={() => onPageChange(currentPage - 1)}
      disabled={currentPage === 1}
      aria-label="Página anterior"
      className="px-6 py-3 bg-[#ffcd29] text-black rounded-lg shadow-lg hover:bg-[#ffa339] border-[#000000] hover:shadow-xl disabled:opacity-50 transition-all duration-300 ease-in-out"
    >
      Anterior
    </button>

    {[...Array(totalPages)].map((_, index) => (
      <button
        key={index}
        onClick={() => onPageChange(index + 1)}
        aria-label={`Página ${index + 1}`}
        className={`px-6 py-3 rounded-lg border-2 transition-all duration-300 ease-in-out ${
          currentPage === index + 1
            ? "bg-[#ffcd29] text-black border-[#000000] shadow-lg"
            : "bg-[#ffffff] text-black border-[#000000] hover:bg-purple-100"
        } hover:shadow-md`}
      >
        {index + 1}
      </button>
    ))}

    <button
      onClick={() => onPageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
      aria-label="Página siguiente"
      className="px-6 py-3 bg-[#ffcd29] text-black rounded-lg shadow-lg hover:bg-[#ffa339]  border-[#000000] hover:shadow-xl disabled:opacity-50 transition-all duration-300 ease-in-out"
    >
      Siguiente
    </button>
  </div>
);

const PortfolioPage = () => {
  // Estado para la paginación con tipo explícito
  const [currentPage, setCurrentPage] = useState<number>(1); // Especificamos el tipo como 'number'
  const itemsPerPage = 4; // Mostrar 4 elementos por página

  // Lógica de paginación
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = dataPortfolio.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(dataPortfolio.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="relative flex flex-col min-h-screen bg-gradient-to-r from-[#1a0033] via-[#220044] to-[#330066] overflow-hidden">
      {/* Animaciones y elementos decorativos */}
      <CoverParticicles2 />
      <TransitionPage />
      <AvatarPortfolio />
      <CircleImage />

      <ContainerPage>
        {/* Contenido principal */}
        <div className="flex flex-col justify-center items-center h-full px-4">
          <h1 className="text-2xl text-center font-semibold text-white md:text-4xl md:mb-6">
            Mis últimos{" "}
            <span className="text-terciary font-bold">trabajos realizados</span>
          </h1>

          {/* Grid de proyectos - Cambia el número de columnas según el tamaño de pantalla */}
          <div className="mt-6 w-full max-w-full overflow-hidden flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center">
              {currentItems.map((data) => (
                <PortfolioBox key={data.id} data={data} />
              ))}
            </div>
          </div>

          {/* Paginación */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </ContainerPage>
    </div>
  );
};

export default PortfolioPage;
