import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StudentBean } from './app.component.model';

@Injectable()
export class AppService{
    constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8080';
  
   public HttpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json',
       'Access-Control-Allow-Origin':'http://localhost:4200'
     })
   };

   getStudents() {
    return this.http.get<StudentBean[]>(this.baseUrl + '/students');
  }

  getStudent(studentId: string) {
      console.log("--"+studentId);
    return this.http.get<StudentBean>(this.baseUrl + '/student/' + studentId);
  }
  updateStudent(studentBean: StudentBean) {
    console.log("--"+studentBean.gender);
    return this.http.put(this.baseUrl + '/student', studentBean, this.HttpOptions);
  }
  createStudent(studentBean: StudentBean) {
    console.log("--"+studentBean.gender);
    return this.http.post(this.baseUrl + '/students', studentBean, this.HttpOptions);
  }
  deleteStudent(studentId: number) {
    return this.http.delete(this.baseUrl + '/students/'+ studentId);
  }
}