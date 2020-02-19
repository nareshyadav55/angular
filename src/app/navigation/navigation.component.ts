import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
  }
  logout() {
    console.log("logout::");
    // remove user from local storage to log user out
    this.auth.logout();
}
}
