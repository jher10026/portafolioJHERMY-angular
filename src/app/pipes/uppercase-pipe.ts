import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayuscula',
  standalone: true
})
export class MayusculaPipe implements PipeTransform {
  transform(value: string): string {
    // Si no hay valor, retorna vacío
    if (!value) return '';
    
    // Convierte todo a mayúsculas
    return value.toUpperCase();
  }
}