import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
 export declare interface Post {
  userId:number,
  id:number,
  title:string,
  body:string
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private loginService: LoginService, private httpClient:HttpClient ) {}
  isAuth(): boolean {
    return this.loginService.isLogin();
  }
  canLogin(userName: string, password: string): boolean {
    if (userName && password) {
      return true;
    } else {
      return false;
    }
  }
  getPost(postId:number):Observable<Post>{
return this.httpClient.get<Post>(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  }
}
