export interface Task {
  id: string; // Unique identifier
  name: string; // Task name/title
  description?: string; // Task details (optional)
  date?: string; // Due date (ISO string, optional)
  completed: boolean; // Completion status
  important: boolean; // Starred/important status
  category?: string; // Category/tag (optional)
  createdAt: string; // Creation timestamp (ISO string)
  updatedAt?: string; // Last update timestamp (optional)
}
