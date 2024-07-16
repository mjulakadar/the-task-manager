export const code_snippet_implementService: string =
`import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: string[] = [];
  constructor() { }

  getData(){
    return this.data;
  }

  addData(newData: string){
    this.data.push(newData);
  }
}`;

export const code_snippet_component_DI: string = 
`export class ServicesDiComponent {
  constructor(private dataService: DataService) {
    //contructor logic
  }

  //other logic
}`;