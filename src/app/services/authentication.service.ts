import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(
    public http: HttpClient,
    @Inject('baseUrl') public baseurl: string
  ) {
    this.baseurl += 'login/';
  }
  login(user: User) {
    return this.http.post(this.baseurl, user);
  }
}
