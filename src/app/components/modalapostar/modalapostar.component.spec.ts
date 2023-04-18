import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalapostarComponent } from './modalapostar.component';

describe('ModalapostarComponent', () => {
  let component: ModalapostarComponent;
  let fixture: ComponentFixture<ModalapostarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalapostarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalapostarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
