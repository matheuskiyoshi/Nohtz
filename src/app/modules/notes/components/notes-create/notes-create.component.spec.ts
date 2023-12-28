import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesCreateComponent } from './notes-create.component';

describe('NotesCreateComponent', () => {
  let component: NotesCreateComponent;
  let fixture: ComponentFixture<NotesCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotesCreateComponent]
    });
    fixture = TestBed.createComponent(NotesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
