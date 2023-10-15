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
    starbucks,
    tesla,
    shopify,
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
      title: "Internet Of Things",
      icon: mobile,
    },
    {
      title: "Machine Learning",
      icon: backend,
    },
    {
      title: "Youtuber",
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
      title: "Project-Expo WINNER!",
      company_name: "IEEE-SSIT",
      icon: starbucks,
      iconBg: "#383E56",
      date: "May 2022",
      points: [
        "Its is an project expo competition conducted by the student branch of IEEE SSIT.",
        "I buit a Line Following and Obstical Avoidence robot for this compitation and participated in it .",
        "They were more than 10 Students.",
        ,
      ],
    },
    {
      title: "Project-Expo WINNER!",
      company_name: "Electro-Tec",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "June 2022",
      points: [
        "Its is an project expo competition conducted by Electronics and communication Dept.",
        "I buit a Line Following and Obstical Avoidence robot for this compitation and participated in it .",
        "They were more than 20 Students.",
      ],
    },
    {
      title: "NPTEL-Data Science",
      company_name: "IIT-Bombay",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Oct 2022",
      points: [
        "Nptel is an  is a joint venture of the IITs and IISc, funded by the Ministry of Education (MoE) Government of India, and was launched in 2003.",
        "I Took data sceince course in Nptel .",
        "I wrote exam which was in offline mode.",
      
      ],
    },
    {
      title: "Web Design WINNER!",
      company_name: "IEEE-SSIT",
      icon: shopify,
      iconBg: "#383E56",
      date: "May 2023",
      points: [
        "Its is an Web Design competition conducted by the student branch of IEEE SSIT.",
        "I buit a Line Following and Obstical Avoidence robot for this compitation and participated in it .",
        "They were more than 5 Students.",
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
      name: "Line Following And Obstical Avoid Robot",
      description:
        "A Car Robot Which Follows The Black Line And Avoid The Objects which interupt While Following The Line.",
      tags: [
        {
          name: "robot",
          color: "blue-text-gradient",
        },
        {
          name: "Iot",
          color: "green-text-gradient",
        },
        {
          name: "Arduino Uno",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "G:/programming/portfolio/src/assets/tech/robot",
    },
    {
      name: "Facial Emotion Detection And Recognition",
      description:
        "Facial emotion detection using deep learning, for creating psychological profile of patients in healthcare.",
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
      source_code_link: "https://github.com/sagarsonale/facial_emotion_and_recognition_CNN.git/",
    },
    {
      name: "Tech-Event Wed design",
      description:
        " reactive Web Site for Samarthya 2023 event IEEE Student Branch SSIT Where students can get details about event and register to that event.",
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