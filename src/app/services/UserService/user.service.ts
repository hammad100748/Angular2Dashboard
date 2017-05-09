import { Injectable } from '@angular/core';

import {Http,Response,Headers,RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor(private _http: Http) { }

  loginUser(user:any) {

    let bodyString = JSON.stringify(user); // Stringify payload
    let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options       = new RequestOptions({ headers: headers });


    var _headers = new Headers();
    _headers.append('Content-Type', 'application/json');

    return this._http.post('/api/user',bodyString,options)
    // ...and calling .json() on the response to return data to component from service
      .map((res:Response) => res.json())
      //...errors if any
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
