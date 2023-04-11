import { Component, OnInit } from '@angular/core';
import { EmpresaModel } from '../Models/Empresa';
import { Store } from '@ngrx/store';
import { AppState } from '../Store/app-state';
import * as fromEmpresasAction from '../Store/empresa/empresa.action';
@Component({
  selector: 'app-cadastro-empresas',
  templateUrl: './cadastro-empresa.component.html',
  styleUrls: ['./cadastro-empresa.component.css']
})
export class CadastroEmpresasComponent implements OnInit {
  model: EmpresaModel = {id: 0, nome: '', porte: ''};

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }
  addEmpresa() {

    if (this.model.id == 0) {
      this.store.dispatch(fromEmpresasAction.CreateEmpresa({payload: this.model}));
    }
    else {
      this.store.dispatch(fromEmpresasAction.UpdateEmpresa({payload:this.model}));
    }
  }
}
