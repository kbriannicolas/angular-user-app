import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserupdateService {

  private apiUrl = 'https://apiusers-1-v3146811.deta.app/users/';

  constructor(private http: HttpClient) { }

  updateUser(user: User): Observable<User> {
    const url = `${this.apiUrl}`;
    return this.http.put<User>(url, user);
  }

}
