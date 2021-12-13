import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
//import { Observable } from 'rxjs';

import { ClientesserviceService } from './clientesservice.service';
import { Cliente } from './shared/cliente.model';

fdescribe('ClientesserviceService', () => {
  let service: ClientesserviceService;
  let http: HttpClient
  /*const httpStub = {
    get: (params: any) => ([
      {
        nomeCompleto: "João ", 
        cpf: "123.456.789-00", 
        email: "joaoalberto@email.com",
        telefone: "999258778",
        id: 1
      }]
    )
  }*/

  beforeEach(() => {
    TestBed.configureTestingModule({
      /*providers: [
        {
          provide: HttpClient,
          useValue: httpStub
        }
      ]*/

      imports: [
        HttpClientTestingModule
      ]

    });
    service = TestBed.inject(ClientesserviceService);
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Ele deve chamar um get com o endpoint correto', () => {
    const spy1 = spyOn(http, 'get').and.callThrough();
    service.obterClientes();
    expect(spy1).toHaveBeenCalledWith(`http://localhost:3000/clientes`)
  })

  it('Ele deve chamar um get com o endpoint correto', () => {
    const spy2 = spyOn(http, 'get').and.callThrough();
    service.obterClientePorId(new Cliente);
    expect(spy2).toHaveBeenCalled()
  })

  it('Ele deve chamar um post com o endpoint correto', () => {
    const spy3 = spyOn(http, 'post').and.callThrough();
    service.adicionarCliente(new Cliente);
    expect(spy3).toHaveBeenCalled
  })

  it('Ele deve chamar um put com o endpoint correto', () => {
    const spy4 = spyOn(http, 'put').and.callThrough();
    service.atualizarClientePorId(new Cliente);
    expect(spy4).toHaveBeenCalled()
  })

  it('Ele deve chamar um delete com o endpoint correto', () => {
    const spy4 = spyOn(http, 'delete').and.callThrough();
    service.removerCliente(new Cliente);
    expect(spy4).toHaveBeenCalled()
  })

});
