import {
  Component,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements OnInit, OnChanges, OnDestroy {
  constructor(public studentSer: StudentService) {}
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
  sub: Subscription | null = null;
  studentDetailsId = 0;
  @Output() studentEditId: EventEmitter<number> = new EventEmitter<number>();
  @Output() studentDetailId: EventEmitter<number> = new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges): void {
    this.sub = this.studentSer
      .getAllStudents()
      .subscribe((a) => (this.students = a));
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
  deleteStudent(id: number) {
    this.studentSer.deleteStudent(id).subscribe((a) => console.log(a));
  }
}
