import { Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/registro/register.component';
import { SobreComponent } from './componentes/sobre/sobre.component'; 
import { AppComponent } from './app.component';
import { MainComponent } from './componentes/main/main.component';

export const routes: Routes = [
  { path: '', component: AppComponent }, 
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegisterComponent },
  { path: 'sobre', component: SobreComponent }, 
  
  { path: '**', redirectTo: '' } // Redireciona rotas não encontradas para a página inicial
];
