import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modalverapuesta',
  templateUrl: './modalverapuesta.component.html',
  styleUrls: ['./modalverapuesta.component.css']
})
export class ModalverapuestaComponent implements OnInit {



  @Input() data: any;
  @Output() closeModal = new EventEmitter();
  

  constructor(private fb:FormBuilder){

  }

  ngOnInit() {
  }

  onCloseModal(): void {
    this.closeModal.emit();
  }

}
