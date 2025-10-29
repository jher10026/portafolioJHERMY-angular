import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { Musica } from './pages/musica/musica';
import { Juegos } from './pages/juegos/juegos';
import { Platos } from './pages/platos/platos';
import { Horario } from './pages/horario/horario';
import { Mobil } from './pages/juegos/mobil/mobil';
import { Laptop } from './pages/juegos/laptop/laptop';
import { Sierra } from './pages/platos/sierra/sierra';
import { Costa } from './pages/platos/costa/costa';
import { Consulta } from './components/contact/consulta/consulta';
import { Contact } from './components/contact/contact';

export const routes: Routes = [
    {path: '',redirectTo: '/inicio', pathMatch: 'full' },
    {path: 'inicio', component: Inicio},
    {path: 'musica', component: Musica, title: 'musica'},
    {path: 'juegos', component: Juegos},
    {path: 'platos', component: Platos},
    {path: 'horario', component: Horario},
    {path: 'juegos/mobil', component: Mobil},
    {path: 'juegos/laptop', component: Laptop},
    {path: 'platos/sierra', component: Sierra},
    {path: 'platos/costa', component: Costa},
    {path: 'contact/consulta', component:Consulta},
    {path: 'contact',component: Contact}


];
