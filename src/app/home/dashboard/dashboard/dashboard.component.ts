import { Component, OnInit } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { User } from 'src/app/_models';
import { UserService, AuthenticationService } from 'src/app/_services';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  madTableColumns: string[] = ['id', 'user', 'name', 'delete'];
  madUserList: MatTableDataSource<any>;
  handler: boolean = false;
  currentUser: User;
    currentUserSubscription: Subscription;
    users: User[] = [];
    constructor(
      private authenticationService: AuthenticationService,
      private userService: UserService
  ) {
      this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
          this.currentUser = user;
      });
  }

  ngOnInit() {
    this.loadAllUsers();
    this.getUser();
}
getUser()
{
  this.userService.getAll().pipe(first()).subscribe(users => {
    this.madUserList = new MatTableDataSource( users) });
    this.loadAllUsers();
}
ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe();
}

deleteUser(id: number) {
    this.userService.delete(id).pipe(first()).subscribe(() => {
        this.getUser();
    });
}
updateUser(id: number) {
  this.userService.delete(id).pipe(first()).subscribe(() => {
      this.loadAllUsers()
  });
}

private loadAllUsers() {
    this.userService.getAll().pipe(first()).subscribe(users => {
        this.users = users;
    });
}

toggleHandler(){
    this.handler= !this.handler;
}
}