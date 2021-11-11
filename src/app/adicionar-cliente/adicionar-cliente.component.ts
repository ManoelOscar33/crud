import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap, timeout } from 'rxjs/operators';
import { ClientesserviceService } from '../clientesservice.service';
import { Cliente } from '../shared/cliente.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-adicionar-cliente',
  templateUrl: './adicionar-cliente.component.html',
  styleUrls: ['./adicionar-cliente.component.css']
})
export class AdicionarClienteComponent implements OnInit {

  public formulario: FormGroup = new FormGroup({
    "nomeCompleto": new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(50)]),
    "cpf": new FormControl(null, [Validators.required, Validators.minLength(11), Validators.maxLength(50)]),
    "email": new FormControl(null, [Validators.required, Validators.minLength(7), Validators.maxLength(50)]),
    "telefone": new FormControl(null, [Validators.required, Validators.minLength(7), Validators.maxLength(20)]),
    "id": new FormControl(null)
  })

  constructor(
    private clientesservice: ClientesserviceService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params
      .pipe(
        map((params: any) => params['id']),
        switchMap((id) => this.clientesservice.obterClientePorId(id))
      )
      .subscribe((cliente: any) => { 
        this.atualizarCliente(cliente), 
        console.log('aqui é o que procura', cliente)
      },
      (erro: any) => console.log('Não foi possível resgatar o objeto específico.Tente novamente.'),
      () => console.log('Requsição completada com sucesso.'))
  }

  public atualizarCliente(cliente: Cliente): void {
    this.formulario.patchValue(
      {
        nomeCompleto: cliente.nomeCompleto,
        cpf: cliente.cpf,
        email: cliente.email,
        telefone: cliente.telefone,
        id: cliente.id,
      }
    )
  }

  public adicionarCliente(): void {
    if(this.formulario.value.id) {
      this.clientesservice.atualizarClientePorId(this.formulario.value)
        .subscribe((res: any) => {
          console.log(res),
          this.router.navigate(['alertmodal'])
        },
        (erro: any) => { 
          console.log('Não foi possível atualizar as informações.Tente novamente.'),
          this.router.navigate(['alertinsucesso'])
        },
        () => console.log('Atualização completada com sucesso.'))
    } else {
      this.clientesservice.adicionarCliente(this.formulario.value)
        .subscribe((cliente: any) => {
          this.router.navigate(['alertmodal'])
          
        },
        (erro: any) => {
          console.log('Não foi possível adicionar dados com sucesso.Tente novamente.'),
          this.router.navigate(['alertinsucesso'])
        },
        () => console.log('Inclusão completada com sucesso.'))
    }
  }

  


  

}
