import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularBasicsComponent } from './angular-basics.component';
import { CodeBoxComponent } from '../reusable-components/code-box/code-box.component';

describe('AngularBasicsComponent', () => {
  let component: AngularBasicsComponent;
  let fixture: ComponentFixture<AngularBasicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AngularBasicsComponent, CodeBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
