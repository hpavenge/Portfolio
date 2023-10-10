import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    tesla,
    webicon,
    truelime,
    rockstars,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: mobile,
    },
    {
      title: "Azure",
      icon: backend,
    },
    {
      title: "Scrum master",
      icon: creator,
    },
    ,
    {
      title: "Product Owner",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Web Developer",
      company_name: "Digibit,Sologic media, So-Zeker, Axi, Loyally, Axerrio",
      icon: webicon,
      iconBg: "#383E56",
      date: "February 2012 - September 2017",
      points: [
        "Sevaral sidejobs and internships (abroad) next to my study.",
        "Developing and maintaining web applications using PHP,.NET, HTML, CSS & Javascript(Angular/React) and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing designs from photoshop or wordpress",
      ],
    },
    {
      title: "Full stack developer",
      company_name: "TrueLime",
      icon: truelime,
      iconBg: "#E6DEDD",
      date: "Jan 2018 - May 2022",
      points: [
        "Developing and maintaining web applications using .NET MVC, .NET Core, React and Kentico as a CMS.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Several projects that i helped building: https://www.radboudumc.nl/en/patient-care https://www.deltion.nl/ https://www.windesheim.nl/ https://www.hulpmiddelenwijzer.nl/ ",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "Certificates: Kentico Xperience 13 Developer, SCRUM PRODUCT OWNER"
      ],
    },
    {
      title: "Scrum master & Product owner",
      company_name: "TrueLime",
      icon: truelime,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - May 2022",
      points: [
        "Making plans for sprints, based on budgets and desired functionality of public tenders",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Ensuring the weekly scrum events are happening and collaborating with stakeholders to prioritise and refine the backlog.",
        "Managing accounts and helping setup financial contracts for the future.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Team Rockstars IT",
      icon: rockstars,
      iconBg: "#E6DEDD",
      date: "May 2022 - Present",
      points: [
        "Developing and maintaining web applications using .NET Core, Angular, React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Customers i have worked for: Team Rockstars IT internal tooling, Conclusion Confidential",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "Certificates: AZ-204"
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };