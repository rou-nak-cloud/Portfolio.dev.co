import facebook from './facebook.png'
import instagram from './instagram.svg'
import twitter from './x-social.svg'
// import dribble from './dribble.png'
import github from './github-white.png'
import linkedIn from './linkedIn.png'

import heroPng from './hero.png'
import scroll from './scroll.png'
import mountains from './mountains.png'
import planets from './planets.png'
import stars from './stars.png'
import people from './people.webp'
import codingPov from './coding-pov.png'
import c from './c.png'
import cloudinary from './cloudinary.svg'
import cPlus from './cplusplus.svg'
import figma from './figma.png'
import motion from './motion.png'
import css from './css3.svg'
import git from './git.svg'
import html from './html5.svg'
import javascript from './javascript.svg'
import mongoDb from './mongodb.svg'
import nodeJs from './nodejs.svg'
import tailwindCss from './tailwindcss.svg'
import vite from './vitejs.svg'
import vsCode from './visualstudiocode.svg'
import react from './react.svg'

import email from './email_icon.svg'
import arrow from './arrow_icon.svg'
import person from './person_icon.svg'

const assets = {
  heroPng,
  scroll,
  mountains,
  planets,
  stars,
  people,
  codingPov,
  c,
  cloudinary,
  cPlus,
  figma,
  vite,
  vsCode,
  tailwindCss,
  motion,
  git,
  html,
  javascript,
  mongoDb,
  css,
  nodeJs,
  react,
  email,
  person,
  arrow,
}
export default assets

import chatApp from './Projects/chat-app.png'
import duoAtelier from "./Projects/duo-atelier.png";
import editor from "./Projects/editor.png";
import lightMode from "./Projects/light-mode.png";
import lofifyHome from "./Projects/lofifyHome.png";
import mernHome from "./Projects/MERN-home.png";
import ochi from "./Projects/ochi.png";
import cocktail from "./Projects/cocktail.png";
import youtubeBackend from "./Projects/youtube-backend.png";

export const projectImages =[
  chatApp,
    duoAtelier,
  editor,
  lightMode,
  lofifyHome,
  mernHome,
  ochi,
  cocktail,
  youtubeBackend,
]

export const navLogos = [
    {
    id: "github",
    icon: github,
    link: "https://github.com/yourusername",
  },
  {
    id: "facebook",
    icon: facebook,
    link: "https://www.facebook.com/yourprofile", 
  },
  {
    id: "instagram",
    icon: instagram,
    link: "https://www.instagram.com/yourprofile",
  },
//   {
//     id: "twitter",
//     icon: twitter,
//     link: "https://twitter.com/yourprofile",
//   },
  {
    id: "linkedIn",
    icon: linkedIn,
    link: "https://linkedin.com/in/yourprofile",
  },
];

export const sideLinks = [
    "Homepage",
    "Education",
    "Projects",
    "Contact",
    "AboutMe"
]

export const educations = [
  {
    title: "Madhyamik Examination (Matriculation)",
    institution: "West Bengal Board of Secondary Education",
    date: "2019",
    contents: [
      "Completed secondary education with a strong foundation in Science, Mathematics, and English.",
      "Participated in school-level science exhibitions and extracurricular activities."
    ]
  },
  {
    title: "Higher Secondary Examination (HS)",
    institution: "West Bengal Council of Higher Secondary Education",
    date: "2019-2021",
    contents: [
      "Specialized in Science stream with subjects including Physics, Chemistry, Mathematics. Fall in love for Electronics as well as in Computer Science from this period.",
      "Engaged in coding workshops during this period."
    ]
  },
  {
    title: "Bachelor of Technology (B.Tech) in Electronics and Telecommunication Engineering",
    institution: "Guru Nanak Institute of Technology, Kolkata",
    date: "2021-2025",
    contents: [
      "Pursuing a degree in Electronics and Telecommunication Engineering with coursework in Data Structures, Algorithms, Web Development, and Database Management System",
      "Worked on personal and academic projects using technologies like React, Node.js, MongoDB, and Three.js.",
      "Learn various frontend technologies to make better workflow with Motion, Aceternity ui, Daisy ui, and Magic ui.",
      "Currently participating in hackathons, coding contests to enhance practical skills."
    ]
  }
];

export const interests = [
  {
    title: "Coding",
    desc: "Building applications, and exploring new technologies. I love turning ideas into reality through clean and efficient code.",
  },
  {
    title: "Traveling",
    desc: "Exploring new places, experiencing different cultures, and meeting people from around the world keeps me inspired and open-minded.",
  },
  {
    title: "Calisthenics",
    desc: "Bodyweight training helps me stay fit, disciplined, and constantly challenge myself to grow stronger both physically and mentally.",
  },
  {
    title: "Watching Movies",
    desc: "For me, movies are not just entertainment. Whether it’s a classic masterpiece or a thriller, I love the storytelling, the cinematography, and the reflection.",
  },
  {
    title: "Listening Music",
    desc: "I love to hear music during coding, it keeps me focused and makes the process more enjoyable. Music keeps me focused while coding.",
  },
]

import chatApp2 from './projects/chat-app2.png'
import backend from './projects/youtube-backend.png'
import ochiSite from './projects/ochi.png'
import codeInspector from './projects/editor.png'
import lofify from './projects/LofifyHome.png'
import mernAuth from './projects/MERN-home.png'

export const myProjects = [
  {
    id: 1,
    title: "Whispr - Real-time Chat Application",
    description:
      "A modern real-time chat platform enabling instant messaging, built with a focus on scalability, responsiveness, and seamless communication. Implemented WebSocket communication using Socket.IO and Managed user data, chat rooms, and message storage with MongoDB and Mongoose, ensuring data consistency.", 
    subDescription: [
      "Developed a real-time chat system using React for frontend and Node.js with Express for backend.",
      "Implemented WebSocket communication using Socket.IO to enable instant message delivery and typing indicators.",
      "Managed user data, chat rooms, and message storage with MongoDB and Mongoose, ensuring data consistency.",
      "Added features like online status, unread message notifications, and multi-user private chat handling."
    ],
    href: "", // GitHub/Live demo link when available
    logo: "",
    image: chatApp2,
  },
  {
    id: 2,
    title: "YouTube Backend Clone",
    description:
      "A backend system replicating core functionalities of YouTube including video uploads, likes, comments, and user interactions. I’m fascinated by how large platforms scale — this project let me dive into the backbone of YouTube and recreate its core features.",
    subDescription: [
      "Designed RESTful APIs using Express.js to handle user authentication, video uploads, likes, comments, and playlists.",
      "Implemented secure storage of media files using Cloudinary for both images and videos.",
      "Utilized MongoDB with Mongoose to model complex data relationships such as user interactions and video metadata.",
      "Handled video processing, streaming, and error management to simulate a production-level backend environment.",
      "Supported scalable features like pagination, search, and content filtering to mimic YouTube's backend capabilities."
    ],
    href: "https://github.com/rou-nak-cloud/Backend-Youtube",
    logo: "",
    image: backend,
  },
  // {
  //   id: 3,
  //   title: "Duo Atelier Website Clone",
  //   description:
  //     "A visually captivating and responsive website inspired by the award-winning Duo Atelier site, built for portfolio demonstration purposes.",
  //   subDescription: [
  //     "Recreated the Duo Atelier award-winning design using React for component structure.",
  //     "Styled completely with Tailwind CSS to match the original site's modern aesthetics and responsiveness.",
  //     "Ensured smooth animations, hover effects, and transitions to maintain a premium user experience.",
  //     "Implemented responsive design for compatibility across devices and screen sizes."
  //   ],
  //   href: "https://github.com/rou-nak-cloud/Duo-Atelier-Work-Website",
  //   logo: "",
  //   image: "/assets/projects/duo-atelier.png",
  // },
  {
    id: 4,
    title: "Ochi Website Clone",
    description:
      "A faithful replica of the award-winning Ochi website, designed to showcase frontend skills with modern web development practices. Minimal, modern, and pixel-perfect — this clone reflects my obsession with clean UI and smooth user experiences.",
    subDescription: [
      "Cloned the Ochi award-winning site design with React for component-based development.",
      "Utilized Tailwind CSS to recreate the minimalist and elegant styling of the original website.",
      "Ensured pixel-perfect layout, smooth transitions, and high responsiveness across all devices.",
      "Focused on fine UI details like typography, spacing, and interactive elements to achieve a premium look and feel."
    ],
    href: "https://github.com/rou-nak-cloud/Ochi_C-Website",
    logo: "",
    image: ochiSite,
  },
  {
  id: 5,
  title: "Code Inspector - AI Powered Code Review Tool",
  description:
    "An AI-powered code review platform with real-time editor, instant AI analysis, and syntax-highlighted feedback. As someone who reviews code a lot, I built an AI-powered tool to get instant insights, suggestions, and cleanups.",
  subDescription: [
    "Developed with Node.js + Express backend integrated with Google Gemini AI for code review.",
    "Frontend built using React, TailwindCSS, React-Markdown, and Highlight.js for syntax highlighting.",
    "Implemented a live code editor where users can write or paste code and instantly receive AI feedback.",
    "AI Review System provides detailed suggestions, improvements, and explanations.",
    "Markdown support for structured AI responses with styled syntax highlighting.",
    "Smooth user experience with loader animations, welcome screen, and responsive design."
  ],
  href: "", // add GitHub/Live link
  logo: "",
  image: codeInspector,
  },
  // {
  //   id: 6,
  //   title: "Agency UI Website",
  //   description:
  //     "A modern agency website with sleek UI/UX, animations, and dark/light mode support.",
  //   subDescription: [
  //     "Designed with modern UI principles and fully responsive across all devices.",
  //     "Implemented dark/light theme toggle using Tailwind's dark variant.",
  //     "Integrated functional contact form with Web3Forms to handle messages.",
  //     "Smooth animations and transitions powered by Framer Motion.",
  //     "Reusable components including Navbar, Hero, Services, Our Work, and Contact.",
  //     "Optimized performance with Vite + TailwindCSS for fast builds and loading."
  //   ],
  //   href: "", // add GitHub/Live link
  //   logo: "",
  //   image: "/assets/projects/agency-ui.png",
  // },
  {
    id: 7,
    title: "Lofify - Music Streaming Platform",
    description:
      "A full-stack music streaming app with Spotify-like UI and an admin dashboard for content management. I love listening to music while coding — so I built Lofify, a platform to enjoy and manage songs with a Spotify-like vibe.",
    subDescription: [
      "🎧 User Side: Play songs with sleek Spotify-inspired UI, featured charts, playlists, and albums.",
      "Responsive music player with play, pause, next, previous, and queue management.",
      "Fully responsive design optimized for both desktop and mobile users.",
      "🛠 Admin Side: Add new songs with metadata (title, artist, album, cover, audio file).",
      "Manage albums with cover image, description, and song associations.",
      "Built-in dashboard to upload and manage audio/image files efficiently."
    ],
    href: "", // add GitHub/Live link
    logo: "",
    image: lofify,
  },
  {
    id: 8,
    title: "Account Verification System",
    description:
      "A secure full-stack authentication system with OTP-based verification, password reset, and JWT authentication. Security excites me — this project let me explore email OTPs, JWTs, and building a reliable authentication system.",
    subDescription: [
      "User registration with OTP-based email verification.",
      "Login and protected routes using JWT tokens with secure cookie handling.",
      "Integrated nodemailer to send OTPs for account verification and password reset.",
      "Password reset system with verified OTP confirmation.",
      "Environment variable-driven secure setup for scalability and safety."
    ],
    href: "", // add GitHub/Live link
    logo: "",
    image: mernAuth,
  }
];

