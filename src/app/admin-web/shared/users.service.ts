import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { User } from "../forms/user.model";
import { DataStorageService } from "./dataStorage.service";

@Injectable({providedIn: 'root'})
export class UsersService {
  // usersChanged = new Subject<User[]>();

  constructor(private dataStorageService: DataStorageService) {}

  getUsers(): Promise<User[]>{
    return this.dataStorageService.getAll('users') as Promise<User[]>;
  }

  getUser(id: string): Promise<User> {
    return this.dataStorageService.getById('users', id) as Promise<User>;
  }

  addUser(user: User) {
    return this.dataStorageService.add('users', user) as Promise<User>;
  }

}
