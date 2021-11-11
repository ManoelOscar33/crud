import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesserviceService } from '../clientesservice.service';
import { Cliente } from '../shared/cliente.model';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = []
  cliente: any;

  constructor(
    private clientesService: ClientesserviceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.obterClientes();
  }

  public obterClientes(): void {
    this.clientesService.obterClientes()
      .subscribe(
        (clientes: any) => {this.clientes = clientes}
      )
  }

  public atualizarClientePorId(id: any): void {
    this.router.navigate(['editar', id])
    /*this.clientesService.atualizarClientePorId(id, this.cliente)
      .subscribe((cliente: any) =>
        console.log(cliente)
      )*/
  }

  public removerCliente(id: any): void {
    this.clientesService.removerCliente(id)
      .subscribe(
        (res: any) => {
          console.log(res),
          this.router.navigate(['alertmodal'])
          this.obterClientes()
        },
        (erro: any) => {
          console.log('Não foi possível remover dados com sucesso.Tente novamente.'),
          this.router.navigate(['alertinsucesso'])
        },
        () => console.log('Remoção completada com sucesso.'))
  }
}
