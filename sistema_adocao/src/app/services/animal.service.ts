import { Injectable } from '@angular/core';
import { Animal } from '../models/animal.model';

@Injectable({
  providedIn: 'root',
})
export class AnimalService {
  private animais: Animal[] = [];

  constructor() {}

  // Retorna todos os animais
  getAnimais(): Animal[] {
    return this.animais;
  }

  // Adiciona um novo animal
  adicionarAnimal(animal: Animal): void {
    animal.id = this.gerarId(); // Gera um ID único
    this.animais.push(animal);
  }

  // Edita um animal
  editarAnimal(id: string, dadosAtualizados: Partial<Animal>): void {
    const index = this.animais.findIndex((animal) => animal.id === id);
    if (index !== -1) {
      this.animais[index] = { ...this.animais[index], ...dadosAtualizados };
    }
  }

  // Exclui um animal
  excluirAnimal(id: string): void {
    this.animais = this.animais.filter((animal) => animal.id !== id);
  }

  // Gera um ID único (simulado)
  private gerarId(): string {
    return Math.random().toString(36).substring(2, 9);
  }
}