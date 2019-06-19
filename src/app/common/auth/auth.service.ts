import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {JwtResponse} from '../jwt/jwt-response';

const HTTP_OPTIONS = {
  header: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly LOGIN_URL = 'http://localhost:8080/api/auth/signin';
  private readonly SIGNUP_URL = 'http://localhost:8080/api/auth/signup';

  constructor(private http: HttpClient) {
  }

  attempAuth(credentials: any): Observable<JwtResponse> {
    // @ts-ignore
    return this.http.post<JwtResponse>(this.LOGIN_URL, credentials, HTTP_OPTIONS);
  }

  signUp(info: any): Observable<string> {
    // @ts-ignore
    return this.http.post<string>(this.SIGNUP_URL, info, HTTP_OPTIONS);
  }
}
