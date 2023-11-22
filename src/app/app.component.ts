import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ejercicio 09 - Interpolacion';
  nombre = 'Omar Montoya Romero';
  edad = '20';
  semestre = 'Septimo semestre';
  //calificaciones = [5, 5, 5, 5, 5, 5];
  calificaciones = [9, 9, 10, 10, 9, 7];
  CalcularPromedio() {
    let suma = 0;
    const longitudArreglo = this.calificaciones.length;
    for (let i = 0; i < longitudArreglo; i++)
      suma += this.calificaciones[i];
    return suma/this.calificaciones.length;
  }
  estadoAlumno() { 
    if (this.CalcularPromedio() >= 6) {
      return 'Aprobado';
    } else {
      return 'Reprobado'
    }

  }
}
