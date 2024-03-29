import { Component, OnInit } from '@angular/core';

import { TaskService } from '../../services/task.service';
import { Task } from '../../models/Task';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  providers: [TaskService]
})
export class TasksComponent implements OnInit {
  tasks: Task[];
  title: string;
  loading: boolean;

  constructor(private taskService: TaskService) {
    this.loading = true;
    this.taskService.getTasks()
      .subscribe(tasks => {

        if (!tasks){
          console.log('error server');
        }else{
          this.loading = false;
          console.log(tasks);
          this.tasks = tasks;
        }
      });
  }

  ngOnInit() {

  }

  addTask(event){
    event.preventDefault();
    const newTask:Task = {
      title: this.title,
      isDone: false
    };
    this.taskService.addTask(newTask)
      .subscribe(task => {
        this.tasks.push(task);
        this.title = '';

      })
  }

  deleteTask(id) {

    if (!id == false ){
      const tasks = this.tasks;
      this.taskService.deleteTask(id)
        .subscribe(data => {
          console.log(data)
          console.log(data.n);
          if(data.n == 1) {
            for(let i = 0; i < tasks.length; i++) {
              if(tasks[i]._id == id) {
                tasks.splice(i, 1);
              }
            }
          }
        })
    }
  }

  updateStatus(task: Task) {
    var newTask = {
      _id: task._id,
      title: task.title,
      isDone: !task.isDone
    };
    this.taskService.updateTask(newTask)
      .subscribe(res => {
        task.isDone = !task.isDone;
      })
  }

}
