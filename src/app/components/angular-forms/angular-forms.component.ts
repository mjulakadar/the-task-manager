import { Component } from '@angular/core';
import { Task, TaskManager } from '../../models/task';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-angular-forms',
  templateUrl: './angular-forms.component.html',
  styleUrl: './angular-forms.component.css'
})
export class AngularFormsComponent {
  taskReactiveForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.taskReactiveForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      priority: ['Medium', Validators.required],
      dueDate: ['', Validators.required],
      status: ['Pending', Validators.required]
    })
  }

  task: Task = {
    title: '',
    description: '',
    dueDate: new Date(),
    priority: 'Medium',
    status: 'Pending'
  }

  submittedTaskUsingTemplateDrivenForm: Task | null = null;
  submittedTaskUsingReactiveForm: TaskManager | null = null;

  onSubmit() {
    this.submittedTaskUsingTemplateDrivenForm = { ...this.task };
    this.task = {
      title: '',
      description: '',
      dueDate: new Date(),
      priority: 'Medium',
      status: 'Pending'
    };
  }

  onReactiveFormSubmit() {
    if (this.taskReactiveForm.valid) {
      this.submittedTaskUsingReactiveForm = { ...this.taskReactiveForm.value };
      this.taskReactiveForm = this.fb.group({
        title: ['', Validators.required],
        description: [''],
        priority: ['Medium', Validators.required],
        dueDate: ['', Validators.required],
        status: ['Pending', Validators.required]
      })
    }
  }
}
