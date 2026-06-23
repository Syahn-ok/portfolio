export const skills = {
  Frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  Backend: ['Node.js', 'Express', 'GraphQL', 'REST APIs', 'Socket.io'],
  Database: ['MongoDB', 'PostgreSQL', 'Redis', 'Firebase', 'Supabase'],
  Tools: ['Git', 'Docker', 'AWS', 'Vite', 'Figma'],
}

export const projects = [
  {
    id: 1,
    title: 'NeuralChat AI',
    description:
      'Real-time AI chat platform with streaming responses, multi-turn context memory, and user authentication. Built with React, Node.js, and the OpenAI API.',
    tags: ['React', 'Node.js', 'OpenAI', 'WebSocket'],
    accent: '#8355F6',
    links: { github: '#', live: '#' },
  },
  {
    id: 2,
    title: 'DevFlow Dashboard',
    description:
      'Developer productivity hub aggregating GitHub stats, CI/CD pipelines, and task boards. Integrates five external APIs into one unified workspace.',
    tags: ['Next.js', 'TypeScript', 'REST API', 'MongoDB'],
    accent: '#F97316',
    links: { github: '#', live: '#' },
  },
  {
    id: 3,
    title: 'ShopSphere',
    description:
      'Full-stack e-commerce platform with cart management, Stripe payments, real-time inventory, and a headless admin dashboard.',
    tags: ['React', 'Express', 'PostgreSQL', 'Stripe'],
    accent: '#10B981',
    links: { github: '#', live: '#' },
  },
]

export const awards = [
  {
    id: 1,
    title: 'Hackathon Champion',
    event: 'Full Stack Developer Track',
    year: '2024',
    description:
      'First place for building a real-time collaborative code editor with AI-assisted debugging under a 24-hour deadline.',
  },
  {
    id: 2,
    title: 'React Learner Award',
    event: 'React Developer Program',
    year: '2024',
    description:
      'Top performer in the React Developer certification for outstanding project quality and advanced component architecture.',
  },
  {
    id: 3,
    title: 'Best UI/UX',
    event: 'College Tech Fest',
    year: '2023',
    description:
      'Recognised for designing the most polished and accessible web application in a competitive inter-department sprint.',
  },
]
