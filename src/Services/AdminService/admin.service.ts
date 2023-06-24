import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  baseURL = 'https://localhost:7249/'

  constructor(private http: HttpClient) {}

  getCardStatistics() {
    return;
  }

  getCoursesPages(
    pageIndex: number,
    pageSize: number,
    searchBy: string,
    orderBy: string
  ) {
    const params = new HttpParams()
      .set('pageIndex', pageIndex)
      .set('pageSize', pageSize)
      .set('searchBy', searchBy)
      .set('orderBy', orderBy);


    
    return this.http.get(this.baseURL + 'api/Course/AdminCourses', { params });
  }

  getUsersPages(
    pageIndex: number,
    pageSize: number,
    searchBy: string,
    orderBy: string
  ) {
    const params = new HttpParams()
      .set('pageIndex', pageIndex)
      .set('pageSize', pageSize)
      .set('searchBy', searchBy)
      .set('orderBy', orderBy);

    return this.http.get(this.baseURL + 'api/User', { params });
  }

  deleteCourse(id: number) {
    return this.http.delete(this.baseURL + 'CoursePage/Delete/' + id);
  }

  deleteUser(id: string): Observable<object> {
    const params = new HttpParams().set('id', id);
    return this.http.delete(this.baseURL + 'api/User/delete-user', { params });
  }
}
