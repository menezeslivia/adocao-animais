import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import {CabecalhoComponent} from './componentes/cabecalho/cabecalho.component';
import {MainComponent} from './componentes/main/main.component';
import {ButtonComponent} from './componentes/button/button.component';
import {SobreComponent} from './componentes/sobre/sobre.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CabecalhoComponent, MainComponent, ButtonComponent, SobreComponent, CommonModule],
  host: { ngSkipHydration: 'true' },
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sistema_adocao';


  isLandingPageVisible = true;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.isLandingPageVisible = !this.router.url.includes('/login') && !this.router.url.includes('/registro');
    });
  }
}
