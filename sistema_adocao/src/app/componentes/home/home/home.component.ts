import { CabecalhoComponent } from '../../cabecalho/cabecalho.component';
import { MainComponent } from '../../main/main.component';
import { SobreComponent } from '../../sobre/sobre.component';
import { AnimaisComponent } from './../../animais/animais.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AnimaisComponent, MainComponent, SobreComponent, CabecalhoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
