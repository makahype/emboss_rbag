import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-notelist',
  templateUrl: './notelist.component.html',
  styleUrls: ['./notelist.component.css']
})
export class NotelistComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    console.log('test');
    console.log(this.apiService.getNoteList());

  }

}
