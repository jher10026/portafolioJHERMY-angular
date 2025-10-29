import { Injectable } from '@angular/core';
/*
  ═══════════════════════════════════════
  INTERFACES - Estructura de datos
  ═══════════════════════════════════════
*/
// Información personal
interface PersonalInfo {
  fullName: string;
  title: string;
  university: string;
  semester: string;
  location: string;
  career: string;
  course: string;
  technologies: string[];
}

// Habilidad técnica
interface Skill {
  name: string;
  level: number; // 0-100
  icon: string;
}

/*
  ═══════════════════════════════════════
  @Injectable
  ¿QUÉ HACE?
  - Marca esta clase como "inyectable"
  - Permite que Angular la inyecte en otros componentes
  - providedIn: 'root' = disponible en toda la app
  ═══════════════════════════════════════
*/

@Injectable({
  providedIn: 'root'
})
export class Profile {
  /*
    ═══════════════════════════════════════
    DATOS CENTRALIZADOS
    Toda tu información personal aquí
    ═══════════════════════════════════════
  */

  private personalInfo: PersonalInfo = {
    fullName: 'Jhermy Hitsuko Yupanqui Aquise',
    title: 'Estudiante de Ingeniería de Sistemas',
    university: 'Universidad José María Arguedas',
    semester: '5to semestre',
    location: 'Andahuaylas, Apurímac, Perú',
    career: 'Ingeniería de Sistemas',
    course: 'Programación Web',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Angular']
  };
  // Habilidades técnicas
  private skills: Skill[] = [
    { name: 'HTML5', level: 85, icon: '🌐' },
    { name: 'CSS3', level: 86, icon: '🎨' },
    { name: 'JavaScript', level: 75, icon: '⚡' },
    { name: 'Angular', level: 70, icon: '🅰️' }
  ];

  constructor(){
    console.log('ProfileService inicializando')
  }
    /*
    ═══════════════════════════════════════
    MÉTODOS PÚBLICOS
    Los componentes llaman estos métodos
    ═══════════════════════════════════════
  */
  
  // Obtiene toda la información personal
  getPersonalInfo(): PersonalInfo {
    return this.personalInfo;
  }

  // Obtiene solo el nombre completo
  getFullName(): string {
    return this.personalInfo.fullName;
  }

  // Obtiene el título/profesión
  getTitle(): string {
    return this.personalInfo.title;
  }

  // Obtiene la universidad
  getUniversity(): string {
    return this.personalInfo.university;
  }

  // Obtiene el semestre
  getSemester(): string {
    return this.personalInfo.semester;
  }

  // Obtiene la ubicación
  getLocation(): string {
    return this.personalInfo.location;
  }

  // Obtiene la carrera
  getCareer(): string {
    return this.personalInfo.career;
  }

  // Obtiene las tecnologías
  getTechnologies(): string[] {
    return this.personalInfo.technologies;
  }

  // Obtiene todas las habilidades
  getSkills(): Skill[] {
    return this.skills;
  }
  
}
