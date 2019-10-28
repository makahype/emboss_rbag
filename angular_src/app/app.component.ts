import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mode = "login";
  is_loggedin = false;

  constructor(private apiService: ApiService) { 


    //read data from page to check login status
    let login_status = this.apiService.getLoginStatus()

    //bypass logged in section if user is loggedin 
    if(login_status == '1'){
        this.mode = "note"
        this.is_loggedin = true;
    }else{
        this.is_loggedin = false;
    }

  }

  screen (mode){
    this.mode = mode;
  }

}
