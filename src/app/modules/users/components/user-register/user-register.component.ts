import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { first } from 'rxjs';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.sass']
})
export class UserRegisterComponent implements OnInit{
  form!: FormGroup;
  submitted = false;

  constructor(private userService: UserService, private router: Router ){}

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): void{
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  onRegister(){
    this.submitted = true;
    if (this.form.valid) {
      this.userService
        .create(this.form.getRawValue())
        .pipe(first())
        .subscribe({
          next: (createdUser: any) => {
            this.router.navigate(['/login']);
          },
          error: (err) => {
            console.log(err);
          },
        });
    }
  }

}
