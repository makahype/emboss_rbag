import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

    host = "http://localhost:3000";
    constructor(private http: HttpClient) { }

    getNoteList() {
      return this.http.get("/endpoints/user_notes");
    }

    performReg(user_data) {
      user_data.authenticity_token = this.getAuthToken();

      return this.http.post(this.host+"/users",user_data,{});
    }

    performLogin(user_data) {
      user_data.authenticity_token = this.getAuthToken();

      return this.http.post(this.host+"/sessions",user_data,{});
    }

    createNote(note_data) {
      note_data.authenticity_token = this.getAuthToken();

      return this.http.post(this.host+"/notes",note_data,{});
    }

    getNotes() {
      return this.http.get(this.host+"/notes/user_notes");
    }

    getAuthToken(){
      return (<HTMLInputElement>document.getElementById('auth_token')).value;
    }

    getLoginStatus(){
        return (<HTMLInputElement>document.getElementById('login_status')).value;
    }

    getWindow() : any {
        return window;
    }

}
