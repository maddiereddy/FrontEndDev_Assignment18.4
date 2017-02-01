/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BaseRequestOptions, Response, ResponseOptions, Http } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { UsersService } from './users.service';
import { UsersHttpService } from './users.http.service';
import { MockUsers } from './users.data.mock'; //mock data

/*
 The MockBackend captures the http requests and generates an observable
 and MockConnnection captures the request and routes it to pass it the response we want
 In the providers, instead of overriding UsersHttpService, we override Http.
 Finally, we inject MockBackend. Then, we build the Response and use MockConnection to capture the request.
*/

describe('Service: Users', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UsersService,
        UsersHttpService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions],
        },
      ]
    });
  });

  //check if a UsersService is created
  it('should create a service', inject([UsersService], (service: UsersService) => {
    expect(service).toBeTruthy();
  }));

  //check to see if mock data is returned correctly
  it('should return users', inject([UsersService, MockBackend], (service: UsersService, backend: MockBackend) => {
    let response = new ResponseOptions({
      body: JSON.stringify(MockUsers)
    });

    const baseResponse = new Response(response);

    backend.connections.subscribe(
        (c: MockConnection) => c.mockRespond(baseResponse)
    );

    return service.getUsers().subscribe( data => {
      expect(data).toEqual(MockUsers);
    });
  }));
});
