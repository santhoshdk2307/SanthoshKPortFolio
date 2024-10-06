import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  csharp,
  python,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  sql,
  supabase,
  jackpoole,
  erickcastro,
  bradon,
  git,
  rona,
  homedepot,
  sczCollege,
  puertomaderologo,
  bluespace,
  fiverr,
  cornerstone,
  electrisearch,
  mypurplespace,
  multicenter,
  puertomadero,
  spaceplush,
  selfDrivingCar,
  myPortfolio,
  bialetti,
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
    id: "technologies",
    title: "Technologies",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Web Developer",
    icon: web,
  },
  {
    title: "React & NextJs Developer",
    icon: mobile,
  },
  {
    title: "NodeJs & NestJs Developer",
    icon: backend,
  },
  {
    title: "SQL",
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
    name: "SQL",
    icon: sql,
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
    name: "supabase",
    icon: supabase,
  },
  {
    name: "c#",
    icon: csharp,
  },
  {
    name: "python3",
    icon: python,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "G7CR Technologies Pvt Ltd - Bangalore, India",
    icon: bluespace,
    iconBg: "#ffff",
    date: "July 2023 - Present",
    points: [
      "Developed and maintained web applications using MongoDB, SQL, Express, React, Node.js, Nest.js, TailwindCss, Typescript, etc.",
      "Worked with C#.NET, Redux Toolkit, Socket.io, and Sequelize to build efficient and scalable solutions.",
      "Integrated Azure Blob Storage and Azure Services for cloud-based data management and infrastructure.",
      "Collaborated on optimizing app performance and enhancing user experience.",
    ],
  },
 
];

const educations = [
  {
    title: "Master of Computer Applications",
    company_name: "Reva University - Bangalore, India",
    icon: cornerstone,
    iconBg: "#283b8a",
    date: "August 2021 - October 2023",
    points: [
      "Completed the Master of Computer Applications program with First Class Distinction.",
      "Gained expertise in computer science, software development, and emerging technologies.",
      "Worked on projects involving software engineering, web development, and database management.",
    ],
  },
  {
    title: "Bachelor of Science in Computer Science",
    company_name: "MS Ramaiah College - Bangalore, India",
    icon: sczCollege,
    iconBg: "#036838",
    date: "June 2018 - September 2021",
    points: [
      "Successfully completed the Bachelor's program in Computer Science.",
      "Built a strong foundation in programming, algorithms, data structures, and computer systems.",
      "Engaged in hands-on projects and practical applications in software development and system design.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "Thanks to our new Management System developed by Santhosh K our sales and company have been skyrocketing, amazing work.",
    name: "Erick Castro",
    designation: "CEO",
    company: "Puerto Madero",
    image: erickcastro,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about his career and programming like Santhosh K does.",
    name: "Jack Poole",
    designation: "Student",
    company: "Computer Science",
    image: jackpoole,
  },
  {
    testimonial:
      "After having worked with Santhosh K, I realized he's a very determined person, who will always give his best and make an excellent job.",
    name: "Bradon McInnes",
    designation: "HR",
    company: "Home Depot Richmond",
    image: bradon,
  },
];

const projects = [
  {
    name: "Bike Showroom Management",
    description:
    "Developed as part of my Bachelor's final year project, this system manages inventory, sales, customer details, and billing for a bike showroom. It was designed to improve daily operations and enhance customer service efficiency.",
    tags: [
      {
        name: "c#.net",
        color: "text-purple-600",
      },
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "text-pink-500",
      },
      {
        name: "javascript",
        color: "text-yellow-600",
      },
      {
        name: "bootstrap",
        color: "text-purple-500",
      },
      {
        name: "sql server",
        color: "text-green-600",
      },
    ],
    image: electrisearch,
    // source_code_link: "https://github.com/Santhosh KMendozaVargas/MyPurpleSpaceNetwork",
  },
  {
    name: "Medicinal Plant Classification",
    description:
    "Developed a web application that allows users to upload images of plants to identify their names, medicinal benefits, and natural habitats. This project utilizes a Convolutional Neural Network for accurate classification.",
    tags: [
      {
        name: "python",
        color: "text-blue-600",
      },
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "text-pink-500",
      },
      {
        name: "javascript",
        color: "text-yellow-600",
      },
      {
        name: "bootstrap",
        color: "text-purple-500",
      },
    ],
    image: mypurplespace,
    live_version_link: "https://mypurplespace.netlify.app/",
    source_code_link: "https://github.com/Santhosh KMendozaVargas/MyPurpleSpaceNetwork",
  },
  {
    name: "Learning Management System (LMS)",
    description:
      "Developed a comprehensive Learning Management System that facilitates online learning and course management. The application allows users to enroll in courses, track their progress, and access learning materials.",
    tags: [
      {
        name: "react",
        color: "text-blue-600",
      },
      {
        name: "mongodb",
        color: "text-green-600",
      },
      {
        name: "node.js",
        color: "text-yellow-600",
      },
      {
        name: "tailwind css",
        color: "text-pink-500",
      },
      {
        name: "redux",
        color: "text-purple-500",
      },
      {
        name: "REST APIs",
        color: "text-blue-600",
      },
    ],
    image: puertomadero,
    source_code_link: "https://github.com/Santhosh KMendozaVargas/puertomaderomanagementsystem",
  },
  {
    name: "Azure Migration and Modernization Program (AMMP)",
    description:
      "Contributed to the backend of the AMMP project, focusing on parsing CSV files and managing the insertion, updating, and validation of thousands of records in the database.",
    tags: [
      {
        name: "mSSQL",
        color: "text-green-600",
      },
      {
        name: "Nest.js",
        color: "text-purple-600",
      },
      {
        name: "Sequelize",
        color: "text-blue-600",
      },
      {
        name: "CSV Parser",
        color: "text-yellow-600",
      },
    ],
    image: spaceplush,
    source_code_link: "https://github.com/Santhosh KMendozaVargas/Spaceplush",
  },
  {
    name: "Black and White",
    description:
  "Developed APIs for creating and retrieving dynamic form templates, enabling flexible data collection and user interactions within the application.  Implemented robust validation and error-handling mechanisms to ensure data integrity while managing various form templates based on user requirements. Collaborated with frontend developers to create a user-friendly interface that allows users to easily create, edit, and manage their templates, ultimately enhancing the overall user experience.",
    tags: [
      {
        name: "React.js",
        color: "text-purple-600",
      },
      {
        name: "Nest.js",
        color: "text-purple-600",
      },
      {
        name: "Sequelize",
        color: "text-blue-600",
      },
      {
        name: "SQL Server",
        color: "text-green-600",
      },
    ],
    image: selfDrivingCar,
    source_code_link: "https://github.com/Santhosh KMendozaVargas/SelfDrivingCar",
  },
  {
    name: "My Portfolio",
    description:
      "Interactive portfolio with React, Three.js, and Framer Motion for a dynamic user experience. Explore my work with smooth animations and 3D elements. Powered by Vite and Tailwind CSS for fast, stylish development. Make it yours and deploy effortlessly.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "text-green-600",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "text-blue-500",
      },
      {
        name: "framermotion",
        color: "text-purple-500",
      },
      {
        name: "threejs",
        color: "text-yellow-500",
      },
      {
        name: "postgress",
        color: "text-green-600",
      },
      {
        name: "mysql",
        color: "text-purple-600",
      },
      {
        name: "toastifyjs",
        color: "text-blue-600",
      },
    ],
    image: myPortfolio,
    source_code_link: "https://github.com/Santhosh KMendozaVargas/MyPortfolio",
  },
  {
    name: "Green Matters",
    description:
      "Worked on both API and UI development for the Green Matters project, focusing on business billing and invoice generation. This project streamlines financial processes and improves billing accuracy.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "text-pink-500",
      },
      {
        name: "jQuery",
        color: "text-yellow-600",
      },
      {
        name: "C#.NET",
        color: "text-purple-600",
      },
      {
        name: "MS SQL",
        color: "text-green-600",
      },
      {
        name: "Stored Procedures",
        color: "text-blue-600",
      },
    ],
    image: bialetti,
    live_version_link: "https://bialetti-bolivia.netlify.app/",
    source_code_link: "https://github.com/Santhosh KMendozaVargas/BialettiBolivia",
  },
];

export { services, technologies, experiences, educations, testimonials, projects };
