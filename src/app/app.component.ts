import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  seatsLayout:seatsLayout= {
    totalRows:10,
    seatsPerRow:6,
    seatNaming:'rowType',
    booked:['1A','5D']
  }
  getSelected(event){
    console.log(event)
  }
}

export class seatsLayout{
  totalRows: Number;
  seatsPerRow: Number;
  seatNaming: String;
  booked:String[]
}