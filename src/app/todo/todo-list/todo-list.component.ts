import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  constructor(public todoService: TodoService) {}
  log() {
    console.log(this.todoService.todos$.getValue());
  }
  ngOnInit() {}
}
