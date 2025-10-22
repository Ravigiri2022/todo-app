import { CommonModule, DatePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AddTask } from '../add-task/add-task';
import { Notification } from '../notification/notification';

@Component({
  selector: 'app-dashboard-nav',
  imports: [DatePipe, MatIconModule, AddTask, CommonModule, Notification],
  templateUrl: './dashboard-nav.html',
  styleUrl: './dashboard-nav.css',
})
export class DashboardNav {
  today = new Date();
  showTodoPopup = signal(false);
  showNotification = signal(false);

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
}
