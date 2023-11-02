import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  alldata=[];
  constructor(public serv:ApiServiceService) {


    serv.list().subscribe((data:any)=>{
     this.alldata=data
    //  const id=data.find((d:any) =>d.lead_id==="d89e80f9-eee5-431c-9b8b-6bff121ecd5d")
    //  console.log(id)

    })
  }

  ngOnInit(): void {
  }}
