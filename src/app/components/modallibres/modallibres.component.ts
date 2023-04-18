import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { RifasService } from 'src/app/services/rifas.service';

@Component({
  selector: 'app-modallibres',
  templateUrl: './modallibres.component.html',
  styleUrls: ['./modallibres.component.css']
})
export class ModallibresComponent {


  @Input() data: any;
  @Output() closeModal = new EventEmitter();
  crearapuesta:FormGroup;

  idRifa:any;
  idPanel:any;
  submitted=false;

  

  constructor(private fb:FormBuilder,private _rifaservice: RifasService,private router: Router,
    private toastr:ToastrService){

    
    this.crearapuesta=this.fb.group({
      nombre:['',Validators.required],
      telefono:['',Validators.required],
      mostrar:['',Validators.required],
      estadopago:['',Validators.required],
      nota:[''],
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

      const apuesta: any ={
        
        estadopago:this.crearapuesta.value.estadopago,
        nombre:this.crearapuesta.value.nombre,
        telefono:this.crearapuesta.value.telefono,
        mostrar:this.crearapuesta.value.mostrar,
        nota:this.crearapuesta.value.nota
      }
  

    
      this._rifaservice.actualizarApuesta(this.idRifa,this.idPanel,apuesta).then(()=>{
        
     this.toastr.success('Enhorabuena','Apuesta registrada con exito!',{positionClass:'toast-bottom-right'}
     
     )
    
    
      })
      this.closeModal.emit()
      
    }

 

 

}

