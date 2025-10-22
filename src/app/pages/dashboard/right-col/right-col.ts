import { Component, signal } from '@angular/core';
import { mockTasks } from '../mock-data';
import { CommonModule } from '@angular/common';
import { Task } from '../../model/task';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-right-col',
  imports: [CommonModule, MatIconModule],
  templateUrl: './right-col.html',
  styleUrl: './right-col.css',
})
export class RightCol {
  tasks = signal<Task[]>([]);
  taskPercent = signal<number>(50);
  completedTaskCount = signal<number>(5);
  totalTaskCont = signal<number>(10);

  ngOnInit(): void {
    const totalTask = mockTasks.length;
    const completedCount = mockTasks.filter((task) => task.completed).length;

    const taskPercentage = (completedCount / totalTask) * 100;
    this.completedTaskCount.set(completedCount);
    this.totalTaskCont.set(totalTask);
    this.taskPercent.set(taskPercentage);
    this.tasks.set(mockTasks);
  }
}
