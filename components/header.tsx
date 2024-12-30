"use client";
import { useState } from "react";
import { socialNetworks } from "@/data";
import Link from "next/link";
import { MotionTransition } from "./transition-component";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <MotionTransition
      position="bottom"
      className="absolute z-40 w-full top-5 md:top-10"
    >
      <header>
        <div className="container flex justify-between items-center max-w-6xl mx-auto px-4 md:px-8">
          {/* Logo */}
          <Link href="/">
            <h1 className="my-3 text-3xl sm:text-4xl md:text-5xl font-bold text-center md:text-left text-gradient bg-gradient-to-r from-yellow-400 via-red-500 to-pink-600 p-1 rounded-md shadow-lg transition-all duration-300 transform hover:scale-105 hover:text-yellow-300">
              Sebz
              <span className="text-secondary">Dev</span>
            </h1>
          </Link>

          {/* Botón hamburguesa */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 bg-gray-800/80 backdrop-blur-md border border-gray-700 text-white rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <span
                className={`absolute top-0 left-0 w-full h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`absolute top-2.5 left-0 w-full h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </div>
          </button>

          {/* Redes sociales */}
          <nav
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row items-center gap-5 absolute md:static top-16 right-4 left-4 md:top-auto md:left-auto md:right-auto bg-white/30 backdrop-blur-md border border-white/20 md:bg-transparent p-4 md:p-0 shadow-lg md:shadow-none rounded-lg md:rounded-none z-50`}
          >
            {socialNetworks.map(({ logo, src, id, name }) => (
              <div
                key={id}
                className="group flex flex-col items-center space-y-2 transition-transform duration-300 transform hover:scale-125 hover:text-terciary hover:rotate-12 p-2 rounded-full border-2 border-transparent hover:border-terciary shadow-md"
              >
                {/* Ícono de la red social */}
                <a href={src} target="_blank" rel="noopener noreferrer">
                  {logo}
                </a>
                {/* Nombre de la red social, visible solo al hacer hover */}
                <span className="text-xs text-center hidden group-hover:block">
                  {name}
                </span>
              </div>
            ))}
          </nav>
        </div>
      </header>
    </MotionTransition>
  );
};

export default Header;
