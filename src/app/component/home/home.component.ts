import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { fromEvent } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  img!:string;
  constructor(
    
  ){}

  ngOnInit(): void {
    /* const user = this.service.currentUser
    if(user){
      this.user = user.sub;
    }  */
    window.onload = ()=>{
      this.img =this.randomImg()
    }
  /*   fromEvent(document, 'onload').subscribe(e => {
      console.log(e)
    }); */
   
    
  }

  randomImg(){
    const arrayImg:string[] = [
      'https://static.cdnno.com/storage/topbox/3b86cb3b705e3543b4401ce461697197.jpeg',
      'https://static.cdnno.com/storage/topbox/27dec122df2b9bacc94ecc36ae0ab262.jpeg',
      'https://static.cdnno.com/storage/topbox/a10e4f01fb55834ed6f40113142c6f8a.jpeg',
      'https://static.cdnno.com/storage/topbox/0347025df1707cf6142b85e974e0c631.jpeg',
      'https://static.cdnno.com/storage/topbox/758007f88f5c61f2e8d12c22c9dcf97a.jpeg',
      'https://static.cdnno.com/storage/topbox/57ebffd5dde8073721baf6ff8649d6c3.jpeg',
      'https://static.cdnno.com/storage/topbox/02b70004fc1485e23898c49bae0227d2.jpeg',
      'https://static.cdnno.com/storage/topbox/404f200b5b9dd97c6a58cf0ff797ec88.jpeg'
  
    ]
    const randomIndex = Math.trunc(Math.random() * arrayImg.length)
    return arrayImg[randomIndex]
  }
  


  

 

}
