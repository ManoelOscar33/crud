import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientesserviceService } from '../clientesservice.service';
import { map, switchMap } from 'rxjs/operators'
import { Cliente } from '../shared/cliente.model';

@Component({
  selector: 'app-atualizar-cliente',
  templateUrl: './atualizar-cliente.component.html',
  styleUrls: ['./atualizar-cliente.component.css']
})
export class AtualizarClienteComponent implements OnInit {

  cliente$: any

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
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    
  }
}
