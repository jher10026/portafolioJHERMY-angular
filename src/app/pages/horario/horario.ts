import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

/*
  ═══════════════════════════════════════
  INTERFACES
  ═══════════════════════════════════════
*/
interface Class {
  name: string;
  day: string;
  startTime: string;
  endTime: string;
  color: string;
  isCompleted: boolean; // Si ya asististe
  notes: string;        // Notas de la clase
}



@Component({
  selector: 'app-horario',
  imports: [CommonModule,FormsModule],
  templateUrl: './horario.html',
  styleUrl: './horario.css'
})
export class Horario {

  /*
    ═══════════════════════════════════════
    DATOS DE LAS CLASES
    ═══════════════════════════════════════
  */
  classes: Class[] = [
    {
      name: 'Desarrollo Experimental e Innovación Tecnológica',
      day: 'Lunes',
      startTime: '7:00 AM',
      endTime: '9:00 AM',
      color: '#667eea',
      isCompleted: false,
      notes: ''
    },
    {
      name: 'Sistemas Digitales',
      day: 'Lunes',
      startTime: '9:00 AM',
      endTime: '11:00 AM',
      color: '#f093fb',
      isCompleted: false,
      notes: ''
    },
    {
      name: 'Programación Web',
      day: 'Lunes',
      startTime: '11:00 AM',
      endTime: '1:00 PM',
      color: '#4facfe',
      isCompleted: false,
      notes: ''
    },
    {
      name: 'Base de Datos II',
      day: 'Martes',
      startTime: '7:00 AM',
      endTime: '9:00 AM',
      color: '#43e97b',
      isCompleted: false,
      notes: ''
    },
    {
      name: 'Redes de la Computación',
      day: 'Martes',
      startTime: '9:00 AM',
      endTime: '11:00 AM',
      color: '#fa709a',
      isCompleted: false,
      notes: ''
    },
    {
      name: 'Sistemas Digitales',
      day: 'Martes',
      startTime: '11:00 AM',
      endTime: '1:00 PM',
      color: '#f093fb',
      isCompleted: false,
      notes: ''
    },
    // Miércoles
    {
      name: 'Base de Datos II',
      day: 'Miércoles',
      startTime: '7:00 AM',
      endTime: '9:00 AM',
      color: '#43e97b',
      isCompleted: false,
      notes: ''
    },
    {
      name: 'Programación Web',
      day: 'Miércoles',
      startTime: '9:00 AM',
      endTime: '11:00 AM',
      color: '#4facfe',
      isCompleted: false,
      notes: ''
    },
    // Jueves
    {
      name: 'Base de Datos II',
      day: 'Jueves',
      startTime: '7:00 AM',
      endTime: '9:00 AM',
      color: '#43e97b',
      isCompleted: false,
      notes: ''
    },
    {
      name: 'Sistemas de Información',
      day: 'Jueves',
      startTime: '9:00 AM',
      endTime: '10:00 AM',
      color: '#feca57',
      isCompleted: false,
      notes: ''
    },
    {
      name: 'Redes de Computación',
      day: 'Jueves',
      startTime: '10:00 AM',
      endTime: '1:00 PM',
      color: '#fa709a',
      isCompleted: false,
      notes: ''
    },
    // Viernes
    {
      name: 'Desarrollo Experimental e Innovación Tecnológica',
      day: 'Viernes',
      startTime: '7:00 AM',
      endTime: '9:00 AM',
      color: '#667eea',
      isCompleted: false,
      notes: ''
    },
    {
      name: 'Programación Web',
      day: 'Viernes',
      startTime: '9:00 AM',
      endTime: '11:00 AM',
      color: '#4facfe',
      isCompleted: false,
      notes: ''
    },
    {
      name: 'Sistemas de Información',
      day: 'Viernes',
      startTime: '11:00 AM',
      endTime: '1:00 PM',
      color: '#feca57',
      isCompleted: false,
      notes: ''
    }
  ];

  /*
    ═══════════════════════════════════════
    PROPIEDADES PARA INTERACTIVIDAD
    ═══════════════════════════════════════
  */
  
  // Clase seleccionada para ver detalles
  selectedClass: Class | null = null;
  
  // Mostrar/ocultar panel de detalles
  showDetails: boolean = false;
  
  // Filtro por día
  selectedDay: string = 'Todos';
  
  // Días de la semana
  days: string[] = ['Todos', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
  
  // Vista: 'table' o 'list'
  viewMode: string = 'table';

  ngOnInit(): void {
    console.log('✅ Horario cargado con', this.classes.length, 'clases');
  }

    /*
    ═══════════════════════════════════════
    MÉTODOS PARA EVENT BINDING
    ═══════════════════════════════════════
  */
  
  /*
    (click)="selectClass(clase)"
    Selecciona una clase para ver detalles
  */
  selectClass(clase: Class): void {
    this.selectedClass = clase;
    this.showDetails = true;
    console.log('📚 Clase seleccionada:', clase.name);
  }

  /*
    (click)="closeDetails()"
    Cierra el panel de detalles
  */
  closeDetails(): void {
    this.showDetails = false;
    this.selectedClass = null;
  }

  /*
    (change)="toggleComplete(clase)"
    Marca/desmarca clase como completada
  */
  toggleComplete(clase: Class): void {
    clase.isCompleted = !clase.isCompleted;
    console.log(
      `${clase.isCompleted ? '✅' : '❌'} ${clase.name} - ${clase.day}`
    );
  }

  /*
    (click)="changeView(modo)"
    Cambia entre vista de tabla y lista
  */
  changeView(mode: string): void {
    this.viewMode = mode;
    console.log('👁️ Vista cambiada a:', mode);
  }

  /*
    (click)="selectDay(dia)"
    Filtra por día
  */
  selectDay(day: string): void {
    this.selectedDay = day;
    console.log('📅 Día seleccionado:', day);
  }

  /*
    Obtiene clases filtradas por día
  */
  get filteredClasses(): Class[] {
    if (this.selectedDay === 'Todos') {
      return this.classes;
    }
    return this.classes.filter(c => c.day === this.selectedDay);
  }

  /*
    Obtiene estadísticas
  */
  get completedCount(): number {
    return this.classes.filter(c => c.isCompleted).length;
  }

  get totalClasses(): number {
    return this.classes.length;
  }

  get completionPercentage(): number {
    return Math.round((this.completedCount / this.totalClasses) * 100);
  }

  /*
    Resetea todas las asistencias
  */
  resetAttendance(): void {
    this.classes.forEach(c => c.isCompleted = false);
    console.log('🔄 Asistencias reseteadas');
  }

  /*
    Marca todas como completadas
  */
  markAllComplete(): void {
    this.classes.forEach(c => c.isCompleted = true);
    console.log('✅ Todas las clases marcadas como completadas');
  }


}
