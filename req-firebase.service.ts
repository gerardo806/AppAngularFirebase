import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection } from 'firebase/firestore';
import {QueriesDb} from '../../repositories/queriesDb';
import {FirebaseApp} from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class ReqFirebaseService implements QueriesDb{
  private readonly app : Firestore;
  constructor(app: Firestore) {
    this.app = app;
  }

  getAll<P>(): Promise<P> {
        throw new Error('Method not implemented.');
    }
    getOne<Q>(id: string): Promise<Q> {
        throw new Error('Method not implemented.');
    }

    async save(data: any, collectionName: string): Promise<boolean> {
      try {
        await addDoc(collection(this.app, collectionName), data);
        return true;
      } catch (error) {
        console.error("Error adding document: ", error);
        return false;
      }
    }
    delete<T>(id: string): Promise<T> {
        throw new Error('Method not implemented.');
    }
}
