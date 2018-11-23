import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hall',
  templateUrl: './hall.component.html',
  styleUrls: ['./hall.component.scss']
})
export class HallComponent implements OnInit {
  private freeSeat:number;
  private busySeat:number;
  private allSeat:number;
  constructor() { 
    this.freeSeat=50;
    this.busySeat=10;
    this.allSeat=60;
  }

  ngOnInit() {
  }
  getFreeSeat():number{
    return this.freeSeat;
  }
  getBusySeat():number{
    return this.busySeat;
  }

  getAllSeat():number{
    return this.allSeat;
  }
}
