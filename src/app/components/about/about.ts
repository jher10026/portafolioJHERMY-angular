import { Component } from '@angular/core';
import { Profile } from '../../services/profile';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  /*
    ═══════════════════════════════════════
    PROPIEDADES
    Aquí guardaremos los datos del servicio
    ═══════════════════════════════════════
  */
  university: string = '';
  semester: string = '';
  /*
    ═══════════════════════════════════════
    DEPENDENCY INJECTION
    
    constructor(private profileService: ProfileService)
    
    ¿QUÉ HACE?
    - Angular detecta que necesitas ProfileService
    - Busca o crea una instancia
    - La inyecta automáticamente aquí
    - Ahora puedes usar this.profileService
    ═══════════════════════════════════════
  */
 constructor(private profile: Profile){
  console.log('About creado con ProfileService inyectado')
 }
  /*
    ngOnInit: Se ejecuta cuando el componente se carga
  */
 ngOnInit(): void {
  this.university=this.profile.getUniversity();
  this.semester=this.profile.getSemester();
  
  console.log('Datos obtenidos del servicio:',{university:this.university,semester:this.semester});
 }

}
