import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css'],
})
export class StudentEditComponent implements OnInit, OnChanges {
  @Input() studentId: number = 0;
  newStudent: Student = new Student(0, '', '', '');

  constructor(public studtentSer: StudentService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['studentId'].isFirstChange()) {
      this.studtentSer
        .getStudentById(this.studentId)
        .subscribe((a) => (this.newStudent = a));
    }
  }

  save() {
    this.studtentSer
      .updateStudent(this.newStudent)
      .subscribe((a) => console.log(a));
  }

  ngOnInit(): void {}
}
