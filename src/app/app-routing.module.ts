import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularBasicsComponent } from './components/angular-basics/angular-basics.component';
import { AngularComponentsComponent } from './components/angular-components/angular-components.component';
import { AngularDirectivesComponent } from './components/angular-directives/angular-directives.component';
import { AngularFormsComponent } from './components/angular-forms/angular-forms.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesDiComponent } from './components/services-di/services-di.component';
import { RoutingNavigationComponent } from './components/routing-navigation/routing-navigation.component';
import { ChildRoute1Component } from './components/child-route-1/child-route-1.component';
import { ChildRoute2Component } from './components/child-route-2/child-route-2.component';
import { AuthGuard } from './Auth/auth-gaurd';
import { HttpObsvRxjsComponent } from './components/http-obsv-rxjs/http-obsv-rxjs.component';
import { AngularPipesComponent } from './components/angular-pipes/angular-pipes.component';
import { AngularTestingComponent } from './components/angular-testing/angular-testing.component';
import { UserFlowComponent } from './user-flow/user-flow.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'angular-basics', component: AngularBasicsComponent },
  { path: 'angular-components', component: AngularComponentsComponent },
  { path: 'angular-directives', component: AngularDirectivesComponent },
  { path: 'data-binding', component: DataBindingComponent },
  { path: 'angular-forms', component: AngularFormsComponent },
  { path: 'services-dependency-injection', component: ServicesDiComponent },
  {
    path: 'routing-navigation/:id', component: RoutingNavigationComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      { path: 'child-route-1', component: ChildRoute1Component },
      { path: 'child-route-2', component: ChildRoute2Component }
    ]
  },
  { path: 'httpclient-obsv-rxjs', component: HttpObsvRxjsComponent },
  { path: 'angular-pipes', component: AngularPipesComponent },
  { path: 'angular-testing', component: AngularTestingComponent },
  { path: 'user-flow-diagram', component: UserFlowComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
