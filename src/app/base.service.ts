import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  serverURL="http://localhost:3000/" //weeklymenu volt itt
  constructor(private http:HttpClient) { }

  getAll(dishes: any){
    return this.http.get(this.serverURL+dishes);
  }

  onModify(dishes:string, menu:any){
    return this.http.put(
      this.serverURL+dishes+'/'+menu.id, menu
      )
  }

}



