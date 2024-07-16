import { BreakpointObserver } from '@angular/cdk/layout';
import {
  Component,
  ViewChild,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task-manager';
  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  isMobile = true;
  isCollapsed =true;

  constructor(private observer: BreakpointObserver, private router: Router) {

  }

  ngOnInit() {
  }

  toggleMenu() {
    if(this.isMobile) {
      this.sidenav.toggle();
      this.isCollapsed = false;
    } else {
      this.sidenav.open();
      this.isCollapsed = !this.isCollapsed;
    }
  }

  LinkClicked() {
      this.sidenav.toggle();
      this.isCollapsed=!this.isCollapsed;
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }
}
