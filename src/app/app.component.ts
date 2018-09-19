import { Component, OnInit } from '@angular/core';
import { Note } from './note';
import { NotesService } from './notes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  errMessage: string;
  notes : Note[];

  constructor(private noteService : NotesService){
   
  }

  ngOnInit(){
    this.noteService.getNotes().subscribe(noteResponse => {
      this.notes = noteResponse;
    });
  }

}
