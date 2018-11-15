import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import { HttpClient } from '@angular/common/http';
import {IOpenClipart} from '../display-clipart/IOpenClipart'
@Injectable({
  providedIn: 'root'
})

export class ClipartService {
 url:string ="https://openclipart.org/search/json/?query=";
 data: IOpenClipart;
  constructor(private _http:HttpClient) { 

  }
  getImageList(imageStr:string):Observable<IOpenClipart>{
    return this._http.get<IOpenClipart>(this.url+imageStr)
  
  }
}
