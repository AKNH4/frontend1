import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  form: FormGroup;

  constructor(private userService: UserService, private fb: FormBuilder) {
    this.form = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6)], []],
    });
  }
  changePassword() {
    this.userService.changePassword(this.form.value.password).subscribe({
      next: () => {},
    });
    this.form.reset();
  }

  get password() {
    return this.form.controls['password'];
  }

  ngOnInit(): void {}
}
