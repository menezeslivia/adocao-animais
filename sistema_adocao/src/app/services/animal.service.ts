import { Injectable } from '@angular/core';
import { Animal } from '../models/animal.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class AnimalService {
  private animais: Animal[] = [];

  constructor() {
    this.carregarDoStorage();
  }

  // Retorna todos os animais
  getAnimais(): Animal[] {
    return this.animais;
  }

  // Retorna um animal específico por ID
  getAnimalPorId(id: string): Animal | undefined {
    return this.animais.find((animal) => animal.id === id);
  }

  // Adiciona um novo animal
  adicionarAnimal(animal: Animal): void {
    animal.id = this.gerarId(); // Gera um ID único
    this.animais.push(animal);
    this.salvarNoStorage(); // Salva no LocalStorage
  }

  // Edita um animal
  editarAnimal(id: string, dadosAtualizados: Partial<Animal>): void {
    const index = this.animais.findIndex((animal) => animal.id === id);
    if (index !== -1) {
      this.animais[index] = { ...this.animais[index], ...dadosAtualizados };
      this.salvarNoStorage(); // Salva no LocalStorage
    }
  }

  // Exclui um animal
  excluirAnimal(id: string): void {
    this.animais = this.animais.filter((animal) => animal.id !== id);
    this.salvarNoStorage(); // Salva no LocalStorage
  }

  // Gera um ID único
  private gerarId(): string {
    return uuidv4();
  }

  // Salva os animais no LocalStorage
  private salvarNoStorage(): void {
    localStorage.setItem('animais', JSON.stringify(this.animais));
  }

  // Carrega os animais do LocalStorage
  private carregarDoStorage(): void {
    const dados = localStorage.getItem('animais');
    if (dados) {
      this.animais = JSON.parse(dados);
    }
  }
}
