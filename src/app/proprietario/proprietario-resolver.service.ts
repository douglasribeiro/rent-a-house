import { ProprietarioService } from './proprietario.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { empty, Observable } from 'rxjs';
import { Proprietario } from './proprietario';

@Injectable({
  providedIn: 'root'
})
export class ProprietarioResolver implements Resolve<Proprietario> {

  constructor(private service: ProprietarioService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Proprietario | Observable<Proprietario> | Promise<Proprietario> {
    const id = route.params["id"];
    if(id){
      return this.service.pesquisarPorId(id);
    }
    return empty();
  }
}
