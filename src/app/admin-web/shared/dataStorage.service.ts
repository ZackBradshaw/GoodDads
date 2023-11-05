import { Injectable } from "@angular/core";
// import { UsersService } from "./users.service";
import { collection, Firestore, addDoc, getDoc, getDocs, doc } from '@angular/fire/firestore';
import { User } from "../forms/user.model";
import { setLogLevel } from "@angular/fire/app";

@Injectable({providedIn: 'root'})
export class DataStorageService {

  constructor(private readonly firestore: Firestore) {}

  async add(collectionName: string, item: any) {


    const userCollection = collection(this.firestore, 'users');
    console.log(userCollection);
    try {
      const result = await addDoc(userCollection, item);
      return {
        id: result.id,
        ...item
      };
    } catch(err) {
      console.log(err)
    }
  }


  async getAll(collectionName: string) {

    const userCollection = collection(this.firestore, collectionName);
    try {
      const result = await getDocs(userCollection);
      return result.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      console.log(result.docs.map((doc) => doc.id))
    } catch(err) {
      console.log(err);
    }
  }

  async getById(collectionName: string, id: string) {
    const docRef = doc(this.firestore, `${collectionName}/${id}`)
    try {
      const result = await getDoc(docRef);
      console.log(result.data());
      return {
        id: result.id,
        ...result.data(),
      };
    } catch(err) {
      console.log(err);
    }
  }

}
