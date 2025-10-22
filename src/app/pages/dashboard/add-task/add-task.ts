import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../model/task';

@Component({
  selector: 'app-add-task',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-task.html',
  styleUrl: './add-task.css',
})
export class AddTask {
  task: Task = {
    id: '',
    name: '',
    description: '',
    date: '',
    completed: false,
    important: false,
    category: '',
    createdAt: new Date().toISOString(),
  };
  @Input() title!: string;
  @Input() newTask?: Task | null;
  @Output() taskAdded = new EventEmitter<Task>();

  @Output() close = new EventEmitter<void>();

  // Call this method to close the popup
  closeForm() {
    const popup = document.getElementById('popup'); // or use a template ref
    const bgpopup = document.getElementById('bg-popup');
    if (!popup || !bgpopup) return;

    if (this.title === 'new') {
      popup.classList.remove('bottom-slide-up');
      bgpopup.classList.remove('fade-in');

      // Add fade-out class
      popup.classList.add('bottom-slide-down');
      bgpopup.classList.add('fade-out');
    } else {
      popup.classList.remove('move-right');
      bgpopup.classList.remove('fade-in');

      // Add fade-out class
      popup.classList.add('move-left');
      bgpopup.classList.add('fade-out');
    }

    // Wait for animation to finish before removing
    setTimeout(() => {
      this.close.emit();
    }, 200); // match your fade-out duration
  }

  ngOnInit() {
    if (this.title === 'update' && this.newTask) {
      this.task = this.newTask;
      const popup = document.getElementById('popup'); // or use a template ref

      popup?.classList.remove('bottom-slide-up');
      popup?.classList.add('move-right');
    }
  }

  onSubmit() {
    if (!this.task.name.trim()) return;

    const newTask: Task = {
      ...this.task,
      id: crypto.randomUUID(), // ✅ Generate unique ID
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    // this.taskAdded.emit(newTask);
    this.resetForm();
    this.closeForm();
  }
  resetForm() {
    this.task = {
      id: '',
      name: '',
      description: '',
      date: '',
      completed: false,
      important: false,
      category: '',
      createdAt: new Date().toISOString(),
    };
  }
}
