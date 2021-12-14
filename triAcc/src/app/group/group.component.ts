import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

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
