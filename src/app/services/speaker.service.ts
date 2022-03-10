import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Speaker } from '../_models/speaker';

@Injectable({
  providedIn: 'root',
})
export class SpeakerService {
  // baseurl: string = 'http://localhost:8080/speakers/';

  getAllSpeakers() {
    return this.http.get<Speaker[]>(this.baseurl);
  }

  addSpeaker(speaker: Speaker, file: File) {
    let frm: FormData = new FormData();
    frm.append('userName', speaker.userName);
    frm.append('email', speaker.email);
    frm.append('password', speaker.password);
    frm.append('role', speaker.role);
    frm.append('image', file, file.name);
    return this.http.post<Speaker>(this.baseurl, frm);
  }

  getSpeakerById(id: number) {
    return this.http.get<Speaker>(this.baseurl + id);
  }

  updateSpeaker(speaker: Speaker) {
    return this.http.put<Speaker>(this.baseurl, speaker);
  }
  deleteSpeaker(id: number) {
    return this.http.delete<Speaker>(this.baseurl + id);
  }

  constructor(
    public http: HttpClient,
    @Inject('baseUrl') public baseurl: string
  ) {
    this.baseurl += 'speakers/';
  }
}
