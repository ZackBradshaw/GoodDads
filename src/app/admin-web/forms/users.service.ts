import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { User } from "./user.model";
import { DataStorageService } from "./dataStorage.service";

@Injectable({providedIn: 'root'})
export class UsersService {
  // usersChanged = new Subject<User[]>();

  // private users: User[] = [];

  constructor(private dataStorageService: DataStorageService) {}

  getUsers() {
    // return this.users.slice();
    return this.dataStorageService.getUsers();
  }

  getUser(index: number) {
    // return this.users[index];
    return this.dataStorageService.getUser(index);
  }

  // addUser(user: User) {
  //   // this.users.push(user);
  //   // this.usersChanged.next(this.users.slice());
  // }

}
