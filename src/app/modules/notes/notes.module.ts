import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { NotesCreateComponent } from './components/notes-create/notes-create.component';
import { NotesListComponent } from './components/notes-list/notes-list.component';


@NgModule({
  declarations: [
    NotesCreateComponent,
    NotesListComponent
  ],
  imports: [
    CommonModule,
    NotesRoutingModule
  ]
})
export class NotesModule { }
