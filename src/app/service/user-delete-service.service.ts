import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDeleteServiceService {

  private usersUrl = 'https://apiusers-1-v3146811.deta.app/users/';

  constructor(private http: HttpClient) {}

  deleteUser(userId: string): Observable<any> {
    const url = `${this.usersUrl}${userId}`;
    return this.http.delete(url);
  }
}
