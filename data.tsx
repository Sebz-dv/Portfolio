import {
  BookText,
  CodeSquare,
  HomeIcon,
  UserRound,
  Linkedin,
  Twitter,
  Rss,
  Twitch,
  Youtube,
  Crop,
  Pencil,
  Computer,
  Book,
  Rocket,
  Speech,
  Instagram,
  Locate,
  MessageCircleCode,
  Github,
  MessageCircle,
  MessageCircleHeart,
  MessageSquare,
  MessageSquareText,
  MessageSquareDiff,
  MessageSquareLock,
  MessageSquareDot,
} from "lucide-react";

export const socialNetworks = [
  {
    id: 1,
    logo: <Linkedin size={30} strokeWidth={1} />,
    src: "https://www.linkedin.com/in/sjrm/",
    name: "LinkedIn", // Nombre de la red social
  },
  {
    id: 2,
    logo: <Instagram size={30} strokeWidth={1} />,
    src: "https://www.instagram.com/sebs_0l0/",
    name: "Instagram", // Nombre de la red social
  },
  {
    id: 3,
    logo: <Locate size={30} strokeWidth={1} />,
    src: "https://www.google.com/maps/place/Suba,+Bogot%C3%A1/@4.7614365,-74.0830788,12z/data=!3m1!4b1!4m6!3m5!1s0x8e3f84509d700417:0xc7cd69e940f94f14!8m2!3d4.7207926!4d-74.074768!16s%2Fm%2F02rhtnv?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D",
    name: "Google Maps", // Nombre de la red social
  },
  {
    id: 4,
    logo: <MessageCircleCode size={30} strokeWidth={1} />,
    src: "https://wa.me/573204627207/?text=Hola,%20vi%20tu%20p%C3%A1gina%20web%20y%20me%20pareci%C3%B3%20muy%20interesante.%20Me%20gustar%C3%ADa%20hablar%20contigo%20sobre%20algunos%20detalles%20y%20ver%20c%C3%B3mo%20podemos%20colaborar.",
    name: "WhatsApp", // Nombre de la red social
  },
  {
    id: 5,
    logo: <Github size={30} strokeWidth={1} />,
    src: "https://github.com/Sebz-dv",
    name: "GitHub", // Nombre de la red social
  },
  {
    id: 6,
    logo: <MessageSquareDot size={30} strokeWidth={1} />,
    src: "mailto:sebzdev@gmail.com?subject=Consulta%20sobre%20tu%20p%C3%A1gina%20web&body=Hola,%20vi%20tu%20p%C3%A1gina%20y%20me%20gustar%C3%ADa%20discutir%20algunos%20detalles.%20Espero%20tu%20respuesta.",
    name: "Email", // Nombre de la red social
  },
];

export const itemsNavbar = [
  {
    id: 1,
    title: "Home",
    icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
    link: "/",
  },
  {
    id: 2,
    title: "User",
    icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
    link: "/about-me",
  },
  {
    id: 3,
    title: "Book",
    icon: <BookText size={25} color="#fff" strokeWidth={1} />,
    link: "/services",
  },
  {
    id: 4,
    title: "Target",
    icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
    link: "/portfolio",
  },
  {
    id: 5,
    title: "Home",
    icon: <Speech size={25} color="#fff" strokeWidth={1} />,
    link: "/testimonials",
  },
];

export const dataAboutPage = [
  {
    id: 1,
    title: "Software Developer",
    subtitle: "Disytek",
    description:
      "En Disytek S.A.S, como Desarrollador de Software, implementé y optimicé módulos avanzados en PHP, Laravel, MySQL y JavaScript para mejorar la precisión y eficiencia de los procesos metrológicos. Desarrollé informes detallados y tablas de Excel automatizadas, facilitando la toma de decisiones. Rediseñé la interfaz de usuario, mejorando la satisfacción del cliente. Además, creé un sistema de inventario que optimizó la gestión de recursos y la eficiencia operativa.",
    date: "Enero 2022",
  },
  {
    id: 2,
    title: "Programador Junior",
    subtitle: "Teleperformance",
    description:
      "Trabaja en proyectos emocionantes que desafían los límites de la creatividad y la tecnología. Únete a nosotros mientras creamos experiencias digitales cautivadoras que inspiran y cautivan a nuestros usuarios.",
    date: "May 2021",
  },
  {
    id: 3,
    title: "Especialista en Desarrollo Frontend",
    subtitle: "CodeForge Solutions",
    description:
      "Como desarrollador frontend, tendrás la oportunidad de colaborar en proyectos diversos y desafiantes que te permitirán expandir tus habilidades y dejar tu huella en el mundo digital.",
    date: "Ago 2019",
  },
  {
    id: 4,
    title: "Prácticas Grado",
    subtitle: "WebWizards Inc.",
    description:
      "Únete a nosotros mientras creamos sitios web y aplicaciones interactivas que sorprenden y deleitan a nuestros clientes. Si tienes pasión por el diseño y la programación, y disfrutas colaborar en un entorno creativo, ¡queremos conocerte!        ",
    date: "Mar 2018",
  },
];

export const dataCounter = [
  {
    id: 0,
    endCounter: 3,
    text: "Años de experiencia",
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 1,
    endCounter: 10,
    text: "Clientes satisfechos",
    lineRight: true,
    lineRightMobile: false,
  },
  {
    id: 2,
    endCounter: 50,
    text: "Proyectos finalizados",
    lineRight: true,
    lineRightMobile: true,
  },
  // {
  //   id: 3,
  //   endCounter: 30,
  //   text: "Premios ganadores",
  //   lineRight: false,
  //   lineRightMobile: false,
  // },
];

export const serviceData = [
  {
    icon: <Crop />,
    title: "Branding",
    description:
      "Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo, colores y elementos visuales",
  },
  {
    icon: <Pencil />,
    title: "Diseño web",
    description:
      "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
  },
  {
    icon: <Computer />,
    title: "Desarrollo web",
    description:
      "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
  },
  {
    icon: <Book />,
    title: "Copywriting",
    description:
      "Creación de contenido persuasivo y atractivo que capta la atención de tu audiencia",
  },
  {
    icon: <Rocket />,
    title: "SEO",
    description:
      "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
  },
];

export const dataPortfolio = [
  {
    id: 1,
    title: "Web Pro",
    image: "/image-1.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  }, 
];

export const dataTestimonials = [
  {
    id: 1,
    name: "George Snow",
    description:
      "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
    imageUrl: "/profile1.png",
  },
  {
    id: 2,
    name: "Juan Pérez",
    description:
      "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
    imageUrl: "/profile2.png",
  },
  {
    id: 3,
    name: "María García",
    description:
      "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
    imageUrl: "/profile3.png",
  },
  {
    id: 4,
    name: "Laura Snow",
    description:
      "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
    imageUrl: "/profile4.png",
  },
  {
    id: 5,
    name: "Carlos Sánchez",
    description:
      "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
    imageUrl: "/profile5.png",
  },
  {
    id: 6,
    name: "Antonio Martínez",
    description:
      "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
    imageUrl: "/profile6.png",
  },
];
