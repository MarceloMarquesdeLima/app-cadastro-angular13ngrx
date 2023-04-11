import { Component, OnInit } from '@angular/core';
import { Observable, filter } from 'rxjs';
import { EmpresaModel } from '../Models/Empresa';
import { AppState } from '../Store/app-state';
import { Store } from '@ngrx/store';
import * as fromEmpresasSelector from '../Store/empresa/empresa.reducer';

@Component({
  selector: 'app-lista-empresas-pequenas',
  templateUrl: './lista-empresas-pequena.component.html',
  styleUrls: ['./lista-empresas-pequena.component.css']
})
export class ListaEmpresasPequenaComponent implements OnInit {
  // exemplo 1
  listaEmpresas$: Observable<EmpresaModel[]> = this.store.select(fromEmpresasSelector.getEmpresasPequena);

  // exemplo 2
  listaEmpresas: EmpresaModel[] = [];

  // exemplo 3
  listaEmpresas3: EmpresaModel[] = [];

  // exemplo 4
  listaEmpresas4: EmpresaModel[] = [];

  // exemplo 1
  listaEmpresas5$: Observable<EmpresaModel[]> = this.store.select(fromEmpresasSelector.getEmpresasPequenaPorParametro, { porte: 'Pequena'});

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // exemplo 2
    this.store.select(fromEmpresasSelector.getEmpresasPequena)
    .subscribe((empresas: EmpresaModel[]) => {
      this.listaEmpresas = empresas;
    });

    // exemplo 3
    this.store.select(fromEmpresasSelector.getEmpresas)
    .subscribe((empresas: EmpresaModel[]) => {
      this.listaEmpresas3 = empresas.filter((filter) => filter.porte == 'Pequena');
    });

    // exemplo 3
    this.store.select(fromEmpresasSelector.getEmpresasPequenaPorParametro, {porte: 'Pequena'})
    .subscribe((empresas: EmpresaModel[]) => {
      this.listaEmpresas4 = empresas.filter((filter) => filter.porte == 'Pequena');
    });
  }
}
