import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

    public user_loggedin: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(private http: HttpClient) { }


    getNoteList() {
      return this.http.get("http://localhost:3000/endpoints/user_notes");
    }

    performReg(user_data) {
      user_data.authenticity_token = this.getAuthToken();

      return this.http.post("http://localhost:3000/users",user_data,{});
    }

    performLogin(user_data) {
      user_data.authenticity_token = this.getAuthToken();

      return this.http.post("http://localhost:3000/sessions",user_data,{});
    }

    createNote(note_data) {
      note_data.authenticity_token = this.getAuthToken();

      return this.http.post("http://localhost:3000/notes",note_data,{});
    }

    getNotes() {
      return this.http.get("http://localhost:3000/notes/user_notes");
    }

    getAuthToken(){
      return (<HTMLInputElement>document.getElementById('auth_token')).value;
    }


}
