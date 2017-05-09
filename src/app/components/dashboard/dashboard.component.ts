import { Component, OnInit } from '@angular/core';
import {DashboardService} from "../../services/DashboardService/dashboard.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   private data:any;
  constructor(private _dashService:DashboardService) { }
  // data=[
  //   { 'name':'ali', 'age':'21'},
  //   { 'name':'khan', 'age':'22'},
  //   { 'name':'zaheer', 'age':'23'},
  //   { 'name':'ayaz', 'age':'24'}
  // ];
  ngOnInit() {
    this._dashService.getInitialData()
      .subscribe(
        resultData => {
          // Emit list event
          this.data=resultData;
          console.log(this.data);
        },
        err => {
          // Log errors if any
          console.log(err);
        });
  }

}
