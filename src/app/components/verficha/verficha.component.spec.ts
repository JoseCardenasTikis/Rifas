import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerfichaComponent } from './verficha.component';

describe('VerfichaComponent', () => {
  let component: VerfichaComponent;
  let fixture: ComponentFixture<VerfichaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerfichaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerfichaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
