import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';
import { CodeBoxComponent } from '../reusable-components/code-box/code-box.component';
import { MatFormField, MatFormFieldControl, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatList, MatListItem } from '@angular/material/list';
import { TypingAnimationDirective } from '../../directives/typing-animation.directive';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInput, MatInputModule } from '@angular/material/input';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, 
        MatInputModule,
        MatFormField, MatFormFieldModule, BrowserAnimationsModule, MatLabel, MatIcon, MatList, MatListItem ,FormsModule],
      declarations: [HomeComponent, CodeBoxComponent, TypingAnimationDirective, MatFormFieldControl]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
