import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}

  todos$: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([]);

  createTodo(task: string) {
    this.todos$.next([...this.todos$.getValue(), { task, done: false }]);
    console.log(this.todos$.getValue());
  }
}
