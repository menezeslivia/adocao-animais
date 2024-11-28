import { Component, OnInit } from '@angular/core';
     import { CommonModule } from '@angular/common'; // Import CommonModule
     import { AnimalService } from '../../services/animal.service';
     import { Animal } from '../../models/animal.model';

     @Component({
       selector: 'app-todos-animais',
       standalone: true,
       imports: [CommonModule], // Add CommonModule to imports array
       templateUrl: './todos-animais.component.html',
       styleUrl: './todos-animais.component.css'
     })
export class TodosAnimaisComponent implements OnInit {
  animais: Animal[] = []; 

  constructor(private animalService: AnimalService) {}

  ngOnInit(): void {
    this.carregarAnimais();
  }

  carregarAnimais(): void {
    this.animais = this.animalService.getAnimais(); 
  }
  excluirAnimal(id: string): void {
    this.animalService.excluirAnimal(id); 
    this.carregarAnimais(); // Re-fetch animals after deleting
  }

}
