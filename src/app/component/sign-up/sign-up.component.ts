
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { debounceTime, map, startWith } from 'rxjs/operators';
import firebase from 'firebase/compat/app';
import { Observable, timer } from 'rxjs';
import { AuthenFirebaseService } from 'src/app/Service/authen-firebase.service';
import { HttpService } from 'src/app/Service/http.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  providers:[MessageService]
})
export class SignUpComponent implements OnInit {

  registerForm!: FormGroup
  isStyleInputPassword:boolean = true;
  styleInputPassword:string = "password";

  constructor( 
    private fb:FormBuilder,
    private dataFirebase: AuthenFirebaseService,
    private afAuth:AngularFireAuth,
    private store:AngularFirestore,
    private http:HttpService,
    private router: Router,
    private messageService: MessageService
    ){}
  
    data:any;
    validateForm!:FormGroup
    isValidate:boolean = false;

  ngOnInit(): void {

    this.registerForm = this.fb.group({
      email: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
        ]),
      ],
      password: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
        ]),
      ],
      username: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(4),
          Validators.pattern(/^(?=[A-Z]*[a-z])(?=[a-z]*[A-Z])[a-zA-Z]{3,20}$/),
        ]),
      ],
    });

    this.dataFirebase.validateUsername().subscribe(user => {
      this.data = user
    })

  }

  onSubmit(){
    
    this.http.postUser(this.registerForm.value).subscribe(res => {
      console.log(res)
      this.messageService.add({severity:'success', summary: 'Thành công', detail: 'Bạn đăng truyện thành công'});
      setTimeout(()=>{
        this.router.navigate(['/login'])
      },2000)
    })
  }

  onClickStylePassword(){
    this.isStyleInputPassword = !this.isStyleInputPassword
    if(!this.isStyleInputPassword){
      this.styleInputPassword="text"
    }else {
      this.styleInputPassword="password"
    }
  }

  async handle(){
    this.afAuth.createUserWithEmailAndPassword("nvhieux4@gmail.com",'').then((result:any)=>{
      result.user.sendEmailVerification();
    })
  }
    
  
  


  

  

}

