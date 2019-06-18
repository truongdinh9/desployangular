import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly USER_URL = 'http://localhost:8080/api/test/user';
  private readonly ADMIN_URL = 'http://localhost:8080/api/test/admin';

  constructor(private http: HttpClient) {
  }

  getUser(): Observable<string> {
    return this.http.get(this.USER_URL, {responseType: 'text'});
  }

  getAdmin(): Observable<string> {
    return this.http.get(this.ADMIN_URL, {responseType: 'text'});
  }
}
