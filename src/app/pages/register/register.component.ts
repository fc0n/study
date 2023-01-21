import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  name: string = ''
  email: string = ''
  password: string = ''

  constructor( private serviceAuthetication: AuthenticationService) { }

  ngOnInit(): void {
  }

  onSignUp(email: string, password: string, name: string){
    this.serviceAuthetication.signUp(email, password, name)   
  }

}
