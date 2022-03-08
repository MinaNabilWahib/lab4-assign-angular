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
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css'],
})
export class StudentDetailsComponent implements OnInit, OnChanges {
  constructor(public studentSer: StudentService) {}
  @Input() studentId: number = 0;

  studentDetails: Student = new Student(0, '', '', '');

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['studentId'].isFirstChange()) {
      this.studentSer
        .getStudentById(this.studentId)
        .subscribe((a) => (this.studentDetails = a));
    }
  }

  ngOnInit(): void {}
}
