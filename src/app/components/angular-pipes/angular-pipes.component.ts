import { Component } from '@angular/core';
import { code_snipper_custom_pipe, code_snippet_custom_pipe_use, code_snippet_impure_pipe_use, code_snippet_impure_pipe_use_component, code_snippet_impure_pipes, code_snippet_pipes } from './angular-pipes.constants';


@Component({
  selector: 'app-angular-pipes',
  templateUrl: './angular-pipes.component.html',
  styleUrl: './angular-pipes.component.css',
})
export class AngularPipesComponent {
  _code_snippet_pipes = code_snippet_pipes;
  _code_snipper_custom_pipe = code_snipper_custom_pipe;
  _code_snippet_custom_pipe_use = code_snippet_custom_pipe_use;
  _code_snippet_impure_pipes = code_snippet_impure_pipes;
  _code_snippet_impure_pipe_use = code_snippet_impure_pipe_use;
  _code_snippet_impure_pipe_use_component = code_snippet_impure_pipe_use_component;

  numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  isEven(item: number): boolean {
    return item % 2 == 0;
  }
}
