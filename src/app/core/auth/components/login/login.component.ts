import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { LoginCredentials } from '../../models/login-credentials.model';
import { first } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit{

  loginForm!: FormGroup;
  submitted: boolean = false;
  showSuccessMessage: boolean = false;
  email: string = '';
  invalidEmail: boolean = false;
  showPassword: boolean= false;
  errorMessage!: string;

  constructor(private loginService: LoginService, private router: Router, private authService: AuthService){}

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    });
  }

  public login(): void {
    const payload: LoginCredentials = this.loginForm.getRawValue();
    this.loginService
      .login(payload)
      .pipe(first())
      .subscribe({
        next: (res: any) => {
          this.authService.setUserToken(res.token);
          this.authService.setUserName(res.user.name);
          this.errorMessage = '';
          this.router.navigate(['/notes']);
        },
        error: (err) => {
          this.errorMessage = err;
        },
      });
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

}
