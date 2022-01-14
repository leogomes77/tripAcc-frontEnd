import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any = {
    email: null,
    name:null,
    password: null
  };

  constructor(public apiService: AuthService,private router: Router,) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const { email,name, password } = this.form;
    this.apiService.register(email,name,password).subscribe(
      )
      this.router.navigate(['/login'])
  }
}
