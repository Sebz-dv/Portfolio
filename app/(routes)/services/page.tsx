import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";

const ServicesPage = () => {
  return (
    <main className="relative flex min-h-screen bg-no-repeat bg-gradient-to-r from-[#0d0c1a] via-[#220044] to-[#46018a] overflow-hidden">
      {/* Transiciones y elementos visuales */}
      <TransitionPage />
      <CircleImage />le a los 
      <AvatarServices/>

      {/* Contenido principal */}
      <section className="grid items-center justify-center h-screen max-w-7xl gap-8 mx-auto px-6 md:grid-cols-2">
        {/* Información del servicio */}
        <div
          className="max-w-[450px] space-y-6 text-center md:text-left animate-slide-in-left"
        >
          <h1 className="text-3xl md:text-4xl font-semibold text-white">
            Mis <span className="font-bold text-terciary animate-text-glow">servicios</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed animate-fade-in">
            Ofrezco servicios de desarrollo web frontend especializados en la
            creación de sitios web y aplicaciones atractivas y funcionales.
            Utilizando las últimas tecnologías, como HTML, CSS y JavaScript,
            diseño interfaces de usuario intuitivas y responsivas que reflejan
            la identidad de marca de mis clientes y mejoran su presencia en
            línea.
          </p>
          <button
            aria-label="Contacta conmigo"
            className="px-6 py-3 text-lg font-semibold rounded-lg bg-terciary text-black hover:bg-terciary/80 transition-transform duration-300 transform hover:scale-105 animate-pulse"
          >
            Contacta conmigo
          </button>
        </div>

        {/* Slider de servicios */}
        <div className="flex justify-center animate-slide-in-right">
          <SliderServices />
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
