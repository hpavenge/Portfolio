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
  nodejs,
  git,
  webicon,
  truelime,
  rockstars,
  threejs,
  angularjs,
  bootstrap,
  sql,
  az204,
  wesley,
  maickel,
  truelimeproject,
  hku,
  coco,
  bas,
  dinand
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Intro",
  },
  {
    id: "work",
    title: "Werkervaring",
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
    name: "az204",
    icon: az204,
  },
  {
    name: "sql",
    icon: sql,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "bootstrap",
    icon: bootstrap,
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
    name: "angularjs",
    icon: angularjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
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
      "Ik heb Nick ervaren als een veelzijdige (beheerst zowel ontwikkelaars als product owner eigenschappen) collega die niet denkt in moeilijkheden maar in mogelijkheden. Nick is zeer behulpzaam en denkt graag mee over verschillende onderwerpen. Een betrouwbare collega die je zonder problemen een opdracht kunt toevertrouwen.",
    name: "Dinand Jonkers",
    designation: "Product Lead",
    company: "Conclusion Confidential",
    image: dinand,
  },
  {
    testimonial:
      "Zeg je 'persoonlijke ontwikkeling' dan zeg je Nick! In zijn carriere heeft hij zaken als back-end dev, business analyst, product owner en scrum master naar zich toegetrokken. Inmiddels heeft hij zich vastgebeten in front-end development. Dat Nick een veelzijdige duizendpoot is die je in je team wil hebben moge duidelijk zijn!",
    name: "Bas van de Pol",
    designation: "Talent manager",
    company: "Rockstars",
    image: bas,
  },
  {
    testimonial:
      "Nick is een waardevolle en flexibele teamspeler met een ongelooflijke drive om zowel voor de klant als collega's tot het uiterste te gaan!.",
    name: "Wesley van Strien",
    designation: "Operational lead",
    company: "TrueLime",
    image: wesley,
  },
  {
    testimonial:
      "Duidelijkheid en een strakke pagina zijn de 2 dingen die ik erg belangrijk vind. Nick speelt goed in op de wensen die ik had voor de website. Wilde ik daarna toch iets anders, was dat geen probleem en werd het snel aangepast naar perfectie.",
    name: "Maickel Bouw",
    designation: "Zelfstandig ondernemer",
    company: "MB Food Passion",
    image: maickel,
  }
];

const projects = [
  {
    name: "Conclusion Confidential",
    description:
      "Ik heb bijgedragen aan de ontwikkeling van de SUMMIT-toepassing, onderdeel van Conclusion Confidential's uitgebreide projectportfolio. SUMMIT is een webgebaseerd platform waarmee gebruikers verschillende zaken kunnen zoeken, boeken en beheren, en het biedt een handige en efficiënte oplossing. Mijn rol omvatte het uitbreiden en verbeteren van de .NET-codebase, evenals het creëren van een blockbuilder-tool om het ontwikkelingsproces te stroomlijnen, wat resulteerde in snellere en robuustere oplossingen.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "Oracle",
        color: "green-text-gradient",
      },
      {
        name: ".NET",
        color: "pink-text-gradient",
      },
    ],
    image: coco,
    source_code_link: "https://www.conclusion.nl/en/confidential",
  },
  {
    name: "HKU",
    description:
      "Voor HKU heb ik geholpen bij het ontwikkelen van een openbare schoolwebsite waar studenten hun volgende opleiding kunnen vinden en evenementen kunnen filteren, of gewoon kunnen zoeken naar zaken die verband houden met HKU of de FAQ. Ik heb bijgedragen aan de bouw van deze site met behulp van REACT en .NET. Bovendien heb ik de klant geholpen bij het vertalen van hun wensen en eisen naar het ontwikkelingsteam.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "MSSQL",
        color: "green-text-gradient",
      },
      {
        name: ".NET",
        color: "pink-text-gradient",
      },
    ],
    image: hku,
    source_code_link: "https://www.hku.nl/",
  },
  {
    name: "TrueLime",
    description:
      "Voor TrueLime heb ik bijgedragen aan de ontwikkeling van verschillende websites als ontwikkelaar. Met behulp van React en .NET heb ik meegewerkt aan projecten zoals HKU, Deltion, Windesheim, Radboudumc, GGZ, Vilans en meer. Mijn betrokkenheid strekte zich uit tot de kernwebsite van TrueLime, waar ik heb meegedacht over de architectuur voor zowel de backend als de frontend, en het opzetten van de CMS-blokken om de content te beheren.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "MSSQL",
        color: "green-text-gradient",
      },
      {
        name: ".NET",
        color: "pink-text-gradient",
      },
    ],
    image: truelimeproject,
    source_code_link: "https://www.truelime.nl/",
  },
];


export { services, technologies, experiences, testimonials, projects };