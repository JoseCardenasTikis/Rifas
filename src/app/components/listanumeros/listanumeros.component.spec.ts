import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListanumerosComponent } from './listanumeros.component';

describe('ListanumerosComponent', () => {
  let component: ListanumerosComponent;
  let fixture: ComponentFixture<ListanumerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListanumerosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListanumerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
