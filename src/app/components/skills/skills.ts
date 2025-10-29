import { Component } from '@angular/core';
import { Profile } from '../../services/profile';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {
  /*
    PROPIEDADES
  */
  skills: any[] = [];

  /*
    DEPENDENCY INJECTION
  */
  
  constructor(private profile:Profile){
    console.log('skills creado con profileservice inyectado')
  }

  ngOnInit(): void{
    // Obtener habilidades del servicio
    this.skills=this.profile.getSkills();
    console.log('habilidades obtenidas del servicio:', this.skills);
  }




}
