import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    reg_email = "";
    reg_pass = "";
    login_email = "";
    login_pass = "";
    
    login_complete = false;
    reg_complete = false;
    form_error = false;
    form_error_msg = "";


  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

    submitReg(){

        var reg_result = this.apiService.performReg({user: {email: this.reg_email, password: this.reg_pass,
            password_confirmation: this.reg_pass}});

        reg_result.subscribe((data: any) => {
            if(data.created){
                this.reg_complete = true;
                this.form_error = false;
            }else{
                this.form_error = true;
                this.form_error_msg = "Registration failed, please try again"
            }
        });
    }

    submitLogin(){

        var login_result = this.apiService.performReg({user: {email: this.login_email, password: this.login_pass,
        password_confirmation: this.login_pass}});

        login_result.subscribe((data: any) => {
            if(data.created){
                this.login_complete = true;
                this.form_error = false;
            }else{
                this.form_error = true;
                this.form_error_msg = "Login failed, please try again"
            }
        });

    }

}
