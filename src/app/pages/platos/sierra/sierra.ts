import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";

interface Dish{
name:string;
rating:number;
description:string;
time:number;
Pa_llenar:string;
servings:number;
ingredients:string[];
imageClass:string;
imagenUrl: string;
}

@Component({
  selector: 'app-sierra',
  imports: [RouterLink,CommonModule],
  templateUrl: './sierra.html',
  styleUrl: './sierra.css'
})
export class Sierra implements OnInit {
  dishes: Dish[]=[];
  isLoading: boolean=false;
  errorMessage: string='';
  
  ngOnInit(){
    this.cargarPlatos();
  }
  cargarPlatos(){
    this.isLoading=true;
    this.errorMessage='';
    console.log('Empezando a cargar platos...');

    setTimeout(() => {
      this.dishes=[
  {
    name:'el cuy al horno',
    rating:5,
    description:'El cuy es un plato principal que se prepara asado al horno y es un manjar tradicional de la sierra. ',
    time:30,
    Pa_llenar:'medio',
    servings:2,
    ingredients:['Cuy','juego de limon y naranja','aceite','comino','pimienta','huacatay','kion molido al gusto'],
    imageClass:'cuy',
    imagenUrl:'assets/img/cuy.jpg'
  },
  {
    name:'Chairo',
    rating:4.5,
    description:'Sopa espesa de carne de res o cordero, trigo, papas, habas, zapallo y chuño. ', 
    time:40,
    Pa_llenar:'alto',
    servings:3,
    ingredients:['carne de res','Chuño','Zanahoria','Papas','Cebolla','lengua de cordero','tripas de'],
    imageClass:'chairo',
    imagenUrl: 'assets/img/chiaro.jpg'
  }
];
  this.isLoading=false;
  console.log('platos cargados!');
}, 2000);
}

  reintentar(){
    console.log('Reintentando...')
    this.cargarPlatos();
  }
  
  /* metodos para generar estrellas segun rating */

getStars(rating:number): string {
  return '⭐'.repeat(Math.floor(rating));
}

/*obtener icono segun el nivel de picante */

getPa_llenarIcon(Pa_llenar:string): string{
  switch(Pa_llenar){
    case 'alto': return '🍗🍗🍗';
    case 'medio': return '🍗🍗';
    case  'bajo': return '🍗';
    default: return '';
  }
}

getPa_llenarColor(Pa_llenar:string): string{
    switch(Pa_llenar){
    case 'alto': return 'green';
    case 'medio': return 'orange';
    case  'bajo': return 'red';
    default: return '';
  }
}

}
