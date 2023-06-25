import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActiveService {

  private BaseURL="https://e-learning-api-sc6i.onrender.com/api";
  constructor( private http:HttpClient ) {

  }

   SignUp(Data:any) {
     return this.http.post(`${this.BaseURL}/signup`,Data);
   }
   Signin(Data:any) {
   return this.http.post(`${this.BaseURL}/Login/api/adminLogin`,Data);
   }

   isLoggedIn():any {
    return localStorage.getItem('ngx-webstorage|token');
  }

   removeToken() {
    localStorage.clear()
   }
}
