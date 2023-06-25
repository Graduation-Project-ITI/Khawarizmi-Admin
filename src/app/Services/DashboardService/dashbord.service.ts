import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashbordService {

  private BaseURL="https://e-learning-api-sc6i.onrender.com/api";
  constructor(private http:HttpClient)
  {
          
  }
  
  getdata()
  {
    return this.http.get(`${this.BaseURL}/Admin`);
  }
}
