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

    this.apiService.user_loggedin.subscribe( value => {
        this.is_loggedin = value;
        
        //bypass logged in section if 
        if(value){
            this.mode = "note"
        }
    });

  }

  screen (mode){
    this.mode = mode;
  }

}
