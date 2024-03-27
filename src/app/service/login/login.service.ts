import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {    
   }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>('/login', { email , password }).pipe(
      map(resp => {
        this.processLoginResponse(resp, email, password);
        return resp;
      })
    )
  }

  processLoginResponse(data: any, email: string, password: string) {
    /*this.loggedIn = true;
    this.token = data.token;
    this.email = email;
    this.password = password;
    localStorage.setItem('token', data.token);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    let payload = this.parseJwt(this.token);
    this.roles = payload.roller;
    this.userId = payload.kullanicilarId;*/
  }



}
