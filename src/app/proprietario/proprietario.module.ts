import { LocalDateTimePipe } from './../shared/pipe/local-date-time.pipe';
import { MaterialModule } from './../shared/material.module';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProprietarioRoutingModule } from './proprietario-routing.module';
import { ProprietarioComponent } from './proprietario/proprietario.component';
import { ProprietarioEditComponent } from './proprietario-edit/proprietario-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { MatPaginatorIntlPtBr } from '../shared/paginator-ptbr-i8n';


@NgModule({
  declarations: [ProprietarioComponent, ProprietarioEditComponent, LocalDateTimePipe],
  imports: [
    CommonModule,
    MaterialModule,
    ProprietarioRoutingModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatCardModule,
    ReactiveFormsModule
  ],providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR'  },
    { provide: MatPaginatorIntl, useClass: MatPaginatorIntlPtBr}
  ]
})
export class ProprietarioModule { }
