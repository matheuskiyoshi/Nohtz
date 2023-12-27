import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap, throwError } from 'rxjs';
import { LoginCredentials } from '../models/login-credentials.model';
import { UserToken } from './../models/user-token.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiBaseUrl = 'https://nohtz-api.onrender.com/users/login';
  private userId!: string;
  private userToken?: UserToken;
  constructor(private http: HttpClient) {}

  public login(credentials: LoginCredentials): Observable<UserToken> {
    return this.http.post<UserToken>(this.apiBaseUrl, credentials)
      .pipe(
        tap((response: UserToken) => {
          this.userToken = response;
        }),
        catchError((error: HttpErrorResponse) => {
          let errorMessage = 'Erro desconhecido';
          if (error.error instanceof ErrorEvent) {
            errorMessage = `Erro: ${error.error.message}`;
          } else {
            if (error.status === 401) {
              errorMessage = 'Usuário ou senha incorretos';
            } else {
              errorMessage = `Código de erro: ${error.status}, mensagem: ${error.error.message}`;
            }
          }
          return throwError(errorMessage);
        })
      );
  }

  public isLoggedIn(): Observable<boolean> {
    return this.userToken ? of(true) : of(false);
  }

  public getUserId(): string{
    return this.userId;
  }
}
