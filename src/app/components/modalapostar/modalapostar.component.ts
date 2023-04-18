import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CheckboxRequiredValidator, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RifasService } from 'src/app/services/rifas.service';

@Component({
  selector: 'app-modalapostar',
  templateUrl: './modalapostar.component.html',
  styleUrls: ['./modalapostar.component.css']
})
export class ModalapostarComponent {


  @Input() data: any;
  @Output() closeModal = new EventEmitter();
  crearapuesta:FormGroup;
  submitted = false;

  idRifa:any;
  idPanel:any;
  dejarmensaje=false;
  mostrarboton='no';
  mostrar1:any;
  mensajemostrar:any;


  constructor(private fb:FormBuilder,private _rifaservice: RifasService,private router: Router,
    private toastr:ToastrService){

  

    this.crearapuesta=this.fb.group({
      nombre:['',Validators.required],
      telefono:['',Validators.required],
      mostrar:['',Validators.required],  
      mensaje:[''],
    })

   
  }

 
  Okmensaje(){


    this.dejarmensaje=true

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
     const apuesta: any ={
        
        estadopago:"Pendiente",
        nombre:this.crearapuesta.value.nombre,
        telefono:this.crearapuesta.value.telefono,
        mostrar:this.crearapuesta.value.mostrar,
        mensaje:this.crearapuesta.value.mensaje
      }
  
    this._rifaservice.actualizarApuesta(this.idRifa,this.idPanel,apuesta).then(()=>{
        
     
      this.toastr.success('¡Gracias por participar!','Enhorabuena!!',{positionClass:'toast-bottom-right'} )

      this.closeModal.emit();
    
      })

      
    }

 

 





}
