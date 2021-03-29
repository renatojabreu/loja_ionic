import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  categories=[
    {name:"Utilidades domésticas"}, 
    {name:"Telefonia"} ,
    {name:"Pet"} ,
    {name:"Papelaria"}, 
    {name:"Móveis"}, 
    {name:"Instrumentos Musicais"}, 
    {name:"Informática"}, 
    {name:"Infantil"}, 
    {name:"Ferramentas"}, 
    {name:"Esporte e Lazer"}]

  constructor() { }

  ngOnInit() {
  }

}
