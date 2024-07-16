import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { NgForm } from '@angular/forms';
import { code_snippet_component_DI, code_snippet_implementService } from './service-di.constants';

@Component({
  selector: 'app-services-di',
  templateUrl: './services-di.component.html',
  styleUrl: './services-di.component.css'
})
export class ServicesDiComponent {
  items: string[] = [];
  newItem: string = '';

  _code_implementService: string = code_snippet_implementService;
  _code_component_DI: string = code_snippet_component_DI;

  constructor(private dataService: DataService) {
    this.items = dataService.getData();
  }

  addItem(form: NgForm) {
    if (form.valid) {
      this.dataService.addData(this.newItem);
      this.newItem = '';
      form.resetForm();
    }
  }
}
