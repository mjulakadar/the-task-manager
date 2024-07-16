import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TaskService {
    private apiUrl = 'http://localhost:3000';

    constructor(private http: HttpClient) { }

    getTasks(): Observable<any> {
        return this.http.get(`${this.apiUrl}/tasks`);
    }

    // POST
    addTask(task: any): Observable<any> {
        console.log('post: ', task)
        return this.http.post(`${this.apiUrl}/tasks`, task);
    }

    // PUT
    updateTask(id: string, task: any): Observable<any> {
        console.log('updated post: ', task)
        return this.http.put(`${this.apiUrl}/tasks/${id}`, task);
    }

    // DELETE
    deleteTask(id: string): Observable<any> {
        return this.http.delete(`${this.apiUrl}/tasks/${id}`);
    }
}