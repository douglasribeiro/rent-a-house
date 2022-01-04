import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnderecoRoutingModule } from './endereco-routing.module';
import { EnderecoListComponent } from './endereco-list/endereco-list.component';


@NgModule({
  declarations: [EnderecoListComponent],
  imports: [
    CommonModule,
    EnderecoRoutingModule
  ]
})
export class EnderecoModule { }
