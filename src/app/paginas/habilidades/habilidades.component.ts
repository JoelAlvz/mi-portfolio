import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-habilidades',
  imports: [CommonModule],
  templateUrl: './habilidades.component.html',
  styleUrl: './habilidades.component.css'
})
export class HabilidadesComponent {
 compentencias = {
    lenguajes: [
       {nombre: 'TypeScript', logo: 'typescript.png' },
       { nombre: 'Java', logo: 'java.png'},
       { nombre: 'HTML', logo: 'HTML.png' },
       { nombre: 'CSS', logo: 'CSS.png' }
    ],
    frameworks: [
      { nombre: 'Angular', logo: 'Angular.png' },
      { nombre: 'Ontimize', logo: 'ontimize.png' },
    ],
    controlVersiones: [
      {nombre: 'Git', logo: 'git.png'},
      { nombre: 'GitHub', logo: 'github.png' }
    ]
 }
}
