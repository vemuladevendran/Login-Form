import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isPasswordVisible = false;


  constructor() { }

  ngOnInit(): void {
  }

  toggelPasswordType(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }




}
