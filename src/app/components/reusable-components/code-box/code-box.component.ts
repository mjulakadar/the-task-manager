import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-code-box',
  templateUrl: './code-box.component.html',
  styleUrl: './code-box.component.css'
})
export class CodeBoxComponent {
  @Input() code_snippet: string = '';
}
