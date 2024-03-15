import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';


@Injectable({
  providedIn: 'root'
})
export class BaseService {
  serverURL="http://localhost:3000/" //weeklymenu volt itt
  constructor(private http:HttpClient, private db:AngularFireDatabase) {}

  //Menü gombok

  getAll(dishes: any){
    return this.http.get(this.serverURL+dishes);
  }

  onModify(dishes:string, menu:any){
    return this.http.put(
      this.serverURL+dishes+'/'+menu.id, menu
      )
  }

  //Étlap gombok

  getAllFoods(somefood:any){ //Étlaphoz tartozik
    return this.http.get(this.serverURL+somefood)
    //return this.http.get(this.serverURLFood+somefood);
  }

  onFoodDelete(somefood:string, foodid:any){
    console.log("Delete: ", this.serverURL + somefood+ '/' +foodid)
    return this.http.delete(
      this.serverURL+somefood+'/'+foodid)
  }

  onFoodModify(somefood:string, foodid:any){
    return this.http.put(
      this.serverURL+somefood+'/'+foodid.id, foodid
    )
  }

  onFoodCreate(somefood:string, foodid:any){
    return this.http.post(
      this.serverURL + somefood, foodid
    )
  }

  //Itallap gombok

  getAllDrinks(somedrink:any){ //Itallaphoz tartozik
    return this.http.get(this.serverURL+somedrink)
    //return this.http.get(this.serverURLDrink+somedrink);
  }

  onDrinkDelete(somedrink:string, drinkid:any){
    console.log("Delete: ", this.serverURL + somedrink + '/' + drinkid)
    return this.http.delete(
      this.serverURL+somedrink + '/' + drinkid)
  }

  onDrinkModify(somedrink:string, drinkid:any){
    return this.http.put(
      this.serverURL+somedrink + '/' + drinkid.id, drinkid
    )
  }

  onDrinkCreate(somedrink:string, drinkid:any){
    return this.http.post(
      this.serverURL + somedrink, drinkid
    )
  }

  //Asztalfoglalás

  getReservation(somereserv:any){
    return this.http.get(this.serverURL + somereserv);
  }

  onReservationDelete(somereserv:string, reservID:any){
    return this.http.delete(
      this.serverURL + somereserv + '/' + reservID)
  }


  onNewReservation(somereserv:any, reservID:any){
    return this.http.post(this.serverURL + somereserv, reservID)
  }
 

}



