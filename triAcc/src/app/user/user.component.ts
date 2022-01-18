import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/api.service';
import { Router } from '@angular/router';
import { User } from 'src/models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(public apiService: AuthService,private router: Router) { }

  user : User[] | undefined;


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
        return this.carregarUser(data);
      },
        error => { console.log('oops', error)  /*modal*/ }
    )
  }

  carregarUser(user: User[] | undefined) {
    this.user = user;
  }

  
  converterUser(data: any) : User[] {
    let UserResposta = data;
    let user = [] ;

    let i = 0;
    for (i=0; i<UserResposta.length; i++) {
      let id : number = UserResposta[i].id;
      let name = UserResposta[i].name;
      let email = UserResposta[i].email;
      user.push(new User(id,name,email));
    }
    return user;
  }


}
