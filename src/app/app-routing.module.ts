import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticComponent } from './component/authentic/authentic.component';
import { HomeComponent } from './component/home/home.component';
import { PostBookComponent } from './component/post-book/post-book.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';

const routes: Routes = [
  { 
    path:"",component: HomeComponent
  },
  {
    path:'login',component:AuthenticComponent
  },
  {
    path:'sign',component:SignUpComponent
  },
  {
    path:'post-book',component:PostBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
