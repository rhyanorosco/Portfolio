import { Database, Monitor, Server, Wrench } from 'lucide-react'

// Areas from the portfolio brief. No proficiency levels on purpose.
export const focusAreas = [
  'System Analysis and Design',
  'Web Development',
  'Mobile Application Development',
  'Database Management',
  'UI/UX Design',
  'System Documentation',
  'Software Testing',
]

// Only technologies Rhyan listed. Remove any that don't apply; add new ones the same way.
export const skillGroups = [
  { title: 'Frontend', icon: Monitor, items: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'] },
  { title: 'Backend', icon: Server, items: ['PHP', 'NestJS'] },
  { title: 'Database', icon: Database, items: ['MySQL', 'Supabase'] },
  { title: 'Tools', icon: Wrench, items: ['Visual Studio Code', 'Git', 'GitHub', 'XAMPP', 'Vite'] },
]
