import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentListComponent } from './student-list/student-list.component';
import { FormsModule } from '@angular/forms';
import { StudentHomeComponent } from './student-home/student-home.component';

@NgModule({
  declarations: [
    StudentAddComponent,
    StudentEditComponent,
    StudentDetailsComponent,
    StudentListComponent,
    StudentHomeComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    StudentAddComponent,
    StudentEditComponent,
    StudentDetailsComponent,
    StudentListComponent,
  ],
})
export class StudentModule {}
