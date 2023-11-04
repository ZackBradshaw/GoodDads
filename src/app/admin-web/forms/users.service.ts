import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { User } from "./user.model";

@Injectable({providedIn: 'root'})
export class UsersService {
  usersChanged = new Subject<User[]>();

  private users: User[] = [];

  getUsers() {
    return this.users.slice();
  }

  getUser(index: number) {
    return this.users[index];
  }

  addUser(user: User) {
    this.users.push(user);
    this.usersChanged.next(this.users.slice());
  }

}
