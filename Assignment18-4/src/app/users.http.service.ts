import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

//This is a basic http service which calls a placeholder REST api

@Injectable()
export class UsersHttpService {

  constructor(private http: Http) { }

  get() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}