import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstadoCivilService {

  private baseURL = 'http://localhost:3000'
  private endpoint = 'estadoCivil'

  constructor(private httpClient: HttpClient) { }

  listar(){
    return this.httpClient.get<any[]>(`${this.baseURL}/${this.endpoint}`)
  }
}
