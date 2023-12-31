import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesListComponent } from './components/notes-list/notes-list.component';
import { authGuard } from 'src/app/core/guards/auth.guard';
import { NotesCreateComponent } from './components/notes-create/notes-create.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: NotesListComponent,
    canActivate: [authGuard],
  },
  {
    path: 'new',
    component: NotesCreateComponent,
    canActivate: [authGuard],
  },
  {
    path: 'edit/:id',
    component: NotesCreateComponent,
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }]
})
export class NotesRoutingModule {}
