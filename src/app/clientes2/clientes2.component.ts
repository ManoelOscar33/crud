import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesserviceService } from '../clientesservice.service';
import { Cliente } from '../shared/cliente.model';

@Component({
  selector: 'app-clientes2',
  templateUrl: './clientes2.component.html',
  styleUrls: ['./clientes2.component.css']
})
export class Clientes2Component implements OnInit {

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
        (clientes: any) => {
          let c: [] = clientes.slice(4, 8)
          this.clientes = c
        }
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
