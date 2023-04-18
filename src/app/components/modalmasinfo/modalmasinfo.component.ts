import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RifasService } from 'src/app/services/rifas.service';

@Component({
  selector: 'app-modalmasinfo',
  templateUrl: './modalmasinfo.component.html',
  styleUrls: ['./modalmasinfo.component.css']
})
export class ModalmasinfoComponent {



    @Input() data: any;
    @Output() closeModal = new EventEmitter();
    
  
    idRifa:any;
    idPanel:any;
    id:any;
    titulo='';
    descripcion='';
    fechaFin='';
    fechainicio='';
    elegirganador='';
    precioapuesta='';
  
    constructor(private _rifaservice: RifasService,private router: Router,private aRoute: ActivatedRoute){
  
      this.idRifa= this.aRoute.snapshot.paramMap.get('docid');

     
     
    }


    ngOnInit(): void{
      
      this.eddatosRifa(this.idRifa)  

    }

    eddatosRifa(idRifa:any){

     
      alert(idRifa)

      this._rifaservice.getDatosRifa(this.idRifa).subscribe(panel=>{

        this.titulo= panel.payload.data()['titulo'];
        this.descripcion=panel.payload.data()['descripcion'];
        this.fechainicio=panel.payload.data()['fechainicio'];
        this.elegirganador=panel.payload.data()['elegirganador'];
        this.precioapuesta=panel.payload.data()['precioapuesta'];
        this.fechaFin=panel.payload.data()['fechaFin'];
       

      })
    }

 
  
    onCloseModal(): void {
      this.closeModal.emit();
    }
  

}
