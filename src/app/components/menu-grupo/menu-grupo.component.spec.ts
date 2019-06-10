import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuGrupoComponent } from './menu-grupo.component';

describe('MenuGrupoComponent', () => {
  let component: MenuGrupoComponent;
  let fixture: ComponentFixture<MenuGrupoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuGrupoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
