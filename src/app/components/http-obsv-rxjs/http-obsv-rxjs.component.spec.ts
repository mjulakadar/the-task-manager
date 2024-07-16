import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpObsvRxjsComponent } from './http-obsv-rxjs.component';
import { HttpClientModule } from '@angular/common/http';
import { CodeBoxComponent } from '../reusable-components/code-box/code-box.component';
import { FormsModule } from '@angular/forms';

describe('HttpObsvRxjsComponent', () => {
  let component: HttpObsvRxjsComponent;
  let fixture: ComponentFixture<HttpObsvRxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HttpObsvRxjsComponent, CodeBoxComponent],
      imports: [HttpClientModule, FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpObsvRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
