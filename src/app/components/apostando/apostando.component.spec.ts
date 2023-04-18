import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApostandoComponent } from './apostando.component';

describe('ApostandoComponent', () => {
  let component: ApostandoComponent;
  let fixture: ComponentFixture<ApostandoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApostandoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApostandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
