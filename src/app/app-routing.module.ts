import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [

  { path: '', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'proprietario', loadChildren: () => import('./proprietario/proprietario.module').then(m => m.ProprietarioModule)},
  { path: 'endereco', loadChildren: () => import('./endereco/endereco.module').then(m => m.EnderecoModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
