import { Component, OnInit } from '@angular/core';
import { SpeakerService } from 'src/app/services/speaker.service';
import { Speaker } from 'src/app/_models/speaker';

@Component({
  selector: 'app-speaker-add',
  templateUrl: './speaker-add.component.html',
  styleUrls: ['./speaker-add.component.css'],
})
export class SpeakerAddComponent implements OnInit {
  newSpeaker: Speaker = new Speaker(0, '', '', '', '', '');
  file: any;
  constructor(public speakerSer: SpeakerService) {}

  ngOnInit(): void {}
  onFileChange(s: any) {
    this.file = s.target.files[0];
  }
  add() {
    this.speakerSer
      .addSpeaker(this.newSpeaker, this.file)
      .subscribe((a) => console.log(a));
  }
}
