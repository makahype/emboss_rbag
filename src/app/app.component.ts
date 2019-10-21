import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mode = "login";

  screen (mode){
    console.log(mode);
    this.mode = mode;
  }


}
