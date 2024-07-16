import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularFormsComponent } from './angular-forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { DateAdapter, MatOption, provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepicker, MatDatepickerModule, MatDatepickerToggle } from '@angular/material/datepicker';

describe('AngularFormsComponent', () => {
  let component: AngularFormsComponent;
  let fixture: ComponentFixture<AngularFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, MatFormField, MatDatepickerModule, MatLabel, MatOption, MatDatepicker, MatDatepickerToggle],
      declarations: [AngularFormsComponent],
      providers:[DateAdapter, provideNativeDateAdapter()]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AngularFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
