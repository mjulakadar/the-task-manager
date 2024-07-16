import { Component, OnInit } from '@angular/core';
import { code_snippet_delete, code_snippet_filter, code_snippet_get, code_snippet_http_client_module, code_snippet_http_with_rxjs, code_snippet_inject_http_client, code_snippet_map, code_snippet_observables, code_snippet_post, code_snippet_promises, code_snippet_put, code_snippet_switchMap } from './http-obsv-rxjs.constants';
import { ApiService } from '../../services/api.service';
import { Post } from '../../models/post';

@Component({
  selector: 'app-http-obsv-rxjs',
  templateUrl: './http-obsv-rxjs.component.html',
  styleUrl: './http-obsv-rxjs.component.css'
})
export class HttpObsvRxjsComponent implements OnInit {
  _code_snippet_http_client_module = code_snippet_http_client_module;
  _code_snippet_inject_http_client = code_snippet_inject_http_client;
  _code_snippet_get = code_snippet_get;
  _code_snippet_post = code_snippet_post;
  _code_snippet_put = code_snippet_put;
  _code_snippet_delete = code_snippet_delete;
  _code_snippet_observables = code_snippet_observables;
  _code_snippet_promises = code_snippet_promises;

  _code_snippet_map = code_snippet_map;
  _code_snippet_filter = code_snippet_filter;
  _code_snippet_switchMap = code_snippet_switchMap;

  _code_snippet_http_with_rxjs = code_snippet_http_with_rxjs;

  posts: Post[] = [];
  newPost = { title: '', author: '' };
  updatedPost = { id: 1, title: '', author: '' };

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.fetchPosts();
  }

  fetchPosts(): void {
    this.apiService.getPosts().subscribe(data => {
      this.posts = data;
    })
  }

  addPost(): void {
    if (this.newPost.author !== '' && this.newPost.title !== '') {
      this.apiService.addPost(this.newPost).subscribe(post => {
        this.posts.push(post);
      });
    }
  }

  updatePost(): void {
    if (this.updatedPost.id > 0 && this.updatedPost.title && this.updatedPost.author) {
      this.apiService.updatePost(this.updatedPost.id, this.updatedPost).subscribe(post => {
        const index = this.posts.findIndex(p => p.id === post.id);
        if (index !== -1) {
          this.posts[index] = post;
        }
      });
    }
  }

  deletePost(id: number): void {
    if (id > 0) {
      this.apiService.deletePost(id).subscribe(() => {
        this.posts = this.posts.filter(post => post.id !== id);
      });
    }
  }
}
