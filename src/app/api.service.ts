import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {}

  data = ()=>{
    return this.http.get("http://localhost:8080/viewReciepe")
  }

  addReciepe = (item:any)=>{
    return this.http.post("http://localhost:8080/reciepeData",item)
  }

  deleteReciepe = (data:any)=>{
    return this.http.post("http://localhost:8080/deleteItem",data)
  }
}
