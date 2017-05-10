import { Injectable } from '@angular/core';
import {Http,Response,Headers,RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DashboardService {

  constructor(private _http:Http) { }

  getInitialData(){
    return this._http.get('/api/dashboard/chart')
    // ...and calling .json() on the response to return data
      .map((res:Response) => res.json())
      //...errors if any
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }


}
