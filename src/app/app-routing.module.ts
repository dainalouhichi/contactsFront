import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListContactsComponent } from './list-contacts/list-contacts.component';
import { ListEventsComponent } from './list-events/list-events.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'', redirectTo:'/contacts', pathMatch : 'full'},
  {path:'contacts', component:ListContactsComponent},
  {path : 'events', component:ListEventsComponent},
  {path : 'notFound', component:NotFoundComponent},
  {path: '**', redirectTo: '/notFound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
