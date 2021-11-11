import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from './shared/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClientesserviceService {

  constructor(private http: HttpClient) { }

  public obterClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`http://localhost:3000/clientes`)
  }

  public obterClientePorId(id: any): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`http://localhost:3000/clientes/${id}`)
  }

  public adicionarCliente(cliente: Cliente): Observable<any> {
    return this.http.post(`http://localhost:3000/clientes`, cliente)
  }

  public atualizarClientePorId(cliente: Cliente): Observable<any> {
    return this.http.put(`http://localhost:3000/clientes/${cliente.id}`, cliente)
  }

  public removerCliente(id: any): Observable<any> {
    return this.http.delete(`http://localhost:3000/clientes/${id}`)
  }
}
