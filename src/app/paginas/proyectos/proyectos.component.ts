import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-proyectos',
  imports: [NgFor,NgIf],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent {

  proyectos = [

      {nombre: 'Nodus Scientia',
        imagen: 'proyectos/NodusSc.png',
        descripcion : 'Plataforma para gestionar bootcamps, tutores y alumnos en IMATIA.',
        ano:'2024-2025',
        github: 'https://github.com/CampusDual/2024-BFS-4-G1_NodusScientia'
      },
      { nombre: 'Preguntados',
        imagen:'proyectos/Preguntados.png',
        descripcion: 'Juego básico de preguntas y respuestas desarrollado desde 0 en menos de 1 mes.',
        ano: '2024',
        github: 'https://github.com/JoelAlvz/Preguntados'
      },
      { nombre:'Proximamente',
        imagen:'proyectos/ComingSoon.png',
        descripcion: '¡Más proyectos proximamente!',
        
      }
  ]

  indexActual = 0;

  anterior(){
    this.indexActual = 
    (this.indexActual - 1 + this.proyectos.length) % this.proyectos.length;
  }
  siguiente() {
    this.indexActual = (this.indexActual + 1) % this.proyectos.length;
  }

}
