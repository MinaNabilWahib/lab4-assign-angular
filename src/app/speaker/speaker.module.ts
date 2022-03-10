import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeakerAddComponent } from './speaker-add/speaker-add.component';
import { SpeakerEditComponent } from './speaker-edit/speaker-edit.component';
import { SpeakerDetailsComponent } from './speaker-details/speaker-details.component';
import { SpeakerListComponent } from './speaker-list/speaker-list.component';
import { FormsModule } from '@angular/forms';
import { SpeakerHomeComponent } from './speaker-home/speaker-home.component';

@NgModule({
  declarations: [
    SpeakerAddComponent,
    SpeakerEditComponent,
    SpeakerDetailsComponent,
    SpeakerListComponent,
    SpeakerHomeComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    SpeakerAddComponent,
    SpeakerEditComponent,
    SpeakerDetailsComponent,
    SpeakerListComponent,
  ],
})
export class SpeakerModule {}
