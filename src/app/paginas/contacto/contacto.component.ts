import { Component } from '@angular/core';
import { EmailService } from '../../servicios/email.service';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  email = '';
  mensaje = '';
  mostrarPopup = false;

  constructor(private emailService: EmailService) {}

  abrirPopup() {
    this.mostrarPopup = true;
    this.mensaje = '';
  }

  cerrarPopup() {
    this.mostrarPopup = false;
  }


  enviarCorreo() {
    if (!this.email) {
      this.mensaje = 'Ingresa un correo';
      return;
    }

    this.emailService.sendEmail(this.email).subscribe({
      next: () => {
        this.mensaje = 'CV enviado con éxito! (Revisa Spam)';
      },
      error: () => {
        this.mensaje = 'Error al enviar el correo.';
      }
    });
  }


  descargarCV() {
    const link = document.createElement('a');
    link.href = 'Curriculum.pdf'; 
    link.download = 'Curriculum.pdf';
    link.click();
    this.mensaje = 'Descarga iniciada';
  }
}