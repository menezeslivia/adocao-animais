import { Injectable } from '@angular/core';

interface Animal {
  id: number;
  name: string;
  type: string;
  age: number;
}

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  private animals: Animal[] = [
    { id: 1, name: 'Bobby', type: 'Dog', age: 3 },
    { id: 2, name: 'Milo', type: 'Cat', age: 2 }
  ];
  private nextId = 3;

  getAnimals() {
    return this.animals;
  }

  addAnimal(animal: Animal) {
    animal.id = this.nextId++;
    this.animals.push(animal);
  }

  updateAnimal(updatedAnimal: Animal) {
    const index = this.animals.findIndex(a => a.id === updatedAnimal.id);
    if (index !== -1) this.animals[index] = updatedAnimal;
  }

  deleteAnimal(id: number) {
    this.animals = this.animals.filter(animal => animal.id !== id);
  }
}
