import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularTestingComponent } from './angular-testing.component';
import { CodeBoxComponent } from '../reusable-components/code-box/code-box.component';

describe('AngularTestingComponent', () => {
  let component: AngularTestingComponent;
  let fixture: ComponentFixture<AngularTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AngularTestingComponent, CodeBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
