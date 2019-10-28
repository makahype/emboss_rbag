import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-notelist',
  templateUrl: './notelist.component.html',
  styleUrls: ['./notelist.component.css']
})
export class NotelistComponent implements OnInit {
  note_list = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {

    var notelist_res = this.apiService.getNoteList();

    notelist_res.subscribe((data: any) => {
        this.note_list = data;
    });

  }

}
