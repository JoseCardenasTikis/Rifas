import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RifasService } from 'src/app/services/rifas.service';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent {


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
  libres=0;
  pagados=0;
  pendientes:any;
  precio=0;
  totalrecaudado=0;
  titulo='';
  elegirganador='';
  fechainicio='';
  fechafin='';
  precioapuesta=0;
  premio='';
  estado='';

  

  constructor(firestore: AngularFirestore,
     private _rifasservice: RifasService,private aRoute: ActivatedRoute,
     private fb:FormBuilder){
   
    /* Capturar la ruta del navegador*/
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

  this.precio=5;


    
  });

  this._rifasservice.getDatosRifa(this.docid).subscribe(data => {
    
 
    this.titulo= data.payload.data()['titulo'],
    
    this.elegirganador=data.payload.data()['elegirganador'],
    this.fechainicio=data.payload.data()['fechainicio'],
    this.fechafin=data.payload.data()['fechaFin'],
    this.precioapuesta=data.payload.data()['precioapuesta'],
    this.premio=data.payload.data()['premio'],
    this.estado=data.payload.data()['estado']


    
    

          
})
  }






}


