import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { AdicionarClienteComponent } from './adicionar-cliente/adicionar-cliente.component';
import { ClientesComponent } from './clientes/clientes.component';
import { AtualizarClienteComponent } from './atualizar-cliente/atualizar-cliente.component';
import { HomeComponent } from './home/home.component';
import { AlertmodalComponent } from './alertmodal/alertmodal.component';
import { AlertinsucessoComponent } from './alertinsucesso/alertinsucesso.component';
import { Clientes2Component } from './clientes2/clientes2.component';


@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    AdicionarClienteComponent,
    ClientesComponent,
    AtualizarClienteComponent,
    HomeComponent,
    AlertmodalComponent,
    AlertinsucessoComponent,
    Clientes2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
