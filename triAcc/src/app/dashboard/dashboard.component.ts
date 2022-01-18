import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.verificaDarkmode();
  }

  //vars
  darkClass : any;

  verificaDarkmode(){
    if (localStorage.getItem('darkModeState')){
      this.darkMode();
    }else{
      this.normalMode();
    }
  }

  darkMode(){
    this.darkClass = 'hold-transition sidebar-mini dark-mode';
    localStorage.setItem("darkModeState", 'On');
  }

  normalMode(){
    this.darkClass = 'hold-transition sidebar-mini';
    localStorage.removeItem("darkModeState");
  }

}
