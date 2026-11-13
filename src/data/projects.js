export const profile = {
  name: 'Sameer Shah',
  firstName: 'Sameer',
  initials: 'SS',
  email: 'stfusameerr@gmail.com',
  location: 'Pakistan',
  role: 'Full-Stack Developer & AI Undergraduate',
  university: 'SZABIST',
  degree: 'BSc Artificial Intelligence',
  photo: '/sameer.jpg',
}

export const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/sameershah0227',
    icon: 'fa-brands fa-github',
  },
  {
    label: 'Email',
    href: 'mailto:stfusameerr@gmail.com',
    icon: 'fa-regular fa-envelope',
  },
]

export const projects = [
  {
    id: 1,
    title: 'Samify',
    subtitle: 'Music player with real-time karaoke lyrics',
    categoryLabel: 'Full-stack web app',
    year: '2026',
    summary:
      'A music streaming app with real-time karaoke lyrics, hardware-accurate seeking, and a cloud-synced library.',
    description:
      'Samify is a Next.js 16 / React 19 music player built end to end. It ships a full playback queue with loop and shuffle, pointer-based scrubbing with drag locks so seeking never resets playback, and live karaoke lyrics that scroll in time and jump on click. Playlists and liked songs persist to Supabase (PostgreSQL) behind Row Level Security with email/password auth, and the whole app is wrapped in a Spotify-inspired dark UI — then packaged for iOS with Capacitor.',
    tags: ['Next.js 16', 'React 19', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'Capacitor'],
    repoUrl: 'https://github.com/sameershah0227/samify',
    liveUrl: null,
  },
]

export const skillGroups = [
  {
    index: '01',
    title: 'Frontend',
    description: 'Fast, responsive interfaces built with modern React.',
    items: [
      { label: 'React / Next.js', icon: 'fa-brands fa-react' },
      { label: 'JavaScript / TypeScript', icon: 'fa-brands fa-js' },
      { label: 'Tailwind CSS', icon: 'fa-solid fa-wind' },
      { label: 'HTML5 / CSS3', icon: 'fa-brands fa-html5' },
      { label: 'Responsive UI', icon: 'fa-solid fa-mobile-screen' },
    ],
  },
  {
    index: '02',
    title: 'Backend & cloud',
    description: 'Databases, auth, and deployment behind the interface.',
    items: [
      { label: 'Supabase', icon: 'fa-solid fa-bolt' },
      { label: 'PostgreSQL', icon: 'fa-solid fa-database' },
      { label: 'Node.js', icon: 'fa-brands fa-node-js' },
      { label: 'Auth & Row Level Security', icon: 'fa-solid fa-lock' },
      { label: 'Docker / nginx', icon: 'fa-brands fa-docker' },
    ],
  },
  {
    index: '03',
    title: 'AI & tooling',
    description: 'Foundations from my AI degree, plus day-to-day tools.',
    items: [
      { label: 'Python', icon: 'fa-brands fa-python' },
      { label: 'AI / ML fundamentals', icon: 'fa-solid fa-brain' },
      { label: 'Git & GitHub', icon: 'fa-brands fa-git-alt' },
      { label: 'Capacitor (iOS)', icon: 'fa-brands fa-apple' },
      { label: 'Vercel', icon: 'fa-solid fa-cloud-arrow-up' },
    ],
  },
]

export const education = [
  {
    period: 'In progress',
    place: 'SZABIST',
    role: 'BSc Artificial Intelligence',
    org: 'Shaheed Zulfikar Ali Bhutto Institute of Science & Technology',
    body: 'Undergraduate degree in artificial intelligence — coursework across machine learning, algorithms, data structures, and software engineering, applied through hands-on builds like Samify.',
    current: true,
  },
  {
    period: 'Completed',
    place: 'Pre-university',
    role: 'A Levels',
    org: 'Advanced Level qualification',
    body: 'Advanced-level studies that fed directly into a computing and AI-focused degree.',
    current: false,
  },
  {
    period: 'Completed',
    place: 'Secondary',
    role: 'O Levels',
    org: 'Ordinary Level qualification',
    body: 'Where the interest in computers started — the foundation everything since has been built on.',
    current: false,
  },
]
