import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenurifaComponent } from './menurifa.component';

describe('MenurifaComponent', () => {
  let component: MenurifaComponent;
  let fixture: ComponentFixture<MenurifaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenurifaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenurifaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
