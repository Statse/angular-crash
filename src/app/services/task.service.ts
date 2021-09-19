import { Injectable } from '@angular/core';
import { TASKS } from '../mock-task';
import { Task }  from '../Task';
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  header: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl: string = "http://localhost:5000/tasks";

  constructor(private http:HttpClient) { }

  getTasks(): Observable<Task[]>{
    // How to use observables
    // const tasks = of(TASKS);
    // return tasks;

    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(task: Task): Observable<Task> {
    const url =`${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }

  updateTaskReminder(task: Task): Observable<Task>{
    const url =`${this.apiUrl}/${task.id}`;
    //TODO: investigate hy adding httpOptions gives error
    // httpOptions
    return this.http.put<Task>(url, task);
  }
}
