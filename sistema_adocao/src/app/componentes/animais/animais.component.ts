import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardAnimalComponent} from './card-animal/card-animal.component';

@Component({
  selector: 'app-animais',
  standalone: true,
  imports: [CommonModule, CardAnimalComponent],
  templateUrl: './animais.component.html',
  styleUrl: './animais.component.css'
})
export class AnimaisComponent {
  animais = [
    {
      imageUrl: './assets/cat2-image.png',
      nome: 'Melissa',
      especie: 'Gata',
      idade: '1 ano',
      local: 'Prazeres, Jaboatão',
      descricao: 'Melissa é uma gata calma e reservada, mas adora um carinho...'
    },
    {
      imageUrl: './assets/dog2-image.png',
      nome: 'Toby',
      especie: 'Cachorro',
      idade: '2 anos',
      local: 'Recife, PE',
      descricao: 'Toby é um cachorro muito alegre e cheio de energia...'
    },
    {
      imageUrl: './assets/cat2-image.png',
      nome: 'Bella',
      especie: 'Gata',
      idade: '3 anos',
      local: 'Olinda, PE',
      descricao: 'Bella é muito amigável e adora brincar com crianças...'
    }
  ];
}
