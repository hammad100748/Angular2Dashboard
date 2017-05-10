import { Component, OnInit } from '@angular/core';
import {DashboardService} from "../../services/DashboardService/dashboard.service";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data=[];
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
          resultData.forEach(element=>{
            this._dashService.getDeviceData(element.Serial)
              .subscribe(result=>{
                if(result){
                  var curData={
                    'Serial':element.Serial,
                    'Site':element.Name,
                    'Values':result
                  };
                  this.data.push(curData);
                }
              });
          });

        },
        err => {
          // Log errors if any
          console.log(err);
        });
  }

}
