import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-compartir',
  templateUrl: './compartir.component.html',
  styleUrls: ['./compartir.component.css']
})
export class CompartirComponent implements OnInit{

  docid:any;

  

  constructor(private aRoute: ActivatedRoute,public auth: AuthService,private router:Router){

    
    
  }
  ngOnInit(): void {
    
    this.docid= this.aRoute.snapshot.paramMap.get('docid');
  }

  compartir(){

   
     

    
    this.router.navigate(['/apostando/',this.docid]);
   

      
    }


   
 
 
  
}




