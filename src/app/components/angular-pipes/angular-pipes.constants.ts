export const code_snippet_pipes=
`<p>{{ today | date }}</p>
<p>{{ today | date: 'shortDate' }}</p>
<p>{{ 'hello' | uppercase }}</p>
<p>{{ 'WORLD' | lowercase }}</p>
<p>{{ 1234.56 | currency }}</p>
<p>{{ 0.1234 | percent }}</p>
<p>{{ [1, 2, 3, 4, 5] | slice: 1:4 }}</p>
<p>{{ { name: 'Angular', version: 10 } | json }}</p>
`;

export const code_snipper_custom_pipe=
`import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value;
    return value.replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
}
`;

export const code_snippet_custom_pipe_use=
`<p>{{ 'hello world' | titleCase }}</p>
<p>{{ 'angular pipes' | titleCase }}</p>
`;

export const code_snippet_impure_pipes=
`import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impureFilter',
  pure: false
})
export class ImpureFilterPipe implements PipeTransform {
  transform(items: any[], filter: (item: any) => boolean): any[] {
    return items.filter(filter);
  }
}
`;

export const code_snippet_impure_pipe_use=
`<div *ngFor="let item of items | impureFilter:isEven">
  {{ item }}
</div>
`;

export const code_snippet_impure_pipe_use_component=
`import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = [1, 2, 3, 4, 5, 6];

  isEven(item: number): boolean {
    return item % 2 === 0;
  }
}
`;