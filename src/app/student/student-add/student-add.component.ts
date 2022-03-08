import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css'],
})
export class StudentAddComponent implements OnInit {
  newStudent: Student = new Student(0, '', '', '');
  constructor(public studtentSer: StudentService) {}

  add() {
    this.studtentSer
      .addStudent(this.newStudent)
      .subscribe((a) => console.log(a));
  }

  ngOnInit(): void {}
}
