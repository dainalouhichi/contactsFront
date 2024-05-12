import { Component } from '@angular/core';
import { EvenementService } from '../shared/services/evenement.service';

@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrl: './list-events.component.css'
})
export class ListEventsComponent {
  events: any;

  constructor(private eventService: EvenementService) {
    this.loadEvents(); 
  }

  loadEvents() {
    this.eventService.getAllEvents().subscribe((data: any) => { 
      this.events = data;
      console.log("contact", this.events.content);
    });
  }
}
