import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from "./../models/user.model"

@Injectable({
  providedIn: 'root'
})
export class AdduserService {

  private apiUrl = 'https://apiusers-1-v3146811.deta.app/users/';

  constructor(private http: HttpClient) { }

  addUser(user: User): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }
}
