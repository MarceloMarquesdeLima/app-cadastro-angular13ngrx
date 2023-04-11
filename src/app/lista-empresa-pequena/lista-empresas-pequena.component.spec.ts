import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEmrpesasPequenaComponent } from './lista-empresas-pequena.component';

describe('ListaUsuariosAdminComponent', () => {
  let component: ListaEmrpesasPequenaComponent;
  let fixture: ComponentFixture<ListaEmrpesasPequenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaEmrpesasPequenaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEmrpesasPequenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
