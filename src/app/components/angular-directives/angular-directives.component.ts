import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-directives',
  templateUrl: './angular-directives.component.html',
  styleUrl: './angular-directives.component.css'
})
export class AngularDirectivesComponent {
  isVisible=true;
  items: string[] = ["I", "Am", "Getting", "Repeated", "Using", "ngFor"];
  switchValue: string = "B";
  isButtonActive=false;

  showOrHideContainer: boolean = true;

  toggle() {
    this.isButtonActive=!this.isButtonActive;
  }

  showHideContainer() {
    this.showOrHideContainer=!this.showOrHideContainer;
  }
}
