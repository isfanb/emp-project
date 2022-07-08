import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpDataService {

  constructor(private _http: HttpClient) { }

  postData(data:any) {
    return this._http.post<any>(`http://localhost:3000/posts`, data)
    .pipe(map((res:any) => {
      return res;
    }))
  }
  getData() {
    return this._http.get<any>(`http://localhost:3000/posts`)
    .pipe(map((res:any) => {
      return res;
    }))
  }
}
