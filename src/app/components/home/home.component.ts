import { Component, OnInit } from '@angular/core';
import { Priority, SimpleTask, Sorting } from '../../models/task';
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
    date: new Date(),
    priority: 'Low'
  };

  tasks: SimpleTask[] = [];
  initialTasksData: SimpleTask[] = [];
  priorityFilters: Priority[] = [];
  priorityFiltersChips = [{ name: 'High', selected: false }, { name: 'Medium', selected: false }, { name: 'Low', selected: false }];
  sortByChips = [{ name: 'Priority', selected: false }, { name: 'Recently Created', selected: false }];

  animatedTexts: string[] =
    [
      "Welcome to The Task Manager",
      "It's " + getCustomDate(this.current_date).day + ", " + getCustomDate(this.current_date).month + "",
      "Try adding some new Tasks!"
    ];

  isFetchingInProgress = true;
  priorities: Priority[] = ['Low', 'Medium', 'High'];
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
    setTimeout(() => {
      this.fetchPosts();
      this.isFetchingInProgress = false;
    }, 3000);
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
        this.initialTasksData = [...this.tasks];
        if (this.priorityFilters && this.priorityFilters.length > 0) {
          this.filterByPriority();
        }
      }
    })
  }

  filterByPriority() {
    const filteredTasks: SimpleTask[] = [];
    if (this.priorityFilters.includes('High')) {
      filteredTasks.push(...(this.initialTasksData.filter(x => x.priority === 'High') || []));
    }

    if (this.priorityFilters.includes('Medium')) {
      filteredTasks.push(...(this.initialTasksData.filter(x => x.priority === 'Medium') || []));
    }

    if (this.priorityFilters.includes('Low')) {
      filteredTasks.push(...(this.initialTasksData.filter(x => x.priority === 'Low') || []));
    }

    if (filteredTasks && filteredTasks.length > 0) {
      this.tasks = filteredTasks;
    } else {
      this.tasks = [...this.initialTasksData];
    }
  }

  applySortingByChips() {
    const sortByData = this.sortByChips.find(c => c.selected == true);
    if (!sortByData) {
      //default sorting with recently created
      this.tasks.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      return;
    }

    if (sortByData.name === 'Priority') {
      this.tasks.sort((a, b) => {
        const priorityOrder = { 'High': 1, 'Medium': 2, 'Low': 3 };

        if (priorityOrder[a.priority] !== priorityOrder[b.priority]) {
          return priorityOrder[a.priority] - priorityOrder[b.priority];
        } else {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        }
      })
      return;
    }

    if (sortByData.name === 'Recently Created') {
      this.tasks.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }
  }

  toggleChips(chip: any) {
    if (chip) {
      const c = this.priorityFiltersChips.find(x => x.name === chip.name);
      if (c) {
        c.selected = !c.selected;
        if (c.selected) {
          this.priorityFilters.push(c.name as Priority);
        } else {
          this.priorityFilters = this.priorityFilters.filter(x => x != c.name as Priority);
        }

        this.filterByPriority();
      }
    }
  }

  toggleSortBy(chip: any) {
    if (chip) {
      const c = this.sortByChips.find(x => x.name === chip.name);
      if (c) {
        c.selected = !c.selected;
        const remainingChips = this.sortByChips.filter(x => x.name != c.name);
        remainingChips.forEach(item => item.selected = false);
        this.applySortingByChips();
      }
    }
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
        date: new Date(),
        priority: this.newTask.priority
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
      date: new Date(),
      priority: 'Low'
    }
  }

  //Get Priority Styles
  getPriorityStyleClass(priority: Priority) {
    if (!priority) return 'low-priority-badge';

    switch (priority) {
      case 'Low':
        return 'low-priority-badge';
      case 'Medium':
        return 'medium-priority-badge';
      case 'High':
        return 'high-priority-badge';
      default: return 'low-priority-badge';
    }
  }
}
