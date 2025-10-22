import { CommonModule, DatePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AddTask } from '../add-task/add-task';
import { Notification } from '../notification/notification';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-nav',
  imports: [DatePipe, MatIconModule, AddTask, CommonModule, Notification, FormsModule],
  templateUrl: './dashboard-nav.html',
  styleUrl: './dashboard-nav.css',
})
export class DashboardNav {
  today = new Date();
  showTodoPopup = signal(false);
  showNotification = signal(false);
  searchData = '';

  onAddTodo() {
    this.showTodoPopup.set(true);
  }
  closeTodoPopup() {
    this.showTodoPopup.set(false); // Close popup
  }
  onNotification() {
    this.showNotification.set(true);
  }
  closeNotification() {
    this.showNotification.set(false); // Close popup
  }
  constructor(private router: Router, private route: ActivatedRoute) {}

  onSubmit(event: any) {
    const searchParam = this.route.snapshot.data['search'];
    if (searchParam === this.searchData) return;
    event.preventDefault();
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { search: this.searchData || null },
      queryParamsHandling: 'merge', // keep other params if any
    });
  }
}
