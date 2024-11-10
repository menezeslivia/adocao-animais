import { HomeComponent } from './componentes/home/home/home.component';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import {CabecalhoComponent} from './componentes/cabecalho/cabecalho.component';
import {MainComponent} from './componentes/main/main.component';
import {ButtonComponent} from './componentes/button/button.component';
import {SobreComponent} from './componentes/sobre/sobre.component';
import {AnimaisComponent} from './componentes/animais/animais.component';
import {CardAnimalComponent} from './componentes/animais/card-animal/card-animal.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  
  imports: [HomeComponent,RouterOutlet, CabecalhoComponent, MainComponent, ButtonComponent, SobreComponent, AnimaisComponent, CardAnimalComponent, AuthLayoutComponent, CommonModule,],
  host: { ngSkipHydration: 'true' },
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  template: `
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'sistema_adocao';


}
