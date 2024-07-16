import { Component } from '@angular/core';
import { code_snippet_component, code_snippet_dataBinding, code_snippet_routing, code_snippet_serviceDI, code_snippet_template } from './angular-basics.constants';

@Component({
  selector: 'app-angular-basics',
  templateUrl: './angular-basics.component.html',
  styleUrl: './angular-basics.component.css'
})
export class AngularBasicsComponent {
  _code_snippet_component = code_snippet_component;
  _code_snippet_template = code_snippet_template;
  _code_snippet_dataBinding = code_snippet_dataBinding;
  _code_snippet_serviceDI = code_snippet_serviceDI;
  _code_snippet_routing = code_snippet_routing;
}
