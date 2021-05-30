import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubFollowersService {

  constructor(private http:HttpClient) { }

  getAll(){
      return this.http.get<any>('https://api.github.com/users/mosh-hamedani/followers');
  }
}
