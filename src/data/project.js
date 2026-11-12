import marysAngelCover from '../assets/screenshots/marys-angel-cover.webp'
import digitalClockCover from '../assets/screenshots/live-digital-clock.webp'

// Summary used on the Home page. The full case study comes in Phase 4.
export const featuredProject = {
  slug: 'marys-angel',
  link: 'https://web-mabh-system.vercel.app/', // live system
  label: 'Capstone Project',
  title: 'An Automated Web and Mobile Appointment System for Mary’s Angel Birthing Home',
  location: 'Taysan, Legazpi City',
  summary:
    'A centralized platform for prenatal and postnatal appointment management. Patients can manage their appointments, while clinic staff can manage patient information, appointments, maternity records, and other clinic operations.',
  // Selected from the planned feature list. Implementation status is shown on the case study page.
  highlights: [
    'Prenatal and postnatal appointment scheduling',
    'Appointment rescheduling',
    'Centralized maternity health records',
    'Automated reminder notifications',
    'Web-based administration',
    'Mobile application',
  ],
  status: '[ADD PROJECT STATUS]',
  cover: marysAngelCover, // Landing page screenshot
}

// Other projects. While this list is empty, the "View more projects" link on the Home page stays hidden.
// Add one object per project, for example:
// import todoCover from '../assets/screenshots/todo-app.webp'
// {
//   title: 'To-do List App',
//   summary: 'One or two sentences about what it does and who it is for.',
//   tags: ['React', 'Tailwind CSS'],
//   cover: todoCover,                         // or null
//   link: 'https://your-demo.vercel.app',     // optional live demo
//   github: 'https://github.com/rhyanorosco/repo-name', // optional
// },
export const moreProjects = [
  {
    title: 'Live Digital Clock',
    summary:
      'A digital clock that shows the current time and updates every second. It has Start and Stop buttons to pause the clock, and lets you switch between 12-hour and 24-hour format.',
    tags: ['React', 'Tailwind CSS', 'Vite'],
    cover: digitalClockCover,
    github: 'https://github.com/rhyanorosco/Live-Digital-Clock',
  },
]
