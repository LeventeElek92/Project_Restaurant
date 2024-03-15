import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BaseService } from '../base.service';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-project-booking',
  templateUrl: './project-booking.component.html',
  styleUrls: ['./project-booking.component.css']
})
export class ProjectBookingComponent {
  reservations: any;
  rows: any;
  newReservation: any={};

  getReservData(){
    this.base.getReservation("reservations").subscribe(
      reservData=>{
        this.reservations=reservData;
        console.log(this.reservations)
      }
    )
  }
  
  constructor(
    private base:BaseService, 
    private config:ConfigService
    ){
      this.getReservData()
      this.rows=this.config.getReservRow()
      console.log(this.rows)
    }

    onNewReservation(){
      this.base.onNewReservation("reservations", this.newReservation).subscribe(
        ()=>{          
          this.newReservation={},
          this.getReservData()
        }
      )
    }
}
