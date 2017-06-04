import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import {Book} from '../models/book';

@Injectable()
export class AddBookService {

  constructor(private http: Http) { }

  sendBook(book:Book){
    let url = "http://localhost:8181/book/add";

    let headers = new Headers ({
      'Content-Type':'application/json',
      'x-auth-token': localStorage.getItem('x-auth-token')
    });

    return this.http.post(url,"", {headers: headers});

    }

}
