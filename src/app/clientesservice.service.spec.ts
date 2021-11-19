import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
//import { Observable } from 'rxjs';

import { ClientesserviceService } from './clientesservice.service';

fdescribe('ClientesserviceService', () => {
  let service: ClientesserviceService;

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
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
