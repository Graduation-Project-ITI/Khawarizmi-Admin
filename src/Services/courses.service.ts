import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  baseURL = 'https://localhost:7249/api/Course/AdminCourses'

  constructor(private http:HttpClient) { }

  // get paginated courses 
  getCourses(pageIndex: number, pageSize: number, searchBy: string, orderBy: string) {
    const params = new HttpParams()
      .set('pageIndex',pageIndex) 
      .set('pageSize',pageSize) 
      .set('searchBy',searchBy) 
      .set('orderBy',orderBy) 
    
    return this.http.get(this.baseURL, {params})
  }
}
