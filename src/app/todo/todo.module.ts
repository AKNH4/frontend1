import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoRoutes } from './todo.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateTodoComponent } from './create-todo/create-todo.component';

@NgModule({
  declarations: [TodoListComponent, CreateTodoComponent],
  imports: [CommonModule, TodoRoutes, ReactiveFormsModule],
})
export class TodoModule {}
