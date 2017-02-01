import { Injectable } from '@angular/core';
import { UsersHttpService } from './users.http.service';
import 'rxjs/add/operator/map';

//The UsersService calls the http service and gets data to pass onto calling Components

@Injectable()
export class UsersService {

  constructor(private usersHttp: UsersHttpService) { }

  getUsers() {
    return this.usersHttp.get().map(data => {
      return data.json();
    });
  }
}