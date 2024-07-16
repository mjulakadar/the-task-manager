import { Component, OnInit } from '@angular/core';
import { SimpleTask } from '../../models/task';
import { TaskService } from '../../services/task.service';
import { getCustomDate } from '../../Utility/custom-date.utility';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SpeechService } from '../../services/advanced-services/speech.service';
import { FormControl } from '@angular/forms';

export interface SpeechLanguage {
  name: string
  code: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  current_date: Date = new Date();
  newTask: SimpleTask = {
    task: '',
    completed: false,
    date: new Date()
  };
  tasks: SimpleTask[] = [];
  animatedTexts: string[] =
    [
      "Welcome to The Task Manager",
      "It's " + getCustomDate(this.current_date).day + ", " + getCustomDate(this.current_date).month + "",
      "Try adding some new Tasks!"
    ];

  isListening = false;
  taskControl = new FormControl();
  languages: SpeechLanguage[] = [{ name: 'hindi', code: 'hi-IN' }, { name: 'english', code: 'en-US' }];

  constructor(private taskService: TaskService, private snackBar: MatSnackBar, private speechService: SpeechService) {
  }

  //#region speech-service
  startVoiceInput() {
    this.isListening = true;
    this.speechService.startListening((text: string) => {
      this.taskControl.setValue(this.taskControl.value + '' + text);
      this.isListening = false;
    });
  }

  stopVoiceInput() {
    this.speechService.stopListening();
    this.isListening = false;
  }
  //end region

  ngOnInit() {
    this.fetchPosts();
  }

  showSnackBar(message: string, action: string, duration: number) {
    this.snackBar.open(message, action, {
      duration: duration
    });
  }

  fetchPosts(): void {
    this.taskService.getTasks().subscribe(data => {
      if (data) {
        const fetchedSimpleTasks: SimpleTask[] = data as SimpleTask[];
        this.tasks = fetchedSimpleTasks.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      }
    })
  }

  onEnterPress() {
    if (this.newTask?.id && this.newTask?.id !== '') {
      this.updateTask(this.newTask);
    } else {
      this.addTask();
    }
  }

  addTask() {
    if (this.newTask.task.trim()) {
      const dataToPost: SimpleTask = {
        completed: false,
        task: this.newTask.task,
        date: new Date()
      };

      this.taskService.addTask(this.newTask).subscribe(task => {
        this.tasks.unshift(task);
        this.showSnackBar('Task Created Successfully!', 'OK', 3000);
      });

      this.resetInitialTask();
    }
  }

  deleteTask(taskToDelete: SimpleTask) {
    if (taskToDelete.id) {
      this.taskService.deleteTask(taskToDelete.id).subscribe(() => {
        this.tasks = this.tasks.filter(task => task.id !== taskToDelete.id);
        this.showSnackBar('Task Deleted Successfully!', 'OK', 3000);
      });
    }
  }

  updateTask(taskToUpdate: SimpleTask) {
    if (taskToUpdate.id) {
      this.taskService.updateTask(taskToUpdate.id, taskToUpdate).subscribe((task) => {
        const index = this.tasks.findIndex(t => t.id === task.id);
        if (index !== -1) {
          this.tasks[index] = task;
          this.resetInitialTask();
          this.showSnackBar('Task Updated Successfully!', 'OK', 3000);
        }
      });
    }
  }

  editTask(taskToEdit: SimpleTask) {
    this.newTask = { ...taskToEdit };
  }

  updateTaskHanlder() {
    this.updateTask(this.newTask);
  }

  cancelEdit() {
    this.resetInitialTask();
  }

  toggleTaskCompletion(task: SimpleTask) {
    this.updateTask(task);
    //task.completed = !task.completed;
  }

  resetInitialTask() {
    this.newTask = {
      task: '',
      completed: false,
      date: new Date()
    }
  }
}