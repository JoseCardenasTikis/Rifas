import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {



constructor(public auth: AuthService,private router:Router){

  

}

  logout(){

    this.auth.logout()



  }

  lista(){
    this.router.navigate (['/listarifas'])
  }

}
