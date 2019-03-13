import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
import { Task } from '../models/Task' ;

// console.log(environment.domain);

@Injectable()
export class TaskService {

 
 domain: string = environment.domain;



  constructor(private http: HttpClient) {

  }

  getTasks() {
    return this.http.get<Task[]>(`${this.domain}/api/tasks`)
      .map(res => res);
  }

  addTask(newTask: Task) {
    return this.http.post<Task>(`${this.domain}/api/task`, newTask)
      .map(res => res);
  }

  deleteTask(id) {
    return this.http.delete<Task>(`${this.domain}/api/task/${id}`)
      .map(res => res);
  }

  updateTask(newTask) {
    return this.http.put<Task>(`${this.domain}/api/task/${newTask._id}`, newTask)
      .map(res => res)
  }
}
