import { Component, EventEmitter, Output, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mockTasks } from '../mock-data';
import { Task } from '../../model/task';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { TaskDetails } from '../task-details/task-details';

@Component({
  selector: 'app-dashboard-content',
  imports: [MatIconModule, CommonModule, TaskDetails, TaskDetails],
  templateUrl: './dashboard-content.html',
  styleUrl: './dashboard-content.css',
})
export class DashboardContent {
  nav = signal<string>('');
  tasks = signal<Task[]>([]);
  onTaskOpen = signal<Task | null>(null);
  constructor(private route: ActivatedRoute) {}

  closeTaskDetail() {
    this.onTaskOpen.set(null);
  }

  ngOnInit(): void {
    const today = new Date();
    const todayString = today.toISOString().split('T')[0];
    this.route.queryParams.subscribe((params) => {
      this.nav.set(params['nav'] || 'today');
      switch (params['nav']) {
        case 'today':
          this.tasks.set(
            mockTasks.filter((task) => {
              if (!task) {
                return false;
              }
              const taskDateString = task.createdAt.split('T')[0];
              return taskDateString === todayString;
            })
          );
          break;
        case 'all-task':
          this.tasks.set(mockTasks);
          break;
        case 'important':
          this.tasks.set(
            mockTasks.filter((task) => {
              return task.important;
            })
          );
          break;
        case 'completed':
          this.tasks.set(
            mockTasks.filter((task) => {
              return task.completed;
            })
          );
          break;
        case 'uncompleted':
          this.tasks.set(
            mockTasks.filter((task) => {
              return !task.completed;
            })
          );
          break;
      }
    });
  }
}
