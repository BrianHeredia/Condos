import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnotificationComponent } from './cnotification.component';

describe('CnotificationComponent', () => {
  let component: CnotificationComponent;
  let fixture: ComponentFixture<CnotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
