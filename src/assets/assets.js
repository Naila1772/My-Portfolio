import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaDatabase, FaRobot } from 'react-icons/fa';

import profile from './profile.jpeg';
import about from './about.jpeg';
import projectImg1 from './project1.avif';
import projectImg2 from './project2.avif';
import projectImg3 from './project3.avif';


export const assets = {
    profile,
    about,
    project1: projectImg1,
    project2: projectImg2,
    project3: projectImg3,
}


export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
      color: 'text-purple'
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Beautiful design and user experience are at the heart of everything I create.',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, efficient code following best practices and modern patterns.',
      color: 'text-blue'
    }
  ];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['JavaScript', 'Tailwind CSS','CSS3','Framer Motion', 'HTML5', 'React']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['Node.js', 'Express', 'REST API']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['MongoDB', 'MySQL']
  },
  {
    title: 'Machine Learning & AI',
    icon: FaRobot,
    description: 'Developing and deploying machine learning models and AI-powered applications.',
    tags: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn']
  },
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my development workflow.',
    tags: ['Git & GitHub', 'Webpack', 'VS Code']
  },
  {
    title:'Languages',
    icon: FaCode,
    description: 'Programming languages I am proficient in.',
    tags: ['Java', 'JavaScript', 'Python', 'C']
  }
];



export const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with shopping cart, user authentication, and payment processing.",
    image: projectImg1,
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    icons: [],
    demo: "#",
    code: "#",
  },
  {
    title: "spotify clone",
    description: "A music streaming app with playlist management, search functionality, and real-time updates.",
    image: projectImg2,
    tech: ["HTML", "CSS", "JavaScript"],
    icons: [ ],
    demo: "#",
    code: "#",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase projects, skills, and blogs with dark/light mode support.",
    image: projectImg3,
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Markdown"],
    icons: [],
    demo: "#",
    code: "https://github.com/Naila1772/Spotify-Clone.git",
  }
];


export const workData = [
  {
    role: "Web Developer",
    company: "Apex Circle",
    duration: "Present",
    description:
      "Developed and maintained web applications for National-level hackathons, focusing on responsive design and performance optimization.",
    color: "pink"
  }
];
