import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-consulta',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './consulta.html',
  styleUrl: './consulta.css'
})
export class Consulta {
  nombre: string = '';
  mensaje: string = '';
  enviado: boolean = false;

  enviarFormulario() {
    if (this.nombre.trim() && this.mensaje.trim()) {
      this.enviado = true;
    }
  }
}
