import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService, AlertService } from '../../_services';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading = false;
  submitted = false;
  invalidUser = false;
  invalidId = false;
  loginModel: any = {};
  showOverlay = false;
  displayError = false;
  passwordRegEx = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})');
  displayMessage: any;
  returnUrl: string;
  userDto: any = {};
  constructor(private auth: AuthenticationService,
    private route: ActivatedRoute,
        private router: Router,
    private alertService: AlertService) { }

  ngOnInit() {
    this.returnUrl = '/';
  }
  login() {
      console.log("login call::");
      this.submitted = true;

      // stop here if form is invalid
     

      this.loading = true;
      this.auth.login(this.loginModel.username,this.loginModel.password)
          .subscribe(
              data => {
                  this.router.navigate(['/home']);
              },
              error => {
                  this.alertService.error(error);
                  this.loading = false;
              });
  }
}
