import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-all-reciepe',
  templateUrl: './view-all-reciepe.component.html',
  styleUrls: ['./view-all-reciepe.component.css']
})
export class ViewAllReciepeComponent implements OnInit {

  constructor(private myApi:ApiService) { 
    this.fetchData()
  }

  fetchData = ()=>{
    this.myApi.data().subscribe(
      (datas)=>{
        this.reciepeList = datas
      }
    )
  }

  deleteReciepe = (id:any)=>{
    let data = {
      "id":id
  }
    this.myApi.deleteReciepe(data).subscribe(
      (resp)=>{
        alert("DELETED SUCCESSFULLY")
      }
    )
  }

  reciepeList:any = []
  ngOnInit(): void {
  }

}
