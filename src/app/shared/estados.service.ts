import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Estado } from '../proprietario/proprietario';

@Injectable({
  providedIn: 'root'
})
export class EstadosService {

  private baseURL = 'http://localhost:3000'
  private endpoint = 'estados'

  constructor(private httpClient: HttpClient) { }

  listar(){
    return this.httpClient.get<Estado[]>(`${this.baseURL}/${this.endpoint}`)
  }

}
