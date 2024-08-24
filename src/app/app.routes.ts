import { Routes } from '@angular/router';
import { ListaContatosComponent } from './paginas/lista-contatos/lista-contatos.component';

export const routes: Routes = [
  {path: '', redirectTo: 'lista-contato', pathMatch: 'full'},
  {path: 'lista-contato', component: ListaContatosComponent}
];
