import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { PostListComponent } from './post-list.component';
import { TestDataService } from '../../services/test.service';

describe('PostListComponent', () => {
  let component: PostListComponent;
  let fixture: ComponentFixture<PostListComponent>;
  let dataService: TestDataService;
  const dummyData = [{ id: 1, title: 'Post 1' }, { id: 2, title: 'Post 2' }];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostListComponent],
      imports: [HttpClientTestingModule],
      providers: [TestDataService]
    }).compileComponents();

    fixture = TestBed.createComponent(PostListComponent);
    component = fixture.componentInstance;
    dataService = TestBed.inject(TestDataService);

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
