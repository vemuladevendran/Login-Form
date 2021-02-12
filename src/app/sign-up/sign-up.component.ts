import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  isPasswordVisible = false;

  // formdata = {
  //   name: 'devendran',
  //   email: 'devendranvemula@gmail.com',
  //   mobile: '5765765564',
  //   dob: '4345645',
  //   password: '641564564634',
  //   RetypePassword: '575356715656',
  // };

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  toggelPasswordType(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  // tslint:disable-next-line: typedef
  handlesubmit(f: any) {
    // console.log(this.formdata);
    console.log(f.value);
    this.router.navigate(['/userlist']);

  }

}
