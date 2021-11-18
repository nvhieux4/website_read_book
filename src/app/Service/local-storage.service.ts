import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  storage: Storage;

  constructor() { 
    this.storage = window.localStorage;
  }

    setLocal(key:string,value:string) {
      this.storage[key]= value;
    }

    getLocal(key:string):string {
      return this.storage[key] || false;
    }

    setObject(key:string,value:any) {
      if(!value){
        return;
      }
      this.storage[key]=JSON.stringify(value);
    }

    getObject(key:string){
      return JSON.parse(this.storage[key] || "{}");
    }

    getValue<T>(key:string):T {
      const object = JSON.parse(this.storage[key] || null);
      return object || null;
    }

    remove(key:string){
      this.storage.removeItem(key);
    }
}
