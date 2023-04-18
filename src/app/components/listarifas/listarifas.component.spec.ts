import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarifasComponent } from './listarifas.component';

describe('ListarifasComponent', () => {
  let component: ListarifasComponent;
  let fixture: ComponentFixture<ListarifasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarifasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarifasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
