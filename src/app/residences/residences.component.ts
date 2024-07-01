import { Component } from '@angular/core';
import { Residence } from '../models/Residence';
import { Apartment } from '../models/Appartement';


@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent {
  listResidences:Residence[]=[
    {id:1,"name": "El fel","address":"Borj Cedria", "image":"../../assets/images/doudou.jpg"},
   {id:2,"name": "El yasmine", "address":"Ezzahra","image":"../../assets/images/doudou.jpg"},
   {id:3,"name": "El Arij", "address":"Rades","image":"../../assets/images/doudou.jpg"},
   {id:4,"name": "El Anber","address":"Manzah 5", "image":"../../assets/images/doudou.jpg"}
  ];
  istApartments:Apartment[]=[
    {id:1,"appartNum":1,"floorNum":0,"surface":100,"terrace":"oui","surfaceTerrace":20,"category":"S+1","description":"Appartement S+1","residence":this.listResidences[0] },
    {id:2,"appartNum":2,"floorNum":0,"surface":130,"terrace":"non","surfaceTerrace":0,"category":"S+2","description":"Appartement S+2","residence":this.listResidences[0] },
    {id:3,"appartNum":3,"floorNum":0,"surface":150,"terrace":"oui","surfaceTerrace":30,"category":"S+3","description":"Appartement S+3","residence":this.listResidences[1] },
    {id:4,"appartNum":4,"floorNum":0,"surface":150,"terrace":"oui","surfaceTerrace":30,"category":"S+3","description":"Appartement S+3","residence":this.listResidences[1] },
    ];

}
