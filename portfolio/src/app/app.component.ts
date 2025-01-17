import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { AboutComponent } from "./components/about/about.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ExperienciaComponent } from './components/experiencia/experiencia.component';

@Component({
  selector: 'app-root',
  imports: [ HeaderComponent, ExperienciaComponent, AboutComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
