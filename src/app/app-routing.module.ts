import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarClienteComponent } from './adicionar-cliente/adicionar-cliente.component';
import { AlertinsucessoComponent } from './alertinsucesso/alertinsucesso.component';
import { AlertmodalComponent } from './alertmodal/alertmodal.component';
//import { AtualizarClienteComponent } from './atualizar-cliente/atualizar-cliente.component';
import { ClientesComponent } from './clientes/clientes.component';
import { Clientes2Component } from './clientes2/clientes2.component';
//import { HomeComponent } from './home/home.component';

const routes: Routes = [
  //{path: '', component: HomeComponent},
  {path: '', component: AdicionarClienteComponent},
  {path: 'editar/:id', component: AdicionarClienteComponent},
  {path: 'clientes', component: ClientesComponent},
  {path: 'clientes2', component: Clientes2Component},
  {path: 'alertmodal', component: AlertmodalComponent},
  {path: 'alertinsucesso', component: AlertinsucessoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
