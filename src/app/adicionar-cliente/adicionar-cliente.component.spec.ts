import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { ClientesserviceService } from '../clientesservice.service';
import { Cliente } from '../shared/cliente.model';

import { AdicionarClienteComponent } from './adicionar-cliente.component';

describe('AdicionarClienteComponent', () => {
  let component: AdicionarClienteComponent;
  let fixture: ComponentFixture<AdicionarClienteComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let clientesService: any;
  let router: Router



  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        ReactiveFormsModule
      ],
      declarations: [
         AdicionarClienteComponent,
         AppRoutingModule
      ],
      providers: [
        ClientesserviceService,
        {
          provide: ActivatedRoute
        },
        {
          provide: Router
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
