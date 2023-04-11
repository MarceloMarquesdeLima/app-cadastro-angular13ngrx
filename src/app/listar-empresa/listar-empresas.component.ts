import { Component, OnInit } from '@angular/core';
import { EmpresaModel } from '../Models/Empresa';
import { Store } from '@ngrx/store';
import { AppState } from '../Store/app-state';
import * as fromEmpresasAction from '../Store/empresa/empresa.action';
import * as fromEmpresasSelector from '../Store/empresa/empresa.reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listar-empresas',
  templateUrl: './listar-empresas.component.html',
  styleUrls: ['./listar-empresas.component.css']
})

export class ListarEmpresasComponent implements OnInit {
  listaEmpresas$: Observable<EmpresaModel[]> = this.store.select(fromEmpresasSelector.getEmpresas);
  empresa$ : Observable<EmpresaModel | null> = this.store.select(fromEmpresasSelector.getEmpresa);

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(fromEmpresasAction.LoadEmpresas());
  }

  editar(id: number){
    this.store.dispatch(fromEmpresasAction.LoadEmpresa({payload:id}));
  }

  excluir(id: number){
    this.store.dispatch(fromEmpresasAction.DeleteEmpresa({payload:id}));
  }
}
