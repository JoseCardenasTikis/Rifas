import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RifasService } from 'src/app/services/rifas.service';

@Component({
  selector: 'app-modaleditar',
  templateUrl: './modaleditar.component.html',
  styleUrls: ['./modaleditar.component.css']
})
export class ModaleditarComponent  implements OnInit{

    @Input() data: any;
    @Output() closeModal = new EventEmitter();

    crearapuesta:FormGroup; 
    idRifa:any;
    idPanel:any;
    id:any;
    submitted=false;
  
    constructor(private fb:FormBuilder,private _rifaservice: RifasService,private router: Router,
      private toastr:ToastrService){
  
      
      this.crearapuesta=this.fb.group({
        nombre:['',Validators.required],
        telefono:['',Validators.required],
        mostrar:['',Validators.required],
        estadopago:['',Validators.required],
        
      })
    }


    ngOnInit(): void{

       this.esEditar()
    }


    esEditar(){

      

      this._rifaservice.getDatosPanelId(this.data.idrifa,this.data.id).subscribe(data=> {
      
       
  
       
     this.crearapuesta.setValue({

          nombre:data.payload.data()['nombre'],
          telefono:data.payload.data()['telefono'],
          mostrar:data.payload.data()['mostrar'],
          estadopago:data.payload.data()['estadopago'],
          


       })
        
  
    })
  }
  
  
   
       
  
    onCloseModal(): void {
      this.closeModal.emit();
    }
  
    guardardatos(id:string, idrifa:any){

      this.submitted=true

      if(this.crearapuesta.invalid){
        return;
      }

  
  
      this.idRifa=idrifa;
      this.idPanel=id;

      if (this.crearapuesta.value.estadopago=="Libre"){

        const apuesta: any ={
          

          estadopago:"Libre",      
          nombre:"",
          telefono:"",
          mostrar:"",
          
        }

        this._rifaservice.actualizarApuesta(this.idRifa,this.idPanel,apuesta).then(()=>{
          
          this.toastr.success('Apuesta eliminada','Número disponible de nuevo',{positionClass:'toast-bottom-right'} )
        
        
          })
  
          this.closeModal.emit();


      } else {
  
        const apuesta: any ={
          

          estadopago:this.crearapuesta.value.estadopago,      
          nombre:this.crearapuesta.value.nombre,
          telefono:this.crearapuesta.value.telefono,
          mostrar:this.crearapuesta.value.mostrar,
          
        }
    
  
      
        this._rifaservice.actualizarApuesta(this.idRifa,this.idPanel,apuesta).then(()=>{
          
        this.toastr.success('Datos actualizados','Enhorabuena!!',{positionClass:'toast-bottom-right'} )
      
      
        })

        this.closeModal.emit();
  
        
      }  
  
  }
  
  

}