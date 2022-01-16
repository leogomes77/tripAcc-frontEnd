import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { TokenStorageService } from './globals';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private http: HttpClient,private tokenstorage:TokenStorageService) {
   }


  login(email: string, password: string): Observable<any> {
    return this.http.post('http://localhost:3001/auth/signin' ,{
      email,
      password
    }, httpOptions);
  }



  register(email: string, name:string, password: string): Observable<any> {
    return this.http.post('http://localhost:3001/auth/signup' , {
      email,
      name,
      password
    }, httpOptions );
    
  }

  group(name: string, descricao:string, moeda: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.tokenstorage.getToken()}`
    })
    const httpOptions = {headers:headers};
    return this.http.post('http://localhost:3001/v1/groups/', {
      name,
      descricao,
      moeda 
    }, httpOptions) ;
    
  }

  getGroup(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.tokenstorage.getToken()}`
    })
    const httpOptions = {headers:headers};
    return this.http.get('http://localhost:3001/v1/groups/', httpOptions) ;
    
  }

  removegroup(id: number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.tokenstorage.getToken()}`
    })
    const httpOptions = {headers:headers};
    return this.http.delete('http://localhost:3001/v1/groups/'+ id, httpOptions) ;
    
  }
}