import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import {NavbarComponent} from './componentes/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sistema_adocao';
}
