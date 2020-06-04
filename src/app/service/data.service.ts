import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Users } from '../classes/users';
import { Router } from '@angular/router';
import swal from 'sweetalert';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient, private router: Router) { }

  getData(): Observable<any> {
    return this.http.get('https://withackfunctions.azurewebsites.net/api/CovidSummary')
  }

  createUsers(user: Users[]) {
    return this.http.post('http://withackfunctions.azurewebsites.net/api/UserRegistration', user).
      pipe(
        map((data: any) => {
          console.log("Success:", user)
          swal("Success!", "Registered Successfully!", "success");    /*alert*/
          this.router.navigate(['/login']);
          return data;
        }), catchError(error => {
          return throwError('Something went wrong!');
        })
      )
  }

  validateUsers(user) {
    return this.http.get('http://withackfunctions.azurewebsites.net/api/UserLogin/' + user.username + '/' + user.password).
      pipe(
        map((data: any) => {
          swal("Success!", "Logged in Successfully!", "success");      /*alert*/
          this.router.navigate(['/upload']);
          return data;
        }), catchError(error => {
          return throwError('Something went wrong!');
        })
      )
  }
}

