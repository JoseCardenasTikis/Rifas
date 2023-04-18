import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelnumerosComponent } from './panelnumeros.component';

describe('PanelnumerosComponent', () => {
  let component: PanelnumerosComponent;
  let fixture: ComponentFixture<PanelnumerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelnumerosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelnumerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
