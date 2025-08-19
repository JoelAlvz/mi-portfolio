import { Routes } from '@angular/router';
import { SobreMiComponent } from './paginas/sobre-mi/sobre-mi.component';
import { HabilidadesComponent } from './paginas/habilidades/habilidades.component';
import { ProyectosComponent } from './paginas/proyectos/proyectos.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';

export const routes: Routes = [
{path: '', redirectTo: 'sobre-mi', pathMatch: 'full'},
 { path: 'sobre-mi', component: SobreMiComponent },
  { path: 'habilidades', component: HabilidadesComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'contacto', component: ContactoComponent }
];
