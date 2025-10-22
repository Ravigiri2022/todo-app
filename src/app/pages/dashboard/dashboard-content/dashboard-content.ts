import { Component, signal, effect, computed } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mockTasks } from '../mock-data';
import { Task } from '../../model/task';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { TaskDetails } from '../task-details/task-details';

@Component({
  selector: 'app-dashboard-content',
  standalone: true,
  imports: [MatIconModule, CommonModule, TaskDetails],
  templateUrl: './dashboard-content.html',
  styleUrls: ['./dashboard-content.css'],
})
export class DashboardContent {
  nav = signal<string>('');
  tasks = signal<Task[]>([]);
  searchData = signal<string>('');
  onTaskOpen = signal<Task | null>(null);
  sortDate = signal<boolean | null>(null);

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const today = new Date();
    const todayString = today.toISOString().split('T')[0];

    this.route.queryParams.subscribe((params) => {
      const navParam = params['nav'] || 'today';
      const searchParam = (params['search'] || '').toLowerCase();

      this.nav.set(navParam);
      this.searchData.set(searchParam);
      let filteredTasks: Task[] = [];
      switch (navParam) {
        case 'today':
          filteredTasks = mockTasks.filter((task) => {
            const taskDateString = task.createdAt.split('T')[0];
            return taskDateString === todayString;
          });
          break;
        case 'all-task':
          filteredTasks = mockTasks;
          break;
        case 'important':
          filteredTasks = mockTasks.filter((task) => task.important);
          break;
        case 'completed':
          filteredTasks = mockTasks.filter((task) => task.completed);
          break;
        case 'uncompleted':
          filteredTasks = mockTasks.filter((task) => !task.completed);
          break;
      }
      if (searchParam) {
        filteredTasks = filteredTasks.filter(
          (task) =>
            task.name.toLowerCase().includes(searchParam) ||
            task.description?.toLowerCase().includes(searchParam)
        );
      }
      this.tasks.set(filteredTasks);
    });
  }
  onSortDateChange() {
    const current = this.sortDate();
    if (current === null) {
      this.sortDate.set(true); // ascending
    } else if (current === true) {
      this.sortDate.set(false); // descending
    } else {
      this.sortDate.set(null); // off / original order
    }
  }
  sortedTasks = computed(() => {
    const list = this.tasks();
    const sortState = this.sortDate();

    if (sortState === null) return list;
    return [...list].sort((a, b) => {
      const aTime = new Date(a.createdAt).getTime();
      const bTime = new Date(b.createdAt).getTime();
      return sortState ? aTime - bTime : bTime - aTime;
    });
  });

  closeTaskDetail() {
    this.onTaskOpen.set(null);
  }
}
