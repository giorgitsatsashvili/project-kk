import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../shared/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
usersData ='assets/data/users.json';
  constructor( private user: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.user.get<User[]>(this.usersData);
}
}
