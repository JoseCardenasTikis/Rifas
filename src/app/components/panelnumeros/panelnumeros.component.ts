import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RifasService } from 'src/app/services/rifas.service';


@Component({
  selector: 'app-panelnumeros',
  templateUrl: './panelnumeros.component.html',
  styleUrls: ['./panelnumeros.component.css']
})
export class PanelnumerosComponent implements OnInit {

  docid: any;
  panel: any[]=[];
  idRifa: any;
  nombre: any;
  botonpulsado=null;
  botonpulsado2=null;
  cerrar=null;

  data = [];
  botonverde='verde';
  botonrojo='rojo';
  botonamarillo='amarillo'
  modal=0;
  libres: any;
  pagados:any;
  pendientes:any;

   mostrarlista1= false;
   mostrarpanel= true;
   loading=false;

  

  constructor(private router: Router, firestore: AngularFirestore,
     private _rifasservice: RifasService,private aRoute: ActivatedRoute,private fb:FormBuilder)
   {
   
    this.docid= this.aRoute.snapshot.paramMap.get('docid');

     }

  ngOnInit(): void{
    
    this.getdatospanelnum()
  }

capturaNumero( pan:any ){
     
if(pan.estadopago =='Libre'){
this.botonpulsado2=pan;
} else {this.botonpulsado=pan}

    
 }

 cerrarNumero(pan:any){

  this.botonpulsado=pan;

 }
 cerrarNumero2 (pan:any){

  this.botonpulsado2=pan;

 }

 mostrarlista(){

      this.mostrarpanel = false;
 
    
 }

 mostrarpanel2(){

 this.mostrarpanel = true;

}


     

getdatospanelnum(){
    
    this._rifasservice.getpanel(this.docid).subscribe(data=> {

      this.loading=true;
      
      this.panel=[];

     
     
      data.forEach ((element:any) => {
        this.panel.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })   

  });
  this.libres=this.panel.filter(panel=>panel.estadopago === 'Libre').length
 
  this.pagados=this.panel.filter(panel=>panel.estadopago === 'Pagado').length

  this.pendientes=this.panel.filter(panel=>panel.estadopago === 'Pendiente').length

  this.loading=false;
    
  });
  }






}
