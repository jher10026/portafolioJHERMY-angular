import { CommonModule } from '@angular/common'; // para *ngIF, *ngFor
import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { MayusculaPipe } from '../../../pipes/uppercase-pipe';


// interfaz para los juegos
interface game {
  name: string;
  genre: string;
  description: string;
  rating: string;
  hours: string;
  tags: string[];
  imageClass: string;
}

@Component({
  selector: 'app-laptop',
  imports: [RouterLink,CommonModule,MayusculaPipe],
  templateUrl: './laptop.html',
  styleUrl: './laptop.css'
})
export class Laptop {
    /*
    ARRAY DE JUEGOS
    Convierte tus 2 tarjetas HTML en datos
  */
  games: game[] = [
    {
      name: 'minecraft',
      genre: 'Supervivencia',
      description: 'Juego de construcción y aventura donde la creatividad no tiene límites. Perfecto para construir mundos increíbles.',
      rating: '9.5/10',
      hours: '1 hrs',
      tags: ['Creatividad', 'Multijugador'],
      imageClass: 'minecraft'
    },
    {
      name: 'Left 4 Dead 2',
      genre: 'FPS',
      description: 'Juego cooperativo de disparos en primera persona centrado en la supervivencia contra hordas de zombis.',
      rating: '9.0/10',
      hours: '2 hrs',
      tags: ['Competitivo', 'Estrategia'],
      imageClass: 'Left-4-Dead-2'
    }
  ];
}
