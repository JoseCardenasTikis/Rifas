import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { RifasService } from 'src/app/services/rifas.service';

@Component({
  selector: 'app-listarifas',
  templateUrl: './listarifas.component.html',
  styleUrls: ['./listarifas.component.css']
})
export class ListarifasComponent implements OnInit {

  userlogemail: any;
  rifas: any[] = [];
  borifas: boolean = false
  activas: any;

  fechafin: any;
  fechainicio: any;
  fechaactual: any;

  loading = false;


  constructor(public auth: AuthService, firestore: AngularFirestore, private _rifasservice: RifasService, private router: Router) {
  }

  ngOnInit(): void {

    /*Capturar el email del usuario logueado*/
    this.auth.user$.subscribe(userProfile => {
      this.userlogemail = userProfile?.email;
     
      this.getRifas(this.userlogemail)
    })
  }


  /*Funcion desloguearse*/
  logout() {

    this.auth.logout()
  }


  navegarconid(id: string) {
    this.router.navigate(['/menurifa/', id]);
  }

  /*Funcion traer rifas de cada usuario*/
  getRifas(userlogemail: any) {

    this._rifasservice.getRifa(userlogemail).subscribe(data => {

     
      this.fechaactual = new Date().toISOString().split('T').shift();

      if (this.rifas) { this.borifas = true }
      this.rifas = [];
      data.forEach((element: any) => {
        this.rifas.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })

      });
      /* Filtra para saber rifas activas*/
      this.activas = this.rifas.filter(rifas => rifas).length;

    });


  }
}
