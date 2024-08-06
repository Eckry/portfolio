import {
  IconCSS,
  IconCV,
  IconExpressjs,
  IconGit,
  IconGithub,
  IconLinkedin,
  IconReact,
  IconSqlite,
  IconTypeScript,
} from "./icons";

export const projects = [
  {
    name: "E-commerce",
    image: "ecommerce.webp",
    description: `This project is an e-commerce platform built with React and TypeScript for the frontend, and Express for the backend. It has =filters= based on various =categories=. The shopping cart feature has funcionalities of add, remove, and manage how many items does the user want. Each product has a dedicated page providing detailed information, images, and =reviews=. Also uses the MercadoPago API to manage the =checkout process= with =real payment=.

With this project I focused on improving my =capacity to learn new technologies on my own=, without using tutorials or something like that, just reading documentation.`,
    tech: [
      {
        name: "TypeScript",
        TechIcon: IconTypeScript,
      },
      { name: "React", TechIcon: IconReact },
      { name: "Express", TechIcon: IconExpressjs },
      { name: "Git", TechIcon: IconGit },
      { name: "CSS", TechIcon: IconCSS },
    ],
    link: "https://store-app-pink.vercel.app/",
  },
  {
    name: "Sorted Symphony",
    image: "sortedsymphony.webp",
    description: `Sorted Symphony is a =sorting algorithm= visualizer to make learning and understanding sorting algorithms fun. Each algorithm is shows its source code, allowing students to see the logic behind each sorting technique. It has a =musical tone=. The project also includes a tab called "Orchestra", where users can compare different algorithms side by side.

With this project I achieved a deeper understanding of how =React render works=, and to =optimize= with useMemo and useCallback to improve the =performance= of the algorithm.`,
    tech: [
      {
        name: "TypeScript",
        TechIcon: IconTypeScript,
      },
      { name: "React", TechIcon: IconReact },
      { name: "Git", TechIcon: IconGit },
      { name: "CSS", TechIcon: IconCSS },
    ],
    link: "https://sorted-symphony.vercel.app/",
  },
  {
    name: "Urlsito",
    image: "urlsito.webp",
    description: `Urlsito is a =URL shortener= application. Built with =SQLite= and =Turso database=. Each user has the capability to create and manage their own custom URL shorteners.

With this project I focused on improve my understanding of =databases= and to implement them on my web. It was an interesting experience that allowed me to add databases to other projects I'm =currently building=.`,
    tech: [
      {
        name: "TypeScript",
        TechIcon: IconTypeScript,
      },
      { name: "React", TechIcon: IconReact },
      { name: "Express", TechIcon: IconExpressjs },
      { name: "SQLite", TechIcon: IconSqlite },
      { name: "Git", TechIcon: IconGit },
      { name: "CSS", TechIcon: IconCSS },
    ],
    link: "https://urlsito.netlify.app/",
  },
];

export const skills = {
  backend: [{ name: "Express", icon: "" }],
  frontend: [{ name: "React", icon: "" }],
};

export const social = [
  {
    name: "Github",
    link: "https://github.com/Eckry",
    Icon: IconGithub,
  },
  {
    name: "Linkedin",
    link: "",
    Icon: IconLinkedin,
  },
  {
    name: "Resume",
    link: "",
    Icon: IconCV,
  },
];
