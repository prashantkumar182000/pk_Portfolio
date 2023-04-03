import {
  mobile,
  backend,
  solidity,
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
  bit_mesra,
  dbms_english_school,
  chef_connect_india,
  girlscript_foundation,
  shopify,
  chefFactory_page,
  kryptonite_page,
  heelingminds_page,
  petshop_page,
  threejs,
  vrahul,
  rajesh,
  tarun,
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Solidity",
    icon: solidity,
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
const education = [
  {
    title: "Birla Institute of Technology, Mesra",
    company_name: "Bachelor in Technology",
    date: "Duration: 2020 - 2024",
    icon: bit_mesra,
    iconBg: "#383E56",
    
    points: [
      "Major Degree in Electronics and Communication Engineering.",
      "Minor Degree in Computer Science Engineering",
    ],
  },
  {
    title: "D.B.M.S. English School, Jamshedpur",
    company_name: "12th Intermediate - Pure Science",
    icon: dbms_english_school,
    iconBg: "#E6DEDD",
    date: "Duration: 2018 - 2020",
    points: [
    ],
  },
];
const experiences = [
  {
    title: "Web Developer",
    company_name: "Chef Connect India",
    icon: chef_connect_india,
    iconBg: "#383E56",
    date: "March 2021 - June 2021",
    points: [
      "Creating website layout/user interfaces by using standard HTML/CSS practices.",
      "Gather and reﬁne speciﬁcations and requirements based on technical needs.",
      "Maintaining, expanding, and scaling our site.",
      "Worked on SEO by working with backlinks and keyword strategic placements.",
      "Gave daily updates on my work progress to my mentors.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "GirlScript Foundation",
    icon: girlscript_foundation,
    iconBg: "#E6DEDD",
    date: "December 2021 - November 2022",
    points: [
    "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];



const testimonials = [
  {
    testimonial:
      "As a web development intern, Prashant consistently demonstrated strong communication skills and the ability to work well under pressure.",
    name: "V.Rahul",
    designation: "Software Engineer",
    company: "Cisco, Hyderabad",
    image: vrahul,
  },
  {
    testimonial:
      "We were impressed with PK's ability to learn new technologies and apply them to our projects. He was able to pick up new programming languages and tools with ease, and his willingness to learn made them a valuable member of our team.",
    name: "Rajesh Kari",
    designation: "Forbes Business Council Member | Vice President, Business Leader",
    company: "InfoVision Inc.",
    image: rajesh,
  },
  {
    testimonial:
      "Prashant demonstrated excellent problem-solving skills during their time with us. He was able to quickly identify issues in our codebase and propose effective solutions. His dedication and work ethic were a great asset to our organization",
    name: "Girivaru Tarun",
    designation: "Product Manager",
    company: "Nutanix",
    image: tarun,
  },
];

const projects = [
  {
    name: "Chef Factory",
    description:
      "Chef Factory is an indian specialist chef recruitment agency, sourcing talent at all levels from Commis Chef to Executive Chef for Hospitality Parties, events and special occassions.",
    tags: [
      {
        name: "HTML & CSS",
        color: "blue-text-gradient",
      },
      {
        name: "BootStrap",
        color: "orange-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: chefFactory_page,
    source_code_link: "https://github.com/prashantkumar182000/Chef-Factory",
  },
  {
    name: "KRYPTO.NITE",
    description:
      "Using MetaMask to Deploy a Smart contract and build a Web 3.0 React Solidity Blockchain Application.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "Restapi",
        color: "green-text-gradient",
      },
      {
        name: "Metamask",
        color: "pink-text-gradient",
      },
      {
        name: "Solidity",
        color: "purple-text-gradient",
      },
      {
        name: "Smart Contract",
        color: "orange-text-gradient",
      },
      {
        name: "Hardhat-waffle",
        color: "green-text-gradient",
      },
    ],
    image: kryptonite_page,
    source_code_link: "https://github.com/prashantkumar182000/KRYPTO.NITE",
  },
  {
    name: "Heeling Minds",
    description:
      "We give you comfort so that you can connect on high-quality video sessions with your therapist from the comfort of your home. ",
    tags: [
      {
        name: "HTML & CSS",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "JQuery",
        color: "orange-text-gradient",
      },
      {
        name: "Figma",
        color: "pink-text-gradient",
      },
    ],
    image: heelingminds_page,
    source_code_link: "https://github.com/prashantkumar182000/HeelingMinds",
  },
  {
    name: "Pet Shop",
    description:
      "Online Pet related products and foods available.",
    tags: [
      {
        name: "HTML & CSS",
        color: "blue-text-gradient",
      },
      {
        name: "BootStrap",
        color: "yellow-text-gradient",
      },
      {
        name: "Adobe Dreamweaver",
        color: "green-text-gradient",
      },
      {
        name: "Figma",
        color: "pink-text-gradient",
      },
    ],
    image: petshop_page,
    source_code_link: "https://github.com/prashantkumar182000/HeelingMinds",
  },
];

export { services, technologies, education, experiences, testimonials, projects };
