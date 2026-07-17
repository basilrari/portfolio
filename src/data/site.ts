export type ProjectLinkType = 'repo' | 'demo' | 'paper';

export type ProjectLink = {
  type: ProjectLinkType;
  url: string;
  label?: string;
};

export type ProjectMetric = {
  label: string;
  value: string;
};

export type Publication = {
  title: string;
  venue?: string;
  year?: string;
  url?: string;
};

export type Education = {
  school: string;
  program: string;
  focus?: string;
  years?: string;
  advisor?: string;
  lab?: string;
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  category: 'drones' | 'llm' | 'world-models';
  kind: 'research' | 'industry';
  metrics: ProjectMetric[];
  links: ProjectLink[];
};

const emptyLinks: ProjectLink[] = [];
const emptyMetrics: ProjectMetric[] = [];
const emptyPublications: Publication[] = [];

export const site = {
  name: 'Basil Rari',
  initials: 'BR',
  avatarUrl: '/avatar.jpg',
  title: 'Graduate Researcher · AI & Robotics',
  email: 'basilrari@gmail.com',
  github: 'https://github.com/basilrari',
  linkedin: 'https://linkedin.com/in/basilrari',
  resumeUrl: undefined as string | undefined, // set to '/resume.pdf' once the file is uploaded
  openTo: 'Open to research collaborations and AI/robotics roles.',
  scholarUrl: undefined as string | undefined,
  headline: 'Building intelligent systems that perceive, reason and act.',
  subheadline:
    'Focused on drones, LLMs, and world models for autonomous systems in the real world.',
  bio: 'Graduate researcher in AI & robotics — building systems across drones, LLMs, and world models, from multi-drone search & rescue to edge AI on NVIDIA Jetson.',
  education: [
    {
      school: 'National Chung Cheng University',
      program: 'Graduate Research — AI & Robotics',
      focus: 'Edge AI, Computer Vision, Autonomous Systems',
    },
  ] as Education[],
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
      id: 'drones' as const,
      title: 'Drones',
      description: 'Autonomous aerial systems with perception, planning, and edge deployment.',
      skills: ['Perception & Sensor Fusion', 'Path Planning', 'Swarm Coordination', 'Edge AI on Jetson'],
      linkLabel: 'View Drone Projects',
      linkHref: '/?category=drones#projects',
    },
    {
      id: 'llm' as const,
      title: 'LLM',
      description: 'Language models as command interfaces and reasoning layers for physical systems.',
      skills: ['RAG & Tool Use', 'Multi-Agent Coordination', 'Mission Planning', 'Prompt Engineering'],
      linkLabel: 'View LLM Projects',
      linkHref: '/?category=llm#projects',
    },
    {
      id: 'world-models' as const,
      title: 'World Models',
      description: 'Predictive models for spatial reasoning, navigation, and long-horizon planning.',
      skills: ['Video Prediction', 'Spatial Reasoning', 'Simulation', 'Long-Horizon Planning'],
      linkLabel: 'View World Model Projects',
      linkHref: '/?category=world-models#projects',
    },
  ],
  projects: [
    {
      title: 'Multi-Drone Army for Flood Search & Rescue',
      description:
        'Multi-drone system with NVIDIA Jetson Edge AI and LLM-powered command interface for coordinated search & rescue.',
      tech: ['Rust', 'Python', 'Jetson', 'LLM'],
      category: 'drones' as const,
      kind: 'research' as const,
      metrics: emptyMetrics,
      links: emptyLinks,
    },
    {
      title: 'Public Littering Detection System',
      description:
        'Vision-language model analyzing surveillance video with structured violation reports.',
      tech: ['Python', 'VLM', 'OpenCV'],
      category: 'world-models' as const,
      kind: 'research' as const,
      metrics: emptyMetrics,
      links: emptyLinks,
    },
    {
      title: 'CNN + Transformer Littering Detection',
      description: 'Hybrid architecture for littering behavior detection at 84% accuracy.',
      tech: ['PyTorch', 'YOLO', 'Transformers'],
      category: 'world-models' as const,
      kind: 'research' as const,
      metrics: [{ label: 'Accuracy', value: '84%' }],
      links: emptyLinks,
    },
    {
      title: 'Troo Bridge – Climate Action Payment Layer',
      description:
        'Industry side project: payment platform routing carbon offset contributions into verified credits.',
      tech: ['Go', 'Next.js', 'PostgreSQL'],
      category: 'llm' as const,
      kind: 'industry' as const,
      metrics: emptyMetrics,
      links: emptyLinks,
    },
  ] satisfies Project[],
  publications: emptyPublications,
};

export type NavItem = {
  id: string;
  label: string;
  href: string;
  icon: 'home' | 'projects' | 'about' | 'resume';
};

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home', href: '#home', icon: 'home' },
  { id: 'projects', label: 'Projects', href: '#projects', icon: 'projects' },
  { id: 'about', label: 'About', href: '#about', icon: 'about' },
  ...(site.resumeUrl
    ? [{ id: 'resume', label: 'Resume', href: site.resumeUrl, icon: 'resume' as const }]
    : []),
];
