import {
  Code2, Palette, Camera, Layout, Database, GitBranch,
  Globe, Terminal, BarChart3, Smartphone, FileCode, Layers,
  PenTool, Film, ImageIcon, Monitor, Server, Cpu,
  type LucideIcon
} from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  plannedFeatures?: string[];
  technologies: string[];
  previewGradient: string;
  icon: LucideIcon;
  github?: string;
  live?: string;
}

export const projects: Project[] = [
  {
    id: 'bookmysalon',
    title: 'BookMySalon',
    category: 'Full-Stack Web Application',
    description: 'An AI-powered salon booking and management platform designed to simplify salon discovery, service selection, appointment booking, and salon operations.',
    features: [
      'Customer and salon-owner authentication',
      'Role-based access control',
      'Salon and service management',
      'Appointment booking',
      'Customer reviews',
      'Responsive dashboards',
    ],
    plannedFeatures: ['AI-assisted hairstyle recommendations'],
    technologies: ['Python', 'Django', 'MySQL', 'HTML', 'CSS', 'Bootstrap'],
    previewGradient: 'from-amber-500/20 via-orange-500/20 to-purple-600/20',
    icon: Smartphone,
    github: 'https://github.com/akhil-anandan',
  },
  {
    id: 'audio-steganography',
    title: 'Audio Steganography & Cryptography',
    category: 'Python Security Application',
    description: 'A desktop application that combines audio steganography and encryption to embed and extract hidden messages securely.',
    features: [
      'LSB-based audio steganography',
      'AES encryption',
      'Message embedding and extraction',
      'Tkinter graphical interface',
    ],
    technologies: ['Python', 'Tkinter', 'AES Encryption'],
    previewGradient: 'from-emerald-500/20 via-teal-500/20 to-amber-500/10',
    icon: Terminal,
    github: 'https://github.com/akhil-anandan',
  },
  {
    id: 'fitness-tracker',
    title: 'Fitness Tracker',
    category: 'Data Visualization Application',
    description: 'A fitness tracking application designed to help users record activities, monitor goals, and visualize progress.',
    features: [
      'User authentication',
      'Fitness goal tracking',
      'Weekly progress charts',
      'Data visualization',
      'Streamlit interface',
    ],
    technologies: ['Python', 'Streamlit', 'Pandas', 'Plotly'],
    previewGradient: 'from-amber-500/25 via-yellow-500/20 to-orange-500/20',
    icon: BarChart3,
    github: 'https://github.com/akhil-anandan',
  },
  {
    id: 'bill-splitter',
    title: 'Smart Bill Splitter',
    category: 'Utility Application',
    description: 'A practical expense-sharing application designed to simplify splitting bills and exporting expense records.',
    features: [
      'Expense calculation and splitting',
      'Organized expense summaries',
      'CSV export',
      'PDF export',
    ],
    technologies: ['Python', 'Streamlit', 'Pandas', 'FPDF'],
    previewGradient: 'from-amber-600/20 via-indigo-500/20 to-blue-500/20',
    icon: FileCode,
    github: 'https://github.com/akhil-anandan',
  },
  {
    id: 'portfolio',
    title: 'Personal Portfolio',
    category: 'Web Design & Development',
    description: 'A modern, high-performance personal portfolio showcasing my development projects, technical skills, creative digital work, and professional background.',
    features: [
      'Ultra-responsive mobile-first layout',
      'Warm amber & obsidian color harmony',
      'Interactive animations & micro-interactions',
      'Curated projects showcase',
      'Direct communication channel',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    previewGradient: 'from-amber-500/20 via-purple-500/20 to-indigo-500/20',
    icon: Globe,
    github: 'https://github.com/akhil-anandan',
  },
];

export interface Skill {
  name: string;
  icon: LucideIcon;
}

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming & Backend',
    icon: Code2,
    skills: [
      { name: 'Python', icon: Terminal },
      { name: 'Django', icon: Server },
      { name: 'Django REST Framework', icon: Cpu },
      { name: 'REST API Development', icon: Globe },
    ],
  },
  {
    title: 'Frontend Development',
    icon: Layout,
    skills: [
      { name: 'HTML5', icon: FileCode },
      { name: 'CSS3', icon: Palette },
      { name: 'Bootstrap', icon: Layers },
      { name: 'JavaScript Basics', icon: Code2 },
      { name: 'React Basics', icon: Monitor },
    ],
  },
  {
    title: 'Databases',
    icon: Database,
    skills: [
      { name: 'MySQL', icon: Database },
      { name: 'SQLite', icon: Database },
      { name: 'SQL Fundamentals', icon: Terminal },
    ],
  },
  {
    title: 'Development Tools',
    icon: GitBranch,
    skills: [
      { name: 'Git', icon: GitBranch },
      { name: 'GitHub', icon: Globe },
      { name: 'VS Code', icon: Monitor },
      { name: 'Streamlit', icon: Layout },
    ],
  },
  {
    title: 'Creative Skills',
    icon: Palette,
    skills: [
      { name: 'Video Editing', icon: Film },
      { name: 'Videography & Storytelling', icon: Camera },
      { name: 'Graphic Design', icon: PenTool },
      { name: 'Poster Design', icon: ImageIcon },
      { name: 'Typography & Layouts', icon: Layers },
      { name: 'Social Media Visual Content', icon: Smartphone },
    ],
  },
  {
    title: 'Data & Analytics',
    icon: BarChart3,
    skills: [
      { name: 'Pandas', icon: BarChart3 },
      { name: 'Plotly', icon: BarChart3 },
      { name: 'Power BI', icon: Monitor },
      { name: 'ML Fundamentals', icon: Cpu },
    ],
  },
];

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    title: 'Python & Django Web Development',
    description: 'Building robust, scalable web applications with Python and Django, including REST APIs and database-driven solutions.',
    icon: Code2,
  },
  {
    title: 'Responsive Website Development',
    description: 'Creating modern, mobile-first websites that look beautiful and function seamlessly across all screen sizes and devices.',
    icon: Layout,
  },
  {
    title: 'Backend & Database Management',
    description: 'Designing efficient database schemas, implementing authentication systems, and building secure CRUD architectures.',
    icon: Database,
  },
  {
    title: 'Video Editing & Post-Production',
    description: 'Professional video editing for promotional content, cinematic reels, travel edits, and social media with polished color and sound.',
    icon: Film,
  },
  {
    title: 'Videography & Visual Storytelling',
    description: 'Capturing compelling visual stories through event coverage, promotional footage, and high-impact cinematic frames.',
    icon: Camera,
  },
  {
    title: 'Graphic & Poster Design',
    description: 'Designing eye-catching posters, brand visuals, typography compositions, and promotional marketing materials.',
    icon: PenTool,
  },
  {
    title: 'Social Media Creative Design',
    description: 'Crafting engaging visual content tailored for social media platforms to elevate personal and corporate brand presence.',
    icon: Smartphone,
  },
  {
    title: 'Digital Content Creation',
    description: 'End-to-end digital solutions blending technical engineering, sleek interfaces, and creative multimedia assets.',
    icon: Globe,
  },
];

// Clean navItems without the unwanted creative dashboard gallery
export const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'services', label: 'Services' },
  { id: 'process', label: 'Process' },
  { id: 'contact', label: 'Contact' },
];
