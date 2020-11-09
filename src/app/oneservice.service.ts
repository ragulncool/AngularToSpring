import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import {  messageIF } from './one/messageModel';

@Injectable({
  providedIn: 'root'
})
export class OneserviceService {

  constructor(private http: HttpClient) {

    

   }

   doFrontToBackend() : Observable<messageIF>{
    return this.http.get<messageIF>('http://localhost:8080/FrontToBackEnd');
  }

   secondClick(){
    console.log("Clicked");
        }

        getUsers(){
          return this.http.get('https://reqres.in/api/users');
        }
}
