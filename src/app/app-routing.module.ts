import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApostandoComponent } from './components/apostando/apostando.component';

import { CompartirComponent } from './components/compartir/compartir.component';
import { CrearRifaComponent } from './components/crear-rifa/crear-rifa.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { HomeComponent } from './components/home/home.component';
import { ListanumerosComponent } from './components/listanumeros/listanumeros.component';
import { ListarifasComponent } from './components/listarifas/listarifas.component';
import { MenurifaComponent } from './components/menurifa/menurifa.component';
import { ModaleditarComponent } from './components/modaleditar/modaleditar.component';

import { ModallibresComponent } from './components/modallibres/modallibres.component';
import { ModalverapuestaComponent } from './components/modalverapuesta/modalverapuesta.component';
import { PanelnumerosComponent } from './components/panelnumeros/panelnumeros.component';
import { VerfichaComponent } from './components/verficha/verficha.component';
import { ModalmasinfoComponent } from './components/modalmasinfo/modalmasinfo.component';
import { CheckLoginGuard } from './shared/guards/check-login.guard';
import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path:'home', component: HomeComponent},
  {path:'listarifas', component: ListarifasComponent,canActivate:[AuthGuard]},
  {path: 'crear-rifa', component: CrearRifaComponent,canActivate:[AuthGuard]},
  {path: 'menurifa/:id', component: MenurifaComponent,canActivate:[AuthGuard]},
  {path: 'listanumeros/:docid', component: ListanumerosComponent,canActivate:[AuthGuard]},
  {path: 'apostando/:docid', component: ApostandoComponent},
  
  {path: 'modaleditar', component: ModaleditarComponent},
  {path: 'modallibres', component: ModallibresComponent},
  {path: 'modalverapuesta', component: ModalverapuestaComponent},
  {path: 'panelnumeros/:docid', component: PanelnumerosComponent,canActivate:[AuthGuard]},
  {path: 'verficha/:docid', component: VerfichaComponent,canActivate:[AuthGuard]},
  {path: 'estadisticas/:docid', component: EstadisticasComponent,canActivate:[AuthGuard]},
  {path: 'compartir/:docid', component: CompartirComponent,canActivate:[AuthGuard]},
  {path: 'modalmasinfo', component: ModalmasinfoComponent},



  {path: '**', redirectTo:'home', pathMatch: 'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
