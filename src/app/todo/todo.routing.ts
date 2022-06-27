import { Routes, RouterModule } from '@angular/router';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = [
  {
    path: '',
    component: TodoListComponent,
    children: [
      {
        path: 'create',
        component: CreateTodoComponent,
      },
    ],
  },
];

export const TodoRoutes = RouterModule.forChild(routes);
