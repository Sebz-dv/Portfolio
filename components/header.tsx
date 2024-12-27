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
        <div className="container flex justify-between max-w-6xl mx-auto px-4 md:px-0 items-center">
          {/* Logo */}
          <Link href="/">
            <h1 className="my-3 text-5xl font-bold text-center md:text-left text-gradient bg-gradient-to-r from-yellow-400 via-red-500 to-pink-600 p-1 rounded-md shadow-lg transition-all duration-300 transform hover:scale-105 hover:text-yellow-300">
              Sebz
              <span className="text-secondary">Dev</span>
            </h1>
          </Link>

          {/* Botón hamburguesa */}
          <button
            className="md:hidden flex items-center justify-center w-12 h-12 bg-gray-800/80 backdrop-blur-md border border-gray-700 text-white rounded-full shadow-lg transition-transform duration-300 hover:scale-110 mr-4"
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
          <div
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row items-center justify-center gap-7 absolute md:static top-16 right-5 md:top-auto md:right-auto bg-white/30 backdrop-blur-md border border-white/20 md:bg-transparent p-4 md:p-0 shadow-lg md:shadow-none rounded-md md:rounded-none z-50`}
          >
            {socialNetworks.map(({ logo, src, id }) => (
              <Link
                key={id}
                href={src}
                target="_blank"
                className="transition-transform duration-300 transform hover:scale-125 hover:text-terciary hover:rotate-12 p-2 rounded-full border-2 border-transparent hover:border-terciary shadow-lg"
              >
                {logo}
              </Link>
            ))}
          </div>
        </div>
      </header>
    </MotionTransition>
  );
};

export default Header;
