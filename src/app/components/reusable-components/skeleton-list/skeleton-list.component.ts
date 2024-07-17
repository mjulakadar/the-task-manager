import { Component } from '@angular/core';

@Component({
  selector: 'app-skeleton-list',
  templateUrl: './skeleton-list.component.html',
  styleUrl: './skeleton-list.component.css'
})
export class SkeletonListComponent {
  items: string[] = ['', '', '', '', '', ''];
}
