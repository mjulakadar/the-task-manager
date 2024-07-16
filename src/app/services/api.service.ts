import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private apiUrl = 'http://localhost:3000';

    constructor(private http: HttpClient) { }

    getPosts(): Observable<any> {
        return this.http.get(`${this.apiUrl}/posts`);
    }

    // POST
    addPost(post: any): Observable<any> {
        console.log('post: ', post)
        return this.http.post(`${this.apiUrl}/posts`, post);
    }

    // PUT
    updatePost(id: number, post: any): Observable<any> {
        console.log('updated post: ', post)
        return this.http.put(`${this.apiUrl}/posts/${id}`, post);
    }

    // DELETE
    deletePost(id: number): Observable<any> {
        return this.http.delete(`${this.apiUrl}/posts/${id}`);
    }
}