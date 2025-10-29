import { Component, OnInit } from '@angular/core'; // ⬅️ Agregamos OnInit
import { RouterLink } from "@angular/router";
import { CommonModule } from '@angular/common';

interface Dish {
  name: string;
  rating: number;
  description: string;
  time: number;
  spicyLevel: string;
  servings: number;
  ingredients: string[];
  imageClass: string;
  imagenUrl: string;
}

@Component({
  selector: 'app-costa',
  imports: [RouterLink, CommonModule],
  templateUrl: './costa.html',
  styleUrl: './costa.css'
})
export class Costa implements OnInit { // ⬅️ Agregamos "implements OnInit"

  // ========================================
  // VARIABLES PARA MANEJAR EL ESTADO
  // ========================================
  
  // ⬅️ AHORA empieza VACÍO (antes tenía los platos aquí)
  dishes: Dish[] = [];
  
  // ⬅️ NUEVA: Variable para saber si está cargando
  isLoading: boolean = false;
  
  // ⬅️ NUEVA: Variable para mensajes de error
  errorMessage: string = '';

  // ========================================
  // ngOnInit: Se ejecuta cuando la página carga
  // ========================================
  ngOnInit() {
    // Llamamos a nuestra función para cargar platos
    this.cargarPlatos();
  }

  // ========================================
  // FUNCIÓN QUE SIMULA CARGAR DATOS
  // ========================================
  cargarPlatos() {
    // PASO 1: Activamos el "loading" (el spinner)
    this.isLoading = true;
    this.errorMessage = ''; // Limpiamos errores previos
    
    console.log('⏳ Empezando a cargar platos...');

    // PASO 2: Simulamos que estamos esperando datos de internet
    // setTimeout ejecuta código después de cierto tiempo
    setTimeout(() => {
      
      // PASO 3: Después de 2 segundos, "cargamos" los platos
      this.dishes = [
        {
          name: 'Ceviche',
          rating: 5,
          description: 'Plato tradicional de la costa peruana hecho con pescado fresco marinado en jugo de limón y sazonado con ají, cebolla y cilantro.',
          time: 30,
          spicyLevel: 'Medio',
          servings: 2,
          ingredients: ['Pescado fresco', 'Limón', 'Ají', 'Cebolla', 'Cilantro'],
          imageClass: 'ceviche',
          imagenUrl: 'assets/img/ceviche.jpeg'
        },
        {
          name: 'Lomo Saltado',
          rating: 4.5,
          description: 'Delicioso plato que combina carne de res salteada con cebolla, tomate y papas fritas, sazonado con salsa de soja y especias.',
          time: 40,
          spicyLevel: 'Medio',
          servings: 3,
          ingredients: ['Lomo de res', 'Cebolla', 'Tomate', 'Papas fritas', 'Salsa de soja'],
          imageClass: 'lomo',
          imagenUrl: 'assets/img/lomo-saltado.jpeg'
        },
      ];
      
      // PASO 4: Desactivamos el loading
      this.isLoading = false;
      
      console.log('✅ Platos cargados!', this.dishes.length, 'platos');
      
    }, 2000); // ⬅️ 2000 milisegundos = 2 segundos
  }

  // ========================================
  // FUNCIÓN PARA REINTENTAR (por si hay error)
  // ========================================
  reintentar() {
    console.log('🔄 Reintentando...');
    this.cargarPlatos();
  }

  // ========================================
  // TUS FUNCIONES ORIGINALES (sin cambios)
  // ========================================
  getStars(rating: number): string {
    return '⭐'.repeat(Math.floor(rating));
  }

  getspicyIcon(spicyLevel: string): string {
    switch (spicyLevel) {
      case 'Picante': return '🌶️🌶️🌶️';
      case 'Medio': return '🌶️🌶️';
      case 'suave': return '🌶️️';
      default: return '👌';
    }
  }

  getSpicyColor(spicyLevel: string): string {
    switch (spicyLevel) {
      case 'Picante': return 'red';
      case 'Medio': return 'orange';
      case 'Suave':
      case 'suave': return 'green';
      default: return 'black';
    }
  }
}