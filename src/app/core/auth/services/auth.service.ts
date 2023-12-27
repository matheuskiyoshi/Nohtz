import { Injectable } from '@angular/core';
import { UserToken } from '../models/user-token.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userToken?: UserToken;
  private userName?: string;

  setUserToken(token: UserToken): void {
    this.userToken = token;
  }

  getUserToken(): UserToken | undefined {
    return this.userToken;
  }

  setUserName(name: string): void{
    this.userName = name;
  }

  getUserName(): string | undefined {
    return this.userName;
  }

  logout(){
    this.userToken = undefined;
    this.userName = undefined;
  }
}
