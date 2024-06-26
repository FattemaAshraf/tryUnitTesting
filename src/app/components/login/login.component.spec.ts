import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { AuthService } from '../../services/auth.service';
import { HttpClientModule } from '@angular/common/http';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let auth: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      //test bed make you create module with declaretions and inports and providers
      imports: [LoginComponent,HttpClientModule],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    auth = TestBed.inject(AuthService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('can Login', () => {
    expect(component.logIn('fatma', '123')).toBeTruthy();
  });
  it('can Login toggle', () => {
    expect(component.isLoggedIn).toBe(false,'false at 1 fr');
    component.isLogin();
    expect(component.isLoggedIn).toBe(true,'clicked');
    component.isLogin();
    expect(component.isLoggedIn).toBe(false,'clicked second');


  });
  it('can Login toggle loginState', () => {
    // check string like this or not
    expect(component.loginState).toMatch(/out/)
    component.isLogin()
    expect(component.loginState).toMatch(/in/)
  });

});
