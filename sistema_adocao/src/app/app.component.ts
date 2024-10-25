import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CabecalhoComponent} from './componentes/cabecalho/cabecalho.component';
import {MainComponent} from './componentes/main/main.component';
import {ButtonComponent} from './componentes/button/button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CabecalhoComponent, MainComponent, ButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sistema_adocao';
}
