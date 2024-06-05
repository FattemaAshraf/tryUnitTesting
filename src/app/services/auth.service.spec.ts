import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { LoginService } from './login.service';

describe('AuthService', () => {
  let service: AuthService;

  //before every test they make instance new to before it func to reset the instance
  //clean up the instance brfore each test
  beforeEach(() => {
    // TestBed.configureTestingModule({});
    // service = TestBed.inject(AuthService);
    service = new AuthService(new LoginService());

    //difference between
    //Dependency Injection (TestBed): When using TestBed.inject(AuthService), Angular's dependency injection system is utilized. This approach allows for more flexibility, such as using mocked or stubbed versions of services, and ensures that all dependencies are provided and managed by Angular.
    //Manual Instantiation: Creating the service manually (new AuthService(new LoginService())) bypasses Angular's dependency injection system. This can be simpler for straightforward tests but lacks the flexibility and robustness of the dependency injection system.
  });
  //after every each clean up local
  // afterEach(() => {
  //   localStorage.removeItem('token');
  // });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('must return true if there is a token in localStorage', () => {
    //localStorage.setItem('token', '#');
    //expect(service.isAuth()).toBeTruthy();
    expect(!service.isAuth()).toBeFalsy();
  });
});
