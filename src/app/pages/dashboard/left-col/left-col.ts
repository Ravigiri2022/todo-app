import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-left-col',
  imports: [RouterModule, MatIconModule],
  templateUrl: './left-col.html',
  styleUrl: './left-col.css',
})
export class LeftCol {
  @Input() close: boolean = false;

  @Output() d_toggle = new EventEmitter<void>();

  onClick() {
    this.d_toggle.emit();
  }
}
