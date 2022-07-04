import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoService } from '../todo.service';
@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss'],
})
export class CreateTodoComponent implements OnInit {
  form: FormGroup;
  constructor(private _fb: FormBuilder, public todoService: TodoService) {
    this.form = this._fb.group({
      task: ['', [Validators.required], []],
    });
  }

  submit() {
    this.todoService.createTodo(this.form.value.task);
    this.form.reset();
  }

  ngOnInit() {}
}
