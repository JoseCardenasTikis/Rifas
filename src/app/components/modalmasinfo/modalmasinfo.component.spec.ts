import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalmasinfoComponent } from './modalmasinfo.component';

describe('ModalmasinfoComponent', () => {
  let component: ModalmasinfoComponent;
  let fixture: ComponentFixture<ModalmasinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalmasinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalmasinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
