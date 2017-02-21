import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {fadeInAnimation} from "../../../route.animation";

@Component({
  selector: 'ms-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  host: {
    '[@fadeInAnimation]': 'true'
  },
  animations: [ fadeInAnimation ]
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  login() {
    this.router.navigate(['/']);
  }

}
