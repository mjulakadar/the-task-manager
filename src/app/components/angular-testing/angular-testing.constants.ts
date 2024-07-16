export const code_snipper_data_service=
`import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
`;

export const code_snippet_data_service_spec=
`import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService]
    });
    service = TestBed.inject(DataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should fetch data from the API', () => {
    const dummyData = [{ id: 1, title: 'Post 1' }, { id: 2, title: 'Post 2' }];

    service.getData().subscribe(data => {
      expect(data.length).toBe(2);
      expect(data).toEqual(dummyData);
    });

    const req = httpMock.expectOne('apiUrl');
    expect(req.request.method).toBe('GET');
    req.flush(dummyData);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
`;

export const code_snippet_post_list=
`import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-post-list',
  template: '
    <ul>
      <li *ngFor="let post of posts">{{ post.title }}</li>
    </ul>
  '
})
export class PostListComponent implements OnInit {
  posts: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      this.posts = data;
    });
  }
}
`;

export const code_snippet_post_list_spec=
`import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { DataService } from './data.service';
import { PostListComponent } from './post-list.component';

describe('PostListComponent', () => {
  let component: PostListComponent;
  let fixture: ComponentFixture<PostListComponent>;
  let dataService: DataService;
  const dummyData = [{ id: 1, title: 'Post 1' }, { id: 2, title: 'Post 2' }];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostListComponent],
      imports: [HttpClientTestingModule],
      providers: [DataService]
    }).compileComponents();

    fixture = TestBed.createComponent(PostListComponent);
    component = fixture.componentInstance;
    dataService = TestBed.inject(DataService);

    spyOn(dataService, 'getData').and.returnValue(of(dummyData));
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch and display posts', () => {
    expect(component.posts.length).toBe(2);
    expect(component.posts).toEqual(dummyData);

    const compiled = fixture.nativeElement as HTMLElement;
    const listItems = compiled.querySelectorAll('li');
    expect(listItems.length).toBe(2);
    expect(listItems[0].textContent).toContain('Post 1');
    expect(listItems[1].textContent).toContain('Post 2');
  });
});
`;

export const code_snippet_routes=
`import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';

const routes: Routes = [
  { path: 'posts', component: PostListComponent },
  { path: '', redirectTo: '/posts', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
`;

export const code_snippet_routes_spec=
`import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';

describe('AppComponent', () => {
  let location: Location;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'posts', component: PostListComponent },
          { path: '', redirectTo: '/posts', pathMatch: 'full' }
        ])
      ],
      declarations: [AppComponent, PostListComponent]
    }).compileComponents();

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);

    router.initialNavigation();
  });

  it('should navigate to "posts" route', async () => {
    router.navigate(['']).then(() => {
      expect(location.path()).toBe('/posts');
    });
  });

  it('should render PostListComponent when navigating to "posts" route', async () => {
    router.navigate(['/posts']).then(() => {
      const fixture = TestBed.createComponent(PostListComponent);
      fixture.detectChanges();
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('ul')).not.toBeNull();
    });
  });
});
`;