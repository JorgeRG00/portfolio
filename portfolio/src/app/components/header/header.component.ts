import { Component } from '@angular/core';

// Usar interpolación en vez de onclick directo en el HTML
@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  descargarCV() {
    window.open('./assets/docs/CV_Jorge_Roldan_Garcia.pdf');
  }
}
