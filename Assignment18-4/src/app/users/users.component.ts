import { Component } from '@angular/core';
import { UsersService } from '../users.service'

//As this is just a testing assignment, I've created a bare bones Component here
//UsersService is injected in the UsersComponent to retrieve a list of users
//They are rendered in the html view

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users: any[];

  constructor(usersService: UsersService) {
    usersService.getUsers().subscribe(
        users => this.users = users)
  }

}
