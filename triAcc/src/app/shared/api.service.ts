import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { observable, Observable } from 'rxjs';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post('http://localhost:3001/auth/signin' , {
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

  /*getGroups(){

    var resposta = this.httpClient.get('http://localhost:3001/v1/groupusers');
    console.log(resposta);
    return resposta;
  }
*/

}