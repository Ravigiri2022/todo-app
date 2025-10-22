import { Task } from '../model/task'; // Adjust the import path as needed

// Helper function to create dates and keep them organized
const today = new Date();
const tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
const yesterday = new Date();
yesterday.setDate(today.getDate() - 1);
const nextWeek = new Date();
nextWeek.setDate(today.getDate() + 7);

export const mockTasks: Task[] = [
  // 1. A critical, incomplete task due tomorrow
  {
    id: 'task-001',
    name: 'Prepare quarterly sales report',
    description: 'Compile and format Q4 sales data for the executive meeting.',
    date: tomorrow.toISOString(),
    completed: false,
    important: true,
    category: 'Sales',
    createdAt: today.toISOString(),
  },

  // 2. A completed, important task from the past
  {
    id: 'task-002',
    name: 'Review Q3 performance metrics',
    description: 'Analyze key metrics and prepare a summary of last quarter’s performance.',
    date: yesterday.toISOString(),
    completed: true,
    important: true,
    category: 'Reporting',
    createdAt: yesterday.toISOString(),
    updatedAt: yesterday.toISOString(),
  },

  // 3. A general, incomplete task with no category
  {
    id: 'task-003',
    name: 'Schedule dentist appointment',
    completed: false,
    important: false,
    category: 'Reporting',
    createdAt: today.toISOString(),
  },

  // 4. An incomplete, unimportant task for next week
  {
    id: 'task-004',
    name: 'Plan team-building event',
    description: 'Gather ideas and book a location for the end-of-year team outing.',
    date: nextWeek.toISOString(),
    completed: false,
    important: false,
    category: 'Administrative',
    createdAt: today.toISOString(),
  },

  // 5. A completed, unimportant task
  {
    id: 'task-005',
    name: 'Respond to customer inquiry',
    completed: true,
    important: false,
    category: 'Customer Support',
    createdAt: yesterday.toISOString(),
    updatedAt: today.toISOString(),
  },

  // 6. A completed, important task with a category
  {
    id: 'task-006',
    name: 'Deploy database migration script',
    description: 'Run the production database schema updates.',
    completed: true,
    important: true,
    category: 'Development',
    createdAt: yesterday.toISOString(),
    updatedAt: yesterday.toISOString(),
  },

  // 7. A pending development task for next week
  {
    id: 'task-007',
    name: 'Refactor user authentication module',
    description: 'Improve the code quality and security of the authentication service.',
    date: nextWeek.toISOString(),
    completed: false,
    important: false,
    category: 'Development',
    createdAt: today.toISOString(),
  },

  // 8. An important task with no due date
  {
    id: 'task-008',
    name: 'Finalize project proposal',
    completed: false,
    important: true,
    category: 'Project Management',
    createdAt: today.toISOString(),
  },

  // 9. A miscellaneous completed task
  {
    id: 'task-009',
    name: 'Renew software license',
    completed: true,
    important: false,
    category: 'Administrative',
    createdAt: yesterday.toISOString(),
  },

  // 10. A task with a specific due date and description
  {
    id: 'task-010',
    name: 'Update documentation for API endpoints',
    description: 'Ensure all API endpoints are well-documented for new developers.',
    date: '2025-10-25T17:00:00.000Z',
    completed: false,
    important: false,
    category: 'Documentation',
    createdAt: today.toISOString(),
  },
];
