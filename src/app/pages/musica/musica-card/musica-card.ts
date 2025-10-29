import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicGenre } from '../musica'; // ⬅️ Importar la interfaz

@Component({
  selector: 'app-music-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './musica-card.html',
  styleUrl: './musica-card.css'
})
export class MusicaCard {

  // ========================================
  // @Input: RECIBE datos del componente PADRE
  // ========================================
  @Input() genre!: MusicGenre; // ⬅️ El signo ! indica que siempre tendrá valor
  
  // Otro ejemplo: recibir un índice
  @Input() index: number = 0;

  // ========================================
  // @Output: ENVÍA eventos al componente PADRE
  // ========================================
  @Output() genreClicked = new EventEmitter<MusicGenre>();
  @Output() genreFavorited = new EventEmitter<MusicGenre>();

  // ========================================
  // MÉTODO: Cuando hacen click en la tarjeta
  // ========================================
  onCardClick() {
    console.log('Click en tarjeta:', this.genre.name);
    
    // Emitir el evento hacia el padre
    this.genreClicked.emit(this.genre);
  }

  // ========================================
  // MÉTODO: Cuando marcan como favorito
  // ========================================
  onFavoriteClick(event: Event) {
    event.stopPropagation(); // Evitar que se propague al click de la tarjeta
    
    console.log('Favorito clickeado:', this.genre.name);
    
    // Emitir evento al padre
    this.genreFavorited.emit(this.genre);
  }

  // ========================================
  // MÉTODO: Abrir enlace de YouTube
  // ========================================
  openLink(event: Event) {
    event.stopPropagation();
    window.open(this.genre.url, '_blank');
  }
}