import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingNavigationComponent } from './routing-navigation.component';
import { AppRoutingModule } from '../../app-routing.module';
import { CodeBoxComponent } from '../reusable-components/code-box/code-box.component';

describe('RoutingNavigationComponent', () => {
  let component: RoutingNavigationComponent;
  let fixture: ComponentFixture<RoutingNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppRoutingModule],
      declarations: [RoutingNavigationComponent, CodeBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
