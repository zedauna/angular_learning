import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { User } from '../../models/user.model.js';
import { map, Observable, tap } from 'rxjs';

export interface Credentials {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})

export class LoginService {
  private http = inject(HttpClient);
  private BASE_URL = 'http://localhost:8000';

  user = signal<User | null | undefined>(undefined);

  login(credentials: Credentials): Observable<User | null | undefined> {
    return this.http.post(this.BASE_URL + '/sessions/login/', credentials).pipe(
      tap((result: any) => {
        localStorage.setItem('token', result['token']);
        const user = Object.assign(new User(), result['user']);
        this.user.set(user);
      }),
      map((result: any) => {
        return this.user();
      })
    );
  }

  getUser(): Observable<User | null | undefined> {
    return this.http.get('http://localhost:8000/sessions/me/').pipe(
      tap((result: any) => {
        const user = Object.assign(new User(), result);
        this.user.set(user);
      }),
      map((result: any) => {
        return this.user();
      })
    );
  }

  logout() {
    return this.http.get('http://localhost:8000/sessions/logout/').pipe(
      tap((result: any) => {
        localStorage.removeItem('token');
        this.user.set(null);
      })
    );
  }

}
