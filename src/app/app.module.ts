import { LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';

//Modulos
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

//date

import localePy from '@angular/common/locales/es-PY';
import { registerLocaleData } from '@angular/common';
registerLocaleData (localePy,'es');


//Componentes
import { ListarifasComponent } from './components/listarifas/listarifas.component';
import { CrearRifaComponent } from './components/crear-rifa/crear-rifa.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { environment } from 'src/environments/environment';
import { MenurifaComponent } from './components/menurifa/menurifa.component';
import { ListanumerosComponent } from './components/listanumeros/listanumeros.component';
import { ApostandoComponent } from './components/apostando/apostando.component';

import { PanelnumerosComponent } from './components/panelnumeros/panelnumeros.component';
import { ModaleditarComponent } from './components/modaleditar/modaleditar.component';
import { VerfichaComponent } from './components/verficha/verficha.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { CompartirComponent } from './components/compartir/compartir.component';
import { HomeComponent } from './components/home/home.component';
import { ModallibresComponent } from './components/modallibres/modallibres.component';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';

import { ModalapostarComponent } from './components/modalapostar/modalapostar.component';
import { ModalverapuestaComponent } from './components/modalverapuesta/modalverapuesta.component';
import { ModalmasinfoComponent } from './components/modalmasinfo/modalmasinfo.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideStorage,getStorage } from '@angular/fire/storage';
//import { SearchBarComponent } from './components/search-bar/search-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    ListarifasComponent,
    CrearRifaComponent,
    NavbarComponent,
    MenurifaComponent,
    ListanumerosComponent,
    ApostandoComponent,
   

      
    PanelnumerosComponent,    
    ModaleditarComponent, 
    VerfichaComponent, 
    EstadisticasComponent,
    
    CompartirComponent,
     HomeComponent, ModallibresComponent,
       
      ModalapostarComponent,
      ModalverapuestaComponent,
      ModalmasinfoComponent,
      //SearchBarComponent
   
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,
    ToastrModule.forRoot(),
    
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule,
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'dev-0b4a8vhhssfmstxr.us.auth0.com',
      clientId: '9cqTyWHI010mbFf0SSTHg4vzIBVoM14T',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
      
    }),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
  ],
  providers: [{provide: LOCALE_ID, useValue:'es'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
