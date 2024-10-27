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
      descricao: 'Melissa é uma gata calma e reservada, mas adora um carinho quando se sente à vontade. Infelizmente, preciso viajar para longe e não conseguirei levar ela. Ela será uma companheira amorosa e independente para quem puder lhe oferecer um novo lar. 🐾'
    },
    {
      imageUrl: './assets/dog2-image.png',
      nome: 'Toby',
      especie: 'Cachorro',
      idade: '2 anos',
      local: 'Recife, PE',
      descricao: 'Melissa é uma gata calma e reservada, mas adora um carinho quando se sente à vontade. Infelizmente, preciso viajar para longe e não conseguirei levar ela. Ela será uma companheira amorosa e independente para quem puder lhe oferecer um novo lar.🐾'
    },
    {
      imageUrl: './assets/cat2-image.png',
      nome: 'Bella',
      especie: 'Gata',
      idade: '3 anos',
      local: 'Olinda, PE',
      descricao: 'Melissa é uma gata calma e reservada, mas adora um carinho quando se sente à vontade. Infelizmente, preciso viajar para longe e não conseguirei levar ela. Ela será uma companheira amorosa e independente para quem puder lhe oferecer um novo lar. 🐾'
    }
  ];
}
