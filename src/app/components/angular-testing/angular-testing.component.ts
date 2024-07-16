import { Component } from '@angular/core';
import { code_snipper_data_service, code_snippet_data_service_spec, code_snippet_post_list, code_snippet_post_list_spec, code_snippet_routes, code_snippet_routes_spec } from './angular-testing.constants';

@Component({
  selector: 'app-angular-testing',
  templateUrl: './angular-testing.component.html',
  styleUrl: './angular-testing.component.css'
})
export class AngularTestingComponent {
  _code_snipper_data_service = code_snipper_data_service;
  _code_snippet_data_service_spec = code_snippet_data_service_spec;
  _code_snippet_post_list = code_snippet_post_list;
  _code_snippet_post_list_spec = code_snippet_post_list_spec;
  _code_snippet_routes=code_snippet_routes;
  _code_snippet_routes_spec=code_snippet_routes_spec;
}
