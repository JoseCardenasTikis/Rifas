import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RifasService } from 'src/app/services/rifas.service';

@Component({
  selector: 'app-verficha',
  templateUrl: './verficha.component.html',
  styleUrls: ['./verficha.component.css']
})
export class VerfichaComponent implements OnInit {

  crearRifa:FormGroup;
  submitted =false;
  idRifa:any;
  idtitulo:any;

  constructor(private fb:FormBuilder, private _rifaservice: RifasService, private router: Router,private aRoute: ActivatedRoute){

   
    this.idRifa= this.aRoute.snapshot.paramMap.get('docid');


    this.crearRifa=this.fb.group({
      titulo:['',Validators.required],
      descripcion:['',Validators.required],
      fechainicio:['',Validators.required],
      elegirganador:['',Validators.required],
      precioapuesta:['',Validators.required],
      
      fechaFin:['',Validators.required],

    })


  }
  ngOnInit(): void {

   
    this.editarRifa(this.idRifa);
   
  }

  

  agregarRifa(){

    const rifa:any={

    titulo: this.crearRifa.value.titulo,
    descripcion:this.crearRifa.value.descripcion,
    fechainicio:this.crearRifa.value.fechainicio,
    elegirganador:this.crearRifa.value.elegirganador,
    precioapuesta:this.crearRifa.value.precioapuesta,
    fechaFin: this.crearRifa.value.fechaFin,
    
    }

    this._rifaservice.actualizarRifa(this.idRifa,rifa).then((ref)=>{
      
     
  
      
        
  })
}




   editarRifa(idRifa:any){

    this._rifaservice.getDatosRifa(this.idRifa).subscribe(data=>{

      this.crearRifa.setValue({

      titulo:data.payload.data()['titulo'],
      descripcion:data.payload.data()['descripcion'],
      fechainicio:data.payload.data()['fechainicio'],
      elegirganador:data.payload.data()['elegirganador'],
      precioapuesta:data.payload.data()['precioapuesta'],
     
      fechaFin:data.payload.data()['fechaFin'],




      })
    })

 }

 salir(){
  this.router.navigate(['/menurifa/',this.idRifa]);

 }


 borrarRifas(idRifa:any){

    this._rifaservice.borrarRifa(this.idRifa).then((ref)=>{
      
     
  
      
        
    })

    this.router.navigate(['/listarifas']);

 }

   
   
   

  
   
  

}
