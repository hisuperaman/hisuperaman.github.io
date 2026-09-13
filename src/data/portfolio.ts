import {Portfolio} from "@/definitions";
import {FaGithub, FaLinkedin, FaXTwitter, FaAws} from "react-icons/fa6";
import {Mail, Smartphone, Code, Database, Server, Cpu, Terminal} from "lucide-react";
import {
    SiDocker,
    SiGit,
    SiJavascript,
    SiNodedotjs,
    SiPostgresql,
    SiReact,
    SiTypescript,
    SiPython,
    SiMongodb,
    SiDjango,
    SiExpress,
    SiTailwindcss,
    SiFastapi,
    SiRedis,
    SiFirebase
} from "react-icons/si";

export const portfolio: Portfolio = {
    identity: {
        name: 'Aman',
        role: 'Software Engineer - Agentic AI & Full Stack Development',
        location: 'Mandi, Himachal Pradesh, India',
        availability: 'Software Engineer - Agentic AI & Full Stack Development',
        intro: 'I build intelligent, high-quality web applications focusing on LLMs, Generative AI, and Machine Learning.',
        image: '/images/avatar.jpg',
    },
    about: [
        'I am a Software Engineer working at the intersection of AI and full-stack development, passionate about bridging the gap between intelligent models and user-facing applications. My favorite projects sit somewhere between a complex RAG architecture and a clean, unbloated user interface.',
        'Working extensively with React, Django, and LangChain, I specialize in building scalable, context-aware tools. I appreciate minimalist design aesthetics and often reach for tools like Joy UI to keep component structures clear and useful.',
        'Beyond the browser, I have a strong foundation in Linux environments and hardware tinkering. Whether it is optimizing system security or exploring IoT with a Raspberry Pi, I enjoy working close to the problem.',
    ],
    sectionLabels: {
        about: 'About',
        work: 'Work experience',
        education: 'Education',
        skills: 'Skills',
        projects: 'My projects',
        hackathons: 'Hackathons',
        contact: 'Get in touch',
    },
    work: [
        {
            company: 'Open Grid Labs',
            role: 'Software Developer',
            date: 'Aug 2025 — Present',
            location: 'Remote',
            summary: 'Working as a Software Developer, contributing to the design, development, and maintenance of web-based applications in a fast-paced environment.',
            highlights: [],
            technologies: ['React.js', 'Django', 'PostgreSQL', 'LangChain', 'Redis', 'Celery'],
            image: '/images/companies/opengridlabs.png',
            href: 'https://opengridlabs.com'
        },
        {
            company: 'Guru Kripa Institution',
            role: 'Industrial Trainee & Developer',
            date: 'Aug 2023 - Aug 2025',
            location: 'Sundernagar, India',
            summary: 'Mentored B.Tech, BCA, MCA and Polytechnic students in industrial training projects, helping them build web and desktop applications using Django, Spring Boot, PHP, Java Swing and Python Tkinter.',
            highlights: [
                'Mentored students through complex software engineering concepts and full-stack development cycles.',
                'Designed and developed the official Guru Kripa Institution web platform from the ground up using React and Vite.',
            ],
            technologies: ['Python', 'Django', 'React.js', 'Vite', 'Java'],
            image: '/images/companies/gurukripainstitution.png',
            href: 'https://gurukripainstitution.in'
        },
    ],
    education: [
        {
            school: 'Jawaharlal Nehru Government Engineering College (HPTU)',
            degree: 'B.Tech in Computer Science and Engineering',
            date: 'Aug 2024 — Present',
            detail: 'Specializing in Artificial Intelligence and Machine Learning. Current CGPA: 7.63.',
            image: '/images/schools/jngec.png',
            href: 'https://www.jngec.ac.in/'
        },
        {
            school: 'Government Polytechnic Sundernagar (HPTSB)',
            degree: 'Diploma in Computer Engineering',
            date: 'Aug 2022 — July 2024',
            detail: 'Graduated with 86%.',
            image: '/images/schools/gps.png',
            href: 'https://gpsundernagar.edu.in/'
        },
    ],
    skills: [
        {name: 'React & React Native', icon: SiReact},
        {name: 'TypeScript', icon: SiTypescript},
        {name: 'Django', icon: SiDjango},
        {name: 'FastAPI', icon: SiFastapi},
        {name: 'Node.js & Express', icon: SiNodedotjs},
        {name: 'Python', icon: SiPython},
        {name: 'PostgreSQL', icon: SiPostgresql},
        {name: 'Redis', icon: SiRedis},
        {name: 'Tailwind CSS', icon: SiTailwindcss},
        {name: 'Jetpack Compose', icon: Smartphone},
        {name: 'LangChain & LLMs', icon: Cpu},
        {name: 'Firebase', icon: SiFirebase},
    ],
    projects: [
        {
            name: 'Index-R',
            description: 'Auto-discovers research papers and answers with traceable citations using BM25, citation-graph, and LLM reranking. Built without a vector DB using Postgres full-text search.',
            date: '2026',
            tags: ['Django', 'React', 'PostgreSQL', 'LLMs', 'Celery'],
            image: '/images/projects/indexr.png',
        },
        {
            name: 'Mordex',
            description: 'A SaaS platform for context-aware chatbots leveraging advanced RAG architectures with Ollama, LangChain, and ChromaDB.',
            date: '2026',
            tags: ['React', 'JoyUI', 'Django', 'Redis', 'Celery'],
            image: '/images/projects/mordex.png',
        },
        {
            name: 'Capme',
            description: 'An automated caption generator application processing video and audio to generate precise, timed captions.',
            date: '2025',
            tags: ['FastAPI', 'React', 'Whisper', 'ffmpeg'],
            image: '/images/projects/capme.png',
            source: 'https://github.com/hisuperaman/capme'
        },
        {
            name: 'Music Recommender',
            description: 'Collaborative and content-based filtering integrated with an LLM for sentiment semantic recommendations based on prompts.',
            date: '2024',
            tags: ['LLMs', 'Machine Learning', 'Python'],
            source: 'https://github.com/hisuperaman/music-recommender',
            image: '/images/projects/music-recommender.png',
        },
        {
            name: 'humantype',
            description: 'A real-time typing test application and Monkeytype clone.',
            date: '2024',
            tags: ['React.js', 'Frontend'],
            source: 'https://github.com/hisuperaman/humantype',
            website: 'https://humantype.onrender.com',
            image: '/images/projects/humantype.png',
        },
        {
            name: 'Wallety',
            description: 'A Jetpack Compose, Room DB Expense Tracker mobile app.',
            date: '2023',
            tags: ['Android', 'Jetpack Compose', 'Kotlin'],
            source: 'https://github.com/hisuperaman/wallety',
            website: 'https://hisuperaman.me/wallety',
            image: '/images/projects/wallety.png',
        },
    ],
    hackathons: [
        {
            name: 'Smart India Hackathon (SIH)',
            result: 'Participant',
            date: '2026',
            location: 'India',
            description: 'Developed IP-SAKTI Sahayak, an Ayurveda-specific IPR and regulatory assistant providing jurisdiction-separated, source-cited guidance using lexical retrieval, metadata, and citation-grounded LLM synthesis.',
            image: '/images/hackathons/sih.png',
        },
    ],
    socials: [
        {label: 'GitHub', href: 'https://github.com/hisuperaman', handle: '@hisuperaman', icon: FaGithub},
        {label: 'LinkedIn', href: 'https://linkedin.com/in/hisuperaman', handle: '/in/hisuperaman', icon: FaLinkedin},
        {label: 'Email', href: 'mailto:hisuperamanx@gmail.com', handle: 'hisuperamanx@gmail.com', icon: Mail},
    ],
    contact: {
        body: 'Want to trade notes on LLMs, minimalist UI systems, or the strange little details that make software feel human? Just send a note — I read everything.',
        email: 'hisuperamanx@gmail.com',
        footer: 'Designed with ❤️ by Aman',
    },
};