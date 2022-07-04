import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from './todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}

  todos$: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([]);

  createTodo(task: string) {
    const newTodo: Todo = { task, done: false };
    this.todos$.next([...this.todos$.getValue(), { task, done: false }]);
  }
}
