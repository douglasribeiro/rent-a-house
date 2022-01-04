import { QueryBuilder } from './../shared/pagination';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proprietario } from './proprietario';
import { Page } from '../shared/pagination';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProprietarioService {

  private baseURL = 'http://localhost:3000'
  private endpoint = 'proprietario'

  constructor(private httpClient: HttpClient) { }

  listar(queryBuilder: QueryBuilder):Observable<Page<Proprietario>> {
    return this.httpClient
      .get<Proprietario[]>(`${this.baseURL}/${this.endpoint}?${queryBuilder.buildQueryString()}`, {observe: 'response'})
      .pipe(
        map(response => <Page<Proprietario>>Page.fromResponse(response))
      );
  }

  cadastrar(prop: Proprietario): Observable<Proprietario> {
    return this.httpClient.post<Proprietario>(`${this.baseURL}/${this.endpoint}`, prop);
  }

  pesquisarPorId(id: string): Observable<Proprietario>{
    return this.httpClient.get<Proprietario>(`${this.baseURL}/${this.endpoint}/${id}`)
  }

  atualizar(prop: Proprietario): Observable<Proprietario>{
    return this.httpClient.put<Proprietario>(`${this.baseURL}/${this.endpoint}/${prop.id}`, prop);
  }

  deleta(id: string): Observable<Proprietario>{
    return this.httpClient.delete<Proprietario>(`${this.baseURL}/${this.endpoint}/${id}`)
  }
}
