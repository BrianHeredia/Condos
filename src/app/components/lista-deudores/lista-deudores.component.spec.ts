import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeudoresComponent } from './lista-deudores.component';

describe('ListaDeudoresComponent', () => {
  let component: ListaDeudoresComponent;
  let fixture: ComponentFixture<ListaDeudoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaDeudoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDeudoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
