import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  newUser: User = new User();
  errors: string[] = [];

  constructor(
    private _router: Router,
    private _userService: UserService
  ) { }

  ngOnInit() {
  }

  createUser(){
    this.errors = [];
    this._userService.create(this.newUser, (user) => {
      if(user.errors){
        for(let key of Object.keys(user.errors)) {
          let error = user.errors[key];
          this.errors.push(error.message);
        }
      } else {
        this._router.navigateByUrl('/dashboard');
      }
    });
  }

}
