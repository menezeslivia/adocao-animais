import { Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/registro/register.component';
import { CadastroAnimalComponent } from './componentes/cadastro-animal/cadastro-animal.component';
import { SobreComponent } from './componentes/sobre/sobre.component'; 
import { AppComponent } from './app.component';
import { MainComponent } from './componentes/main/main.component';
import { HomeComponent } from './componentes/home/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegisterComponent },
  { path: 'novopet', component: CadastroAnimalComponent },
  
  { path: '**', redirectTo: '' } 
];
