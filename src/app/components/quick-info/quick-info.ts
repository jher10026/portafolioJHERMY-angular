import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Profile } from '../../services/profile';

@Component({
  selector: 'app-quick-info',
  imports: [CommonModule],
  templateUrl: './quick-info.html',
  styleUrl: './quick-info.css'
})
export class QuickInfo {
  
  /*
    PROPIEDADES
  */
  location: string = '';
  career: string = '';
  semester: string = '';
  technologies: string[] = [];
  /*
    DEPENDENCY INJECTION
  */
 constructor(private profile:Profile){
  console.log('quick creado con profile service inyectado');
 }

 ngOnInit(): void{
  // Obtener datos del servicio
  this.location=this.profile.getLocation();
  this.career=this.profile.getCareer();
  this.semester=this.profile.getSemester();
  this.technologies=this.profile.getTechnologies();

  console.log('datos obtenidos', {location:this.location,career:this.career,semester:this.semester,technologies:this.technologies});
 }













/*
  // Estado: controla si se muestra o no el mapa
  showMap: boolean = false;
  
  // URL del mapa (sanitizada y segura)
  universityMapEmbed: SafeResourceUrl;
  
  constructor(private sanitizer: DomSanitizer) {
    // Sanitiza la URL para que Angular la acepte
    this.universityMapEmbed = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3823.487141648587!2d-73.3489753!3d-13.6657047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x916d29dcb6bb8533%3A0x41313a9e528cc3b2!2sESCUELA%20PROFESIONAL%20DE%20INGENIER%C3%8DA%20DE%20SISTEMAS%20-%20UNAJMA!5e0!3m2!1ses!2spe!4v1697817479935!5m2!1ses!2spe'
    );
  }
  
  // Método para mostrar/ocultar el mapa
  toggleMap(): void {
    this.showMap = !this.showMap;
  }*/
}