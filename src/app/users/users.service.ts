import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestCreate, ResponseUser, ResponceCreate } from './users.model';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url = "https://reqres.in/api/users" 
  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<ResponseUser>{
    return this.http.get<ResponseUser>(this.url);
  }
  createUser(request: RequestCreate): Observable<ResponceCreate>{
    return this.http.post<ResponceCreate>(this.url, request);
  }
}
