import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  constructor(private http:HttpClient) { }
  url="http://localhost:3000/api/leads";

  list(){
    return this.http.get(this.url)
  }

  getby(id: any){
    return this.http.get(this.url+`/${id}/potential-duplicates`)
   }
   getbytwo_id(id: any,id_2:any){
    return this.http.get(this.url+`/${id}/potential-duplicates/${id_2}`)
   }
   update(id:any,object:any){
    return this.http.put(this.url+`/${id}`,object)
   }
 }
