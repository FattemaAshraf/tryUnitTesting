import { TestBed } from '@angular/core/testing';

import { AuthService, Post } from './auth.service';
import { LoginService } from './login.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('AuthService', () => {
  let service: AuthService;

  //before every test they make instance new to before it func to reset the instance
  //clean up the instance brfore each test
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(AuthService);
    //service = new AuthService(new LoginService(), new HttpClient());

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

  //try Spay to fake data
  it('getting fake data using spay', () => {
    //basName is optional, methodNames is array of meth
    const mySpy = jasmine.createSpyObj('', ['myAuth']);
    mySpy.myAuth.and.returnValue(new LoginService().isLogin() + 'x');
    expect(mySpy.myAuth()).toBe('truex', 'wrong Data!');
  });
  //entry level
  //to avoid asynchoronys timed out
  it('should get data post by postId successfully', (done: DoneFn) => {
    service.getPost(1).subscribe({
      next: (post) => {
        //console.log(post);
        expect(post.id).toEqual(1);
        //data is ready
        done();
      },
    });
  });
});

describe('AuthService - mock data', () => {
    let service: AuthService;
    let httpMock: HttpTestingController;
    let postMoka: Post = {
      userId: 2,
      id: 2,
      title: 'test',
      body: 'test',
    };
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
      });
      service = TestBed.inject(AuthService);
      httpMock = TestBed.inject(HttpTestingController);
    });

    it('mus get data as excpected mock data', () => {
      service.getPost(2).subscribe({
        next: (post) => {
          console.log(post);
          expect(post).toEqual(postMoka);
        },
      });
      //make rquest fake to check data and its fields
      let req = httpMock.expectOne(
        `https://jsonplaceholder.typicode.com/posts/2`
      );
      console.log(req.request.url)
      //CHECK METHOD
      expect(req.request.method).toEqual('GET');
      // CHECK URL ALSOO
      expect(req.request.url).toEqual('https://jsonplaceholder.typicode.com/posts/2');

      req.flush(postMoka);
      //check any requests not implemented
      httpMock.verify;
    });
});
