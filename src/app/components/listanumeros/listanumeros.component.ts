import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { RifasService } from 'src/app/services/rifas.service';

@Component({
  selector: 'app-listanumeros',
  templateUrl: './listanumeros.component.html',
  styleUrls: ['./listanumeros.component.css']
})
export class ListanumerosComponent implements OnInit{

  docid: string | null;
  panel: any[]=[];


  constructor(firestore: AngularFirestore, private _rifasservice: RifasService,private aRoute: ActivatedRoute){
   
    this.docid= this.aRoute.snapshot.paramMap.get('docid');
    
    
  }

  ngOnInit(): void{
    
    this.getdatospanelnum()
  }


  getdatospanelnum(){
    this.docid= this.aRoute.snapshot.paramMap.get('docid');
    this._rifasservice.getpanel(this.docid).subscribe(data=> {
      
      this.panel=[];
      data.forEach ((element:any) => {
        this.panel.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
    
    });
  });
  
}

}

