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
import { SpeakerService } from 'src/app/services/speaker.service';
import { Speaker } from 'src/app/_models/speaker';

@Component({
  selector: 'app-speaker-list',
  templateUrl: './speaker-list.component.html',
  styleUrls: ['./speaker-list.component.css'],
})
export class SpeakerListComponent implements OnInit, OnChanges, OnDestroy {
  constructor(public speakerSer: SpeakerService) {}
  sub: Subscription | null = null;
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  speakerDetailsId = 0;
  @Output() speakerEditId: EventEmitter<number> = new EventEmitter<number>();
  @Output() speakerDetailId: EventEmitter<number> = new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges): void {
    this.sub = this.speakerSer
      .getAllSpeakers()
      .subscribe((a) => (this.speakers = a));
  }

  speakers: Speaker[] = [];
  ngOnInit(): void {
    this.speakerSer.getAllSpeakers().subscribe((a) => (this.speakers = a));
  }

  load() {
    this.speakerSer.getAllSpeakers().subscribe((a) => (this.speakers = a));
  }
  edit(id: number) {
    this.speakerEditId.emit(id);
  }
  showDetails(id: number) {
    this.speakerDetailId.emit(id);
  }
  deleteStudent(id: number) {
    this.speakerSer.deleteSpeaker(id).subscribe((a) => console.log(a));
  }
}
