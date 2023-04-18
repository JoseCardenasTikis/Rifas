import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearRifaComponent } from './crear-rifa.component';

describe('CrearRifaComponent', () => {
  let component: CrearRifaComponent;
  let fixture: ComponentFixture<CrearRifaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearRifaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearRifaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
