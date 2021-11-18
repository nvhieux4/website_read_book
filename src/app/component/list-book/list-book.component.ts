import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/Service/http.service';
import { Book } from 'src/app/type/type';
import { parse } from 'angular-html-parser';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.scss']
})
export class ListBookComponent implements OnInit {

  listBook!:Book[];
  constructor(private http:HttpService ) { }

  ngOnInit(): void {
    console.log(parse("<p>test</p>").rootNodes)
    this.http.getAPI("book").subscribe(data => {
      this.listBook = data
    })
  }
  
}
