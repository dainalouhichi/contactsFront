import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../classes/contact';
import { Evenement } from '../classes/evenement';

@Injectable({
  providedIn: 'root'
})
export class EvenementService {
  url ="http://localhost:8081/events";

  constructor(private http:HttpClient) { }
  getAllEvents(){
    return this.http.get(this.url);
}
  getEventById(id:number){
    return this.http.get(this.url+"/"+id);
    
  }
  createOneEvent(evenement:Evenement){
    return this.http.post(this.url,evenement);

  }
  updateOneEvent(evenement:Evenement, id:number){
    return this.http.put(this.url+"/"+id,evenement)
  }
  deleteOneEvent(id:number){
    return this.http.delete(this.url+"/"+id);
  }
}
