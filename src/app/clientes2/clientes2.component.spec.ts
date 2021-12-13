import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Clientes2Component } from './clientes2.component';

describe('Clientes2Component', () => {
  let component: Clientes2Component;
  let fixture: ComponentFixture<Clientes2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Clientes2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Clientes2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
