import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularPipesComponent } from './angular-pipes.component';
import { CodeBoxComponent } from '../reusable-components/code-box/code-box.component';
import { ImpureFilterPipe } from '../../pipes/impure-pipes/impure-filter.pipe';

describe('AngularPipesComponent', () => {
  let component: AngularPipesComponent;
  let fixture: ComponentFixture<AngularPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AngularPipesComponent, CodeBoxComponent, ImpureFilterPipe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
