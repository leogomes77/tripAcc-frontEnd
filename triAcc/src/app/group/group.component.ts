import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../shared/api.service';
import { Router } from '@angular/router';
import { Grupo } from 'src/models/grupo.model';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  form: any = {
    id : null,
    nome: null,
    descricao: null,
    moeda:null
  };





  constructor(public apiService: AuthService,private router: Router) {
  }

  grupo : Grupo[] | undefined;

  id : any;

  ngOnInit(): void {
    this.verificaDarkmode();
    this.onListGroup();
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
  removeGroup(id : number){
    this.apiService.removegroup(id).subscribe(
        data => {console.log('success', data);
        window.location.reload();
      },
        error => { console.log('oops', error)  /*modal*/ }
    )
  }

  onListGroup(){
    this.apiService.getGroup().subscribe(
        data => {console.log('success', data);
        return this.carregarGrupo(data);
      },
        error => { console.log('oops', error)  /*modal*/ }
    )
  }

  carregarGrupo(grupo: Grupo[] | undefined) {
    this.grupo = grupo;
  }

  getID(id : any){
    this.id = id;
  }

  
  converterGrupos(data: any) : Grupo[] {
    let GruposResposta = data;
    let grupos = [] ;

    let i = 0;
    for (i=0; i<GruposResposta.length; i++) {
      let id : number = GruposResposta[i].id;
      let name = GruposResposta[i].name;
      let descricao = GruposResposta[i].descricao;
      let moeda = GruposResposta[i].moeda;
      grupos.push(new Grupo(id,name,descricao, moeda));
    }
    return grupos;
  }

  
  editGroup(){
    const {nome,descricao,moeda } = this.form;
    this.apiService.editGroup(this.id,nome,descricao,moeda).subscribe(
        data => {console.log('success', data);
        this.router.navigate(['/group'])
        window.location.reload();
      },
        error => { console.log('oops', error)  /*modal*/ }
    )
  }

}
