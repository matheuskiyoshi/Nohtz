import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, first } from 'rxjs';
import { Note } from '../models/note.model';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private readonly API = 'https://nohtz-api.onrender.com/notes';

  constructor(private http: HttpClient) { }

  getById(id: string): Observable<Note> {
    return this.http.get<Note>(`${this.API}/${id}`);
  }

  list(){
    return this.http.get<Note[]>(this.API);
  }

  create(note: Note){
    return this.http.post(this.API, note).pipe(first());
  }

  update(noteId: string, note: Note): Observable<void>{
    return this.http.put<void>(`${this.API}/${noteId}`, note);
  }

  remove(id: string){
    return this.http.delete(`${this.API}/${id}`).pipe(first());
  }

  search(query: string): Observable<Note[]> {
    const params = new HttpParams().set('query', query);
    return this.http.get<Note[]>(`${this.API}/search`, { params });
  }

}
