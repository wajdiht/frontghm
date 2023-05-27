import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private api =  'http://localhost:8080'

  constructor(private router:Router,private http: HttpClient) { }
 
login(username:string, password:string): Observable<boolean> {
  return this.http.post<any>(`${this.api}/authenticate`, {username,password})
    .pipe(
      map(response => {
        // If the login request is successful, save the token in local storage
        if (response && response.token) {
          localStorage.setItem('accessToken', response.token);
          localStorage.setItem('currentUserId', response.user.id);
          localStorage.setItem('currentUserUsername', response.user.username);
          return true;
        }
        return false;
      }),
      catchError(() => of(false)) // Handle errors and return false
    );
}

logout(): void {
  // Clear the token from local storage
  localStorage.removeItem('accessToken');
  localStorage.removeItem('currentUserId');
  localStorage.removeItem('currentUserUsername');
  localStorage.removeItem('currentUserPersonId');
}

isLoggedIn(): boolean {
  // Check if the token exists in local storage
  return !!localStorage.getItem('accessToken');
}

isNotOnRegisterPage(): boolean {
  const currentRoute = this.router.url;
  return currentRoute !== '/Registre';
}


// showRegisterPage() {
//   this.showRegister = true;
// }

// isRegisterPageVisible() {
//   return this.showRegister;
// }
}