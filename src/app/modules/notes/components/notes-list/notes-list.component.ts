import { AuthService } from './../../../../core/auth/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, debounceTime, distinctUntilChanged, first, switchMap } from 'rxjs';
import { NotesService } from '../../services/notes.service';
import { Note } from '../../models/note.model';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.sass'],
})
export class NotesListComponent implements OnInit{

  notes: Note[] = [];
  currentDate: string = '';
  userName!: any;
  searchTerm$ = new Subject<string>();

  constructor(private notesService: NotesService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.userName = this.authService.getUserName();
    this.listNotes();
    this.updateDateTime();
    this.initializeSearch();
  }

  listNotes(){
    this.notesService.list()
      .subscribe(data => this.notes = data);
  }

  editNote(note: Note) {
    this.router.navigate(['/notes/edit', note._id]);
  }

  deteleNote(id: string){
    this.notesService.remove(id)
      .pipe(first())
      .subscribe({
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          this.listNotes();
        }
      })
  }

  updateDateTime(){
    const now = new Date();
    this.currentDate = now.toLocaleDateString();
  }

  toggleCheck(note: any){
    note.done = !note.done;
    this.updateDoneStatus(note._id, note.done);
  }

  isDeadlineExpired(deadline: string | Date): string {
    const deadlineDate = new Date(deadline);
    const currentDate = new Date();

    if (deadlineDate <= currentDate) {
      return 'text-danger fw-bold';
    }

    return '';
  }

  updateDoneStatus(noteId: string, done: boolean) {
    const updatedNote: Partial<Note> = { done };

    this.notesService
      .update(noteId, updatedNote as Note)
      .pipe(first())
      .subscribe({
        error: (err) => {
          console.log(err);
        },
      });
  }

  private initializeSearch(): void {
    this.searchTerm$
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((term: string) => {
          if (term.trim() === '') {
            return this.notesService.list();
          } else {
            return this.notesService.search(term);
          }
        })
      )
      .subscribe((filteredNotes) => {
        this.notes = filteredNotes;
      });
  }

  onSearch(event: any): void {
    const searchTerm = event.target.value;
    this.searchTerm$.next(searchTerm);
  }

}
