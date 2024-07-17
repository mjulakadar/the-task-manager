import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AngularBasicsComponent } from './components/angular-basics/angular-basics.component';
import { AngularComponentsComponent } from './components/angular-components/angular-components.component';
import { AngularDirectivesComponent } from './components/angular-directives/angular-directives.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { AngularFormsComponent } from './components/angular-forms/angular-forms.component';
import { HomeComponent } from './components/home/home.component';

//directives
import { HighlightDirective } from './directives/highlight.directive';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatChipsModule} from '@angular/material/chips';
import {MatBadgeModule} from '@angular/material/badge';

import { ServicesDiComponent } from './components/services-di/services-di.component';
import { CodeBoxComponent } from './components/reusable-components/code-box/code-box.component';
import { RoutingNavigationComponent } from './components/routing-navigation/routing-navigation.component';
import { ChildRoute1Component } from './components/child-route-1/child-route-1.component';
import { ChildRoute2Component } from './components/child-route-2/child-route-2.component';
import { HttpObsvRxjsComponent } from './components/http-obsv-rxjs/http-obsv-rxjs.component';
import { AngularPipesComponent } from './components/angular-pipes/angular-pipes.component';
import { ImpureFilterPipe } from './pipes/impure-pipes/impure-filter.pipe';
import { AngularTestingComponent } from './components/angular-testing/angular-testing.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { CustomDatePipe } from './pipes/custom-date.pipe';
import { TypingAnimationDirective } from './directives/typing-animation.directive';
import { CurrentTimeDirective } from './directives/current-time.directive';
import { UserFlowComponent } from './user-flow/user-flow.component';
import { RecordingDirective } from './directives/recording.directive';
import { SkeletonListComponent } from './components/reusable-components/skeleton-list/skeleton-list.component';

@NgModule({
  declarations: [
    AppComponent,

    //Pipes...
    ImpureFilterPipe,
    CustomDatePipe,

    //Directives...
    TypingAnimationDirective,
    CurrentTimeDirective,
    HighlightDirective,
    RecordingDirective,

    //Components...
    AngularBasicsComponent,
    AngularComponentsComponent,
    AngularDirectivesComponent,
    DataBindingComponent,
    AngularFormsComponent,
    HomeComponent,    
    ServicesDiComponent,
    CodeBoxComponent,
    RoutingNavigationComponent,
    ChildRoute1Component,
    ChildRoute2Component,
    HttpObsvRxjsComponent,
    AngularPipesComponent,
    AngularTestingComponent,
    PostListComponent,
    UserFlowComponent,
    SkeletonListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    //Material UI Modules
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatChipsModule,
    MatBadgeModule,

    //Angular Modules
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
