import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Residence } from './models/Residence';
import { ResidencesComponent } from './residences/residences.component';
import { NotFoundComponent } from './not-found/not-found.component';

//nhotpu fil les routes 
const routes: Routes = [
  {
    path : "residence",component :ResidencesComponent 
  },
  {
    path : "**",component :NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
