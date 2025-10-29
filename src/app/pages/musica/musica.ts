import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicaCard } from './musica-card/musica-card';

// ========================================
// INTERFAZ: Define la estructura de datos
// ========================================
export interface MusicGenre {
  icon: string;
  name: string;
  artists: string;
  url: string;
  color?: string; // opcional
}

@Component({
  selector: 'app-musica',
  imports: [CommonModule, MusicaCard], // ⬅️ Agregar el componente hijo
  templateUrl: './musica.html',
  styleUrl: './musica.css'
})
export class Musica {
  
  // ========================================
  // DATOS: Array de géneros musicales
  // ========================================
  genres: MusicGenre[] = [
    {
      icon: '🎸',
      name: 'Rock',
      artists: 'Queen, The Beatles, Led Zeppelin',
      url: 'https://www.youtube.com/watch?v=nsQ188AxD7U&list=RDnsQ188AxD7U&start_radio=1',
      color: '#e74c3c'
    },
    {
      icon: '🎹',
      name: 'Pop',
      artists: 'Michael Jackson, Madonna, Bruno Mars',
      url: 'https://www.youtube.com/watch?v=rY2P7lHolMw&list=RDrY2P7lHolMw&start_radio=1',
      color: '#3498db'
    },
    {
      icon: '🎤',
      name: 'Música Latina',
      artists: 'Shakira, Nicky Jam, J Balvin',
      url: 'https://www.youtube.com/watch?v=CmrV-BW6BEY&list=RDCmrV-BW6BEY&start_radio=1',
      color: '#e67e22'
    },
    {
      icon: '🎧',
      name: 'Electrónica',
      artists: 'Daft Punk, Calvin Harris, Avicii',
      url: 'https://www.youtube.com/watch?v=OegyYwm6rqE',
      color: '#9b59b6'
    }
  ];

  // ========================================
  // MÉTODO: Recibe eventos del componente hijo
  // Este método se ejecuta cuando el hijo emite un evento
  // ========================================
  onGenreClick(genre: MusicGenre) {
    console.log('🎵 Género clickeado:', genre.name);
    alert(`¡Vas a escuchar ${genre.name}! 🎶\nArtistas: ${genre.artists}`);
  }

  // ========================================
  // MÉTODO: Otro ejemplo de comunicación
  // ========================================
  onGenreFavorite(genre: MusicGenre) {
    console.log('❤️ Marcado como favorito:', genre.name);
    alert(`¡${genre.name} agregado a favoritos! ⭐`);
  }
}