import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaDocker,
  FaFigma,
  FaCode,
  FaPhp,
  FaJava,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
  SiFramer,
  SiExpress,
  SiNestjs,
  SiPrisma,
  SiRedux,
  SiReactquery,
  SiMysql,
  SiRedis,
  SiPostman,
  SiVite,
  SiWebpack,
  SiEslint,
  SiPrettier,
  SiVercel,
  SiNetlify,
  SiAwsamplify,
  SiFirebase,
  SiBiome,
  SiAmazonwebservices,
  SiMui,
  SiSass,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiBun,
} from "react-icons/si";
import type { SocialLink, Skill, Project, HeroData } from "../types";
import { FaGolang } from "react-icons/fa6";
import { RsPackIcon } from "../components/icons";

export const heroData: HeroData = {
  name: "Mauro Altamirano",
  title: "Full Stack Developer",
  subtitle: "Desarrollador Frontend & Backend",
  description:
    "Transformo ideas en experiencias digitales excepcionales. Especializado en crear soluciones web modernas, escalables y centradas en el usuario.",
};

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/mauroaltamirano-dev",
    icon: FaGithub,
    color: "hover:text-gray-300",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mauroaltamirano/",
    icon: FaLinkedin,
    color: "hover:text-blue-400",
  },
];

export const skills: Skill[] = [
  // Lenguajes de Programación
  {
    name: "JavaScript",
    icon: FaJsSquare,
    category: "languages",
    color: "#F7DF1E",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    category: "languages",
    color: "#3178C6",
  },
  {
    name: "Go",
    icon: FaGolang,
    category: "languages",
    color: "#00ADD8",
  },
  {
    name: "PHP",
    icon: FaPhp,
    category: "languages",
    color: "#777BB4",
  },
  {
    name: "HTML5",
    icon: FaHtml5,
    category: "languages",
    color: "#E34F26",
  },
  {
    name: "CSS3",
    icon: FaCss3Alt,
    category: "languages",
    color: "#1572B6",
  },

  // Frameworks
  {
    name: "React",
    icon: FaReact,
    category: "frameworks",
    color: "#61DAFB",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    category: "frameworks",
    color: "#000000",
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    category: "frameworks",
    color: "#339933",
  },
  {
    name: "Express.js",
    icon: SiExpress,
    category: "frameworks",
    color: "#000000",
  },
  {
    name: "NestJS",
    icon: SiNestjs,
    category: "frameworks",
    color: "#E0234E",
  },
  {
    name: "SASS",
    icon: SiSass,
    category: "frameworks",
    color: "#CC6699",
  },

  // Librerías
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    category: "libraries",
    color: "#06B6D4",
  },
  {
    name: "Framer Motion",
    icon: SiFramer,
    category: "libraries",
    color: "#0055FF",
  },
  {
    name: "Redux",
    icon: SiRedux,
    category: "libraries",
    color: "#764ABC",
  },
  {
    name: "React Query",
    icon: SiReactquery,
    category: "libraries",
    color: "#FF4154",
  },
  {
    name: "Material UI",
    icon: SiMui,
    category: "libraries",
    color: "#007FFF",
  },

  // Bases de Datos
  {
    name: "MongoDB",
    icon: SiMongodb,
    category: "databases",
    color: "#47A248",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    category: "databases",
    color: "#4479A1",
  },
  {
    name: "Firebase",
    icon: SiFirebase,
    category: "databases",
    color: "#DC382D",
  },

  // Herramientas
  {
    name: "Git",
    icon: FaGitAlt,
    category: "tools",
    color: "#F05032",
  },
  {
    name: "Docker",
    icon: FaDocker,
    category: "tools",
    color: "#2496ED",
  },
  {
    name: "VS Code",
    icon: FaCode,
    category: "tools",
    color: "#007ACC",
  },
  {
    name: "Postman",
    icon: SiPostman,
    category: "tools",
    color: "#FF6C37",
  },
  {
    name: "Vite",
    icon: SiVite,
    category: "tools",
    color: "#646CFF",
  },
  {
    name: "Webpack",
    icon: SiWebpack,
    category: "tools",
    color: "#8DD6F9",
  },
  {
    name: "ESLint",
    icon: SiEslint,
    category: "tools",
    color: "#4B32C3",
  },
  {
    name: "Prettier",
    icon: SiPrettier,
    category: "tools",
    color: "#F7B93E",
  },
  {
    name: "Vercel",
    icon: SiVercel,
    category: "tools",
    color: "#000000",
  },
  {
    name: "Netlify",
    icon: SiNetlify,
    category: "tools",
    color: "#00C7B7",
  },
  {
    name: "Biome",
    icon: SiBiome,
    category: "tools",
    color: "#2496ED",
  },
  {
    name: "AWS",
    icon: SiAmazonwebservices,
    category: "tools",
    color: "#FF9900",
  },
  {
    name: "Bun",
    icon: SiBun,
    category: "tools",
    color: "#FFFFFF",
  },
  {
    name: "RsPack",
    icon: RsPackIcon,
    category: "tools",
    color: "#F7DF1E",
  },

  // Diseño
  {
    name: "Figma",
    icon: FaFigma,
    category: "design",
    color: "#F24E1E",
  },
  {
    name: "Adobe Photoshop",
    icon: SiAdobephotoshop,
    category: "design",
    color: "#31A8FF",
  },
  {
    name: "Adobe Illustrator",
    icon: SiAdobeillustrator,
    category: "design",
    color: "#FF9A00",
  },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    description:
      "Plataforma completa de e-commerce con panel de administración, gestión de inventario, sistema de login y carrito de compras.",
    image: "/projects/ecommerce-home.png",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind"],
    liveUrl: "https://tu-proyecto.com",
    githubUrl: "https://github.com/mauroaltamirano-dev/Ecommerce-Base",
    featured: true,
  },
  {
    id: "2",
    title: "Admin Dashboard E-commerce",
    description:
      "Panel de administración completo para gestión de productos, usuarios, pedidos y estadísticas en tiempo real.",
    image: "/projects/ecommerce-admin.png",
    technologies: ["React", "Chart.js", "Material-UI", "Node.js"],
    liveUrl: "https://tu-proyecto-admin.com",
    githubUrl: "https://github.com/tu-usuario/admin-dashboard",
    featured: true,
  },
  {
    id: "3",
    title: "Sistema de Autenticación",
    description:
      "Sistema completo de login y registro con validaciones, recuperación de contraseña y gestión de sesiones.",
    image: "/projects/ecommerce-login.png",
    technologies: ["React", "JWT", "bcrypt", "Express"],
    liveUrl: "https://tu-auth-system.com",
    githubUrl: "https://github.com/tu-usuario/auth-system",
    featured: false,
  },
];
