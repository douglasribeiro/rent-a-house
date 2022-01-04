import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Cidade } from './model/cidade';
import { EstadosBr } from './model/estadosBr';

@Injectable({
  providedIn: 'root'
})
export class DropDownServiceService {

  constructor(private http: HttpClient) { }

  getEstadosBr(){
    return this.http.get<EstadosBr[]>('assets/dados/estadosbr.json')
  }

  getCidades(idEstao: number){
    return this.http.get<Cidade[]>('assets/dados/cidades.json')
    .pipe(
      map((cidades: Cidade[]) => cidades.filter(c => c.estado == idEstao))
    )
  }
}
