import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {
  @Input() openPopUp: boolean = false

  constructor( private serviceAuthetication: AuthenticationService ) { }

  ngOnInit(): void {
  }

  loggout(){
    this.serviceAuthetication.Loggout()
  }

}
