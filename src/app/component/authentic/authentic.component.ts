
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AuthenFirebaseService } from 'src/app/Service/authen-firebase.service';
import { HttpService } from 'src/app/Service/http.service';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-authentic',
  templateUrl: './authentic.component.html',
  styleUrls: ['./authentic.component.scss'],
  providers:[MessageService]
})
export class AuthenticComponent implements OnInit {

  signInForm!: FormGroup;
  isStyleInputPassword:boolean = true;
  styleInputPassword:string = "password";
  constructor( 
    private fb: FormBuilder,
    private authenFirebase: AuthenFirebaseService,
    private http:HttpService,
    private messageService: MessageService
    ) { }

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      email:[ 
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          /* Validators.pattern(/^[a-z]{6,32}$/i), */
      ])],
      password: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          /* Validators.pattern(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/), */
        ]),
      ]
    })
  }
  
  onSubmit(): void {
      this.http.postUserLogin(this.signInForm.value).subscribe(res => {
        console.log(res)
      },
      error => {
        console.log("1212")
        this.messageService.add({severity:'error', summary: 'Thất bại', detail: 'Tài khoản hoặc mật khẩu không chính xác. Vui lòng nhập lại!!'});
      });
  }
  

  onClickStylePassword(){
    this.isStyleInputPassword = !this.isStyleInputPassword
    if(!this.isStyleInputPassword){
      this.styleInputPassword="text"
    }else {
      this.styleInputPassword="password"
    }
  }

  signIn(){
    return this.authenFirebase.signIn();
  }

}
