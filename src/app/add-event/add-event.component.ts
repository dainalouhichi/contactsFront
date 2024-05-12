import { Component } from '@angular/core';
import { Evenement } from '../shared/classes/evenement';
import { EvenementService } from '../shared/services/evenement.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrl: './add-event.component.css'
})
export class AddEventComponent {
  evenement= {} as Evenement;
  constructor(private eventService:EvenementService)
  {

  }
  addEvent()
  {
    this.eventService.createOneEvent(this.evenement).subscribe(
      (data)=>{
        console.log("evenement ajouté avec succés"+data);
        this.evenement={} as Evenement;
      }
    )
  }


}
