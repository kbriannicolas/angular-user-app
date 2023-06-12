import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from "./../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class DetailuserService {

  private apiUrl = 'https://apiusers-1-v3146811.deta.app/users/';

  constructor(private http: HttpClient) { }

  getUser(userId: string): Observable<User> {
    const url = `${this.apiUrl}${userId}`;
    return this.http.get<User>(url);
  }
}
