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
    eduworks,
    art,
    intro,
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
      title: "UI/UX Designer",
      icon: web,
    },
    {
      title: "Web Developer",
      icon: mobile,
    },
    {
      title: "Mechanical Designer",
      icon: backend,
    },
    {
      title: "Event Coordinator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "docker", //replaced with python
      icon: docker,
    },
    {
      name: "git", //replaced with c++
      icon: git, 
    },
    {
      name: "MongoDB", //replaced with blender
      icon: mongodb,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "TypeScript", //replace with solidworks
      icon: typescript,
    },
    
    {
      name: "Redux Toolkit", //replace with canva
      icon: redux,
    },
    {
      name: "Node JS", //replace with wordpress
      icon: nodejs,
    },
    {
      name: "React JS",
      icon: reactjs,
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
      name: "Javascript",
      icon: javascript,
    },
   
    
    /*{
      name: "Tailwind CSS",
      icon: tailwind,
    },*/
  
    /*{
      name: "Three JS",
      icon: threejs,
    },*/
  
   
    
  ];
  
  const experiences = [
    {
      title: "UAV Design Engineer",
      company_name: "AUAV Tech",
      icon: starbucks,
      iconBg: "#fff",
      date: "Jan 2024 - Apr 2024",
      points: [
        "Collaborated with hardware engineers to design 5 drone show files using Skybrush on Blender, flown to test company-built drones. Additionally, designed a 20-drone formation show for a demo presented to a client.",
        "Worked on software team to program a 7-minute drone show featuring 9 Tello drones using Mind+ software, conducting iterative testing to deliver 3 successful showcases.",
        "Conducted customer research and designed 2 drone shows of 100 drones themed around the Calgary Stampede and Lions Club International.", 
        "Produced and edited 2 video demos with music, posted on the company's YouTube channel and used in client presentations.",
      ],
    },
    
    {
      title: "Web Development Team Member",
      company_name: "Electrium Mobility",
      icon: tesla,
      iconBg: "#fff",
      date: "May 2024 - present",
      points: [
        "Researched and designed the interface of an online store to be added to Electrium Mobility’s website.",
        "Identified shop functionalities and prototyped using Figma incorporating Electrium’s design style and interactive components.",

      ],
    },
    {
      title: "Engagement Department Leader",
      company_name: "Eduvisa",
      icon: shopify,
      iconBg: "#fff",
      date: "May 2022 - Jan 2023",
      points: [
        "Led a team of 6 members and coordinated weekly department meetings online to strategize events on Eduvisa’s Discord channel tailored to the server’s interests.",
        "Proposed the idea of thread challenges resulting in a 120% increase in server membership.",
        "Crafted visually appealing posts using Canva that were shared on Instagram to promote events.",

      ],
    },
    {
      title: "Committee Student Lead",
      company_name: "Career Day Planning Committee",
      icon: meta,
      iconBg: "#fff",
      date: "Sep 2022 - Mar 2023",
      points: [
        "Successfully hosted a Career Day event to connect Grades 9-12 students with professionals. Corresponded with 30+ interested volunteers via email answering questions and providing the day of instructions.",
        "Worked closely with the committee supervisor to finalize the selection of professionals, snacks and beverages, room set-up, check-in, thank-you cards, and hallway guides.",
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
      name: "UAV Design Work",
      description:
        "This is a collection of my works at AUAV, including videos of my drone formation designs on Blender. During the process of designing I collaborated closely with the CEO and the mechanical team to understand the vision for the show along with the drones' speed/distance constraints. ",
      tags: [
        {
          name: "blender",
          color: "yellow-text-gradient",
        },
        {
          name: "skybrush",
          color: "green-text-gradient",
        },
        {
          name: "clipchamp",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://www.youtube.com/playlist?list=PL_g6564OxUS7ajVzum-guWB3ixOibSfxA",
    },
    {
      name: "Instagram Redesign Case Study",
      description:
        "I redesigned Instagram focusing on common user pain points regarding Instagram's current explore page and content posting process. I went through user research, personas, wireframing, prototyping, and user testing.",
      tags: [
        {
          name: "figma",
          color: "yellow-text-gradient",
        },
        
      ],
      image: insta,
      source_code_link: "https://www.figma.com/design/P8DX9hiQnBcTMWM1xbwIdN/Instagram-App-Redesign?node-id=0-1&t=WAqkfdK0thR8cUAG-1",
    },
    {
      name: "Electrium Mobility Store Page Design",
      description:
        "I researched and prototyped an online store feautre for front-end developers using Figma. The design covers a Store page, Products page, Cart page, and Checkout page, including interactive elements and user flow.",
      tags: [
        {
          name: "figma",
          color: "yellow-text-gradient",
        },
       
      ],
      image: jobit,
      source_code_link: "https://www.figma.com/design/PRaZUVxn2vKuqUIzJFsZnw/Electrium-Mobility-Store-Page-Design?node-id=0-1&t=b7exWPLTkcBvPwRf-1",
    },
    {
      name: "SOLIDWORKS Vehicle Project",
      description:
        "Taking inspiration from the Hogwarts carriage, I completed this project by simplifying the shapes involved and used SOLIDWORKS to model individual parts that were assembled together to create the model.",
      tags: [
        {
          name: "solidworks",
          color: "yellow-text-gradient",
        },
        
      
      ],
      image: tripguide,
      source_code_link: "https://drive.google.com/file/d/1X742Jiw25XGPTp_vaJSVsQUW6YEaSpuP/view?usp=sharing",
    },

    {
      name: "Eduvisa Works",
      description:
        "This is a collection of my Eduvisa works. I used Canva to create social media posts on the marketing team and a small aesthetic booklet of event speaker responses for enhanced viewing experience.",
      tags: [
        {
          name: "canva",
          color: "yellow-text-gradient",
        },
        {
          name: "instagram",
          color: "green-text-gradient",
        },
        {
          name: "discord",
          color: "pink-text-gradient",
        },
      ],
      image: eduworks,
      source_code_link: "https://drive.google.com/drive/folders/11ak5fwwxZKcE-O007fY8gOBdX9HbgwbW?usp=sharing",
    },

    {
      name: "Digital Art Work",
      description:
        "This is a collection of my digital art work. I experimented with Krita and Procreate.",
      tags: [
        {
          name: "krita",
          color: "yellow-text-gradient",
        },
        {
          name: "procreate",
          color: "green-text-gradient",
        },
    
      ],
      image: art,
      source_code_link: "https://drive.google.com/drive/folders/1P4pTnarM4Dgys9ogYM51Prg_qOL8Z051?usp=drive_link",
    },
    
    {
      name: "Short Animation",
      description:
        "I created a short intro while learning animation using Krita.",
      tags: [
        {
          name: "krita",
          color: "yellow-text-gradient",
        },
       
    
      ],
      image: intro,
      source_code_link: "https://youtu.be/g0OCLMdpspM",
    },
   
  ];
  
  export { services, technologies, experiences, testimonials, projects };