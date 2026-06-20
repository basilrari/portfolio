export const site = {
  name: 'Basil Rari',
  initials: 'BR',
  avatarUrl: '/avatar.jpg',
  title: 'AI ENGINEER',
  email: 'basilrari@gmail.com',
  github: 'https://github.com/basilrari',
  linkedin: 'https://linkedin.com/in/basilrari',
  resumeUrl: '/resume.pdf',
  headline: 'Building intelligent systems that perceive, reason and act.',
  subheadline:
    'Focused on drones, LLMs, and world models for autonomous systems in the real world.',
  bio: 'Graduate researcher building intelligent systems across drones, LLMs, and world models — from multi-drone search & rescue to edge AI on NVIDIA Jetson.',
  education: [
    { school: 'National Chung Cheng University', degree: 'Graduate Research — AI & Robotics' },
    { school: 'Taiwan', degree: 'Edge AI, Computer Vision, Autonomous Systems' },
  ],
  currently:
    'Working on scalable world models for drone navigation and long-horizon planning with multi-agent LLM coordination.',
  techStack: [
    { name: 'Python', icon: 'python' },
    { name: 'PyTorch', icon: 'pytorch' },
    { name: 'JAX', icon: 'jax' },
    { name: 'ROS 2', icon: 'ros' },
    { name: 'CUDA', icon: 'cuda' },
    { name: 'Docker', icon: 'docker' },
    { name: '& more', icon: 'more' },
  ],
  expertise: [
    {
      id: 'drones',
      title: 'Drones',
      description: 'Autonomous aerial systems with perception, planning, and edge deployment.',
      skills: ['Perception & Sensor Fusion', 'Path Planning', 'Swarm Coordination', 'Edge AI on Jetson'],
      linkLabel: 'View Drone Projects',
      linkHref: '#projects',
    },
    {
      id: 'llm',
      title: 'LLM',
      description: 'Language models as command interfaces and reasoning layers for physical systems.',
      skills: ['RAG & Tool Use', 'Multi-Agent Coordination', 'Mission Planning', 'Prompt Engineering'],
      linkLabel: 'View LLM Projects',
      linkHref: '#projects',
    },
    {
      id: 'world-models',
      title: 'World Models',
      description: 'Predictive models for spatial reasoning, navigation, and long-horizon planning.',
      skills: ['Video Prediction', 'Spatial Reasoning', 'Simulation', 'Long-Horizon Planning'],
      linkLabel: 'View World Model Projects',
      linkHref: '#projects',
    },
  ],
  projects: [
    {
      title: 'Multi-Drone Army for Flood Search & Rescue',
      description: 'Multi-drone system with NVIDIA Jetson Edge AI and LLM-powered command interface.',
      tech: ['Rust', 'Python', 'Jetson', 'LLM'],
      category: 'drones',
    },
    {
      title: 'Public Littering Detection System',
      description: 'Vision-language model analyzing surveillance video with structured violation reports.',
      tech: ['Python', 'VLM', 'OpenCV'],
      category: 'world-models',
    },
    {
      title: 'CNN + Transformer Littering Detection',
      description: 'Hybrid architecture for littering behavior detection at 84% accuracy.',
      tech: ['PyTorch', 'YOLO', 'Transformers'],
      category: 'world-models',
    },
    {
      title: 'Troo Bridge – Climate Action Payment Layer',
      description: 'Payment platform routing carbon offset contributions into verified credits.',
      tech: ['Go', 'Next.js', 'PostgreSQL'],
      category: 'llm',
    },
  ],
} as const;

export type NavItem = {
  id: string;
  label: string;
  href: string;
  icon: 'home' | 'projects' | 'blog' | 'about' | 'resume';
};

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home', href: '#home', icon: 'home' },
  { id: 'projects', label: 'Projects', href: '#projects', icon: 'projects' },
  { id: 'blog', label: 'Blog', href: '#blog', icon: 'blog' },
  { id: 'about', label: 'About', href: '#about', icon: 'about' },
  { id: 'resume', label: 'Resume', href: site.resumeUrl, icon: 'resume' },
];
