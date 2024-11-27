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
  styleUrls: ['./ong.component.css'],
})
export class OngComponent implements OnInit {
  animais: Animal[] = []; // Lista de animais
  novoAnimal: Animal = this.resetAnimal(); // Novo animal para cadastro ou edição
  editandoId: string | null = null; // ID do animal sendo editado
  mostrarModal: boolean = false; // Controle de exibição do modal

  constructor(private animalService: AnimalService) {}

  ngOnInit(): void {
    this.carregarAnimais();
  }

  carregarAnimais(): void {
    this.animais = this.animalService.getAnimais(); // Busca animais no serviço
  }

  salvarAnimal(): void {
    if (this.editandoId) {
      // Atualiza animal existente
      this.animalService.editarAnimal(this.editandoId, this.novoAnimal);
    } else {
      // Adiciona novo animal
      this.animalService.adicionarAnimal(this.novoAnimal);
    }
    this.novoAnimal = this.resetAnimal(); // Reseta o formulário
    this.editandoId = null;
    this.mostrarModal = false; // Fecha o modal
    this.carregarAnimais(); // Atualiza a lista
  }

  editarAnimal(animal: Animal): void {
    this.novoAnimal = { ...animal }; // Clona o objeto para edição
    this.editandoId = animal.id;
    this.mostrarModal = true; // Abre o modal
  }

  excluirAnimal(id: string): void {
    this.animalService.excluirAnimal(id); // Remove o animal
    this.carregarAnimais(); // Atualiza a lista
  }

  fecharModal(event?: Event): void {
    if (event) {
      event.stopPropagation(); 
    }
    this.mostrarModal = false;

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
