import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  serverURL="http://localhost:3000/weeklymenu"
  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get(this.serverURL);
  }
}
