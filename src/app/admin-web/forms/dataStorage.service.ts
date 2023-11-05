import { Injectable } from "@angular/core";
import { UsersService } from "./users.service";
import { collection, Firestore, addDoc, getDoc, getDocs } from '@angular/fire/firestore';
import { User } from "./user.model";
import { setLogLevel } from "@angular/fire/app";

@Injectable({providedIn: 'root'})
export class DataStorageService {

  constructor(private usersService: UsersService, private readonly firestore: Firestore) {}

  async addUser(user: User) {
    // if (!user) return;

    setLogLevel('debug')


    const userCollection = collection(this.firestore, 'users');
    console.log(userCollection);
    try {
      const result = await addDoc(userCollection, user);
      console.log(result);
    } catch(err) {
      console.log(err)
    }
  }

  async getUsers() {
    setLogLevel('debug')

    const userCollection = collection(this.firestore, 'users');
    try {
      const result = await getDocs(userCollection);
      console.log(result);
    } catch(err) {
      console.log(err);
    }
  }

  async getUser(index) {
    setLogLevel('debug')

    const userCollection = collection(this.firestore, 'users');
    try {
      const result = await getDocs(userCollection);
      console.log(result);
    } catch(err) {
      console.log(err);
    }
  }

}
