import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesDiComponent } from './services-di.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatFormFieldControl, MatLabel } from '@angular/material/form-field';

describe('ServicesDiComponent', () => {
  let component: ServicesDiComponent;
  let fixture: ComponentFixture<ServicesDiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule, MatFormField, MatLabel],
      declarations: [ServicesDiComponent, MatFormFieldControl]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesDiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
