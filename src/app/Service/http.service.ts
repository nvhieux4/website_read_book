import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable, timer } from 'rxjs';
import { catchError, debounceTime, map, switchMap } from 'rxjs/operators';
import { Book, Category, User } from '../type/type';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http : HttpClient) { }
  private API:string = 'http://localhost:8080/api/user/register';
  private API_LOGIN:string = 'http://localhost:8080/api/user/login';

  postAPI(table:string,data: Book) :Observable<Book>{
    return this.http.post<Book>('http://localhost:3000/'+table,data)
  }

  postCategoryAPI(data:{name:string}) :Observable<Category> {
    return this.http.post<Category>('http://localhost:3000/category',data)
  }

  postUser(data:User):Observable<User> {
    return this.http.post<User>(this.API,data)
  }

  postUserLogin(data:User) {
    return this.http.post<User>(this.API_LOGIN,data)
  }

  getAPI(table:string) :Observable<any> {
    return this.http.get<any>('http://localhost:3000/'+table)
  }

  nameBookExists(name: string): Observable<boolean> {
    return this.http.get<any>('http://localhost:3000/book').pipe(
      map(data => {
        return data.filter((item:Book) => item.nameBook.toLocaleLowerCase() === name.toLocaleLowerCase()).length > 0 ? true :false
      })
    )
  }
  nameCategoryExists(name: string): Observable<boolean> {
    return this.http.get<any>('http://localhost:3000/category').pipe(
      map(data => {
        return data.filter((item:Category) => item.name.toLocaleLowerCase() === name.toLocaleLowerCase()).length > 0 ? true :false
      })
    )
  }

  uniqueNameBookValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return timer(500).pipe(
        switchMap(()=>this.nameBookExists(control.value).pipe(
            map((exists) => {
              console.log(exists ? { nameExists: true } : null)
              return (exists ? { nameExists: true } : null )
            }),
            catchError(async (err) => null)
          )
        )
      )
    };
  }

  uniqueNameCategoryValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return timer(500).pipe(
        switchMap(()=>this.nameCategoryExists(control.value).pipe(
            map((exists) => {
              console.log(exists ? { nameExists: true } : null)
              return (exists ? { nameExists: true } : null )
            }),
            catchError(async (err) => null)
          )
        )
      )
    };
  }

}