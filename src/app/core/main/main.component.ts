import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
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
