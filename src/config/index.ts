import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Prajodeep Patil — Web Developer",
  author: "Prajodeep Patil",
  description:
    "Software Engineer , India. I specialize in UI design, web application development and maintenance.",
  lang: "en",
  siteLogo: "/alejandro-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Twitter", href: "https://github.com/immois/astro-zen" },
    { text: "LinkedIn", href: "https://github.com/immois/astro-zen" },
    { text: "Github", href: "https://github.com/immois/astro-zen" },
    { text: "Youtube", href: "https://github.com/immois/astro-zen" },
    { text: "Dribbble", href: "https://github.com/immois/astro-zen" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Prajodeep Patil",
    specialty: "Web Developer",
    summary:
      "Developer with knowledge of react, next.js. Served as an intern at UK based company. Passionate developer with the indepth knowledge of core computer technology",
    email: "prajodeep21@gmail.com",
  },
  experience: [
    {
      company: "The Pro Educators",
      position: "Developer",
      startDate: "June 2025",
      endDate: "Sept 2025",
      summary: [
        "I designed a the website for hospital management",
        "I worked upon an application that is made for the ones who are wishing to study abroad",
        "Part of Integration and collaboration team",
      ],
    },
    
  ],
  projects: [
    {
      name: "QuickHire : A job hiring website",
      summary: "A job hiring website with a different admin and user panel",
      linkPreview: "https://github.com/Prajodeep13/Quickhire_job",
      linkSource: "https://github.com/Prajodeep13/Quickhire_job",
      image: "/spotifu.png",
    },
  
  ],
  about: {
    description: `
      Hi, I’m Prajodeep Patil, a passionate Web Developer with a knack for crafting seamless digital experiences. With a strong background in front-end and back-end web technologies, I thrive at the intersection where creativity meets technology.

Over the years, I’ve honed my skills in building robust, user-friendly, and visually appealing web applications, ensuring performance, security, and scalability at every stage. My projects range from interactive user interfaces to fully functional full-stack web solutions, all driven by my commitment to delivering excellence and exceeding user expectations. I take pride in being an excellent web developer who continuously pushes the boundaries of what’s possible in the digital world.
    `,
    image: "",
  },
};

// #5755ff
