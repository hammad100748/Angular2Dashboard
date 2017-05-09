import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/UserService/user.service";
import {Router} from '@angular/router'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private _user:UserService,private router: Router) { }

  ngOnInit() {

  }

  login(user:any){
    this._user.loginUser(user)
      .subscribe(
        user => {
          // Emit list event
          console.log(user)
          this.router.navigate(['dashboard']);
        },
        err => {
          // Log errors if any
          console.log(err);
        });
  }

}
