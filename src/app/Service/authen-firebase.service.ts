import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { BehaviorSubject, Subject } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/compat/database'
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenFirebaseService {

  constructor( 
    private afAuth:AngularFireAuth,
    private router: Router,
    private db:AngularFireDatabase,
    private ngzone : NgZone
  ) { }

  user:any = new BehaviorSubject<any>(null);

  async signIn() {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    await this.afAuth.signInWithPopup(googleAuthProvider).then(
      (value)=> {
        console.log('thanh cong')
        console.log(value)
        this.user.next(value)
        if(value){
          this.router.navigate([''])
        }
      }
    ).catch (
      error => {
        console.log('lỗi' + error)
        this.user.next(null)
      }
    )
  }

  validateUsername(){
    return this.db.list('user').valueChanges()
  
  }

}
