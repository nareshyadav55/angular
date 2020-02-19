import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticationService, AlertService, UserService } from '../../_services';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  regModel: any = {};
  registerModel: any = {};
  loading = false;
  submitted = false;
  user:any=[];
  displayText: any;
  constructor( private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private alertService: AlertService) {
      // if (this.authenticationService.currentUserValue) { 
      //   this.router.navigate(['/']);
    //}
      // redirect to home if already logged in
      if (this.authenticationService.currentUserValue) { 
        this.router.navigate(['/login']);
    }
     }

  ngOnInit() {
  }
  onSubmit() {
  
    this.submitted = true;
    console.log("regModel");
    console.log(this.regModel);
    // stop here if form is invalid
    // if (this.regModel.invalid) {
    //     return;
    // }

    this.loading = true;
    this.userService.register(this.regModel)
    .pipe(first())
        .subscribe(
            data => {
              console.log("reg1"+data)
              this.alertService.success('Registration successful', true);
                this.router.navigate(['/login']);
            },
            error => {
              this.alertService.error(error);
                this.loading = false;
            });
}
}
