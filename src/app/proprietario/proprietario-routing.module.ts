import { ProprietarioComponent } from './proprietario/proprietario.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProprietarioEditComponent } from './proprietario-edit/proprietario-edit.component';
import { ProprietarioResolver } from './proprietario-resolver.service';

const routes: Routes = [
  {path: '', component: ProprietarioComponent},
  {path: 'novo', component: ProprietarioEditComponent},
  {path: 'edit/:id', component: ProprietarioEditComponent, resolve: { proprietario: ProprietarioResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProprietarioRoutingModule { }
