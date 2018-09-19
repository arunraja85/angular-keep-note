import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Note } from './note';
import { HttpClient } from '../../node_modules/@angular/common/http';

@Injectable()
export class NotesService {
  
  baseURL : string = "http://localhost:3000/notes";

  constructor(private httpClient : HttpClient){

  }
  getNotes(): Observable<Array<Note>> {
    return this.httpClient.get<Note[]>(this.baseURL);
  }

  addNote(note: Note): Observable<Note> {
    return null;
  }

}
