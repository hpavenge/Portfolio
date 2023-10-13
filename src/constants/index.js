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
      title: "Webontwikkelaar",
      company_name: "Digibit, Sologic media, So-Zeker, Axi, Loyally, Axerrio",
      icon: webicon,
      iconBg: "#383E56",
      date: "Februari 2012 - September 2017",
      points: [
        "Diverse bijbanen en stages (in het buitenland) naast mijn studie.",
        "Ontwikkelen en onderhouden van webapplicaties met PHP, .NET, HTML, CSS & Javascript (Angular/React) en andere gerelateerde technologieën.",
        "Samenwerken met multidisciplinaire teams, waaronder ontwerpers, productmanagers en andere ontwikkelaars, om hoogwaardige producten te creëren.",
        "Implementeren van ontwerpen vanuit Photoshop of WordPress.",
      ],
    },
    {
      title: "Full stack ontwikkelaar",
      company_name: "TrueLime",
      icon: truelime,
      iconBg: "#E6DEDD",
      date: "Jan 2018 - Mei 2022",
      points: [
        "Ontwikkelen en onderhouden van webapplicaties met .NET MVC, .NET Core, React en Kentico als CMS.",
        "Samenwerken met multidisciplinaire teams om hoogwaardige producten te creëren.",
        "Deelnemen aan codereviews en constructieve feedback geven aan andere ontwikkelaars.",
        "Certificaten: Kentico Xperience 13 Ontwikkelaar, SCRUM PRODUCT OWNER"
      ],
    },
    {
      title: "Scrum master & Producteigenaar",
      company_name: "TrueLime",
      icon: truelime,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Mei 2022",
      points: [
        "Plannen maken voor sprints op basis van budgetten en gewenste functionaliteit van openbare aanbestedingen.",
        "Samenwerken met multidisciplinaire teams om hoogwaardige producten te creëren.",
        "Zorgen dat de wekelijkse scrum events plaatsvinden en samenwerken met belanghebbenden om de backlog te prioriteren en verfijnen.",
        "Beheren van accounts en helpen bij het opzetten van financiële contracten voor de toekomst.",
      ],
    },
    {
      title: "Full stack Ontwikkelaar",
      company_name: "Team Rockstars IT",
      icon: rockstars,
      iconBg: "#E6DEDD",
      date: "Mei 2022 - Heden",
      points: [
        "Ontwikkelen en onderhouden van webapplicaties met .NET Core, Angular, React.js en andere gerelateerde technologieën.",
        "Samenwerken met multidisciplinaire teams om hoogwaardige producten te creëren.",
        "Klanten waarvoor ik heb gewerkt: interne tooling van Team Rockstars IT, Conclusion Vertrouwelijk",
        "Deelnemen aan codereviews en constructieve feedback geven aan andere ontwikkelaars.",
        "Certificaten: AZ-204"
      ],
    },
];

  
  const testimonials = [
    {
      testimonial:
        "Ik dacht dat het onmogelijk was om een website te maken die net zo mooi is als ons product, maar Nick heeft me het tegendeel bewezen.",
      name: "Wesley van Strien",
      designation: "CFO",
      company: "TrueLime",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      testimonial:
        "Ik heb nog nooit een webontwikkelaar ontmoet die zo oprecht geeft om het succes van hun klanten zoals Nick dat doet.",
      name: "Bas van de Pol",
      designation: "Talentmanager",
      company: "Rockstars",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Nadat Nick onze website had geoptimaliseerd, nam onze workflow toe met 50%. We kunnen hem niet genoeg bedanken!",
      name: "TODO Conclusion medewerker",
      designation: "Hoge pief BV",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Auto Huren",
      description:
        "Webgebaseerd platform waarmee gebruikers auto's kunnen zoeken, boeken en beheren van verschillende aanbieders, wat een handige en efficiënte oplossing biedt voor transportbehoeften.",
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
        "Webapplicatie waarmee gebruikers naar vacatures kunnen zoeken, geschatte salarisbereiken voor functies kunnen bekijken en beschikbare banen kunnen vinden op basis van hun huidige locatie.",
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
      name: "Reisgids",
      description:
        "Een uitgebreid reisboekingsplatform waarmee gebruikers vluchten, hotels en huurauto's kunnen boeken en gecureerde aanbevelingen biedt voor populaire bestemmingen.",
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