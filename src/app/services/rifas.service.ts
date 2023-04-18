import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore, fromCollectionRef } from '@angular/fire/compat/firestore';
import { AuthService } from '@auth0/auth0-angular';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RifasService implements OnInit{



  userlog2: any;
  

  constructor(private firestore: AngularFirestore,public auth: AuthService) { 


  }


  ngOnInit(): void {
    
  
    
  }

  agregarRifa(rifa:any): Promise<any>{
    return this.firestore.collection('BaseRifas').add(rifa);
  }

  

 

  getRifa(userlogemail:any): Observable <any>{ 
    

    return this.firestore.collection ('BaseRifas', ref => ref.where('userlog',"==",userlogemail)).snapshotChanges()
  }

  getpanel(docid:any):Observable <any>{
    return this.firestore.collection ('BasePanel').doc(docid).collection('panel100', ref =>ref.orderBy('numero','asc')).snapshotChanges()
  }
 
  
  
agregarPanel(panel:any): Promise<any>{
  return this.firestore.collection('BasePanel').add(panel);
}
agregarPanel2 (idRifa:any,panelnumeros:any): Promise<any>{
  return this.firestore.collection('BasePanel').doc(idRifa).collection('panel100').add(panelnumeros);
}



getDatosRifa(docid:string): Observable<any> {
  return this.firestore.collection('BaseRifas').doc(docid).snapshotChanges();
}

getDatosPanel(idrifa:string):Observable <any> {
  return this.firestore.collection('BasePanel').doc(idrifa).snapshotChanges();
}







getDatosPanelId(docid:string, idDoc:string):Observable <any> {
  return this.firestore.collection('BasePanel').doc(docid).collection('panel100').doc(idDoc).snapshotChanges();
}



actualizarApuesta(idRifa:string, idPanel:string, apuesta:any): Promise <any>{
   return this.firestore.collection('BasePanel').doc(idRifa).collection('panel100').doc(idPanel).update(apuesta);

}


actualizarRifa(idRifa:string, rifa:any): Promise <any>{
  return this.firestore.collection('BaseRifas').doc(idRifa).update(rifa);
}

borrarRifa(idRifa:string): Promise <any>{
  return this.firestore.collection('BaseRifas').doc(idRifa).delete();
}








}
