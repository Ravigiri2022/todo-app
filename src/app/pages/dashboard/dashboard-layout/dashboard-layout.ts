import { Component, signal } from '@angular/core';
import { LeftCol } from '../left-col/left-col';
import { RouterOutlet } from '@angular/router';
import { DashboardNav } from '../dashboard-nav/dashboard-nav';
import { RightCol } from '../right-col/right-col';

@Component({
  selector: 'app-dashboard-layout',
  imports: [LeftCol, RouterOutlet, DashboardNav, RightCol],
  templateUrl: './dashboard-layout.html',
  styleUrl: './dashboard-layout.css',
})
export class DashboardLayout {
  hide = signal(true);

  onClick() {
    this.hide.set(!this.hide());
  }
}
