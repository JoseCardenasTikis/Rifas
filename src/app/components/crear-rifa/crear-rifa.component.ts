import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { ToastrService } from 'ngx-toastr';
import { RifasService } from 'src/app/services/rifas.service';
import { Storage,ref,uploadBytes} from '@angular/fire/storage';


@Component({
  selector: 'app-crear-rifa',
  templateUrl: './crear-rifa.component.html',
  styleUrls: ['./crear-rifa.component.css']
})
export class CrearRifaComponent implements OnInit {

  crearRifa: FormGroup;
  submitted = false;
  idRifa: any;
  idtitulo: any;
  userlog: any;
  imgRef1:any;
  imagesRef:any;
  pathImages:any;

  constructor(private fb: FormBuilder, private _rifaservice: RifasService, private router: Router,
    private toastr: ToastrService, public auth: AuthService, private storage: Storage) {

    this.crearRifa = this.fb.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      fechainicio: ['', Validators.required],
      elegirganador: ['', Validators.required],
      precioapuesta: ['', Validators.required],
      imagen1: [''],
      imagen2: [''],
      imagen3: [''],
      fechaFin: ['', Validators.required],

    })


  }

  ngOnInit(): void {
    /*Capturando el email del usuario logueado*/
    this.auth.user$.subscribe((result) => {
      this.userlog = result?.email
    })

  }

subirarchivos($event: any){

  const file1= $event.target.files[0];

  const imgRef1= ref(this.storage, `images/${file1.name}`);

  console.log (file1)

  
  
}




/*Metodo para guardar la rifa*/
  agregarRifa() {

    /*Validando formulario*/
    this.submitted = true

    if (this.crearRifa.invalid) {
      return;
    }

  


    const rifa: any = {

      userlog: this.userlog,
      titulo: this.crearRifa.value.titulo,
      descripcion: this.crearRifa.value.descripcion,
      fechainicio: this.crearRifa.value.fechainicio,
      elegirganador: this.crearRifa.value.elegirganador,
      precioapuesta: this.crearRifa.value.precioapuesta,
      fechaFin: this.crearRifa.value.fechaFin,
      fechaCreacion: new Date(),
      imagen1: this.crearRifa.value.imagen1,
      imagen2: this.crearRifa.value.imagen2,
      imagen3: this.pathImages



    }


    this._rifaservice.agregarRifa(rifa).then((ref) => {
      this.idRifa = ref.id;
      this.idtitulo = ref.titulo;


      this.toastr.success('¡Has creado una nueva rifa!', 'Enhorabuena!!', { positionClass: 'toast-bottom-right' })

/*Creando el panel de 100 números para esta rifa*/

      for (let i = 1; i <= 100; i++) {
        const panelnumeros: any = {
          numero: [i],
          nombre: '',
          mostrar: "si",
          info: "",
          estadopago: 'Libre',
          telefono: '',
          idrifa: this.idRifa
        }
        const panel100 = this.idRifa;
        this._rifaservice.agregarPanel2(this.idRifa, panelnumeros).then(() => {
        }).catch(error => {
          console.log(error);
        })
      }

/*Un vez creada la rifa navega hacia "listarifas"*/

      this.router.navigate(['/listarifas']);

    }).catch(error => {
      console.log(error);
    })


  }

}
