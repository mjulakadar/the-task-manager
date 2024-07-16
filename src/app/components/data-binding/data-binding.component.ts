import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  message="Hi, I am coming from TS file using one way data binding."
  interpolationMessage="Hi, I am also coming from TS file using Interpolation."
  InterpololationBracket="{{ }}";
  isDisabled=true;

  name="John Deo"
  eventBindingMessage="If you click the above button, I will print `Button Clicked!` usnig event binding.";

  onButtonClick(): void {
    this.eventBindingMessage = 'Button Clicked!';
  }
}
