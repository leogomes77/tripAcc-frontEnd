import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/api.service';
import { TokenStorageService } from '../shared/globals'
 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {

  form: any = {
    email: null,
    password: null
  };

  constructor(public apiService: AuthService, private tokenStorage: TokenStorageService ) { }

  ApiLogin : any;

  ngOnInit(): void {
   }

    onSubmit(){
      const { email, password } = this.form;
      this.apiService.login(email,password).subscribe(
        (      data: { token: any; }) => {
          this.tokenStorage.saveToken(data.token);
        }
      )
    }
}