export const code_snippet_http_client_module=
`import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
`;

export const code_snippet_inject_http_client=
`import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://api.example.com';

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get('apiUrl/data');
  }
}
`;

export const code_snippet_get=
`getData(): Observable<any> {
  return this.http.get('apiUrl/data');
}
`;

export const code_snippet_post=
`postData(data: any): Observable<any> {
  return this.http.post('apiUrl/data', data);
}
`;

export const code_snippet_put=
`updateData(id: string, data: any): Observable<any> {
  return this.http.put('apiUrl/data/id', data);
}
`;

export const code_snippet_delete=
`deleteData(id: string): Observable<any> {
  return this.http.delete('apiUrl/data/id');
}
`;

export const code_snippet_observables=
`import { Observable } from 'rxjs';

const observable = new Observable(subscriber => {
  subscriber.next('Hello');
  subscriber.next('World');
  subscriber.complete();
});

observable.subscribe({
  next(value) { console.log(value); },
  error(err) { console.error('Something went wrong: ' + err); },
  complete() { console.log('Done'); }
});
`;

export const code_snippet_promises=
`const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hello, World!');
  }, 1000);
});

promise.then(value => {
  console.log(value);
}).catch(error => {
  console.error('Something went wrong: ' + error);
});
`;

export const code_snippet_map=
`import { of } from 'rxjs';
import { map } from 'rxjs/operators';

const observable = of(1, 2, 3).pipe(
  map(x => x * 2)
);

observable.subscribe(value => console.log(value)); // 2, 4, 6
`;

export const code_snippet_filter=
`import { of } from 'rxjs';
import { filter } from 'rxjs/operators';

const observable = of(1, 2, 3, 4).pipe(
  filter(x => x % 2 === 0)
);

observable.subscribe(value => console.log(value)); // 2, 4
`;

export const code_snippet_switchMap=
`import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

const observable = of('a', 'b').pipe(
  switchMap(x => of(x + '1'))
);

observable.subscribe(value => console.log(value)); // a1, b1
`;

export const code_snippet_http_with_rxjs=
`import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://api.example.com';

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get('apiUrl/data').pipe(
      map(data => data['results']),
      catchError(error => {
        console.error('Error fetching data', error);
        throw error;
      })
    );
  }
}
`;