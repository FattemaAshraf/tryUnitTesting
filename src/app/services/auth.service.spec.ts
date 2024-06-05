import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  //before every test they make instance new to before it func to reset the instance
  //clean up the instance brfore each test
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });
  //after every each clean up local
  afterEach(() => {
    localStorage.removeItem('token');
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('must return true if there is a token in localStorage', () => {
    localStorage.setItem('token', '#');
    expect(service.isAuth()).toBeTruthy();
  });
});
