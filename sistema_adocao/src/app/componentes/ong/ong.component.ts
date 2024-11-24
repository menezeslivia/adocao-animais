import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AnimalService } from '../../services/animal.service';
import { Animal } from '../../models/animal.model';

@Component({
  selector: 'app-ong',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ong.component.html',
  styleUrl: './ong.component.css'
})
export class OngComponent implements OnInit {
  animais: Animal[] = [];
  novoAnimal: Animal = this.resetAnimal();
  editandoId: string | null = null;
  mostrarFormulario: boolean = false;

  constructor(private animalService: AnimalService) {}

  ngOnInit(): void {
    this.carregarAnimais();
  }

  carregarAnimais(): void {
    this.animais = this.animalService.getAnimais();
  }

  salvarAnimal(): void {
    if (this.editandoId) {
      this.animalService.editarAnimal(this.editandoId, this.novoAnimal);
    } else {
      this.animalService.adicionarAnimal(this.novoAnimal);
    }
    this.novoAnimal = this.resetAnimal();
    this.editandoId = null;
    this.carregarAnimais();
  }

  editarAnimal(animal: Animal): void {
    this.novoAnimal = { ...animal };
    this.editandoId = animal.id;
    this.mostrarFormulario = true;
  }

  excluirAnimal(id: string): void {
    this.animalService.excluirAnimal(id);
    this.carregarAnimais();
  }

  resetAnimal(): Animal {
    return {
      id: '',
      nome: '',
      idade: '',
      tipo: '',
      localizacao: '',
      contato: '',
      descricao: '',
      imagemUrl: '',
    };
  }
}