import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticComponent } from './component/authentic/authentic.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { HomeComponent } from './component/home/home.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { ListBookComponent } from './component/list-book/list-book.component';
import { ListBookHistoryComponent } from './component/list-book-history/list-book-history.component';
import { ListBookNewUpdateComponent } from './component/list-book-new-update/list-book-new-update.component';
import { ListBookChartsComponent } from './component/list-book-charts/list-book-charts.component';
import { PostBookComponent } from './component/post-book/post-book.component';
import { NbThemeModule } from '@nebular/theme';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import {
  AngularFireStorageModule
} from "@angular/fire/compat/storage";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import {ToastModule} from 'primeng/toast';
import { PipeHTMLPipe } from './pipe/pipe-html.pipe';



@NgModule({
  declarations: [
    AppComponent,
    AuthenticComponent,
    SignUpComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ListBookComponent,
    ListBookHistoryComponent,
    ListBookNewUpdateComponent,
    ListBookChartsComponent,
    PostBookComponent,
    PipeHTMLPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatCheckboxModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    NbThemeModule.forRoot(),
    CKEditorModule,
    AngularFireStorageModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatNativeDateModule,
    BrowserModule,
    BrowserAnimationsModule,
    ToastModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
