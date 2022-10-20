import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-reciepe',
  templateUrl: './add-reciepe.component.html',
  styleUrls: ['./add-reciepe.component.css']
})
export class AddReciepeComponent implements OnInit {

  constructor(private myApi:ApiService) { }

  item = ""
  category = ""
  status = ""

  readValues = ()=>{
    let data = {
      "item":this.item,
      "category":this.category,
      "status":this.status
    }
    console.log(data)
    this.myApi.addReciepe(data).subscribe(
      (response)=>{
        alert("Added Successfully")
      }
    )
    this.item = ""
    this.category = ""
    this.status = ""
  }

  ngOnInit(): void {
  }

}
