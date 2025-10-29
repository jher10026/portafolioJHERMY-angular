

import { Pipe, PipeTransform } from '@angular/core';

// ========================================
// PIPE: Resalta texto con <mark>
// Uso: {{ texto | highlight:'palabra' }}
// ========================================
@Pipe({
  name: 'highlight',
  standalone: true
})
export class HighlightPipe implements PipeTransform {

  /**
   * Transforma el texto resaltando la palabra buscada
   * @param value - Texto original
   * @param searchTerm - Palabra a resaltar
   * @returns Texto con HTML para resaltar
   */
  transform(value: string, searchTerm: string): string {
    // Si no hay valor o término de búsqueda, devolver original
    if (!value || !searchTerm) {
      return value;
    }

    // Crear expresión regular (case insensitive)
    const regex = new RegExp(searchTerm, 'gi');
    
    // Reemplazar con <mark> para resaltar
    return value.replace(regex, (match) => `<mark>${match}</mark>`);
  }
}