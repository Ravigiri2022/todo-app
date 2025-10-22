import { Component, effect, EventEmitter, Input, Output, signal } from '@angular/core';
import { Task } from '../../model/task';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { AddTask } from '../add-task/add-task';

@Component({
  selector: 'app-task-details',
  imports: [CommonModule, MatIconModule, AddTask],
  templateUrl: './task-details.html',
  styleUrl: './task-details.css',
})
export class TaskDetails {
  @Output() close = new EventEmitter<void>();
  @Input() task!: Task | null;

  updateTask = signal(false);

  // constructor() {
  //   effect(() => {
  //     if (!this.updateTask()) {
  //       const popup = document.getElementById('popup'); // or use a template ref
  //       popup?.classList.remove('move-left');
  //       void popup?.offsetWidth;
  //       popup?.classList.add('move-right');
  //     } else {
  //       const popup = document.getElementById('popup'); // or use a template ref
  //       popup?.classList.remove('move-right');
  //       void popup?.offsetWidth;
  //       popup?.classList.add('move-left');
  //     }
  //   });
  // }

  onClose() {
    const popupz = document.getElementById('popupz'); // or use a template ref
    const bgpopup = document.getElementById('bgpopup');
    if (!popupz || !bgpopup) return;

    popupz.classList.remove('bottom-slide-up');
    bgpopup.classList.remove('fade-in');

    // Add fade-out class
    popupz.classList.add('bottom-slide-down');
    bgpopup.classList.add('fade-out');

    // Wait for animation to finish before removing
    setTimeout(() => {
      this.close.emit();
    }, 200); // match your fade-out duration
  }

  openUpdateTask() {
    const popup = document.getElementById('popupz'); // or use a template ref

    if (!this.updateTask()) {
      popup?.classList.remove('move-right', 'move-left');
      popup?.classList.add('move-left');
      // Wait for animation to finish before removing
      setTimeout(() => {
        this.updateTask.set(!this.updateTask());
      }, 200); // match your fade-out duration
    } else if (this.updateTask()) {
      popup?.classList.remove('move-left', 'move-right');
      popup?.classList.add('move-right');
      debugger;
      setTimeout(() => {
        this.updateTask.set(!this.updateTask());
      }, 200); // match your fade-out duration
    }
  }
}
