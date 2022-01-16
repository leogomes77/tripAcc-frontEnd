import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/api.service';

@Component({
  selector: 'app-group-create',
  templateUrl: './group-create.component.html',
  styleUrls: ['./group-create.component.css']
})
export class GroupCreateComponent implements OnInit {

  form: any = {
    name: null,
    descricao: null,
    moeda: null
  };

  constructor(public apiService: AuthService,private router: Router) { }

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

  onCreateGroup(){
    const { name,descricao, moeda } = this.form;
    this.apiService.group(name,descricao,moeda).subscribe(
        data => {console.log('success', data);this.router.navigate(['/group'])
      },
        error => { console.log('oops', error)  /*modal*/ }
    )
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
