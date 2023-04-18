import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModallibresComponent } from './modallibres.component';

describe('ModallibresComponent', () => {
  let component: ModallibresComponent;
  let fixture: ComponentFixture<ModallibresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModallibresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModallibresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
