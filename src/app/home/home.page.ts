import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  products=[
    {name:"Chaleira Elétrica", price:"90,00",photo:"1.jpg"},
    {name:"Camiseta Azul", price:"40,00",photo:"2.jpeg"},
    {name:"Camiseta Vermelha", price:"39,00",photo:"3.jpg"},
    {name:"Lava e Seca LG", price:"1900,00",photo:"4.jpg"},
    {name:"Apple iPhone 11", price:"4499,00",photo:"5.jpg"},
    {name:"Violão", price:"499,00",photo:"6.png"},
    {name:"Notebook Dell", price:"2900,00",photo:"7.jpg"},
    {name:"Tablet Galaxy Tab", price:"999,00",photo:"8.jpg"},
    {name:"Apple Watch 3", price:"1399,00",photo:"9.jpg"},
    {name:"Cadeira Gamer", price:"1090,00",photo:"10.jpg"}
  ]
  constructor() {}

  getURL(product){
    return "assets/products/"+product.photo
  }

}
