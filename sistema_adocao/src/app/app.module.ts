import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Certifique-se de que este está importado
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { CadastroAnimalComponent } from './componentes/cadastro-animal/cadastro-animal.component'; // Importe o componente corretamente
import { routes } from './app.routes';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { AnimalService } from './services/animal.service';

@NgModule({
  declarations: [
    AppComponent,
    CadastroAnimalComponent, // Declare o componente aqui
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, // Inclua este módulo aqui
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  providers: [AuthService, AuthGuard, AnimalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
