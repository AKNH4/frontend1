import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required], []],
      password: ['', [Validators.required], []],
    });
  }

  loginForm: FormGroup;
  errorMsg!: string;
  loading = false;

  loginFormSubmit() {
    const { username, password } = this.loginForm.value;
    this.loading = true;
    this.authService.login(username, password).subscribe({
      next: () => {
        this.router.navigate(['']);
      },
      error: (err: HttpErrorResponse) => {
        if (err.status === 401) {
          this.errorMsg = err.error.message;
        }
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      },
    });
    this.loginForm.reset();
  }

  get username() {
    return this.loginForm.controls['username'];
  }

  get password() {
    return this.loginForm.controls['password'];
  }

  ngOnInit(): void {}
}
