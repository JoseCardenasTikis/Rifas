import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { RifasService } from 'src/app/services/rifas.service';

@Component({
  selector: 'app-apostando',
  templateUrl: './apostando.component.html',
  styleUrls: ['./apostando.component.css']
})

export class ApostandoComponent implements OnInit {
  docid: any;
  panel: any[]=[];
  idRifa: any;
  nombre: any;
  botonpulsado=null;
  botonpulsado2=null;
  botonpulsado3=null;
  cerrar=null;
  rifas: any[]=[];
  fechaactual:any;

  data = [];
  botonverde='verde';
  botonrojo='rojo';
  botonamarillo='amarillo'
  modal=0;
  libres: any;
  pagados:any;
  pendientes:any;

  titulo='';
  fechafin='';
  precioapuesta='';
  descripcion='';
  imagen3:any;

  botonmasinfo=false;
  
  
 
  constructor(private router: Router, 
     private _rifasservice: RifasService,private aRoute: ActivatedRoute,
     private fb:FormBuilder)
   {

     }

  ngOnInit(): void{

    this.docid= this.aRoute.snapshot.paramMap.get('docid');
  
    
  
    this.getdatospanelnum()
    this.getdatosrifa()

    
  }

 
capturaNumero( pan:any ){
     
if(pan.estadopago =='Libre'){
this.botonpulsado2=pan;
} else {this.botonpulsado=pan}

}

 masinfo(){

  this.botonmasinfo=true;
 }


 cerrarNumero(pan:any){

  this.botonpulsado=pan;

 }
 
 cerrarNumero2 (pan:any){

  this.botonpulsado2=pan;
 }

 
 cerrarNumero3(){

  this.botonmasinfo=false;
 }



 getdatosrifa(){
  
   
  this._rifasservice.getDatosRifa(this.docid).subscribe(data => {
    
    
    this.titulo= data.payload.data()['titulo'],
    this.fechafin=data.payload.data()['fechaFin'],
    this.precioapuesta=data.payload.data()['precioapuesta']
    this.descripcion=data.payload.data()['descripcion']
          
});
}

        

getdatospanelnum(){
    
    this._rifasservice.getpanel(this.docid).subscribe(data=> {
      
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
   
  });
  }
}


 



