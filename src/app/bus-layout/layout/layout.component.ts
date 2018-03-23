import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { seatsLayout } from '../../app.component';


@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  @Input() seatsLayout:seatsLayout;
  @Output() confirm= new EventEmitter();
  rows = new Array();

  constructor() { }
  
  
  
  ngOnInit() {
  
    var rows=new Array()
    var seatsInARow= new Array()
    var seatChar;
    if (this.seatsLayout != undefined && this.seatsLayout.hasOwnProperty('totalRows')){
      if(this.seatsLayout.seatNaming='rowType'){
        for(let row = 0 ; row<this.seatsLayout.totalRows; row++){
          for(let seats = 0; seats<this.seatsLayout.seatsPerRow; seats++){
            seatChar = String.fromCharCode(65 + seats)
            seatsInARow.push((row + 1).toString() + seatChar);
          }
          rows.push(seatsInARow);
          seatsInARow = new Array();
        }
      }
    }
    this.rows = rows
  
  }
  
  done(){
    this.confirm.emit(this.seatsLayout.booked)
  }

  seatAction(seat){
    if(this.seatsLayout.booked.indexOf(seat)>=0){
      this.seatsLayout.booked = this.seatsLayout.booked.filter(bookedSeat=>{
        return bookedSeat!=seat;
      })
    }
    else{
      this.seatsLayout.booked.push(seat);
    }
  }
}
