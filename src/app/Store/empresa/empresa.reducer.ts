import {
  Action,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import { EmpresaModel } from 'src/app/Models/Empresa';
import * as fromEmpresasAction from './empresa.action';
import { filter } from 'rxjs';

export interface EmpresasState {
  empresas: EmpresaModel[];
  empresa: EmpresaModel | null;
  error: string | '';
}

export const initialState: EmpresasState = {
  empresas: [],
  empresa: null,
  error: '',
};

const _empresasReduce = createReducer(
  initialState,
  on(fromEmpresasAction.LoadEmpresasSuccess, (state, { payload }) => ({
    ...state,
    empresas: payload,
    error: '',
  })),
  on(fromEmpresasAction.LoadEmpresasFail, (state, { error }) => ({
    ...state,
    error: error,
  })),

  on(fromEmpresasAction.LoadEmpresaSuccess, (state, { payload }) => ({
    ...state,
    empresa: payload,
    error: '',
  })),
  on(fromEmpresasAction.LoadEmpresaFail, (state, { error }) => ({
    ...state,
    error: error,
  })),

  on(fromEmpresasAction.CreateEmpresaSuccess, (state, { payload }) => ({
    ...state,
    empresas: [...state.empresas, payload],
    error: '',
  })),
  on(fromEmpresasAction.CreateEmpresaFail, (state, { error }) => ({
    ...state,
    error: error,
  })),

  on(fromEmpresasAction.UpdateEmpresaSuccess, (state, { payload }) => ({
    ...state,
    empresas: [...state.empresas].map((row) => {
      if (row.id == payload.id) {
        return payload;
      } else {
        return row;
      }
    }),
    error: '',
  })),
  on(fromEmpresasAction.UpdateEmpresaFail, (state, { error }) => ({
    ...state,
    error: error,
  })),

  on(fromEmpresasAction.DeleteEmpresaSuccess, (state, { payload }) => ({
    ...state,
    empresas: [...state.empresas].filter((filter) => filter.id != payload),
    error: '',
  })),
  on(fromEmpresasAction.DeleteEmpresaFail, (state, { error }) => ({
    ...state,
    error: error,
  }))
);

export function empresasReduce(state = initialState, action: Action) {
  return _empresasReduce(state, action);
}

const getEmpresasFeatureState =
  createFeatureSelector<EmpresasState>('empresas');

export const getEmpresas = createSelector(
  getEmpresasFeatureState,
  (state: EmpresasState) => state.empresas
);

export const getEmpresa = createSelector(
  getEmpresasFeatureState,
  (state: EmpresasState) => state.empresa
);

export const getEmpresaErro = createSelector(
  getEmpresasFeatureState,
  (state: EmpresasState) => state.error
);

export const getEmpresasPequena = createSelector(
  getEmpresasFeatureState,
  (state: EmpresasState) =>
    state.empresas.filter((filter) => filter.porte == 'Pequena')
);

export const getEmpresasPequenaPorParametro = createSelector(
  getEmpresasFeatureState,
  (state: EmpresasState, props:{ porte:string }) =>
    {
      return state.empresas.filter((filter) => filter.porte == props.porte);
    }
);