import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css'],
})
export class StudentHomeComponent implements OnInit {
  constructor() {}

  studentEditId = 0;
  studentDetailId = 0;
  ngOnInit(): void {}
  editIdPass(id: number) {
    this.studentEditId = id;
  }
  detailsIdPass(id: number) {
    // console.log(id);
    this.studentDetailId = id;
  }
}
