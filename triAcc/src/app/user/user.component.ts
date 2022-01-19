import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  form: any = {
    nome: null,
    email: null,
    contacto:null
  };

  constructor(public apiService: AuthService,private router: Router) { }



  user: any = '';


  ngOnInit(): void {
    this.onListUser();
    this.verificaDarkmode();
  }

  //vars
  darkClass : any;
  isChecked : boolean = true;


  verificaDarkmode(){
    if (localStorage.getItem('darkModeState')){
      this.darkMode();
    }else{
      this.normalMode();
    }
  }

  darkMode(){
    this.isChecked = true;
    this.darkClass = 'hold-transition sidebar-mini dark-mode';
    localStorage.setItem("darkModeState", 'On');
  }

  normalMode(){
    this.isChecked = false;
    this.darkClass = 'hold-transition sidebar-mini';
    localStorage.removeItem("darkModeState");
  }

  darkModeChange(event:any){
    //verifica se switch(checkbox) esta checked
    if(event.target.checked){
      this.darkMode();
    }
    else{
      this.normalMode();
    }
  }

  onListUser(){
    this.apiService.getUserSettings().subscribe(
        data => {console.log('success', data);
        this.user = data;
        return this.user;
      },
        error => { console.log('oops', error)  /*modal*/ }
    )
  }

 

}
