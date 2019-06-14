import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciboComponent } from './recibo.component';

describe('ReciboComponent', () => {
  let component: ReciboComponent;
  let fixture: ComponentFixture<ReciboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReciboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReciboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
