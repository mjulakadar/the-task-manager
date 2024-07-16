export const code_snippet_component = 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {
  // Component logic goes here
}
`;

export const code_snippet_template =
`<h1>{{ title }}</h1>
<p>Welcome to {{ appName }}</p>
`;

export const code_snippet_dataBinding=
`<!-- Interpolation -->
<p>{{ message }}</p>

<!-- Property Binding -->
<img [src]="imageUrl">

<!-- Event Binding -->
<button (click)="onClick()">Click me</button>

<!-- Two-Way Binding -->
<input [(ngModel)]="name">
`;

export const code_snippet_serviceDI=
`import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // Service logic goes here
}
`;

export const code_snippet_routing=
`import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
`;