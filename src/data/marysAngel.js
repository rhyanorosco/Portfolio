// Content for the Mary's Angel case study page.
// Anything in [BRACKETS] is a placeholder.
// Feature status: 'implemented' | 'in-progress' | 'planned' | 'unconfirmed'
// Technology status: 'confirmed' | 'planned' | 'unconfirmed'
// Change every 'unconfirmed' to the real status before publishing.

import { featuredProject } from './project'

export const caseStudy = {
  ...featuredProject,

  overview: {
    summary:
      'The system is designed to improve prenatal and postnatal appointment management for Mary’s Angel Birthing Home. It provides a centralized platform where patients can manage their appointments, while clinic staff manage patient information, appointments, maternity records, and other clinic operations.',
    facts: [
      { term: 'Client', value: 'Mary’s Angel Birthing Home' },
      { term: 'Location', value: 'Taysan, Legazpi City' },
      { term: 'Platform', value: 'Web and mobile application' },
      { term: 'Users', value: 'Patients and clinic staff' },
      { term: 'Project type', value: '[ADD — e.g. Capstone project]' },
      { term: 'Team', value: '[ADD — e.g. Team of 4 / Solo]' },
      { term: 'Timeline', value: '[ADD — e.g. Aug 2025 – Present]' },
    ],
  },

  problem: {
    context:
      'Mary’s Angel Birthing Home handles prenatal and postnatal appointments for its patients, along with the maternity records connected to each visit.',
    current: '[ADD HOW THE CLINIC CURRENTLY HANDLES APPOINTMENTS AND RECORDS — e.g. logbook, phone calls, paper forms]',
    // Add only problems your study actually identified. Candidates from the brief:
    // manual appointment process, duplicate time slots, scattered or paper-based records,
    // difficulty sending reminders, slow access to patient information.
    points: ['[ADD THE PROBLEMS IDENTIFIED IN YOUR STUDY]'],
  },

  // Problem → System feature → Outcome
  solutionMap: [
    { problem: 'Managing appointments', feature: 'Online appointment scheduling', outcome: 'Patients can schedule appointments more conveniently.' },
    { problem: 'Organizing maternity records', feature: 'Centralized maternity records', outcome: 'Staff can organize and access patient information more efficiently.' },
    { problem: 'Sending appointment reminders', feature: 'Automated notifications', outcome: 'Patients can receive appointment reminders.' },
    { problem: '[ADD PROBLEM]', feature: '[ADD FEATURE]', outcome: '[ADD OUTCOME]' },
  ],

  objectives: {
    general:
      'To develop an automated web and mobile appointment system that improves prenatal and postnatal appointment management for Mary’s Angel Birthing Home.',
    specific: ['[ADD SPECIFIC OBJECTIVE FROM YOUR PAPER]', '[ADD SPECIFIC OBJECTIVE FROM YOUR PAPER]'],
  },

  featureGroups: [
    {
      title: 'Appointments',
      items: [
        { name: 'Prenatal and postnatal appointment scheduling', description: 'Patients book prenatal and postnatal visits through the system.', status: 'unconfirmed' },
        { name: 'Appointment rescheduling', description: 'Patients can move an existing appointment to another schedule.', status: 'unconfirmed' },
        { name: 'Automated reminder notifications', description: 'Patients receive reminders about upcoming appointments.', status: 'unconfirmed' },
      ],
    },
    {
      title: 'Records and clinic operations',
      items: [
        { name: 'Centralized maternity health records', description: 'Staff keep patients’ maternity records in one place.', status: 'unconfirmed' },
        { name: 'Medical document / image processing', description: '[ADD ONE-SENTENCE DESCRIPTION]', status: 'unconfirmed' },
        { name: 'Inventory management', description: 'Staff manage the clinic’s inventory.', status: 'unconfirmed' },
        { name: 'Web-based administration', description: 'Clinic staff manage appointments, patients, and records from a web dashboard.', status: 'unconfirmed' },
      ],
    },
    {
      title: 'Access and platform',
      items: [
        { name: 'Mobile application', description: 'Access to the system from a mobile device.', status: 'unconfirmed' },
        { name: 'Biometric authentication', description: 'Sign-in using biometric verification.', status: 'unconfirmed' },
        { name: 'E-wallet payment', description: 'Payments made through an e-wallet.', status: 'unconfirmed' },
        { name: 'AI assistant', description: '[ADD ONE-SENTENCE DESCRIPTION]', status: 'unconfirmed' },
      ],
    },
  ],

  role: {
    summary: '[ADD 2–3 SENTENCES ABOUT YOUR CONTRIBUTION]',
    // Add only what you personally did. Options: System analysis, Requirements analysis,
    // System design, UI design, Database design, Development, Testing, Documentation,
    // UML diagrams, System architecture
    areas: [],
  },

  technologies: [
    { name: 'React', category: 'Frontend', status: 'unconfirmed' },
    { name: 'JavaScript', category: 'Frontend', status: 'unconfirmed' },
    { name: 'Tailwind CSS', category: 'Frontend', status: 'unconfirmed' },
    { name: 'NestJS', category: 'Backend', status: 'unconfirmed' },
    { name: 'Supabase', category: 'Database', status: 'unconfirmed' },
    { name: 'Clerk', category: 'Auth', status: 'unconfirmed' },
    { name: '[ADD MOBILE FRAMEWORK]', category: 'Mobile', status: 'unconfirmed' },
    { name: 'SMS [ADD PROVIDER]', category: 'Integration', status: 'unconfirmed' },
    { name: 'E-wallet [ADD PROVIDER]', category: 'Integration', status: 'unconfirmed' },
    { name: 'Biometric authentication', category: 'Integration', status: 'unconfirmed' },
  ],

  // Import images from src/assets/diagrams/ and set `image`.
  diagrams: [
    { title: 'Conceptual Design', caption: '[ADD SHORT EXPLANATION]', image: null },
    { title: 'System Design', caption: '[ADD SHORT EXPLANATION]', image: null },
    { title: 'System Architecture', caption: '[ADD SHORT EXPLANATION]', image: null },
    { title: 'Class Diagram', caption: '[ADD SHORT EXPLANATION]', image: null },
    { title: 'Sequence Diagram', caption: '[ADD SHORT EXPLANATION]', image: null },
    { title: 'Package Diagram', caption: '[ADD SHORT EXPLANATION]', image: null },
    { title: 'Deployment Diagram', caption: '[ADD SHORT EXPLANATION]', image: null },
    { title: 'Network Infrastructure', caption: '[ADD SHORT EXPLANATION]', image: null },
  ],

  // Import images from src/assets/screenshots/ and set `image`.
  screens: [
    { title: 'Login screen', image: null },
    { title: 'Patient dashboard', image: null },
    { title: 'Appointment scheduling', image: null },
    { title: 'Appointment details', image: null },
    { title: 'Patient profile', image: null },
    { title: 'Maternity records', image: null },
    { title: 'Admin dashboard', image: null },
    { title: 'Inventory', image: null },
    { title: 'Mobile application', image: null, fit: 'contain' },
    { title: 'Payment', image: null },
    { title: 'Notification system', image: null },
    { title: 'Other screen', image: null },
  ],

  // Fill in `issue` and `approach` in your own words.
  challenges: [
    { title: 'Appointment scheduling', issue: '', approach: '' },
    { title: 'Duplicate time-slot prevention', issue: '', approach: '' },
    { title: 'SMS notifications', issue: '', approach: '' },
    { title: 'Medical image processing', issue: '', approach: '' },
    { title: 'Authentication', issue: '', approach: '' },
    { title: 'Payment integration', issue: '', approach: '' },
    { title: 'Data management', issue: '', approach: '' },
  ],

  process: [
    { title: 'Problem Identification', description: 'Identifying the appointment and record-management needs of the birthing home.' },
    { title: 'Requirements Gathering', description: 'Collecting what patients and clinic staff need from the system.' },
    { title: 'System Analysis', description: 'Studying the current process and defining what the system must do.' },
    { title: 'System Design', description: 'Planning the architecture, database, and user interface.' },
    { title: 'Development', description: 'Building the web and mobile applications.' },
    { title: 'Testing', description: 'Checking that each feature works as intended.' },
    { title: 'Evaluation', description: 'Reviewing the system against its objectives.' },
    { title: 'Improvement', description: 'Refining the system based on the evaluation.' },
  ],

  result: {
    status: featuredProject.status,
    summary: '[ADD WHAT IS WORKING NOW AND WHAT HAS BEEN COMPLETED]',
    next: '[ADD NEXT STEPS]',
  },
}

// Order of sections on the page (used by the "On this page" index).
export const caseSections = [
  { id: 'overview', label: 'Overview' },
  { id: 'problem', label: 'Problem' },
  { id: 'solution', label: 'Solution' },
  { id: 'objectives', label: 'Objectives' },
  { id: 'features', label: 'Key features' },
  { id: 'role', label: 'My role' },
  { id: 'technologies', label: 'Technologies' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'screens', label: 'Screenshots' },
  { id: 'challenges', label: 'Challenges' },
  { id: 'process', label: 'Process' },
  { id: 'status', label: 'Current status' },
]
