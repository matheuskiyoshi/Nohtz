import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { first } from "rxjs";
import { User } from "src/app/modules/users/models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly API = 'https://nohtz-api.onrender.com/users/register';

  constructor(private http: HttpClient) { }

  create(user: User){
    return this.http.post(this.API, user).pipe(first());
  }

}
