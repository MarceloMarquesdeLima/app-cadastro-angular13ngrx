import { createAction, props } from "@ngrx/store";
import { EmpresaModel } from "src/app/Models/Empresa";

export const enum empresasTypeAction {

    LOAD_EMPRESAS = '[LOAD_EMPRESAS] LOAD EMPRESAS',
    LOAD_EMPRESAS_SUCCESS = '[LOAD_EMPRESAS_SUCCESS] LOAD EMPRESAS SUCCESS',
    LOAD_EMPRESAS_FAIL = '[LOAD_EMPRESAS_FAIL] LOAD EMPRESAS FAIL',

    LOAD_EMPRESA = '[LOAD_EMPRESA] LOAD EMPRESA',
    LOAD_EMPRESA_SUCCESS = '[LOAD_EMPRESA_SUCCESS] LOAD EMPRESA SUCCESS',
    LOAD_EMPRESA_FAIL = '[LOAD_EMPRESA_FAIL] LOAD EMPRESA FAIL',

    CREATE_EMPRESA = '[CREATE_EMPRESA] CREATE EMPRESA',
    CREATE_EMPRESA_SUCCESS = '[CREATE_EMPRESA_SUCCESS] CREATE EMPRESA SUCCESS',
    CREATE_EMPRESA_FAIL = '[CREATE_EMPRESA_FAIL] CREATE EMPRESA FAIL',

    UPDATE_EMPRESA = '[UPDATE_EMPRESA] UPDATE EMPRESA',
    UPDATE_EMPRESA_SUCCESS = '[UPDATE_EMPRESA_SUCCESS] UPDATE EMPRESA SUCCESS',
    UPDATE_EMPRESA_FAIL = '[UPDATE_EMPRESA_FAIL] UPDATE EMPRESA FAIL',

    DELETE_EMPRESA = '[DELETE_EMPRESA] DELETE EMPRESA',
    DELETE_EMPRESA_SUCCESS = '[DELETE_EMPRESA_SUCCESS] DELETE EMPRESA SUCCESS',
    DELETE_EMPRESA_FAIL = '[DELETE_EMPRESA_FAIL] DELETE EMPRESA FAIL',
}

// Load Empresas
export const LoadEmpresas = createAction(
    empresasTypeAction.LOAD_EMPRESA
);

export const LoadEmpresasSuccess = createAction(
    empresasTypeAction.LOAD_EMPRESA_SUCCESS,
    props<{ payload: EmpresaModel[]}>()
);

export const LoadEmpresasFail = createAction(
    empresasTypeAction.LOAD_EMPRESAS_FAIL,
    props<{ error: string}>()
);

//Load empresa
export const LoadEmpresa = createAction(
  empresasTypeAction.LOAD_EMPRESA,
  props<{ payload: number }>()
);

export const LoadEmpresaSuccess = createAction(
  empresasTypeAction.LOAD_EMPRESA_SUCCESS,
  props<{ payload: EmpresaModel }>()
);

export const LoadEmpresaFail = createAction(
  empresasTypeAction.LOAD_EMPRESA_FAIL,
  props<{ error: string }>()
);

//Create empresa
export const CreateEmpresa = createAction(
    empresasTypeAction.CREATE_EMPRESA,
    props<{ payload: EmpresaModel}>()
);

export const CreateEmpresaSuccess = createAction(
    empresasTypeAction.CREATE_EMPRESA_SUCCESS,
    props<{ payload: EmpresaModel}>()
);

export const CreateEmpresaFail = createAction(
    empresasTypeAction.CREATE_EMPRESA_FAIL,
    props<{ error: string}>()
);

//Update empresa
export const UpdateEmpresa = createAction(
    empresasTypeAction.UPDATE_EMPRESA,
    props<{ payload: EmpresaModel}>()
);

export const UpdateEmpresaSuccess = createAction(
    empresasTypeAction.UPDATE_EMPRESA_SUCCESS,
    props<{ payload: EmpresaModel }>()
);

export const UpdateEmpresaFail = createAction(
    empresasTypeAction.UPDATE_EMPRESA_FAIL,
    props<{ error: string}>()
);

//Delete Empresa
export const DeleteEmpresa = createAction(
    empresasTypeAction.DELETE_EMPRESA,
    props<{ payload: number }>()
);

export const DeleteEmpresaSuccess = createAction(
    empresasTypeAction.DELETE_EMPRESA_SUCCESS,
    props<{ payload: number }>()
);

export const DeleteEmpresaFail = createAction(
    empresasTypeAction.DELETE_EMPRESA_FAIL,
    props<{ error: string}>()
);
