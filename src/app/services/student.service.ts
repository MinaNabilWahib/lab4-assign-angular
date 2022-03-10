import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../_models/student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  // baseurl: string = 'http://localhost:8080/students/';

  getAllStudents() {
    return this.http.get<Student[]>(this.baseurl);
  }

  addStudent(student: Student) {
    return this.http.post<Student>(this.baseurl, student);
  }

  getStudentById(id: number) {
    return this.http.get<Student>(this.baseurl + id);
  }

  updateStudent(student: Student) {
    return this.http.put<Student>(this.baseurl, student);
  }
  deleteStudent(id: number) {
    return this.http.delete<Student>(this.baseurl);
  }

  constructor(
    public http: HttpClient,
    @Inject('baseUrl') public baseurl: string
  ) {
    this.baseurl += 'students/';
  }
}
