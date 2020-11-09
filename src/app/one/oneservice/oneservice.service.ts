import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OneserviceService {

  constructor(public http: HttpClient) { }

  doFrontToBackend(){
    return this.http.get('//localhost:8080/FrontToBackEnd');
  }
}
