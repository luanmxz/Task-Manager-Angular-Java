import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './model/Task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskServiceService {
  private url: string = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) {}

  //método para adicionar task
  save(task: Task): Observable<Task> {
    return this.http.post<Task>(this.url, task);
  }

  //método para listar todas as transferências
  getAll(): Observable<Task[]> {
    return this.http.get<Task[]>(this.url);
  }

  //método para deletar atráves do id
  deleteById(id: any): Observable<unknown> {
    return this.http.delete(`${this.url}` + `/${id}`);
  }
  //método para alterar task
  updateById(id: any, task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.url}` + `/${id}`, {
      categoria: task.categoria,
      tarefa: task.tarefa,
      detalhes: task.detalhes,
      status: false,
      prazo: task.prazo,
    });
  }

  //método para marcar tarefa como concluída
  completedTheTask(task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.url}` + `/${task.id}`, {
      categoria: task.categoria,
      tarefa: task.tarefa,
      detalhes: task.detalhes,
      status: true,
      prazo: task.prazo,
      id: task.id,
    });
  }
}
