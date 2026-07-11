import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaDatabase, FaRobot } from 'react-icons/fa';

import profile from './profile.jpeg';
import about from './about.jpeg';
import projectImg1 from './project1.avif';
import projectImg2 from './project2.png';
import projectImg3 from './project3.png';


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
    title: "Tours and Travels App",
    description: "A full-stack application for exploring tours and travel packages with user authentication and booking features.",
    image: projectImg1,
    tech: ["React", "Node.js", "MongoDB"],
    icons: [],
    demo: "#",
    code: "https://github.com/Naila1772/Tours-and-Travel.git",
  },
  {
    title: "Spotify Clone",
    description: "A music streaming app clone with static dashboard and basic sound adjusting functionalities.",
    image: projectImg2,
    tech: ["HTML", "CSS", "JavaScript"],
    icons: [ ],
    demo: "https://spotify-clone-bmad.vercel.app/",
    code: "https://github.com/Naila1772/Spotify-Clone.git",
  },
  {
    title: "Weather App",
    description: "A simple weather application that displays current conditions and forecasts for any location.",
    image: projectImg3,
    tech: ["React", "OpenWeatherMap API"],
    icons: [],
    demo: "https://weather-app-omega-plum-39.vercel.app/",
    code: "https://github.com/Naila1772/Weather-App.git",
  }
];


export const workData = [
  {
    role: "Web Developer",
    company: "Apex Circle",
    duration: "9 months",
    description:
      "Developed and maintained web applications for National-level hackathons, focusing on responsive design and performance optimization. Led a team of 4 developers to implement new features and improve user experience.",
    color: "pink"
  },
  {
    role: "Web Developer",
    company: "Kannovac Technology",
    duration: "6 months",
    description:"Worked on front-end development for various client projects, utilizing React and Tailwind CSS to create dynamic and user-friendly interfaces. Collaborated with designers and back-end developers to ensure seamless integration of features.",
    color: "pink"
  }
];
