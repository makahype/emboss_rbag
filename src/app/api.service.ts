import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getLogin() {
    //this.http.get("http://localhost:3000/endpoints/user_new").subscribe((data) => {
    //    console.log(data);
    //});
    return [{test: 'yes'}];
  }

  getNoteList() {
    //this.http.get("http://localhost:3000/static_pages/notelist_test").subscribe((data) => {
    //    console.log(data);
    //});
    return [{test: 'yes'}];
  }

  performReg(user_data) {
    user_data.authenticity_token = (<HTMLInputElement>document.getElementById('auth_token')).value;

    return this.http.post("http://localhost:3000/users",user_data,{});
  }

  performLogin(user_data) {
    user_data.authenticity_token = (<HTMLInputElement>document.getElementById('auth_token')).value;

    return this.http.post("http://localhost:3000/sessions",user_data,{});
  }

  createNote() {
    return true;
  }

  getNote() {
    return true;
  }


}
