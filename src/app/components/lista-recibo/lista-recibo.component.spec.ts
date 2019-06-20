import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaReciboComponent } from './lista-recibo.component';

describe('ListaReciboComponent', () => {
  let component: ListaReciboComponent;
  let fixture: ComponentFixture<ListaReciboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaReciboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaReciboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
