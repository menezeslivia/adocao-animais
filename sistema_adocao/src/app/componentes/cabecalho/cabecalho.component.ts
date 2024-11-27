import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecalho',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.css'
})
export class CabecalhoComponent implements OnInit {
  rotaAtual: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    // Atualiza a rota atual sempre que ela muda
    this.router.events.subscribe(() => {
      this.rotaAtual = this.router.url; // Obtém a URL atual
    });
  }

  // Verifica se a rota corresponde a uma específica
  isHomePage(): boolean {
    return this.rotaAtual === '/';
  }

  isOngPage(): boolean {
    return this.rotaAtual === '/home';
  }
  
}
