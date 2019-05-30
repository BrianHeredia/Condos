import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CproposalComponent } from './cproposal.component';

describe('CproposalComponent', () => {
  let component: CproposalComponent;
  let fixture: ComponentFixture<CproposalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CproposalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CproposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
