import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { User } from '../../_models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: User = new User(false, '', '', '');

  constructor(public authSer: AuthenticationService) {}

  login() {
    this.authSer.login(this.user).subscribe((a) => {
      console.log(a);
      localStorage.setItem('token', (<any>a).token);
    });
  }

  ngOnInit(): void {}
}
