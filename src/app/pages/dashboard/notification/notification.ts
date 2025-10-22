import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-notification',
  imports: [CommonModule],
  templateUrl: './notification.html',
  styleUrl: './notification.css',
})
export class Notification {
  @Output() close = new EventEmitter<void>();
  closeForm() {
    const popdown = document.getElementById('popdown'); // or use a template ref
    const bgpopdown = document.getElementById('bgpopdown'); // or use a template ref

    if (!popdown || !bgpopdown) return;
    popdown.classList.remove('top-slide-down');
    bgpopdown.classList.remove('fade-in');

    popdown.classList.add('top-slide-up');
    bgpopdown.classList.add('fade-out');

    setTimeout(() => {
      this.close.emit();
    }, 200); // match your fade-out duration
  }
}
