import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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

}
