import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Data } from '@angular/router';
import * as firebase from 'firebase/compat';
import { elementAt } from 'rxjs';
import { RifasService } from 'src/app/services/rifas.service';
import { doc, getDoc } from "firebase/firestore";

@Component({
  selector: 'app-menurifa',
  templateUrl: './menurifa.component.html',
  styleUrls: ['./menurifa.component.css']
})
export class MenurifaComponent implements OnInit{
  

  
  docid: string | null;
  rifas: any []=[];
  titulo:any;
  fechaFin:any;
  firestore: any;

  constructor(firestore: AngularFirestore, private aRoute: ActivatedRoute, private _rifasservices: RifasService){

    this.docid= this.aRoute.snapshot.paramMap.get('id');

    
  }

  ngOnInit(): void{
    this.getRifas()

    
  }

  getRifas(){

    if (this.docid !==null){
    this._rifasservices.getDatosRifa(this.docid).subscribe(data=> {
    
    this.titulo = (data.payload.data()['titulo']); 
    this.fechaFin=(data.payload.data()['fechaFin']);
})
    }
}
}








  
  

