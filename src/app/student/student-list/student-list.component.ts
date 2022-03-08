import {
  Component,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  EventEmitter,
} from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements OnInit, OnChanges {
  constructor(public studentSer: StudentService) {}

  studentDetailsId = 0;
  @Output() studentEditId: EventEmitter<number> = new EventEmitter<number>();
  @Output() studentDetailId: EventEmitter<number> = new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges): void {
    this.studentSer.getAllStudents().subscribe((a) => (this.students = a));
  }

  students: Student[] = [];
  ngOnInit(): void {
    this.studentSer.getAllStudents().subscribe((a) => (this.students = a));
  }

  load() {
    this.studentSer.getAllStudents().subscribe((a) => (this.students = a));
  }
  edit(id: number) {
    this.studentEditId.emit(id);
  }
  showDetails(id: number) {
    this.studentDetailId.emit(id);
  }
}
