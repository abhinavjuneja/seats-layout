
# seats-layout

This package helps you create layout for seat booking, using Angular 5.

  
##### Html template: 

    <layout [seatsLayout]="seatsLayout" (confirm)="getSelectedSeats($event)"></layout>

##### Define `seatsLayout` Object with these properties [`totalRows, seatsPerRow, seatNaming, booked`]:

    seatsLayout= {
      	totalRows:10,
		seatsPerRow:6,
		seatNaming:'rowType',
		booked:['1A','5D']   
	}

##### Define a function which does stuff with the emitted object ie. array of selected seats:
    getSelected(event){
    //Do stuff
    	console.log(event)
    }


https://www.dropbox.com/s/ohpe03bwfc6ulfm/seats.PNG?raw=0
 
