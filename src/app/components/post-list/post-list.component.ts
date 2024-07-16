import { Component, OnInit } from '@angular/core';
import { TestDataService } from '../../services/test.service';

@Component({
  selector: 'app-post-list',
  template: `
    <ul>
      <li *ngFor="let post of posts">{{ post.title }}</li>
    </ul>
  `
})
export class PostListComponent implements OnInit {
  posts: any[] = [];

  constructor(private dataService: TestDataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      this.posts = data;
    });
  }
}
