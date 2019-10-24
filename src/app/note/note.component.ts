import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
    nt_title = "";
    nt_content = "";
    ntfrm_complete = false;

    constructor(private apiService: ApiService) { }

    ngOnInit() {
    }

    saveNote(){

        var ntcreate_result = this.apiService.createNote({note: {title: this.nt_title, 
        content: this.nt_content}});

        ntcreate_result.subscribe((data: any) => {
            //clear data
            this.nt_title = "";
            this.nt_content = "";
            this.ntfrm_complete = true;
        });
    }

}
