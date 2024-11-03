import { Component } from '@angular/core';
import { ButtonComponent } from '../botao/button.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
