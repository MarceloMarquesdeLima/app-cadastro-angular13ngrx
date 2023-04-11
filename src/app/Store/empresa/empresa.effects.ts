import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { EmpresaService } from 'src/app/Repository/EmpresaService';
import * as fromEmpresasAction from './empresa.action';

@Injectable()
export class EmpresasEffects {
  constructor(
    private actions$: Actions,
    private empresasService: EmpresaService
  ) {}

  loadEmpresas$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromEmpresasAction.empresasTypeAction.LOAD_EMPRESAS),
      exhaustMap(() =>
        this.empresasService.getEmpresas().pipe(
          map(
            (payload) => fromEmpresasAction.LoadEmpresasSuccess({ payload }),
            catchError((error) =>
              of(fromEmpresasAction.LoadEmpresasFail({ error }))
            )
          )
        )
      )
    )
  );

  loadEmpresa$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromEmpresasAction.empresasTypeAction.LOAD_EMPRESA),
      exhaustMap((record: any) =>
        this.empresasService.getEmpresa(record.payload).pipe(
          map(
            (payload: any) =>
              fromEmpresasAction.LoadEmpresaSuccess({ payload }),
            catchError((error) =>
              of(fromEmpresasAction.LoadEmpresaFail({ error }))
            )
          )
        )
      )
    )
  );

  createEmpresa$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromEmpresasAction.empresasTypeAction.CREATE_EMPRESA),
      exhaustMap((record: any) =>
        this.empresasService.addEmpresa(record.payload).pipe(
          map(
            (payload: any) =>
            fromEmpresasAction.CreateEmpresaSuccess({ payload }),
            catchError((error) =>
              of(fromEmpresasAction.CreateEmpresaFail({ error }))
            )
          )
        )
      )
    )
  );

  updateEmpresa$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromEmpresasAction.empresasTypeAction.UPDATE_EMPRESA),
      exhaustMap((record: any) =>
        this.empresasService.updateEmpresa(record.payload).pipe(
          map(
            (payload: any) =>
            fromEmpresasAction.UpdateEmpresaSuccess({ payload }),
            catchError((error) =>
              of(fromEmpresasAction.UpdateEmpresaFail({ error }))
            )
          )
        )
      )
    )
  );

  deleteEmpresa$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromEmpresasAction.empresasTypeAction.DELETE_EMPRESA),
      exhaustMap((record: any) =>
        this.empresasService.deleteEmpresa(record.payload).pipe(
          map(
            () =>
            fromEmpresasAction.DeleteEmpresaSuccess({
                payload: record.payload,
              }),
            catchError((error) =>
              of(fromEmpresasAction.DeleteEmpresaFail({ error }))
            )
          )
        )
      )
    )
  );
}
