import type {
  NavBarLink,
  SocialLink,
  Identity,
  AboutPageContent,
  ProjectPageContent,
  BlogPageContent,
  HomePageContent,
} from "./types/config";

export const identity: Identity = {
  name: "Randy J.",
  logo: "https://unavatar.io/ijarndev",
  email: "ijarndev@gmail.com",
};

export const navBarLinks: NavBarLink[] = [
  {
    title: "Inicio",
    url: "/",
  },
  {
    title: "Sobre mi",
    url: "/about",
  },
  {
    title: "Proyectos",
    url: "/projects",
  },
  {
    title: "Blog",
    url: "/blog",
  },
];

export const socialLinks: SocialLink[] = [
  {
    title: "GitHub",
    url: "https://github.com/ijarndev",
    icon: "mdi:github",
    external: true,
  },
  {
    title: "Correo electrónico",
    url: "mailto:ijarndev@gmail.com",
    icon: "mdi:email",
  }
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "Inicio | Randy Jorge Aguilera",
    description:
      "Desarrollador de software, estudiante de ingeniería y entusiasta de la tecnología.",
    image: identity.logo,
  },
  role: "Desarrollador de Software",
  description:
    "¡Hola! Soy Randy, desarrollador de software, estudiante de ingeniería y entusiasta de la tecnologías de la información.",
  socialLinks: socialLinks,
  links: [
    {
      title: "Mis proyectos",
      url: "/projects",
    },
    {
      title: "Sobre mi",
      url: "/about",
    },
  ],
};

// About (/about)
export const aboutPageContent: AboutPageContent = {
  seo: {
    title: "Sobre mi | Randy Jorge Aguilera",
    description:
      "Desarrollador de software, estudiante de ingeniería y entusiasta de la tecnología.",
    image: identity.logo,
  },
  subtitle: "😀 Algo de información personal",
  about: {
    description: `
Soy un desarrollador de software autodidacta y activo estudiante de Ingeniería Informática.
Me apasiona escribir y mantener soluciones de código a todos los niveles y entregar resultados versátiles.
`, // Markdown is supported
    image_l: {
      url: "/demo-1.jpg",
      alt: "Left Picture",
    },
    image_r: {
      url: "/demo-1.jpg",
      alt: "Right Picture",
    },
  },
  skills: {
    description: 'Estas son las principales tecnologías con las que desempeño mi labor.',
    technologies: [
      { name: 'HTML', icon: '/techs/html.svg' },
      { name: 'CSS', icon: '/techs/css.svg' },
      { name: 'Tailwind CSS', icon: '/techs/tailwind.svg' },
      { name: 'JavaScript', icon: '/techs/js.svg' },
      { name: 'Node.js', icon: '/techs/node.svg' },
      { name: 'Astro', icon: '/techs/astro.svg' },
      { name: 'React', icon: '/techs/react.svg' },
      { name: 'PHP', icon: '/techs/php.svg' },
      { name: 'cPanel', icon: '/techs/cpanel.svg' },
      { name: 'WordPress', icon: '/techs/wp.svg' },
      { name: 'Linux Bash', icon: '/techs/bash.svg' },
      { name: 'Firebase', icon: '/techs/firebase.svg' },
      { name: 'Git', icon: '/techs/git.svg' },
      { name: 'GitHub', icon: '/techs/github.svg' },
      { name: 'MySQL', icon: '/techs/mysql.svg' },
      { name: 'SQL', icon: '/techs/sql.svg' },
    ]
  },
  experience: {
    description: 'Una parte de mi experiencia la he adquirido trabajando con equipos de profesionales como estos.',
    jobs: []
  },
  work: {
    description: `Contáctame si necesitas una solución de calidad, estaré encantado de colaborar.`, // Markdown is supported
    items: [
      {
        title: "Desarrollador Full-Stack",
        company: {
          name: "Laindes Software",
          image: "/logo.webp",
          url: "https://laindes.com/",
        },
        date: "2023 - 2024",
      },
    ],
  },
  connect: {
    description: `I'm always interested in meeting new people and learning new things. Feel free to connect with me on any of the following platforms.`, // Markdown is supported
    links: socialLinks,
  },
};

// Projects (/projects)
export const projectsPageContent: ProjectPageContent = {
  seo: {
    title: "Proyectos | Randy Jorge Aguilera",
    description: "Algunos de los proyectos en los que he estado trabajando.",
    image: identity.logo,
  },
  subtitle: "Algunos de los proyectos en los que he estado trabajando..",
  projects: [
    {
      title: "Laindes Software",
      description: "Landing page empresarial.",
      image: "/projects/laindes-landing.jpg",
      year: "2024",
      url: "https://laindes.com/",
    }
  ],
};

// Blog (/blog)
export const blogPageContent: BlogPageContent = {
  seo: {
    title: "Blog | Randy Jorge Aguilera",
    description: "Pensamientos, historias e ideas.",
    image: identity.logo,
  },
  subtitle: "Pensamiento, historias e ideas.",
};
