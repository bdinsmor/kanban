import { Component, OnInit } from '@angular/core';
import {fadeInAnimation} from "../../../route.animation";
import {Router} from "@angular/router";

@Component({
  selector: 'ms-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  host: {
    '[@fadeInAnimation]': 'true'
  },
  animations: [ fadeInAnimation ]
})
export class RegisterComponent implements OnInit {

  name: string;
  email: string;
  password: string;
  passwordConfirm: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  register() {
    this.router.navigate(['/']);
  }

}
