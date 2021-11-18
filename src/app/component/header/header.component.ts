
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { LocalStorageService } from 'src/app/Service/local-storage.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private afAuth:AngularFireAuth,
    private localStorage:LocalStorageService
  ) { }

  user:any;
  isLogin:boolean = false;
  isClickThem:boolean = true;
  isToggle:boolean = true;
  private conFig = 'config';

  ngOnInit(): void {
    this.afAuth.user.subscribe(user=> {
      this.user = user;
    })
    const html = document.querySelector('html');
    const config = this.localStorage.getLocal(this.conFig)
    const data = JSON.parse(config)
    if(data.them === "dark") {
      this.isClickThem = false;
      this.isToggle = true;
      html!.dataset.them = 'dark';
    }
    if(data.them === "light") {
      this.isClickThem = true;
      this.isToggle = false;
      html!.dataset.them = 'light';
    }
  }

  logout(){
    this.afAuth.signOut();
    this.isLogin = false;
  }

  handleThem(){
    const html = document.querySelector('html');
    if(this.isClickThem){
      this.localStorage.remove(this.conFig);
      this.localStorage.setLocal(this.conFig,JSON.stringify({them:'dark'}))
      html!.dataset.them = 'dark';
      this.isToggle = true;
      this.isClickThem = false;
      return;
    }
    if(!this.isClickThem) {
      this.isClickThem = true;
      this.isToggle=false;
      this.localStorage.remove(this.conFig);
      this.localStorage.setLocal(this.conFig,JSON.stringify({them:'light'}))
      html!.dataset.them = 'light';
      return;
    }
  }

}
