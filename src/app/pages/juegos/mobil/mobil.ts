import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

/*Definir interfaces*/
interface MobilGame{
  name: string;
  genre: string;
  description: string;
  rating:string;
  hours: string;
  tags: string[];
  imageClass: string;
}


@Component({
  selector: 'app-mobil',
  imports: [RouterLink,CommonModule],
  templateUrl: './mobil.html',
  styleUrl: './mobil.css'
})
export class Mobil {

// Crear el array de juegos moviles
games:MobilGame[]=[
  {
    name:'Mobil Legends',
    genre:'MOBA',
    description:'Juego de batalla en equipo con héroes únicos y estrategias emocionantes.',
    rating:'4.5/5',
    hours:'2+ hrs',
    tags:['Multijugador','Estrategia','Competitivo'],
    imageClass:'mobil-legends',
  }
]



}
