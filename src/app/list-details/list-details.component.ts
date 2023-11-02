import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { log } from 'console';

@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.css'],
})
export class ListDetailsComponent implements OnInit {
  id: any;
  object = [];
  alldata_duplicated: any[] = [];
  alldata = [];
  checked_array: any[] = [];

  constructor(
    private serv: ApiServiceService,
    public rout: ActivatedRoute,
    public router: Router
  ) {
    this.id = this.rout.snapshot.paramMap.get('id');

    serv.list().subscribe((data: any) => {
      this.alldata = data;
      //  const id=data.find((d:any) =>d.lead_id==="d89e80f9-eee5-431c-9b8b-6bff121ecd5d")
      //  console.log(id)
    });

    serv.getby(this.id).subscribe((data: any) => {


      this.object = data.map((ele: any) => {
        const eddata: any = this.alldata.find(
          (value: any) => value.lead_id === ele
        );
        if (eddata && eddata?.duplicate_of !== null) {
          this.alldata_duplicated.push(eddata.lead_id);
        }
        return eddata;
      });
    });
    // this.object.forEach((ele:any)=>{
    //   console.log(ele)
    // })

    // serv.getbytwo_id(this.id,this.object).subscribe((data:any)=>{
    //   this.alldata_duplicated=data
    //   console.log(this.alldata_duplicated)
    // })
    // serv.getby(this.object).subscribe((data:any)=>{
    //   data.map((ele:any)=>{
    //     return this.alldata_duplicated=ele
    //   })
    // })
  }

  getchecked(id: any) {
    if (id.checked === true) {
      this.alldata_duplicated.push(id.value);
    } else {
      this.alldata_duplicated = this.alldata_duplicated.filter((item) => {
        if (item !== id.value) return item;
      });
    }
  }

  edit() {
    const child_lead_ids = this.alldata_duplicated;

    for (const lead of this.object as any[]) {
      const lead_id = lead.lead_id;
      this.serv
        .update(lead_id, {
          ...lead,
          duplicate_of: child_lead_ids.find((c) => c === lead_id)
            ? this.id
            : null,
        })
        .subscribe((data: any) => {
          location.reload();
        });
    }
  }
  ngOnInit(): void {}
}
