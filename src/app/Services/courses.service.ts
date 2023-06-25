import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  baseURL = 'https://e-learning-api-sc6i.onrender.com/'

  headers:any;
  constructor(private http:HttpClient) { 
    this.headers = new HttpHeaders({
      "Authorization" : "Bearer "+localStorage.getItem("token")
    })
  }

  // get paginated courses 
  getCourses(pageIndex: number, pageSize: number, searchBy: string, orderBy: string) {
    const params = new HttpParams()
      .set('pageIndex',pageIndex) 
      .set('pageSize',pageSize) 
      .set('searchBy',searchBy) 
      .set('orderBy',orderBy) 
    
    return this.http.get(this.baseURL+'api/Course/AdminCourses', {params})
  }
  deleteCourse(id: number) {
    return this.http.delete(this.baseURL+'CoursePage/Delete/'+id)
  }
}
