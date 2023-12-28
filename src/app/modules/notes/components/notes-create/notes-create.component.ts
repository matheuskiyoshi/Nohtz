import { LoginService } from './../../../../core/auth/services/login.service';
import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../services/notes.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-notes-create',
  templateUrl: './notes-create.component.html',
  styleUrls: ['./notes-create.component.sass']
})
export class NotesCreateComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  private noteId?: string;
  userId!: string;

  constructor(
    private noteService: NotesService,
    private location: Location,
    private route: ActivatedRoute,
    private loginService: LoginService,
  ) {}

  ngOnInit(): void {
    this.userId = this.loginService.getUserId();
    this.buildForm();
    this.getIdFromUrl();
  }

  private buildForm(): void{
    this.form = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      body: new FormControl(null, [Validators.required]),
      done: new FormControl(false),
      deadline: new FormControl(null, [Validators.required]),
    });
  }

  public getIdFromUrl(){
    this.noteId = this.route.snapshot.params['id'];
    if(this.noteId){
      this.getNoteById();
    }
  }

  private getNoteById(){
    this.noteService
      .getById(this.noteId!)
      .pipe(first())
      .subscribe({
        next: (res) => {
          this.form.patchValue(res);
        },
        error: (err) => {
          console.log(err);
        },
      })
  }

  onSave(){
    if(this.noteId){
      this.onUpdate(this.noteId);
    } else {
      this.onCreate();
    }
  }

  onCreate() {
    this.submitted = true;
    if (this.form.valid) {
      this.noteService
        .create(this.form.getRawValue())
        .pipe(first())
        .subscribe({
          next: (createdNote: any) => {
            this.location.back();
          },
          error: (err) => {
            console.log(err);
          },
        });
    }
  }

  onCancel() {
    this.submitted = false;
    this.form.reset();
  }

  onUpdate(noteId: string){
    this.submitted = true;
    if(this.form.valid){
      this.noteService
        .update(noteId, this.form.getRawValue())
        .pipe(first())
        .subscribe({
          error: (err) => {
            console.log(err);
          },
          complete: () => {
            this.location.back()
          }
        })
    }
  }
}
