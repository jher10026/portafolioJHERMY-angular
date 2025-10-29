import { Component } from '@angular/core';
import { About } from "../../components/about/about";
import { QuickInfo } from "../../components/quick-info/quick-info";
import { Contact } from "../../components/contact/contact";
import { Skills } from "../../components/skills/skills";
import { Profile } from '../../services/profile';
import { CommonModule } from '@angular/common';

// ✨ IMPORTAR COMPONENTES HIJOS

@Component({
  selector: 'app-inicio',
  imports: [
    About, 
    QuickInfo, 
    Contact, 
    Skills, 
    CommonModule,   // ← NUEVO
  ],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class Inicio {
  
  // Propiedades Hero
  fullName: string = '';
  title: string = '';

  /*
    ═══════════════════════════════════════
    DATOS PARA COMPONENTES HIJOS
    ═══════════════════════════════════════
  */
  
  // Habilidades para skill-card
  skills: any[] = [];

  // Opciones de contacto para contact-option
  contactOptions = [
    {
      icon: '📱',
      title: 'WhatsApp',
      description: 'Envíame un mensaje',
      link: 'https://web.whatsapp.com/',
      isExternal: true,
      cssClass: 'whatsapp'
    },
    {
      icon: '📧',
      title: 'Email',
      description: 'Escríbeme un correo',
      link: 'https://mail.google.com/mail/u/0/#inbox',
      isExternal: true,
      cssClass: 'email'
    },
    {
      icon: '💻',
      title: 'GitHub',
      description: 'Ve mis proyectos',
      link: 'https://github.com/jher10026',
      isExternal: true,
      cssClass: 'github'
    },
    {
      icon: '📩',
      title: 'Consulta',
      description: 'Envíame tu consulta ✋(haz click)',
      link: '/contact/consulta',
      isExternal: false,
      cssClass: 'consulta'
    }
  ];

  /*
    ═══════════════════════════════════════
    PROPIEDADES PARA TRACKING DE EVENTOS
    ═══════════════════════════════════════
  */
  
  lastSkillClicked: string = '';
  lastContactClicked: string = '';
  totalSkillClicks: number = 0;
  totalContactClicks: number = 0;

  // Mostrar notificación
  showNotification: boolean = false;
  notificationMessage: string = '';

  constructor(private profile: Profile) {
    console.log('✅ Inicio creado con Profile inyectado');
  }

  ngOnInit(): void {
    // Obtener datos del servicio
    this.fullName = this.profile.getFullName();
    this.title = this.profile.getTitle();
    this.skills = this.profile.getSkills();

    console.log('📊 Datos recibidos del servicio:', {
      fullName: this.fullName,
      title: this.title,
      skills: this.skills
    });
  }

  /*
    ═══════════════════════════════════════
    MÉTODOS PARA MANEJAR EVENTOS DE HIJOS
    Estos métodos se ejecutan cuando los hijos
    emiten eventos con @Output()
    ═══════════════════════════════════════
  */
  
  /*
    Maneja el evento skillClicked del hijo skill-card
    Recibe: nombre de la habilidad (string)
  */
  onSkillClicked(skillName: string): void {
    this.totalSkillClicks++;
    this.lastSkillClicked = skillName;
    
    console.log(`🎯 PADRE recibió: Skill "${skillName}" clickeada (Total: ${this.totalSkillClicks})`);
    
    this.showNotificationTemp(`Has clickeado en ${skillName}`);
  }

  /*
    Maneja el evento levelIncreased del hijo skill-card
    Recibe: { name: string, newLevel: number }
  */
  onSkillLevelIncreased(data: { name: string, newLevel: number }): void {
    console.log(`📈 PADRE recibió: ${data.name} nivel aumentó a ${data.newLevel}%`);
    
    // Actualizar en el array del servicio (opcional)
    const skill = this.skills.find(s => s.name === data.name);
    if (skill) {
      skill.level = data.newLevel;
    }
    
    this.showNotificationTemp(`¡${data.name} mejoró! Ahora: ${data.newLevel}%`);
  }

  /*
    Maneja el evento contactClicked del hijo contact-option
    Recibe: { title: string, timestamp: Date }
  */
  onContactClicked(event: { title: string, timestamp: Date }): void {
    this.totalContactClicks++;
    this.lastContactClicked = event.title;
    
    const time = event.timestamp.toLocaleTimeString();
    
    console.log(`📱 PADRE recibió: ${event.title} clickeado a las ${time} (Total: ${this.totalContactClicks})`);
    
    this.showNotificationTemp(`Clickeaste ${event.title} a las ${time}`);
  }

  /*
    Muestra notificación temporal (3 segundos)
  */
  showNotificationTemp(message: string): void {
    this.notificationMessage = message;
    this.showNotification = true;
    
    setTimeout(() => {
      this.showNotification = false;
    }, 3000);
  }

}